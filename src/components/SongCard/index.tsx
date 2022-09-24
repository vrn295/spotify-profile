import Image from 'next/image'
import { FC } from 'react'
import PlayAudio from '../../common/PlayAudio'
import styles from './SongCard.module.scss'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"
import { ISongCardProps } from '../../model'
import { motion } from 'framer-motion'

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
    <motion.a 
      href={url} 
      className={styles.container} 
      target="_blank"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.1, stiffness: 100 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      <div className={styles.container_main}>
        <div className={styles.container_main_img}>
          <Image
            src={cover}
            layout="fill"
            objectFit="cover"
            placeholder='blur'
            blurDataURL={cover}
          />
        </div>
        <main>
          <h4>{title}</h4>
          <p>{artist}</p>
        </main>
      </div>
      <span className={styles.container_play_btn}>
        <PlayAudio
          audio={typeof window !== 'undefined' && new Audio(audioUrl || '')}
          playIcon={<BsFillPlayFill />}
          pauseIcon={<BsFillPauseFill />}
        />
      </span>
    </motion.a >
  )
}

export default SongCard