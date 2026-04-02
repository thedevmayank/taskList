import { useOutletContext } from "react-router-dom";
import { PANELS } from "./constants";

export default function Tasks() {
  const { setTaskBar, setActivePanel } = useOutletContext();

  return (
    <>
    <div className="w-[100vw] h-[100%] bg-gradient-to-r from-purple-300 to-indigo-400 ">
    <button
      onClick={() => {
        setTaskBar(true);
        setActivePanel(PANELS.TASKS);
  
      }}
    >
     <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full">Tasks</div> 
    </button>
    </div>

    </>
  );
}