import { Suspense, lazy, useMemo } from "react";

import { useHttp } from "./hooks/useHttp";

function App() {
  const { isLoading, data, error } = useHttp("/config.json");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data &&
        data.map((item) => {
          const Component = lazy(() => import(`./components/${item.path}`));
          return <Component key={item.id} />;
        })}
    </Suspense>
  );
}

export default App;
