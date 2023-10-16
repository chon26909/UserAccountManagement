import { FC } from "react";

interface IInput {}

const Input: FC<IInput> = ({ ...rest }) => {
  return (
    <div>
      <input {...rest} />
    </div>
  );
};

export default Input;
