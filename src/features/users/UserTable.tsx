import { FC } from "react";
import { IUser } from "../../types/user";
import LoadingIcon from "../../components/Loading";

// reference video
// https://www.youtube.com/watch?v=S4MhQ6peq8A

interface ITableUser {
  loading: boolean;
  data: IUser[];
}

const UserTable: FC<ITableUser> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="overflow-auto rounded-md shadow-lg mt-5 h-[700px]">
        <div className="w-full h-full flex items-center justify-center">
          <LoadingIcon color="#00000" />
          <div className="">กำลังโหลดข้อมูล</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[700px] overflow-auto rounded-md shadow-lg mt-5">
      <table className="w-full">
        <thead className="bg-primary border-gray text-white">
          <tr>
            <th className="w-10 p-3 text-sm font-bold text-left">No.</th>
            <th className="p-3 text-sm font-bold text-left">Firstname</th>
            <th className="p-3 text-sm font-bold text-left">Lastname</th>
            <th className="w-30 p-3 text-sm font-bold text-left">Gender</th>
            <th className="p-3 text-sm font-bold text-left">Age</th>
            <th className="p-3 text-sm font-bold text-left">Phone</th>
            <th className="p-3 text-sm font-bold text-left">Email</th>
          </tr>
        </thead>
        <tbody
          className={`
            mt-4
            [&>*:nth-child(odd)]:bg-gray
            [&>*:nth-child(even)]:bg-white
            `}
        >
          {data.map((row, index) => {
            return (
              <tr key={index} className="hover:!bg-[#ececec] whitespace-nowrap">
                <td className="p-3 text-sm text-gray-700 ">{index + 1}</td>
                <td className="p-3 text-sm text-gray-700">{row.firstName}</td>
                <td className="p-3 text-sm text-gray-700">{row.lastName}</td>
                <td className="p-3 text-sm text-gray-700">{row.gender}</td>
                <td className="p-3 text-sm text-gray-700">{row.age}</td>
                <td className="p-3 text-sm text-gray-700">{row.phone}</td>
                <td className="p-3 text-sm text-gray-700">{row.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
