import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelection } from "../../redux/store";
import { getAllUser } from "../../redux/slices/userSlice";
import ReactPullToRefresh from "react-pull-to-refresh";

const UserPage: FC = () => {
  const { data, loading } = useAppSelection((state) => state.users);
  const dispatch = useAppDispatch();

  const fetchUsers = async () => {
    await dispatch(getAllUser());
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ReactPullToRefresh onRefresh={fetchUsers}>
      <div>
        <div>user</div>
        <div>
          {data.map((item, index) => {
            return <div key={index}>{item.email}</div>;
          })}
        </div>
      </div>
    </ReactPullToRefresh>
  );
};

export default UserPage;
