import Form from "./Form"
import SongList from "./SongList"

const formData = [
  {
    id: "title",
    type: "text",
    name: "title",
    placeholder: "Title",
  },
  {
    id: "singer",
    type: "text",
    name: "singer",
    placeholder: "Singer",
  },
  {
    id: "cover",
    type: "file",
    name: "cover",
    placeholder: "",
  },
  {
    id: "song",
    type: "file",
    name: "song",
    placeholder: "",
  },
]

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <SongList />
      <Form headingTitle={"CREATE SONG"} formData={formData} />
    </div>
  )
}

export default Dashboard
