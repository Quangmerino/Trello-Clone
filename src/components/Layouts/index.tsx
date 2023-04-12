import React, { ReactNode } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <main className="main flex bg-[#026aa7]">
        <SideBar />
        {children}
      </main>
    </div>
  );
}

export default Layout;
