import React from "react";
import CardItem from "../Card";
import { TypeColumn } from "@/types";
import { FaEllipsisH, FaPlus } from "react-icons/fa";
import { VscNotebookTemplate } from "react-icons/vsc";

type Props = {
  column: TypeColumn;
};

function BoardColumn({ column }: Props) {
  return (
    <div className="flex flex-col gap-3 w-[350px] h-fit border border-solid shadow-xl rounded-md py-4 px-3 bg-[#ebecf0]">
      <div className="flex items-center px-2 justify-between">
        <span className="text-black font-bold">{column.title}</span>
        <button>
          <FaEllipsisH className="text-black" />
        </button>
      </div>
      <CardItem cards={column?.cards} />
      <div className="flex items-center justify-between text-gray-500">
        <button className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-gray-100 rounded-md w-full">
          <FaPlus />
          Add a card
        </button>
        <button title="Create from template ..." className="p-2 hover:bg-gray-100 rounded-md">
          <VscNotebookTemplate />
        </button>
      </div>
    </div>
  );
}

export default BoardColumn;
