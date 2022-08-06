import Image from 'next/image'
import { FC } from 'react'
import PlayAudio from '../../common/PlayAudio'
import styles from './SongCard.module.scss'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"
import { ISongCardProps } from '../../model'
import Loader from '../Loader'

const SongCard: FC<ISongCardProps> = ({
  title,
  artist,
  artistUrl,
  cover,
  audioUrl,
  url,
  isLoading
}) => {
  return (
    <a href={url} className={styles.container} target="_blank">

      <Loader isLoading={isLoading}>
        <div className={styles.container_main}>
          <Image
            src={cover}
            width='50'
            height='50'
            layout="fixed"
            objectFit="cover"
            placeholder='blur'
            blurDataURL={cover}
          />
          <main>
            <h4>{title}</h4>
            <p>{artist}</p>
          </main>
        </div>
      </Loader>
      <span className={styles.container_play_btn}>
        <PlayAudio
          audio={typeof window !== 'undefined' && new Audio(audioUrl || '')}
          playIcon={<BsFillPlayFill />}
          pauseIcon={<BsFillPauseFill />}
        />
      </span>
    </a >
  )
}

export default SongCard