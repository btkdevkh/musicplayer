import useCollection from "../../hooks/useCollection"
import SongItem from "./SongItem"

const SongList = ({ index, setIndex, isPlay, setIsPlay }) => {
  const { documents: songsFB } = useCollection("playlists")

  return (
    <div className="song-list">
      {songsFB && songsFB.length > 0 && (
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Singer</td>
              <td>Cover</td>
              <td colSpan={2}>Actions</td>
            </tr>
          </thead>
          <tbody>
            {songsFB.map((song, idx) => (
              <SongItem
                key={song.id}
                song={song}
                idx={idx}
                index={index}
                setIndex={setIndex}
                isPlay={isPlay}
                setIsPlay={setIsPlay}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default SongList
