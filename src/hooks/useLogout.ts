import { signOut } from "firebase/auth";
import { projectAuth } from "../firebase/config";
import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    await signOut(projectAuth);
    dispatch && dispatch({ type: "LOGOUT", payload: null });
  };

  return { logout };
};

export default useLogout;
