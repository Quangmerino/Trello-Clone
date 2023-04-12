import React, { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode,
};

function CardCustom({ children}: Props) {
  return <div className="m-auto border rounded-md shadow-2xl p-4 bg-white">{children}</div>;
}

export default CardCustom;
