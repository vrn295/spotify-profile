import { useEffect, useState } from 'react'
import TimeRangeButton from '../../common/TimeRangeButtton'
import { ELocalStorage } from '../../constants'
import { MostPlayed, TimeRange } from '../../model'
import { getTopSongs } from '../../services/services'
import ProfileLastPlayed from '../ProfileLastPlayed'
import SongCard from '../SongCard'
import styles from './ProfileMostPlayed.module.scss'

const ProfileMostPlayed = () => {
  const [isLoading, setisLoading] = useState(false)
  const [mostPlayed, setmostPlayed] = useState<MostPlayed>()

  useEffect(() => {
    handleMostPlayedCall()
  }, [])

  const handleMostPlayedCall = async (timeRange: TimeRange = TimeRange.SIX_MONTH) => {
    if (localStorage.getItem(ELocalStorage.Token)) {
      setisLoading(true)
      try {
        const result = await getTopSongs(localStorage.getItem(ELocalStorage.Token) || '', timeRange)
        setmostPlayed(result?.data)
        setisLoading(false)
      } catch (e: any) {
        throw e
      }
    }
  }

  return (
    <div className={styles.container}>
      <ProfileLastPlayed
        title={mostPlayed?.items[0]?.name}
        artist={mostPlayed?.items[0]?.artists[0]?.name}
        artistUrl={mostPlayed?.items[0]?.artists[0]?.external_urls?.spotify}
        cover={mostPlayed?.items[0]?.album?.images[0]?.url || '/images/home/nf_cover.jpg'}
        audioUrl={mostPlayed?.items[0]?.preview_url}
        url={mostPlayed?.items[0]?.external_urls?.spotify}
        isLoading={isLoading}
      />
      <div className={styles.profile_most_played_container}>
        <div className={styles.profile_most_played_header}>
          <h2>Top Played</h2>
          <TimeRangeButton handleClick={handleMostPlayedCall} />
        </div>
        <section className={styles.profile_most_played}>
          {
            (mostPlayed?.items?.slice(1) || [...Array(15)]).map((item, index) => (
              <SongCard
                key={item?.id || index}
                title={item?.name}
                artist={item?.artists[0]?.name}
                artistUrl={item?.artists[0]?.external_urls?.spotify || ''}
                cover={item?.album?.images[0]?.url || '/images/home/nf_cover.jpg'}
                audioUrl={item?.preview_url}
                url={item?.external_urls?.spotify}
                isLoading={isLoading}
              />
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default ProfileMostPlayed