import { useOutletContext } from "react-router-dom";
import { PANELS } from "./constants";

export default function Focused() {
  const { setTaskBar, setActivePanel, } = useOutletContext();

  return (
    <>
    <div className="w-[100vw] bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300  ">
    <button
      onClick={() => {
        setTaskBar(true);
        setActivePanel(PANELS.FOCUSED);
        
      }}
    >
     <div>Focused Tasks</div> 
    </button>
    </div>

   

    </>
  );
}