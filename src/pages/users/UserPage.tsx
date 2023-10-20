import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelection } from "../../redux/store";
import { getAllUser, getUserMore } from "../../redux/slices/userSlice";
import UserList from "../../features/users/UserList";
import InfiniteScroll from "react-infinite-scroll-component";
import UserTable from "../../features/users/UserTable";
import UserFilter from "../../features/users/UserFilter";
import HeaderPageUser from "../../features/users/HeaderPageUser";
import "../../styles/user.scss";

const UserPage: FC = () => {
  const { data, loading, total } = useAppSelection((state) => state.users);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const [perPage] = useState(20);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayMode, setDisplayMode] = useState<"grid" | "table">("table");

  const fetchUsers = async () => {
    await dispatch(getAllUser({ limit: perPage, skip: (page - 1) * perPage }));
  };

  const fetchMore = async () => {
    const newPage = page + 1;
    setPage(newPage);
    await dispatch(
      getUserMore({ limit: perPage, skip: (newPage - 1) * perPage })
    );
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (loading) {
  //   return <div>loading...</div>;
  // }

  if (displayMode === "table") {
    return (
      <>
        <HeaderPageUser />
        <UserFilter />
        <UserTable loading={loading} data={data} />
      </>
    );
  }

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMore}
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
    </>
  );
};

export default UserPage;
