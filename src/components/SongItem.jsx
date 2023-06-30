const SongItem = ({ song }) => {
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
        <i style={{ color: "crimson" }} className="fas fa-trash-alt"></i>
      </td>
    </tr>
  )
}

export default SongItem
