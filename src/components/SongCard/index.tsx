import Image from 'next/image'
import { FC } from 'react'
import styles from './SongCard.module.scss'

interface ISongCardProps {
  title: string
  artist: string
  cover: string
}

const SongCard: FC<ISongCardProps> = ({
  title,
  artist,
  cover
}) => {
  return (
    <div className={styles.container}>
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
  )
}

export default SongCard