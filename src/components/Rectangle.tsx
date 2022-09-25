export const RECTANGLE = "RECTANGLE";

export interface IRectangleProps {
  lineA: number;
  lineB: number;
  lineC: number;
}

export default ({ lineA, lineB, lineC }: IRectangleProps) => (
  <div>
    Component {RECTANGLE} with {lineA}, {lineB}, {lineC} sides
  </div>
);
