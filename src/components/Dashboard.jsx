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
      <Form headingTitle={"CREATE SONG"} formData={formData} />

      <br />

      <SongList />
    </div>
  )
}

export default Dashboard
