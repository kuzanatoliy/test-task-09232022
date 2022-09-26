import { Suspense, lazy } from "react";

import { useHttp } from "./hooks/useHttp";
import type { ConfigItem } from "./types/ConfigItem";

import {
  DynamicComponents,
  IDCPlagin,
} from "./DynamicComponents/DynamicComponents";
import { DynamicComponentsView } from "./DynamicComponents/DynamicComponentView";

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
  const { isLoading, data, error } = useHttp<ConfigItem[]>("/config.json");
  return (
    <DynamicComponents plagins={plagins}>
      <Suspense fallback={<div>Loading...</div>}>
        {!isLoading &&
          data &&
          data.map((item: ConfigItem) => (
            <DynamicComponentsView key={item.id} {...item} />
          ))}
      </Suspense>
    </DynamicComponents>
  );
}

export default App;
