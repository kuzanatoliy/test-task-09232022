import { useContext } from "react";

import type { ConfigItem } from "../types/ConfigItem";

import { DynamicComponentsContext } from "./DynamicComponents";

export const DynamicComponentsView = <T extends ConfigItem>({
  type,
  ...props
}: T) => {
  const Component = useContext(DynamicComponentsContext).components[type];

  return <Component {...props} />;
};
