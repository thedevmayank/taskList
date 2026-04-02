import { useOutletContext } from "react-router-dom";
import { PANELS } from "./constants";

export default function Planned() {
  const { setTaskBar, setActivePanel } = useOutletContext();

  return (
    <button
      onClick={() => {
        setTaskBar(true);
        setActivePanel(PANELS.PLANNED);
      }}
    >
      Planned Tasks
    </button>
  );
}