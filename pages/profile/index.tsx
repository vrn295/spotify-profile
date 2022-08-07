import React, { useContext, useEffect, useState } from 'react'
import styles from "./Profile.module.scss"
import { useRouter } from 'next/router'
import { ELocalStorage } from '../../src/constants'
import { ERoutes } from '../../src/constants/Routes'
import { AppStateContext } from '../../src/context/AppStateContext'
import ProfileHeader from '../../src/components/ProfileHeader'
import TopArtists from '../../src/components/TopArtists'
import ProfileMostPlayed from '../../src/components/ProfileMostPlayed'

const Profile = () => {
  const router = useRouter()
  const { handleUserDataCall } = useContext(AppStateContext)
  const [isLoading, setisLoading] = useState(false)
  const [dominatorColor, setdominatorColor] = useState('')

  useEffect(() => {
    if (localStorage.getItem(ELocalStorage.Token)) {
      handleUserDataCall(localStorage.getItem(ELocalStorage.Token) || '', setisLoading)
    } else {
      router.push(ERoutes.LOGIN)
    }
  }, [])

  return (
      <div className={styles.container}>
        <main className={styles.container_main} style={{ backgroundColor: dominatorColor || "#121212" }}>
          <ProfileHeader isLoading={isLoading} setdominatorColor={setdominatorColor} />
        </main>
        <div className={styles.profile_songs}>
          <TopArtists />
          <ProfileMostPlayed />
        </div>
      </div>
  )
}

export default Profile