import React, { useContext, useEffect, useState } from 'react'
import styles from "./Profile.module.scss"
import Image from "next/image"
import SongCard from '../../src/components/SongCard'
import { useRouter } from 'next/router'
import { ELocalStorage } from '../../src/constants'
import { getUserData } from '../../src/services/ServiceProfile'
import { ERoutes } from '../../src/constants/Routes'
import { AppStateContext } from '../../src/context/AppStateContext'
import Loader from '../../src/components/Loader'
import ProfileHeader from '../../src/components/ProfileHeader'
import TopArtists from '../../src/components/TopArtists'
import ProfileLastPlayed from '../../src/components/ProfileLastPlayed'
import ProfileMostPlayed from '../../src/components/ProfileMostPlayed'
const Profile = () => {
  const router = useRouter()
  const { handleUserDataCall } = useContext(AppStateContext)
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    const access_token = window.location.hash?.match(/\#(?:access_token)\=([\S\s]*?)\&/)?.length ? window.location.hash?.match(/\#(?:access_token)\=([\S\s]*?)\&/)![1] : ''
    const token_from_local = localStorage.getItem(ELocalStorage.Token)
    if (access_token && localStorage.getItem(ELocalStorage.Token) !== access_token) {
      localStorage.setItem(ELocalStorage.Token, access_token)
    }
    if (access_token || token_from_local) {
      handleUserDataCall(access_token || (token_from_local ? token_from_local : ''), setisLoading)
    } else {
      router.push(ERoutes.LOGIN)
    }
  }, [])

  return (
      <div className={styles.container}>
        <main className={styles.container_main}>
          <ProfileHeader isLoading={isLoading} />
        </main>
        <div className={styles.profile_songs}>
          <TopArtists />
          <div className={styles.profile_section_2}>
            <ProfileLastPlayed />
            <ProfileMostPlayed />
          </div>
        </div>
      </div>
  )
}

export default Profile