import { useState, useRef } from "react";

export const useHttp = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useRef<any>(null);
  const error = useRef<any>(null);
  fetch(url)
    .then((res) => res.json())
    .then((jsonData) => (data.current = jsonData))
    .catch((err) => (error.current = err))
    .finally(() => setIsLoading(false));
  return {
    isLoading,
    data: data.current,
    error: error.current,
  };
};
