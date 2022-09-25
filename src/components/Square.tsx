export const SQUARE = "SQUARE";

export interface ISquareProps {
  lineA: number;
  lineB: number;
  lineC: number;
  lineD: number;
}

export default ({ lineA, lineB, lineC, lineD }: ISquareProps) => (
  <div>
    Component {SQUARE} with {lineA} {lineB} {lineC} {lineD}
  </div>
);
