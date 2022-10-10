import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import styles from "./PlaylistCard.module.scss"
import { moveTop, moveTopTransition } from '../../constants/framerAnimations'

interface IPlaylistCardProps {
  name: string
  imageUrl: string
}

const PlaylistCard: FC<IPlaylistCardProps> = ({
  name,
  imageUrl
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true }}
      transition={moveTopTransition}
      variants={moveTop}
      className={styles.container}
    >
      <div className={styles.img_container}>
        <Image
          layout='fill'
          src={imageUrl}
          blurDataURL={imageUrl}
          objectFit="cover"
          placeholder='blur'
          unoptimized
        />
      </div>
      <p className={styles.playlist_name}>
        { name }
      </p>  
    </motion.div>
  )
}

export default PlaylistCard