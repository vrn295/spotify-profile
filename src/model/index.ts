import { Dispatch, SetStateAction } from "react"

export type AppStateContextType = {
  userData: UserData | undefined,
  setuserData: Dispatch<SetStateAction<UserData | undefined>>
  handleUserDataCall: (token: string, setisLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
}

export type UserData = {
  country: string,
  display_name: string,
  email: string,
  explicit_content: ExplicitContent,
  external_urls: {
    spotify: string
  },
  followers: Followere,
  href: string,
  id: string,
  images: Image[],
  product: string,
  type: string,
  uri: string
}

export type ExplicitContent = {
  filter_enabled: true,
  filter_locked: true
}

export type Image = {
  url: string
  height: number,
  width: number
}

export type Followere = {
  href: string,
  total: number
}