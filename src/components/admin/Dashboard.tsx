import SongList from "./SongList";

type DashboardProps = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dashboard = ({ index, setIndex, isPlay, setIsPlay }: DashboardProps) => {
  return (
    <div className="dashboard">
      <SongList
        index={index}
        setIndex={setIndex}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
    </div>
  );
};

export default Dashboard;
