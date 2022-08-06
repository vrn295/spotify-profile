import SongCard from '../SongCard'
import styles from './ProfileMostPlayed.module.scss'

const ProfileMostPlayed = () => {
  return (
    <div className={styles.profile_most_played_container}>
      <h2>Most Played</h2>
      <section className={styles.profile_most_played}>
        {
          [...Array(10)].map((item, key) => (
            <SongCard
              title="Blinding Lights"
              artist="Weekend"
              cover={key % 2 === 0 ? '/images/home/country_cover.jpg' : '/images/home/nf_cover.jpg'}
            />
          ))
        }
      </section>
    </div>
  )
}

export default ProfileMostPlayed