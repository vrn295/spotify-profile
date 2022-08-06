import Image from "next/image"
import styles from "./ProfileLastPlayed.module.scss"

const ProfileLastPlayed = () => {
  return (
    <section className={styles.profile_last_played}>
      <h2>Last Played</h2>
      <div className={styles.profile_last_played_img}>
        <Image
          src='/images/home/nf_cover.jpg'
          layout='fill'
          objectFit="cover"
          placeholder='blur'
          blurDataURL='/images/home/nf_cover.jpg'
        />
      </div>
    </section>
  )
}

export default ProfileLastPlayed