import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sideBarData = [
   {
    title: "Dashboard",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
    {
    title: "Users",
    path: "/user",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
    {
    title: "Files",
    path: "/file",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/report",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  }

  ];
