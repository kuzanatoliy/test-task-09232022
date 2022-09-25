import { createContext, ReactNode } from "react";

export interface IDCPlagin {
  type: string;
  component: string;
}

export interface IDynamicComponetsProps {
  children: ReactNode;
  plagins: IDCPlagin[];
}

export const DynamicComponentsContext = createContext({});

export const DynamicComponents = ({
  plagins,
  children,
}: IDynamicComponetsProps) => {
  return (
    <DynamicComponentsContext.Provider value={{}}>
      {children}
    </DynamicComponentsContext.Provider>
  );
};
