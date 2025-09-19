import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";

import {  Link } from 'react-router-dom';
import './Navbar.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import { sideBarData } from '../../data/sidebardata';

type SideData = { title: string; path: string, icon: any,  cName: string};

function Sidebar() {

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(true);
  const [elements, setItems] = useState<SideData[]>([]);
  useEffect(() => {
   setItems([...sideBarData]);    
  }, []);

  console.log('elements:', elements);
  return (
    <>

       <IconContext.Provider value={{ color: "#FFF" }}>
        
         <div className="navbar">
           {/* <Link to="#" className="menu-bars">
             <FaIcons.FaBars onClick={showSidebar} />
           </Link> */}
         </div>
         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
           <ul className="nav-menu-items" onClick={showSidebar}>
             {/* <li className="navbar-toggle">
               <Link to="#" className="menu-bars">
                 <FaIcons.FaBars />
               </Link>
             </li> */}

             {elements.map((item, index) => (
                 <li key={index} className={item.cName}>
                   <Link to={item.path}>
                     {item.icon}
                     <span>{item.title}</span>
                   </Link>
                 </li>
             ))}
           </ul>
         </nav>
       </IconContext.Provider>
        </>
  );    
}

export default Sidebar;