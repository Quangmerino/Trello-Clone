import React, { ReactNode } from 'react'
import { TbChevronDown } from "react-icons/tb";

type Props = {
    name?: string,
    icon?: boolean,
    iconButton?: ReactNode,
    className?: string,
    onClick?: any,
}

function ButtonTopBar({name, icon = true, className, onClick, iconButton}:Props) {
  return (
    <button
      onClick={onClick}
      title={name}
      className={`flex items-center gap-2 py-1.5 px-3 rounded-md hover:bg-gray-300 ${className}`}
      >
        {name}
        {iconButton}
        {
            icon && <TbChevronDown/>
        }
    </button>
  )
}

export default ButtonTopBar