import { Fragment, useCallback, useEffect, useRef, useState } from "react"
import useCollection from "../hooks/useCollection"

const Player = ({ index, setIndex, isPlay, setIsPlay }) => {
  const { error, documents: songsFB } = useCollection("playlists")

  const [repeat, setRepeat] = useState(false)
  const [shuffle, setSuffle] = useState(false)

  const myRefAudio = useRef()
  const myRefBarIPro = useRef()

  const setProgress = (e) => {
    const width = e.target.clientWidth
    const clicktX = e.nativeEvent.offsetX

    const audio = myRefAudio.current
    const duration = audio.duration

    audio.currentTime = (clicktX / width) * duration
  }

  const updateProgressBar = (e) => {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100

    const barInProgress = myRefBarIPro.current

    if (barInProgress) {
      barInProgress.style.backgroundColor = "#06c270"
      barInProgress.style.width = `${progressPercent}%`
    }
  }

  const shuffleMode = () => {
    if (songsFB) setIndex(Math.floor(Math.random() * songsFB.length))
  }

  const play = useCallback(() => {
    setIsPlay(true)
    myRefAudio.current.play().catch((error) => error)
  }, [setIsPlay])

  const pause = () => {
    setIsPlay(false)
    myRefAudio.current.pause()
  }

  const prev = () => {
    if (songsFB) {
      if (index <= 0) {
        setIndex((o) => (o = songsFB.length - 1))
      } else {
        setIndex((o) => o - 1)
      }
      play()
    }
  }

  const next = () => {
    if (songsFB) {
      if (index >= songsFB.length - 1) {
        setIndex((o) => (o = 0))
      } else {
        setIndex((o) => o + 1)
      }
      play()
    }
  }

  useEffect(() => {
    songsFB && isPlay && play()
    songsFB &&
      myRefAudio.current.addEventListener("timeupdate", updateProgressBar)

    isPlay
      ? document
          .querySelectorAll(".fa-react")
          .forEach((i) => i.classList.add("play"))
      : document
          .querySelectorAll(".fa-react")
          .forEach((i) => i.classList.remove("play"))
  }, [isPlay, index, songsFB, repeat, play])

  return (
    <div className="music-container">
      {error && <h3>{error}</h3>}
      <div className={isPlay === false ? "music-info" : "music-info play"}>
        {songsFB && (
          <Fragment>
            <h3 className="title">{songsFB[index].title}</h3>
            <h5 className="title">{songsFB[index].singer}</h5>

            <div className="cover">
              <img src={songsFB[index].coverUrl} alt="album-cover" />
            </div>

            <audio
              ref={myRefAudio}
              src={songsFB[index].songUrl}
              onEnded={shuffle === false ? next : shuffleMode}
              loop={repeat}
            ></audio>
          </Fragment>
        )}
      </div>

      <div className="btn-controls">
        <button onClick={shuffle === false ? prev : shuffleMode}>
          <i className="fas fa-backward"></i>
        </button>
        <button
          onClick={() => {
            isPlay ? pause() : play()
          }}
        >
          <i
            className={
              isPlay === false ? "fas fa-play fa-2x" : "fas fa-pause fa-2x"
            }
          ></i>
        </button>
        <button onClick={shuffle === false ? next : shuffleMode}>
          <i className="fas fa-forward"></i>
        </button>
      </div>

      <div className="repeat">
        <button
          disabled={isPlay === false ? true : false}
          onClick={() => setRepeat((o) => !o)}
        >
          <i
            className={repeat === false ? "fas fa-redo" : "fas fa-redo repeat"}
          ></i>
        </button>
        <button
          disabled={isPlay === false ? true : false}
          onClick={() => setSuffle((o) => !o)}
        >
          <i
            className={
              shuffle === false ? "fas fa-random" : "fas fa-random shuffle"
            }
          ></i>
        </button>
      </div>

      <div
        className={isPlay === false ? "progress-bar" : "progress-bar play"}
        onClick={(e) => {
          setProgress(e)
        }}
      >
        <div
          ref={myRefBarIPro}
          className={
            isPlay === false ? "bar-in-progress" : "bar-in-progress play"
          }
        ></div>
      </div>
    </div>
  )
}

export default Player
