export const CIRCLE = "CIRCLE";

export interface ICircleProps {
  radius: number;
}

export default ({ radius }: ICircleProps) => (
  <div>
    Component: {CIRCLE} with radius {radius}
  </div>
);
