import Image from "next/image"
import { FC } from "react"
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import PlayAudio from "../../common/PlayAudio"
import { ISongCardProps } from "../../model"
import Loader from "../Loader"
import styles from "./ProfileLastPlayed.module.scss"

const ProfileLastPlayed: FC<ISongCardProps> = ({
  title,
  artist,
  artistUrl,
  cover,
  audioUrl,
  url,
  isLoading
}) => {
  return (
    <section className={styles.profile_last_played}>
      <h2>Most Played</h2>
      <Loader isLoading={isLoading}>
        <div className={styles.profile_last_played_img}>
          <Image
            src={cover}
            layout='fill'
            objectFit="cover"
            placeholder='blur'
            blurDataURL={cover}
          />
          <span className={styles.profile_last_played_play}>
            <PlayAudio
              audio={typeof window !== 'undefined' && new Audio(audioUrl || '')}
              playIcon={<BsFillPlayFill />}
              pauseIcon={<BsFillPauseFill />}
            />
          </span>
          <main>
            <a href={url} target="_blank">
              <h3>{title}</h3>
            </a>
            <a href={artistUrl} target="_blank">
              <p>{artist}</p>
            </a>
          </main>
        </div>
      </Loader>
    </section>
  )
}

export default ProfileLastPlayed