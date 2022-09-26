import { createContext, useState, lazy, ReactNode, ComponentType } from "react";

export interface IDCPlagin {
  type: string;
  component: string;
}

export interface IDynamicComponetsProps {
  children: ReactNode;
  plagins: IDCPlagin[];
}

export interface IDynamicComponentsContext {
  components: Record<string, ComponentType<any>>;
}

export const DynamicComponentsContext =
  createContext<IDynamicComponentsContext>({ components: {} });

export const DynamicComponents = ({
  plagins,
  children,
}: IDynamicComponetsProps) => {
  const [components] = useState(() => {
    const state: IDynamicComponentsContext["components"] = {};
    plagins.forEach(
      (item) =>
        (state[item.type] = lazy(
          () => import(`../components/${item.component}`)
        ))
    );
    return state;
  });

  return (
    <DynamicComponentsContext.Provider value={{ components }}>
      {children}
    </DynamicComponentsContext.Provider>
  );
};
