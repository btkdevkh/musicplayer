import useAuthContext from "../hooks/useAuthContext"
import useLogout from "../hooks/useLogout"
import { useHistory } from "react-router-dom"

const Header = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const history = useHistory()

  return (
    <header>
      <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
        <i
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
          className="fas fa-headphones-alt"
        ></i>
        <i
          onClick={() => history.push("/admin")}
          style={{ cursor: "pointer" }}
          className="fas fa-tools fa-xs"
        ></i>
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.6rem",
        }}
      >
        <h6>{user.email}</h6>
        <button
          style={{
            backgroundColor: "#20232a",
            border: "none",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          <i onClick={logout} className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </header>
  )
}

export default Header
