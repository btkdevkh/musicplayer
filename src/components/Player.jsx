import { Fragment, useEffect, useRef, useState } from "react"
import { usePrevious } from "../hooks/usePrevious"
import useCollection from "../hooks/useCollection"

const Player = () => {
  const { error, documents: songsFB } = useCollection("playlists")

  const [idx, setIdx] = useState(0)
  const [isPlay, setIsPlay] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setSuffle] = useState(false)

  const prevIdx = usePrevious(idx)

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

    barInProgress.style.backgroundColor = "#61dafb"
    barInProgress.style.width = `${progressPercent}%`
  }

  const shuffleMode = () => {
    setIdx(Math.floor(Math.random() * songsFB.length))
  }

  const play = () => {
    setIsPlay(true)
    myRefAudio.current.play().catch((error) => error)
  }

  const pause = () => {
    setIsPlay(false)
    myRefAudio.current.pause()
  }

  const prev = () => {
    if (idx <= 0) {
      setIdx((o) => (o = songsFB.length - 1))
    } else {
      setIdx((o) => o - 1)
    }
    play()
  }

  const next = () => {
    if (idx >= songsFB.length - 1) {
      setIdx((o) => (o = 0))
    } else {
      setIdx((o) => o + 1)
    }
    play()
  }

  useEffect(() => {
    songsFB &&
      myRefAudio.current.addEventListener("timeupdate", updateProgressBar)
    songsFB && prevIdx !== idx && play()

    isPlay
      ? document
          .querySelectorAll(".fa-react")
          .forEach((i) => i.classList.add("play"))
      : document
          .querySelectorAll(".fa-react")
          .forEach((i) => i.classList.remove("play"))
  }, [prevIdx, isPlay, idx, songsFB, repeat])

  return (
    <div className="music-container">
      {error && <h3>{error}</h3>}
      <div className={isPlay === false ? "music-info" : "music-info play"}>
        {songsFB && (
          <Fragment>
            <h3 className="title">{songsFB[idx].title}</h3>
            <h5 className="title">{songsFB[idx].singer}</h5>

            <div className="cover">
              <img src={songsFB[idx].coverUrl} alt="album-cover" />
            </div>

            <audio
              ref={myRefAudio}
              src={songsFB[idx].songUrl}
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
