import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div>
      <div>Home Page</div>
      <Link to="users">go to users page</Link>
    </div>
  );
};

export default HomePage;
