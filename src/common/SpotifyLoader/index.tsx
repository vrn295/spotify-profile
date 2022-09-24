import { FC } from 'react'
import Lottie from 'react-lottie';
import spotifyLoader from '../spotify-loading-animation.json'
import styles from "./SpotifyLoader.module.scss"

interface ISpotifyLoaderProps {

}

const SpotifyLoader: FC<ISpotifyLoaderProps> = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: spotifyLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className={styles.container}>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  )
}

export default SpotifyLoader