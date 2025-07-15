import { projectAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useReducer, useEffect, ReactNode } from "react";

interface IAuthContext {
  user: any | null;
  authIsReady: boolean;
  dispatch?: React.ActionDispatch<[action: ActionReducer]>;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

type ActionReducer = {
  payload: any;
  type: string;
};

const initialState: IAuthContext = {
  user: null,
  authIsReady: false,
};

export const AuthContext = createContext<IAuthContext | null>(initialState);

const authReducer = (state: IAuthContext, action: ActionReducer) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: action.payload };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    return onAuthStateChanged(projectAuth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
