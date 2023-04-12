import CardCustom from "@/common/customs/CardCustom";
import Link from "next/link";
import React from "react";
import { BiLinkExternal, BiCompass } from "react-icons/bi";
import { TbLayoutBoard } from "react-icons/tb";

function Switch() {
  
  return (
    <div className="absolute top-16 left-4 w-[360px]">
      <CardCustom>
        <div className="flex justify-between px-2">
          <span className="text-black">Switch to</span>
          <Link
            href=""
            className="flex items-center gap-2 text-blue-700 hover:underline"
            onClick={() => window.URL}
          >
            Atlassian Start
            <BiLinkExternal />
          </Link>
        </div>
        <Link className="switch__link" href="">
          <span className="bg-blue-700 rounded-md w-8 h-8 flex items-center justify-center">
            <TbLayoutBoard className="text-white w-5 h-5"/>
          </span>
          Trello
        </Link>
        <div className="mt-6 flex flex-col">
          <span className="text-gray-300 mx-2">DISCOVER</span>
          <Link className="switch__link" href=''>
            <span className="switch__link-icon">
              <img src="/icons/confluence.svg" alt="confluence"/>
            </span>
            More Atlassian products
          </Link>
          <Link className="switch__link" href=''>
            <span className="switch__link-icon">
            <img src="/icons/jira-software.svg" alt="jira-software"/>
            </span>
            More Atlassian products
          </Link>
          <Link className="switch__link" href=''>
            <span className="switch__link-icon">
            <img src="/icons/jira-service.svg" alt="jira-service"/>
            </span>
            More Atlassian products
          </Link>
          <Link className="switch__link" href=''>
            <span className="switch__link-icon">
              <BiCompass className="text-white w-5 h-5"/>
            </span>
            More Atlassian products
          </Link>
        </div>
      </CardCustom>
    </div>
  );
}

export default Switch;
