import { FC } from "react";

const username = "Admin";

const Header: FC = () => {
  return (
    <div className="bg-white border-b-[#c4c4c4] border-b-[1px] flex items-center px-3 justify-between h-[60px]">
      <div className="text-3xl font-bold ml-1">Suka Dashboard</div>
      <div className="rounded px-5 py-2 cursor-pointer select-none">
        <i className="fas fa-circle-user text-xl" />
        <span className="ml-2 text-xl font-bold ">{username}</span>
      </div>
    </div>
  );
};

export default Header;
