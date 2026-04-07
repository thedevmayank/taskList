import { useOutletContext } from "react-router-dom";
import { PANELS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faBroom } from '@fortawesome/free-solid-svg-icons'

import AllPic from "../assets/all.svg"
import send from "../assets/send.svg"
import send_fill from "../assets/send_fill.svg"
import { useState } from "react";

export default function All() {
  const { setTaskBar, setActivePanel } = useOutletContext();
  const [activeEditPanel, setActiveEditPanel] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const [theme, setTheme] = useState("bg-gradient-to-r from-[#a8edea] to-[#fed6e3]")
  const [activeItem, setActiveItem] = useState(false);



  let bgColors =
    [
      "bg-gradient-to-r from-[#a8edea] to-[#fed6e3]",
      "bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc]",
      "bg-gradient-to-r from-[#d4fc79] to-[#96e6a1]",
      "bg-gradient-to-r from-[#89f7fe] to-[#66a6ff]",
      "bg-gradient-to-r from-[#8fd3f4] to-[#fda085]",
      "bg-gradient-to-r from-sky-300 to-blue-500",
      "bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4]",
      "bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]"

    ]
  return (

    <>

      <div className={` w-[100%] h-[100%] ${theme}   px-4 overflow-hidden `}>
        <div className="md:w-[75%] w-[100%] text-black flex justify-between items-center h-[13vh] px-4   py-2">
          <p className="md:text-[20px] text-[16px] font-bold flex gap-3 items-center">
            <img src={AllPic} alt="" width="30" height="30" className="hidden md:block  " />  ALL TASKS</p>
          <FontAwesomeIcon icon={closeIcon ? faTimes : faEllipsis} onClick={() => {
            setActiveEditPanel(!activeEditPanel)
            setCloseIcon(!closeIcon)
            setActiveItem(!activeItem)
          }
          } className="cursor-pointer bg-white py-1 px-1  rounded-md transition  duration-300 ease-in-out hover:bg-gradient-to-r from-sky-300 to-blue-400 hover:text-white z-991" />
        </div>

        {/* tasks */}


        <div className=" md:w-[60vw] h-[80vh] overflow-y-auto [scrollbar-width:none] flex flex-col gap-4">


          <div className="bg-white  backdrop-blur-lg flex items-center gap-2 justify-between  p-4 md:text-[15px] text-[14px] rounded-xl shadow-sm  text-black">
            <input type="checkbox" name="" id="" className="outline-none bg-sky-200" />
            <p className="bg-white w-full"
              onClick={() => {
                setTaskBar(true);
                setActivePanel(PANELS.ALL);
              }}>
              java coding for 2hrs</p>
            <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer text-blue-500 transition  duration-300 ease-in-out hover:rotate-18  hover:text-blue-700" onClick={() => {
              setTaskBar(true);
              setActivePanel(PANELS.ALL);
            }} />
            <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer text-red-500 transition  duration-300 ease-in-out hover:rotate-18  hover:text-red-600" />

          </div>

             <div className="bg-white  backdrop-blur-lg flex items-center gap-2 justify-between  p-4 md:text-[15px] text-[14px] rounded-xl shadow-sm  text-black">
            <input type="checkbox" name="" id="" className="outline-none bg-sky-200" />
            <p className="bg-white w-full"
              onClick={() => {
                setTaskBar(true);
                setActivePanel(PANELS.ALL);
              }}>
              java coding for 2hrs</p>
            <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer text-blue-500 transition  duration-300 ease-in-out hover:rotate-18  hover:text-blue-700" onClick={() => {
              setTaskBar(true);
              setActivePanel(PANELS.ALL);
            }} />
            <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer text-red-500 transition  duration-300 ease-in-out hover:rotate-18  hover:text-red-600" />

          </div>



        </div>


        {/* theme panel */}
        <div className={` hidden md:block md:w-[18vw] fixed  right-[4vw] z-990 bg-white backdrop-blur-lg p-6 rounded-xl shadow-lg  duration-300 ease-in-out  ${activeEditPanel ? 'top-[9%] opacity-100 visible ' : 'top-[3%] invisible opacity-0'}
        `} >

          <p className="text-[14px] font-bold mb-4">Change Theme</p>

          <div className="grid grid-cols-4 justify-around gap-2 border-b border-gray-300 pb-4 mb-4">

            {
              bgColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setTheme(color)}
                    className={`${color} w-8 h-8 rounded-full cursor-pointer hover:border hover:shadow-lg`}
                  />
                );
              })
            } </div>
          <ul className="text-[14px]">
            <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group   hover:text-green-500 cursor-pointer" >
              <span className=" ">mark as complete</span>

              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-[14px] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out right-10 group-hover:rotate-18 mr-2 "
              />
            </li>
            <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group  hover:text-orange-500 cursor-pointer" >
              <span className=" ">delete task</span>

              <FontAwesomeIcon
                icon={faTrashCan}

                className="text-orange-500 text-[14px]  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  group-hover:rotate-18 mr-2"
              />
            </li>
            <li className="border-b border-gray-300 pb-2 transition duration-300 ease-in-out flex justify-between items-center group  hover:text-red-500 cursor-pointer" >
              <span className=" ">delete all tasks</span>

              <FontAwesomeIcon
                icon={faBroom}
                className="text-red-500 text-[14px] opacity-0 group-hover:opacity-100 group-hover:rotate-18 transition duration-300 ease-in-out mr-2"
              />
            </li>

          </ul>
        </div>
        <div className={`w-[100vw] h-[100vh] fixed  inset-0  z-99 ${activeItem ? 'block' : 'hidden'}`} onClick={() => {
          setActiveItem(!activeItem)
          setActiveEditPanel(false)
          setCloseIcon(!closeIcon)
        }}></div>
        <div className="fixed bottom-7 md:bottom-14   ">
          <TaskInput />
        </div>

      </div>


      {/* for mobile theme panel */}

      <div className={` md:hidden w-[80vw] fixed   left-[10vw] z-999 bg-white backdrop-blur-lg p-5 rounded-xl shadow-lg  duration-300 ease-in-out  ${activeEditPanel ? 'bottom-[5%] opacity-100 visible' : 'bottom-[-1%] invisible opacity-0'}`} >

        <p className="text-[15px]  mb-4"> Theme</p>

        <div className="grid grid-cols-4 justify-around gap-2 pb-4 mb-4 border-b border-gray-300 ">

          {
            bgColors.map((color, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setTheme(color)}
                  className={`${color} w-8 h-8 rounded-full cursor-pointer hover:border hover:shadow-lg `}
                />
              );
            })
          }

        </div>
        <ul className="text-[14px] ">
          <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group   hover:text-green-500 cursor-pointer" >
            <span className=" ">mark as complete</span>

            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-500 text-[14px]  mr-4  "
            />
          </li>
          <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group  hover:text-orange-500 cursor-pointer" >
            <span className=" ">delete task</span>

            <FontAwesomeIcon
              icon={faTrashCan}

              className="text-orange-500 text-[14px]  mr-4   "
            />
          </li>
          <li className="border-b border-gray-300 pb-2 transition duration-300 ease-in-out flex justify-between items-center  cursor-pointer" >
            <span className=" ">delete all tasks</span>

            <FontAwesomeIcon
              icon={faBroom}
              className="text-red-500 text-[14px] mr-4  "
            />
          </li>

        </ul>


      </div>

    </>



  );
}

{/* task input */ }


function TaskInput() {
  const [sendBtn, setSendBtn] = useState("");
  const [inputValue, setInputValue] = useState("");
  return (
    <>    <div className="md:w-[60vw] w-[90vw] bg-[white]  p-2 rounded-lg ">
      <form action="" className="flex justify-between items-center" onSubmit={(e) => {
        e.preventDefault();
      }
      }>
        <input type="text" name="taskInput" placeholder="enter task" value={inputValue} onChange={(e) => {
          setInputValue(e.target.value)
          let name = e.target.value;
          console.log(name);


        }} className=" p-1 font-smaller md:w-[50vw] outline-none bg-white style-none  "
        />
        <button type="submit" className="mr-1 p-2 bg-sky-500 w-10 h-10 group relative flex items-center justify-center  rounded-full hover:cursor-pointer " onClick={() => setSendBtn("send")} >
          <img src={send}
            width={20}
            alt="send"
            className="transition-opacity  absolute duration-200 opacity-100 group-hover:opacity-0" />
          <img src={send_fill}
            width={20}
            alt="Send Filled"
            className="transition-opacity absolute  duration-200 opacity-0 group-hover:opacity-100" />
        </button>
      </form>
    </div>

    </>

  )
}

// 