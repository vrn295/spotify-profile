
import { createContext, FC, ReactNode, useState } from 'react'
import { AppStateContextType, UserData } from '../model'
import noop from 'lodash/noop'
import { getUserData } from '../services/ServiceProfile'
import { useRouter } from 'next/router'
import { ERoutes } from '../constants/Routes'

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
      console.log(result)
      setuserData(result?.data)
      setisLoading(false)
    } catch (e: any) {
      console.log("Error", e.response.data.error.message)
      setisLoading(false)
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