import useCollection from "../../hooks/useCollection"
import SongItem from "./SongItem"

const SongList = () => {
  const { documents: songsFB } = useCollection("playlists")

  return (
    <div
      className="song-list"
      style={{
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {songsFB && songsFB.length > 0 && (
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Singer</td>
              <td>Album cover</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {songsFB.map((song) => (
              <SongItem key={song.id} song={song} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default SongList
