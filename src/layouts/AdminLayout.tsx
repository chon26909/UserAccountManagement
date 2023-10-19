import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
