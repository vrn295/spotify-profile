import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ELocalStorage } from '../../constants'
import { IArtists, ArtistItem } from '../../model'
import { getTopArtists } from '../../services/services'
import Loader from '../Loader'
import styles from './TopArtists.module.scss'
const TopArtists = () => {
  const [isLoading, setisLoading] = useState(true)
  const [topArtists, settopArtists] = useState<IArtists>()

  useEffect(() => {
    handleTopArtistCall()
  }, [])

  const handleTopArtistCall = async () => {
    if (localStorage.getItem(ELocalStorage.Token)) {
      try {
        const result = await getTopArtists(localStorage.getItem(ELocalStorage.Token) || '')
        settopArtists(result?.data)
        setisLoading(false)
      } catch (e: any) {
        throw e
      }
    }
  }

  console.log("topArtists", topArtists)

  return (
    <section className={styles.profile_top_artist}>
      <h2>Top Artists</h2>
      <div className={styles.profile_top_artist_imgs}>
        {
          (topArtists?.items || [...Array(15)])?.map((item: ArtistItem) => (
            <a className={styles.profile_top_artist_img} key={item?.id} href={item?.external_urls?.spotify} target="_blank">
              <Loader isLoading={isLoading}>
                <Image
                  src={item?.images[0]?.url || '/images/home/adele_cover.jpg'}
                  width='140'
                  height='140'
                  layout="fixed"
                  objectFit="cover"
                  placeholder='blur'
                  blurDataURL={item?.images[0]?.url || '/images/home/adele_cover.jpg'}
                />
              </Loader>
              <div className={styles.profile_top_artist_name}>
                <Loader isLoading={isLoading}>
                  <h3>{item?.name}</h3>
                </Loader>
              </div>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default TopArtists