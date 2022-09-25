import { Suspense, lazy } from "react";

import { useHttp } from "./hooks/useHttp";

function App() {
  const { isLoading, data, error } = useHttp("/config.json");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data.map((item) => lazy(() => import(item.path)))}
    </Suspense>
  );
}

export default App;
