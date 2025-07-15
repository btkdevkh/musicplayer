import { useState } from "react";
import Player from "../components/Player";
import Dashboard from "../components/admin/Dashboard";
import Form from "../components/admin/Form";

const Admin = () => {
  const [index, setIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <>
      <main className="admin">
        <div className="admin-dashboard">
          <Dashboard
            index={index}
            setIndex={setIndex}
            isPlay={isPlay}
            setIsPlay={setIsPlay}
          />
        </div>

        <div className="admin-player">
          <Player
            index={index}
            setIndex={setIndex}
            isPlay={isPlay}
            setIsPlay={setIsPlay}
          />
          <Form headingTitle={"CREATE SONG"} formData={formData} />
        </div>
      </main>
    </>
  );
};

export default Admin;

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
];
