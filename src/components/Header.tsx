import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const history = useHistory();

  return (
    <header>
      <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
        <i
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
          className="fas fa-home fa-xs"
        ></i>
        <i
          onClick={() => history.push("/admin")}
          style={{ cursor: "pointer" }}
          className="fas fa-user-shield fa-xs"
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
            border: "none",
            cursor: "pointer",
            background: "transparent",
          }}
        >
          <i onClick={logout} className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
