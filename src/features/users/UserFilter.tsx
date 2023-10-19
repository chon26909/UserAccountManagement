import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAppDispatch } from "../../redux/store";
import { getAllUser } from "../../redux/slices/userSlice";

const UserFilter = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");

  const handleSearch = () => {
    dispatch(getAllUser({ q: name, limit: 20, skip: 0 }));
  };

  return (
    <div>
      <Input
        label="Name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div className="mt-3">
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
};

export default UserFilter;
