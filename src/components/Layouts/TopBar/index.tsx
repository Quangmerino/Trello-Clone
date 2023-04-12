import Link from "next/link";
import React, { useState } from "react";
import { TbGridDots, TbSearch, TbBellRinging2, TbHelp } from "react-icons/tb";
import { FaTrello } from "react-icons/fa";
import ButtonTopBar from "./ButtonTopBar";
import Switch from "./Switch";
import Workspace from "./Workspace";
import Account from "./Account";
import Notification from "./Notification";
import Search from "./Search";

function TopBar() {
  const [isOpen, setIsOpen] = useState<number>(0);

  return (
    <div className="flex items-center justify-between py-2 px-4 h-14 bg-[#026aa7] border-b border-solid border-sky-100 relative">
      <div className="flex items-center">
        <ButtonTopBar
          icon={false}
          className="hover:rounded-md p-2 hover:bg-gray-300"
          onClick={() => setIsOpen(isOpen !== 1 ? 1 : 0)}
          iconButton={<TbGridDots className="w-7 h-7" />}
        />

        {isOpen === 1 && <Switch />}
        <Link
          className="flex items-center gap-1.5 text-[25px] font-semibold px-2 rounded-md ml-3 hover:bg-gray-300"
          href=""
        >
          <FaTrello/>
          Trello
        </Link>
        <div className="flex ml-6">
          <ButtonTopBar
            name="Workspaces"
            onClick={() => setIsOpen(isOpen !== 2 ? 2 : 0)}
          />
          {isOpen === 2 && <Workspace />}
          <ButtonTopBar
            name="Recent"
            onClick={() => setIsOpen(isOpen !== 3 ? 3 : 0)}
          />
          <ButtonTopBar
            name="Starred"
            onClick={() => setIsOpen(isOpen !== 4 ? 4 : 0)}
          />
          <ButtonTopBar
            name="Templates"
            onClick={() => setIsOpen(isOpen !== 5 ? 5 : 0)}
          />
          <ButtonTopBar
            name="Create"
            onClick={() => setIsOpen(isOpen !== 6 ? 6 : 0)}
            className="bg-[#42526E] ml-3"
            icon={false}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-2 h-10 pl-4 pr-32 bg-[#42526E] opacity-60 rounded-md cursor-text hover:opacity-30"
          onClick={() => setIsOpen(isOpen !== 7 ? 7 : 0)}
        >
          <TbSearch className="w-6 h-6" />
          <span className="">Search</span>
        </button>
        {isOpen === 7 && <Search/>}
        <TbBellRinging2
          onClick={() => setIsOpen(isOpen !== 8 ? 8 : 0)}
          className="w-7 h-7 cursor-pointer"
        />
        {
          isOpen === 8 && <Notification/>
        }
        <TbHelp
          onClick={() => setIsOpen(isOpen !== 9 ? 9 : 0)}
          className="w-7 h-7 cursor-pointer"
        />
        <button
          className="w-8 h-8 rounded-full bg-emerald-400 hover:bg-black hover:opacity-50"
          onClick={() => setIsOpen(isOpen !== 10 ? 10 : 0)}
        >
          <span className="">LQ</span>
        </button>
        {isOpen === 10 && <Account/>}
      </div>
    </div>
  );
}

export default TopBar;
