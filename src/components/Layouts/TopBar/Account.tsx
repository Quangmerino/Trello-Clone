import CardCustom from "@/common/customs/CardCustom";
import { navAccount, navAccount2, navAccountTrello } from "@/common/data";
import Link from "next/link";
import React from "react";

function Account() {
  return (
    <div className="absolute top-16 right-4 w-[350px] rounded-md overflow-hidden">
      <CardCustom>
        <div className="flex flex-col gap-4 px-4">
          <span className="uppercase text-gray-400 font-bold">Account</span>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center">
              LQ
            </div>
            <div className="flex flex-col py-1">
              <span className="text-black">Lưu Minh Quang</span>
              <span className="text-gray-400">quangmerino@gmail.com</span>
            </div>
          </div>
          <ul className="flex flex-col">
            {navAccount.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="account-link"
                    href={item.path}
                  >
                    {item.name} {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="h-px bg-gray-300 my-3 -mx-8"></div>
          <>
            <span className="uppercase text-gray-400 font-bold">Trello</span>
            <ul className="flex flex-col">
              {navAccountTrello.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="account-link"
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
          <div className="h-px bg-gray-300 my-3 -mx-8"></div>
          <ul className="flex flex-col">
            {navAccount2.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="account-link"
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="h-px bg-gray-300 my-3 -mx-8"></div>
          <Link className="account-link" href='/auth/logout'>Logout</Link>
        </div>
      </CardCustom>
    </div>
  );
}

export default Account;
