
import { createContext, FC, ReactNode, useState } from 'react'
import { AppStateContextType, UserData } from '../model'
import noop from 'lodash/noop'
import { useRouter } from 'next/router'
import { ERoutes } from '../constants/Routes'
import { getUserData } from '../services/services'

interface IAppStateContextStore {
  children: ReactNode
}

export const AppStateContext = createContext<AppStateContextType>({
  userData: undefined,
  setuserData: noop,
  // @ts-ignore
  handleUserDataCall: noop,
})

export const AppStateContextStore:FC<IAppStateContextStore>= ({ children }) => {
  const router = useRouter()

  const [userData, setuserData] = useState<UserData>()

  const handleUserDataCall = async (token: string, setisLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    setisLoading(true)
    try {
      const result = await getUserData(token)
      setuserData(result?.data)
      setTimeout(() => {
        setisLoading(false)
      }, 1000);
    } catch (e: any) {
      setTimeout(() => {
        setisLoading(false)
      }, 1000);
      router.push(ERoutes.LOGIN)
    }
  }

  return (
    <AppStateContext.Provider
      value={{
        userData,
        setuserData,
        handleUserDataCall
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}