import CardCustom from "@/common/customs/CardCustom";
import Link from "next/link";
import React from "react";
import { BsArrowReturnLeft, BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className="absolute bg-transparent top-2 w-[700px] right-36 z-10 rounded-md overflow-hidden">
      <input className="bg-white w-full h-10 rounded-md outline-0 mb-4 text-black px-4" />
      <CardCustom>
        <span className="text-gray-400 mb-4 block">RECENT BOARDS</span>
        <button className="flex items-center justify-between text-black h-12 hover:bg-gray-200 -mx-4 w-[700px] px-6">
          <span className="flex items-center gap-3">
            <BsSearch/>
            Advanced search
          </span>
          <BsArrowReturnLeft className="px-4 py-1 rounded-md bg-gray-400 w-[45px] h-[25px]"/>
        </button>
        <Link
          className="text-blue-500 underline flex justify-center items-center bg-gray-200 h-12 -mb-4 -mx-4"
          href=""
        >
          Help us improve your search results!
        </Link>
      </CardCustom>
    </div>
  );
}

export default Search;
