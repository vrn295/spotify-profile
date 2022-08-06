import { FC, ReactNode, useEffect, useState } from 'react'

interface IPlayAudio {
  audio: HTMLAudioElement,
  playIcon: ReactNode,
  pauseIcon: ReactNode,
}

const PlayAudio: FC<IPlayAudio> = ({ audio, playIcon, pauseIcon }) => {
  const [isPlaying, setisPlaying] = useState(false)

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play()
      }
      else {
        audio.pause()
      }
    }
  }, [isPlaying])

  const tooglePlay = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setisPlaying(prev => !prev)
  }

  return (
    <button onClick={tooglePlay} style={{ border: "none", background: "none", padding: "0" }}>
      {
        isPlaying ? pauseIcon : playIcon 
      }
    </button>
  )
}

export default PlayAudio