import useDocument from "../../hooks/useDocument"
import useStorage from "../../hooks/useStorage"

const SongItem = ({ song }) => {
  const { deleteDocument } = useDocument()
  const { deleteFile } = useStorage()

  const handleDeleteSong = async (song) => {
    if (window.confirm("Are you sur to delete this song ?")) {
      await deleteFile(song.imgFilePath)
      await deleteFile(song.songFilePath)

      await deleteDocument(song.id)
    }
  }

  return (
    <tr>
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td>
        <img
          src={song.coverUrl}
          alt="cover"
          style={{
            width: 60,
            height: 60,
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
      </td>
      <td>
        <i
          onClick={() => handleDeleteSong(song)}
          style={{ color: "crimson", cursor: "pointer" }}
          className="fas fa-trash-alt"
        ></i>
      </td>
    </tr>
  )
}

export default SongItem
