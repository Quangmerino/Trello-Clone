import { BsTrello } from "react-icons/bs";
import { TbActivityHeartbeat } from "react-icons/tb";
import { VscNotebookTemplate } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import {
  MdPerson,
  MdAdd,
  MdSettings,
  MdOutlineCalendarViewMonth,
  MdCalendarMonth,
} from "react-icons/md";

export const navBoard = [
  {
    icon: <BsTrello />,
    name: "Boards",
    path: "/boards",
  },
  {
    icon: <MdPerson />,
    name: "Members",
    path: "/members",
  },
  {
    icon: <MdSettings />,
    name: "Workspace settings",
    path: "/workspace-settings",
  },
];

export const navWorkspace = [
  {
    icon: <MdOutlineCalendarViewMonth />,
    name: "Table",
    path: "/table",
  },
  {
    icon: <MdCalendarMonth />,
    name: "Calendar",
    path: "/calendar",
  },
];

export const navAccount = [
  {
    name: 'Switch accounts',
    path: '/switch-account',
    icon: '',
  },
  {
    name: 'Manager account',
    path: '/manager-account',
    icon: <GoLinkExternal className="w-[25px] h-[25px]"/>
  }
]

export const navAccountTrello = [
  {
    name: 'Profile and visibility',
    path: '/profile-and-visibility',
  },
  {
    name: 'Activity',
    path: '/activity',
  },
  {
    name: 'Cards',
    path: '/cards',
  },
  {
    name: 'Settings',
    path: '/settings',
  }
]

export const navAccount2 = [
  {
    name: 'Help',
    path: '/help',
  },
  {
    name: 'Shortcuts',
    path: '/shortcuts',
  },
]
