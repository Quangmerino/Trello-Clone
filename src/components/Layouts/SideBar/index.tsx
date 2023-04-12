import { navBoard, navWorkspace } from "@/common/data";
import Link from "next/link";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdAdd, MdKeyboardArrowDown } from "react-icons/md";

function SideBar() {
  return (
    <div className="py-10 w-[350px] border-r border-solid border-gray-200">
      <ul className="">
        {navBoard.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="flex items-center justify-between h-10 hover:bg-blue-200 text-[18px] px-6"
                href={item.path}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </span>
                {item.name === "Members" ? (
                  <MdAdd className="w-[25px] h-[25px]" />
                ) : (
                  ""
                )}
                {item.name.includes("Workspace") ? (
                  <MdKeyboardArrowDown className="w-[25px] h-[25px]" />
                ) : (
                  ""
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <span className="flex ml-4 font-bold my-4 text-[20px]">
        Workspace view
      </span>
      <ul>
        {navWorkspace.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="flex items-center justify-between h-10 hover:bg-blue-200 text-[18px] px-6 group"
                href={item.path}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </span>
                <BiDotsHorizontalRounded className="hidden group-hover:flex w-[25px] h-[25px]"/>
              </Link>
            </li>
          );
        })}
      </ul>
      <span className="flex ml-4 font-bold my-4 text-[20px]">Your boards</span>
    </div>
  );
}

export default SideBar;
