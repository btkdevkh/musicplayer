import SongItem from "./SongItem";
import useCollection from "../../hooks/useCollection";

type SongListProps = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const SongList = ({ index, setIndex, isPlay, setIsPlay }: SongListProps) => {
  const { documents: songsFB } = useCollection("playlists");

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
  );
};

export default SongList;
