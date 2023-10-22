import { FC } from "react";
import Button from "../../components/Button";

interface IDisplayMode {
  mode: string;
  setMode: (mode: "grid" | "table") => void;
}

const DisplayMode: FC<IDisplayMode> = (props) => {
  return (
    <div>
      <Button onClick={() => props.setMode("table")}>table</Button>
      <Button onClick={() => props.setMode("grid")}>grid</Button>
    </div>
  );
};

export default DisplayMode;
