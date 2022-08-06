import Image from 'next/image'
import styles from './TopArtists.module.scss'
const TopArtists = () => {
  return (
    <section className={styles.profile_top_artist}>
      <h2>Top Artists</h2>
      <div className={styles.profile_top_artist_imgs}>
        {
          [...Array(12)].map((item, index) => (
            <div className={styles.profile_top_artist_img} key={item}>
              <Image
                src={index % 2 === 0 ? '/images/home/adele_cover.jpg' : '/images/home/nf_cover.jpg'}
                width='140'
                height='140'
                layout="fixed"

                objectFit="cover"
                placeholder='blur'
                blurDataURL='/images/home/adele_cover.jpg'
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TopArtists