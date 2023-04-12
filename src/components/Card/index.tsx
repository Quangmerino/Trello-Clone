import InputCustom from "@/common/customs/InputCustom";
import { TypeCardItem } from "@/types";
import React from "react";
import { BsPencil } from "react-icons/bs";

type Props = {
  cards: object[];
};

function CardItem({ cards }: Props) {
  
  return (
    <>
      {cards?.map((item:any, index: number) => {
        return (
          <div
            key={index}
            className="group flex items-center h-12 justify-between rounded-md py-2 hover:opacity-60 bg-white px-2 shadow-lg"
          >
            <InputCustom value={item?.title}/>
            <button className="hidden group-hover:flex hover:bg-gray-400 p-1.5 rounded-sm">
              <BsPencil className="text-black"/>
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CardItem;
