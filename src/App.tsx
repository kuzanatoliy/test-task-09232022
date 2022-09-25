import { Suspense, lazy, useMemo } from "react";

import { useHttp } from "./hooks/useHttp";
import type { ConfigItem } from "./types/ConfigItem";

function App() {
  const { isLoading, data, error } = useHttp<ConfigItem[]>("/config.json");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data &&
        data.map((item: ConfigItem) => {
          const Component = lazy(() => import(`./components/${item.path}`));
          return <Component key={item.id} />;
        })}
    </Suspense>
  );
}

export default App;
