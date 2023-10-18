import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelection } from "../../redux/store";
import { getAllUser } from "../../redux/slices/userSlice";
// import ReactPullToRefresh from "react-pull-to-refresh";
import UserList from "../../features/users/UserList";
import "../../styles/user.scss";
import InfiniteScroll from "react-infinite-scroll-component";

const UserPage: FC = () => {
  const { data, loading, total } = useAppSelection((state) => state.users);
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
    // <ReactPullToRefresh onRefresh={fetchUsers}>
    <InfiniteScroll
      dataLength={data.length}
      next={() => {}}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      refreshFunction={fetchUsers}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
    >
      <div className="p-5">
        <div>Total user {total} account</div>
        <UserList users={data} />
      </div>
    </InfiniteScroll>
    // </ReactPullToRefresh>
  );
};

export default UserPage;
