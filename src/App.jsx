import { useState } from "react";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import TaskBar from "./taskWindow/TaskBar";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App() {
  const [taskBar, setTaskBar] = useState(false);
  const [activePanel, setActivePanel] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedTaskItem, setSelectedTaskItem] = useState(null);
  const [oldtaskData, setOldTaskData] = useState(() => {
    try {
      const data = localStorage.getItem("tasks");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
 

  
  return (

    <>
       <main className={`bg-gradient-to-r from-[#a8edea] to-[#fed6e3] w-[100%] h-[100vh]  `}>
    <div className='max-w-full h-[97%] mx-auto 
hidden md:grid md:grid-cols-[15%_auto] 
rounded-lg shadow-lg'>

  {/* Sidebar */}
  <div className='md:block md:rounded-tl-lg md:rounded-bl-lg bg-[white] shadow-md '>
    <Layout taskBar={taskBar} setTaskBar={setTaskBar} />
  </div>

  {/* Main Content */}
  <div className='relative overflow-hidden md:rounded-tr-lg md:rounded-br-lg shadow-md   duration-300 ease-in-out'>
    
    <Outlet context={{ setTaskBar, setActivePanel, setSelectedTaskItem, oldtaskData, setOldTaskData }} />

    <TaskBar
      taskBar={taskBar}
      setTaskBar={setTaskBar}
      activePanel={activePanel}
      selectedTaskItem={selectedTaskItem}
      setSelectedTaskItem={setSelectedTaskItem}
       oldtaskData={oldtaskData}
        setOldTaskData={setOldTaskData}
      
      
    

    />
  </div>

</div>

{/* for mobile view */}
 <div className={`fixed trasition-transform duration-300 md:hidden  ease-in-out inset-0 ${mobileMenu ? 'bg-black/40 backdrop-blur-sm z-1001' : ''}` } onClick={()=>{setMobileMenu(false)}}></div>
  <div className='w-[100vw] h-[100dvh] mx-auto bg-[#66c4ef] grid grid-cols-[100%] rounded-lg 
 md:hidden shadow-lg'>

  {/* Sidebar */}

  <FontAwesomeIcon icon={faBars} className="fixed z-99 top-[3.3%] left-[5%]" onClick={() =>{setMobileMenu(!mobileMenu)}}/>
 
  <div className={`fixed transition-transform bg-[white]  z-1002 duration-300 md:hidden ease-in-out h-[100dvh] w-[55vw] ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
    <Layout taskBar={taskBar} setTaskBar={setTaskBar}/>
     
     
  
  </div>

  {/* Main Content */}
  <div className='relative flex overflow-hidden '>
    
    <Outlet context={{ setTaskBar, setActivePanel, setSelectedTaskItem, oldtaskData, setOldTaskData }} />

    <TaskBar
      taskBar={taskBar}
      setTaskBar={setTaskBar}
      activePanel={activePanel}
      setSelectedTaskItem={setSelectedTaskItem}
        selectedTaskItem={selectedTaskItem}
        oldtaskData={oldtaskData}
        setOldTaskData={setOldTaskData}
      
     
    />
  </div>

</div>
</main>
    </>
  );
}

export default App;