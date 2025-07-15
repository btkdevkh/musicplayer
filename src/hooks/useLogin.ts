import { useState } from "react";
import useAuthContext from "./useAuthContext";
import { projectAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );
      dispatch && dispatch({ type: "LOGIN", payload: res.user });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.error("Unknown error", error);
      }
    }
  };

  return { error, login };
};

export default useLogin;
