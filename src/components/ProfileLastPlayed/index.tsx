import { motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import PlayAudio from "../../common/PlayAudio"
import { ISongCardProps } from "../../model"
import styles from "./ProfileLastPlayed.module.scss"

const ProfileLastPlayed: FC<ISongCardProps> = ({
  title,
  artist,
  artistUrl,
  cover,
  audioUrl,
  url,
}) => {
  return (
    <section className={styles.profile_last_played}>
      <h2>Most Played</h2>
      <motion.div
        className={styles.profile_last_played_img}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, stiffness: 100 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
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
      </motion.div>
    </section>
  )
}

export default ProfileLastPlayed