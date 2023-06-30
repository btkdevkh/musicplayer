import { useState } from "react"
import useLogin from "../hooks/useLogin"

const Login = () => {
  const { error, login } = useLogin()

  const [dataInput, setDataInput] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setDataInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (dataInput.email === "") return
    if (dataInput.password === "") return

    login(dataInput.email, dataInput.password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Login</h4>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={dataInput.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={dataInput.password}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />

        <br />
        {error && error}
      </form>
    </div>
  )
}

export default Login
