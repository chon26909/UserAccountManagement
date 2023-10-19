import { FC } from "react";
import { IUser } from "../../types/user";

// reference video
// https://www.youtube.com/watch?v=S4MhQ6peq8A

interface ITableUser {
  data: IUser[];
}

const UserTable: FC<ITableUser> = ({ data }) => {
  return (
    <div className="overflow-auto rounded-md shadow-lg mt-5">
      <table className="w-full">
        <thead className="bg-blue-500 border-b-2 border-gray-300">
          <tr>
            <th className="w-10 p-3 text-sm font-bold text-left">No.</th>
            <th className="p-3 text-sm font-bold text-left">FirstName</th>
            <th className="p-3 text-sm font-bold text-left">LastName</th>
            <th className="w-30 p-3 text-sm font-bold text-left">Gender</th>
            <th className="p-3 text-sm font-bold text-left">Age</th>
            <th className="p-3 text-sm font-bold text-left">Phone</th>
            <th className="p-3 text-sm font-bold text-left">Email</th>
          </tr>
        </thead>
        <tbody
          className={`
            [&>*:nth-child(odd)]:bg-gray-50 
            [&>*:nth-child(even)]:bg-white
            `}
        >
          {data.map((row, index) => {
            return (
              <tr key={index} className="hover:!bg-slate-100 whitespace-nowrap">
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
