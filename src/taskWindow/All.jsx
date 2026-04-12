import { useOutletContext } from "react-router-dom";
import { PANELS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import noAllTaskImage from "../assets/Cute penguin planning something great.png"

import AllPic from "../assets/all.svg"
import send from "../assets/send.svg"
import send_fill from "../assets/send_fill.svg"
import { useEffect, useState } from "react";

export default function All() {
  const { setTaskBar, setActivePanel , setSelectedTaskItem, oldtaskData, setOldTaskData } = useOutletContext();
  const [activeEditPanel, setActiveEditPanel] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [activeItem, setActiveItem] = useState(false);
  const [newTaskId, setNewTaskId] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedTaskModal, setCompletedTaskModal] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "bg-gradient-to-r from-sky-300 to-blue-500"
  );


  let bgColors =
    [
      "bg-gradient-to-r from-[#a8edea] to-[#fed6e3]",
      "bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc]",
      "bg-gradient-to-r from-[#d4fc79] to-[#96e6a1]",
      "bg-gradient-to-r from-[#89f7fe] to-[#66a6ff]",
      "bg-gradient-to-br from-[#fde047] to-[#38bdf8]",
      "bg-gradient-to-r from-sky-300 to-blue-500",
      "bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 ",
      "bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]"

    ]
  // const [oldtaskData, setOldTaskData] = useState(() => {
  //   try {
  //     const data = localStorage.getItem("tasks");
  //     return data ? JSON.parse(data) : [];
  //   } catch {
  //     return [];
  //   }
  // });


  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(oldtaskData));
  }, [oldtaskData]);
  useEffect(() => {
    if (newTaskId) {
      setTimeout(() => setNewTaskId(null), 200);
    }
  }, [newTaskId]);
  return (

    <>

      <div className={` bg-gradient-to-r from-[#a8edea] to-[#fed6e3] w-[100%] min-h-screen ${theme}   px-4  `}>
        <div className="md:w-[75%] w-[100%] text-black  mt-5 md:mt-0 flex justify-between items-center h-[13vh] px-4  py-4">
          <p className="md:text-[20px]   text-[16px] font-bold flex gap-3 items-center">
            <img src={AllPic} alt="" width="30" height="30" className="hidden md:block  " />  ALL TASKS</p>
          <FontAwesomeIcon icon={closeIcon ? faTimes : faEllipsis} onClick={() => {
            setActiveEditPanel(!activeEditPanel)
            setCloseIcon(!closeIcon)
            setActiveItem(!activeItem)
          }
          } className="cursor-pointer bg-white text-sm md:text-[18px] rounded-sm px-1 py-1 transition  duration-300 ease-in-out hover:bg-gradient-to-r from-sky-300 to-blue-400 hover:text-white z-991" />
        </div>


        {/* tasks */}


        <div className=" w-[90vw] md:w-[60vw] mt-3  h-[76%]  overflow-y-auto [scrollbar-width:none] flex flex-col md:p-1  gap-4 ">

         
          {
            oldtaskData.length >= 1
              ?
              oldtaskData.map((task) => {
                return (

                  <>
                   <div className={`bg-white w-[100%]   backdrop-blur-lg flex  gap-2 justify-between  py-4 px-3 md:text-[15px] text-[14px] rounded-xl shadow-sm  text-black transition-all duration-500 ease-in-out
                  hover:scale-[1.01] hover:shadow-lg ${task.id === newTaskId
                      ? "translate-y-115 opacity-0 animate-slideUp rotate-18"
                      : "translate-y-0 opacity-100 rotate-0"}
                      `} onClick={() => setSelectedTaskItem(task)}>
                    <input type="checkbox" checked={task.status} id="" className="outline-none bg-sky-200"
                      onChange={() => {
                        let updatedData = oldtaskData.map(t => {
                          if (t.id === task.id) {
                            return { ...t, status: !t.status };
                          }
                          return t;
                        });
                        setOldTaskData(updatedData);
                      }} />
                    <p className="bg-white w-full"
                      onClick={() => {
                        setTaskBar(true);
                        setActivePanel(PANELS.ALL);
                          
                      }}>
                      {task.taskName}</p>
                    <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer text-blue-500 transition  duration-300 ease-in-out hover:rotate-18  hover:text-blue-700" onClick={() => {
                      setTaskBar(true);
                      setActivePanel(PANELS.ALL);
                    
                    }} />
                    <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer text-red-500 transition  duration-300 ease-in-out hover:rotate-18  hover:text-red-600" onClick={() => {
                      setDeleteModal(true)
                      setSelectedTaskId(task.id)
                    }} />

                  </div>
                  </>
                 
                )
              })

              
              :
              <div className="max-w-[50%]  mt-7 mx-auto ">
                <img src={noAllTaskImage} width="300" height="300" alt="No tasks available" />
              </div>
          }






          {/* for delete modal */}

          <div className={`${deleteModal ? "fixed inset-0 flex items-center justify-center bg-black/50 z-1003 visible" : "invisible"}`}>
            <div className="w-[90%] max-w-md bg-white p-5 rounded-xl shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Delete Task</h2>
              <p className="mb-4">Are you sure you want to delete this task?</p>

              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-sky-400  hover:text-white" onClick={() => {
                  setDeleteModal(false)
                }}  >
                  Cancel</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600  hover:text-white" onClick={() => {
                  setDeleteModal(false)
                  const updated = oldtaskData.filter(t => t.id !== selectedTaskId);
                  setOldTaskData(updated);
                }} >
                  Delete
                </button>
              </div>
            </div>
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
                    className={`${color} w-8 h-8 rounded-full cursor-pointer hover:border hover:shadow-lg 
                      ${theme === color ? "ring-1 ring-black scale-110" : ""}`}
                  />
                );
              })
            } </div>
          <ul className="text-[14px]">
            <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group   hover:text-green-500 cursor-pointer" >
              <span onClick={() => {
                const filteredTasks = oldtaskData.filter(task => !task.status);
                setOldTaskData(filteredTasks);
                setActiveEditPanel(false)
                setCloseIcon(false)
                setActiveItem(false)
              }}>mark as complete</span>

              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-[14px] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out right-10 group-hover:rotate-18 mr-2 "
              />
            </li>
            <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group  hover:text-orange-500 cursor-pointer"
              onClick={() => {
                const filteredTasks = oldtaskData.filter(task => !task.status);
                setOldTaskData(filteredTasks);
                {setActiveEditPanel(false)
                setCloseIcon(false)
                setActiveItem(false)
                } 
              }} >
              <span >delete task</span>

              <FontAwesomeIcon
                icon={faTrashCan}

                className="text-orange-500 text-[14px]  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out  group-hover:rotate-18 mr-2"
              />
            </li>
            <li className="border-b border-gray-300 pb-2 transition duration-300 ease-in-out flex justify-between items-center group  hover:text-red-500 cursor-pointer" onClick={() =>{
              setOldTaskData([])
             {setActiveEditPanel(false)
                setCloseIcon(false)
                setActiveItem(false)
             }
            }} >
              <span>delete all tasks</span>

              <FontAwesomeIcon
                icon={faBroom}
                className="text-red-500 text-[14px] opacity-0 group-hover:opacity-100 group-hover:rotate-18 transition duration-300 ease-in-out mr-2"
              />
            </li>

          </ul>
        </div>
        <div className={`w-[100%] h-[100%] fixed  inset-0  z-99 ${activeItem ? 'block' : 'hidden'}`} onClick={() => {
          setActiveItem(!activeItem)
          setActiveEditPanel(false)
          setCloseIcon(!closeIcon)
        }}></div>

        <div className="fixed bottom-7 md:bottom-14   ">
          <TaskInput inputValue={inputValue} setInputValue={setInputValue} oldtaskData={oldtaskData} setOldTaskData={setOldTaskData} setNewTaskId={setNewTaskId} />

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
                  className={`${color} w-8 h-8 rounded-full cursor-pointer hover:border hover:shadow-lg 
                  ${theme === color ? "ring-2 ring-black scale-110" : ""}`}
                />
              );
            })
          }

        </div>
        <ul className="text-[14px] ">
          <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group   hover:text-green-500 cursor-pointer" >
            <span onClick={() => {
                const filteredTasks = oldtaskData.filter(task => !task.status);
                setOldTaskData(filteredTasks);
                setActiveEditPanel(false)
                setCloseIcon(false)
                setActiveItem(false)
              }}>mark as complete</span>

            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-500 text-[14px]  mr-4  "
            />
          </li>
          <li className="border-b border-gray-300 pb-2 mb-3 transition duration-300 ease-in-out flex justify-between items-center group  hover:text-orange-500 cursor-pointer" >
            <span onClick={() => {
                const filteredTasks = oldtaskData.filter(task => !task.status);
                setOldTaskData(filteredTasks);
                setActiveEditPanel(false)
                setCloseIcon(false)
                setActiveItem(false)
              }}>delete task</span>

            <FontAwesomeIcon
              icon={faTrashCan}

              className="text-orange-500 text-[14px]  mr-4   "
            />
          </li>
          <li className="border-b border-gray-300 pb-2 transition duration-300 ease-in-out flex justify-between items-center  cursor-pointer" >
            <span onClick={() => {
              setOldTaskData([])
              setActiveEditPanel(false)
              setCloseIcon(false)
              setActiveItem(false)
              }}>delete all tasks</span>

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


