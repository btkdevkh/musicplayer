import useLogout from "../hooks/useLogout"

const Header = () => {
  const { logout } = useLogout()

  return (
    <header>
      <i className="fas fa-headphones-alt"></i>

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
    </header>
  )
}

export default Header
