import React, { useState } from 'react'
import logo from "./assets/logo.png"
import { Link, useOutletContext } from 'react-router-dom'
import All from "./assets/all.svg"
import planned from "./assets/planned_blank.svg"
import planned_fill from "./assets/planned_fill.svg"
import focus_blank from "./assets/focus_blank.svg"
import focus_fill from "./assets/focus_fill.svg"
import tasks_blank from "./assets/tasks_blank.svg"
import tasks_fill from "./assets/tasks_fill.svg"

export default function Layout({ taskBar, setTaskBar,setMobileMenu }) {
   
const [activeItem, setActiveItem] = useState("");
  
  return (
    <>
    {/* for desktop */}

    <div className='w-[100%] h-full  px-2 py-2  capitalize  '>
        <div className='flex justify-between items-center h-[20px] mt-3'>
        <figure>
          <Link to="/" onClick={() => setTaskBar(false)}>
            <img src={logo} alt="" width="100" height="50" />
          </Link>
        </figure>
      
        </div>
   

   <div className='text-left mt-8'>
  <ul className='ml-2 w-[92%] text-[14px]'>

    <Link to="/all" onClick={() => { setTaskBar(false); setActiveItem("all"); }}>
      <li className={`p-2 rounded mt-2 flex gap-3 items-center  transition-colors duration-200 ease-in-out 
        ${activeItem === "all" ? "bg-gray-200 text-black " : "hover:bg-gray-200 "}`}>
        
        <img src={All} width="15" />  
        All
      </li>
    </Link>

    <Link to="/planned" onClick={() => { setTaskBar(false); setActiveItem("planned"); }}>
      <li className={`p-2 rounded mt-2 flex gap-3 items-center transition-colors duration-200 ease-in-out
        ${activeItem === "planned" ? "bg-gray-200 text-black " : "hover:bg-gray-200 "}`}>
        
        <img src={activeItem === "planned" ? planned_fill : planned} width="15" />  
        Planned
      </li>
    </Link>

    <Link to="/focused" onClick={() => { setTaskBar(false); setActiveItem("focused"); }}>
      <li className={`p-2 rounded mt-2 flex gap-3 items-center transition-colors duration-200 ease-in-out
        ${activeItem === "focused" ? "bg-gray-200 text-black " : "hover:bg-gray-200 "}`}>
        
        <img src={activeItem === "focused" ? focus_fill : focus_blank} width="15" />  
        Focused
      </li>
    </Link>

    <Link to="/tasks" onClick={() => { setTaskBar(false); setActiveItem("tasks"); }}>
      <li className={`p-2 rounded mt-2 flex gap-3 items-center transition-colors duration-200 ease-in-out
        ${activeItem === "tasks" ? "bg-gray-200 text-black " : "hover:bg-gray-200 "}`}>
        
        <img src={activeItem === "tasks" ? tasks_fill : tasks_blank} width="15" />  
        Tasks
      </li>
    </Link>

  </ul>
</div>
          
    </div>
     


  {/* for mobile */}


</>

  )
}
