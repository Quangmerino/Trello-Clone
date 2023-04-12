import CardCustom from "@/common/customs/CardCustom";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

function Notification() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="absolute top-16 right-2 w-[500px] z-10 rounded-md overflow-hidden">
      <CardCustom>
        <div className="flex justify-between items-center">
          <span className="text-[26px] font-semibold text-black">
            Notifications
          </span>
          <div className="flex items-center gap-2">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-3">
                <span className="label-text text-gray-500">
                  Only show unread
                </span>
                <input
                  onClick={() => setToggle(!toggle)}
                  type="checkbox"
                  className="toggle toggle-success"
                  checked={toggle}
                />
              </label>
            </div>
            <button className="p-2 rounded-sm hover:bg-gray-200">
              <BiDotsVerticalRounded className="text-black" />
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-gray-500 my-4"></div>
        <div className="flex flex-col items-center justify-center py-16">
            <img className="p-8" src="/images/image-notification.svg" alt="taco"/>
            <span className="font-bold text-[24px] text-black mb-6">No unread notifications</span>
        </div>
      </CardCustom>
    </div>
  );
}

export default Notification;
