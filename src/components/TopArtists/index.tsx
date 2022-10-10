import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TimeRangeButton from '../../common/TimeRangeButtton'
import { ELocalStorage } from '../../constants'
import { IArtists, ArtistItem, TimeRange } from '../../model'
import { getTopArtists } from '../../services/services'
import styles from './TopArtists.module.scss'
import { moveTop, moveTopTransition } from '../../constants/framerAnimations'
const TopArtists = () => {
  const [isLoading, setisLoading] = useState(false)
  const [topArtists, settopArtists] = useState<IArtists>()

  useEffect(() => {
    handleTopArtistCall()
  }, [])

  const handleTopArtistCall = async (timeRange: TimeRange = TimeRange.SIX_MONTH) => {
    if (localStorage.getItem(ELocalStorage.Token)) {
      setisLoading(true)
      try {
        const result = await getTopArtists(localStorage.getItem(ELocalStorage.Token) || '', timeRange)
        settopArtists(result?.data)
        setisLoading(false)
      } catch (e: any) {
        throw e
      }
    }
  }

  return (
    <section className={styles.profile_top_artist}>
      <div className={styles.profile_top_artist_header}>
        <h2>Top Artists</h2>
        <TimeRangeButton handleClick={handleTopArtistCall} />
      </div>
      <div className={styles.profile_top_artist_imgs}>
        {
          (topArtists?.items || [...Array(15)])?.map((item: ArtistItem, index) => (
            <motion.a
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={moveTopTransition}
              variants={moveTop}
              className={styles.profile_top_artist_list} key={item?.id || index}
              href={item?.external_urls?.spotify}
              target="_blank"
            >
              <div className={styles.profile_top_artist_img}>
                {
                  item?.images[0]?.url &&
                  <Image
                    src={item?.images[0]?.url}
                    layout="fill"
                    objectFit="cover"
                    placeholder='blur'
                    blurDataURL={item?.images[0]?.url}
                  />
                }
              </div>
              <div className={styles.profile_top_artist_name}>
                <h3>{item?.name}</h3>
              </div>
            </motion.a>
          ))
        }
      </div>
    </section>
  )
}

export default TopArtists