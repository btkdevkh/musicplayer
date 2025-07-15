import { useEffect, useRef } from "react";

// https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
export const usePrevious = (value: any) => {
  console.log("value :", value);

  const ref = useRef<any | null>(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
