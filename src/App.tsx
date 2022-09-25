import { Suspense, lazy } from "react";

import { useHttp } from "./hooks/useHttp";
import type { ConfigItem } from "./types/ConfigItem";

import {
  DynamicComponents,
  IDCPlagin,
} from "./DynamicComponents/DynamicComponents";

const plagins: IDCPlagin[] = [
  {
    type: "circle",
    component: "Circle",
  },
  {
    type: "hexagon",
    component: "Hexagon",
  },
  {
    type: "rectangle",
    component: "Rectangle",
  },
  {
    type: "square",
    component: "Square",
  },
];

function App() {
  return <DynamicComponents plagins={plagins}>Bugaga</DynamicComponents>;
  /*const { isLoading, data, error } = useHttp<ConfigItem[]>("/config.json");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data &&
        data.map((item: ConfigItem) => {
          const Component = lazy(() => import(`./components/${item.path}`));
          return <Component key={item.id} />;
        })}
    </Suspense>
  );*/
}

export default App;
