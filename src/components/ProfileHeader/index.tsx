import Image from 'next/image'
import { FC, useContext, useEffect, useState } from 'react'
import { AppStateContext } from '../../context/AppStateContext'
import Loader from '../Loader'
import styles from "./ProfileHeader.module.scss"
import { ColorExtractor } from 'react-color-extractor'

interface IProfileHeader {
  isLoading: boolean
  setdominatorColor: React.Dispatch<React.SetStateAction<string>>
}

const ProfileHeader:FC<IProfileHeader> = ({ isLoading, setdominatorColor }) => {
  const { userData } = useContext(AppStateContext)  

  return (
    <section className={styles.profile_img}>
      <Loader isLoading={isLoading}>
        <Image
          src={userData?.images[0]?.url || '/images/home/adele_cover.jpg'}
          width='180'
          height='180'
          objectFit="cover"
          placeholder='blur'
          blurDataURL='/images/home/adele_cover.jpg'
        />
        <ColorExtractor getColors={(color) => setdominatorColor(color[0])}>
        <img
          src={userData?.images[0]?.url || '/images/home/adele_cover.jpg'}
          width='0'
          height='0'
        />
        </ColorExtractor>
      </Loader>
      <div className={styles.profile_name}>
        <Loader isLoading={isLoading}>
          <h1>{userData?.display_name}</h1>
        </Loader>
      </div>
    </section>
  )
}

export default ProfileHeader