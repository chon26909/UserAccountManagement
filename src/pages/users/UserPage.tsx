import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelection } from "../../redux/store";
import { getAllUser } from "../../redux/slices/userSlice";

const UserPage: FC = () => {
  const { data, loading } = useAppSelection((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>user</div>
      <div>
        {data.map((item, index) => {
          return <div key={index}>{item.email}</div>;
        })}
      </div>
    </div>
  );
};

export default UserPage;
