import Player from "../components/Player"
import Dashboard from "../components/Dashboard"

const Admin = () => {
  return (
    <main className="admin">
      <div className="admin-dashboard">
        <Dashboard />
      </div>

      <div className="admin-player">
        <Player />
      </div>
    </main>
  )
}

export default Admin
