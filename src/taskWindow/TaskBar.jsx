import { PANELS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PlannedPanel from "../taskBarPanel/PlannedPanel"
import AllPanel from "../taskBarPanel/AllPanel";


export default function TaskBar({ taskBar, setTaskBar, activePanel, selectedTaskItem, setSelectedTaskItem, oldtaskData, setOldTaskData }) {
 
 
  return (
    <div
      className={` absolute top-0 z-1000 right-0 h-[100dvh] w-[100vw] md:w-[21vw] bg-white shadow-lg 
      transition-transform duration-300 ease-in-out
      ${taskBar ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-4 flex justify-between items-center mt-2">
        <h2 className="font-bold">{activePanel}</h2>
        <button onClick={() => setTaskBar(false)}><FontAwesomeIcon icon={faTimes} /></button>
      </div>

      <div className="p-3  ">
        {activePanel === PANELS.ALL && <AllPanel selectedTaskItem={selectedTaskItem} setSelectedTaskItem={setSelectedTaskItem} oldtaskData={oldtaskData} setOldTaskData={setOldTaskData} setTaskBar={setTaskBar} />}

        {activePanel === PANELS.PLANNED && <PlannedPanel selectedTaskItem={selectedTaskItem} setSelectedTaskItem={setSelectedTaskItem} oldtaskData={oldtaskData} setOldTaskData={setOldTaskData} setTaskBar={setTaskBar} />}
        {activePanel === PANELS.FOCUSED && <p>Focused Tasks Content</p>}
        {activePanel === PANELS.TASKS && <p>Tasks List Content</p>}
      </div>
    </div>
  );
}