import { onAuthStateChanged } from "firebase/auth"
import { createContext, useReducer, useEffect } from "react"
import { projectAuth } from "../firebase/config"

export const AuthContext = createContext()

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: action.payload }
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })

  useEffect(() => {
    return onAuthStateChanged(projectAuth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
