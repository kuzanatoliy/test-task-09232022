import { useState, useRef, useEffect } from "react";

export const useHttp = <R extends {} = {}, E extends {} = {}>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useRef<R | null>(null);
  const error = useRef<E | null>(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => (data.current = jsonData))
      .catch((err) => (error.current = err))
      .finally(() => setIsLoading(false));
  }, []);
  return {
    isLoading,
    data: data.current,
    error: error.current,
  };
};
