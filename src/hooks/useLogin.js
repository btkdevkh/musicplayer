import { signInWithEmailAndPassword } from "firebase/auth"
import { projectAuth } from "../firebase/config"
import useAuthContext from "./useAuthContext"
import { useState } from "react"

const useLogin = () => {
  const { dispatch } = useAuthContext()
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(projectAuth, email, password)
      dispatch({ type: "LOGIN", payload: res.user })
    } catch (err) {
      setError(err.message)
    }
  }

  return { error, login }
}

export default useLogin
