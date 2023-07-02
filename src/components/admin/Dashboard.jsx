import SongList from "./SongList"

const Dashboard = ({ index, setIndex, isPlay, setIsPlay }) => {
  return (
    <div className="dashboard">
      <SongList
        index={index}
        setIndex={setIndex}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
    </div>
  )
}

export default Dashboard
