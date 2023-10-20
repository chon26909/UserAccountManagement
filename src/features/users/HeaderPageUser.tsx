import Button from "../../components/Button";

const HeaderPageUser = () => {
  return (
    <div className="flex justify-between items-end">
      <h2 className="my-3 text-[32px] font-bold">User Account Management</h2>
      <div>
        <Button className="bg-primary w-[200px]">Add User</Button>
      </div>
    </div>
  );
};

export default HeaderPageUser;
