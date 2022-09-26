export const HEXAGON = "HEXAGON";

export interface IHexagonProps {
  lineA: number;
  lineB: number;
  lineC: number;
  lineD: number;
  lineE: number;
  lineF: number;
}

export default ({
  lineA,
  lineB,
  lineC,
  lineD,
  lineE,
  lineF,
}: IHexagonProps) => (
  <div>
    Component {HEXAGON} with {lineA} {lineB} {lineC} {lineD} {lineE} {lineF}{" "}
    sides
  </div>
);
