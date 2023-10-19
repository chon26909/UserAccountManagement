import { FC } from "react";
import { IUser } from "../../types/user";
import UserCard from "./UserCard";
import "../../styles/user.scss";
// import UserCardLoading from "./UserCardLoading";

interface IUserList {
  users: IUser[];
}

const UserList: FC<IUserList> = ({ users }) => {
  return (
    <div className="userList">
      {/* <UserCardLoading /> */}
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
};

export default UserList;