function TaskInput({ inputValue, setInputValue, oldtaskData, setOldTaskData, setNewTaskId }) {

  const [shake, setShake] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setShake(true);

      // remove shake after animation ends
      setTimeout(() => setShake(false), 400);
      return;
    }
    let obj = {
      taskName: inputValue,
      status: false,
      id: Date.now()
    }

    setNewTaskId(obj.id)
    let copyData = [obj, ...oldtaskData]

    setOldTaskData(copyData)
    setInputValue("")

    // Handle form submission logic here
  };

  return (
    <>    <div className={`md:w-[60vw] w-[90vw]  bg-[white]  p-2 rounded-lg  ${shake ? 'animate-shake border border-red-500' : ''} shadow-lg mx-auto`}>
      <form action="" className="flex justify-between items-center" onSubmit={handleSubmit}>
        <input type="text" name="taskInput" placeholder="Add task" value={inputValue}
          className={` p-1 font-smaller md:w-[50vw] outline-none bg-white style-none `}
          onChange={(e) => {
            setInputValue(e.target.value.trimStart())



          }}
        />
        <button type="submit" className="mr-1 p-2 bg-sky-500 w-10 h-10 group relative flex items-center justify-center  rounded-full hover:cursor-pointer hover:bg-sky-600 transition duration-300 ease-in-out">
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