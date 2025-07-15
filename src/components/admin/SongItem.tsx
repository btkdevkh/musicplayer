import { Music } from "../../types/Music";
import useStorage from "../../hooks/useStorage";
import useDocument from "../../hooks/useDocument";
import useCollection from "../../hooks/useCollection";

type SongItemProps = {
  song: Music;
  idx: number;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const SongItem = ({
  song,
  index,
  setIndex,
  idx,
  isPlay,
  setIsPlay,
}: SongItemProps) => {
  const { deleteDocument } = useDocument();
  const { deleteFile } = useStorage();
  const { documents: songsFB } = useCollection("playlists");

  const handlChangeIdx = (song: Music) => {
    if (songsFB) {
      const idx = songsFB.findIndex((s) => s.id === song.id);
      setIndex(idx);
      setIsPlay(true);
    }
  };

  const handleDeleteSong = async (song: Music) => {
    if (window.confirm("Are you sur to delete this song ?")) {
      await deleteFile(song.imgFilePath);
      await deleteFile(song.songFilePath);

      if (song.id) await deleteDocument(song.id);
    }
  };

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
          onClick={() => handlChangeIdx(song)}
          style={{
            cursor: "pointer",
            color: isPlay && idx === index ? "#7873f5" : "",
          }}
          className="fas fa-assistive-listening-systems fa-lg"
        ></i>
      </td>

      <td>
        <i
          onClick={() => handleDeleteSong(song)}
          style={{ color: "crimson", cursor: "pointer" }}
          className="far fa-trash-alt fa-lg"
        ></i>
      </td>
    </tr>
  );
};

export default SongItem;
