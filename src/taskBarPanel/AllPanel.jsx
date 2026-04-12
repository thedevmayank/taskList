import React, { useEffect, useState } from 'react'
import focusTaskImage from "../assets/One_task_at_a_time_doodle-removebg-preview.png"

export default function AllPanel({ 
  selectedTaskItem, 
  setSelectedTaskItem,
  oldtaskData, 
  setOldTaskData,
  setTaskBar
}) {

  const [editTaskName, setEditTaskName] = useState("");
  const [editNote, setEditNote] = useState("");


  useEffect(() => {
    if (selectedTaskItem) {
      setEditTaskName(selectedTaskItem.taskName || "");
      setEditNote(selectedTaskItem.note || "");
    }
  }, [selectedTaskItem]);

  // ✅ Save changes
  const handleSave = () => {
    setTaskBar(false);
    const updatedTasks = oldtaskData.map((task) =>
      task.id === selectedTaskItem.id
        ? { ...task, taskName: editTaskName, note: editNote }
        : task
    );

    setOldTaskData(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

 
};

  return (
    <>
    <main className=' max-w-full   flex flex-col border flex-wrap gap-29 md:gap-48  justify-between'>
      <div className=' flex flex-col gap-3 outline-none'>
        {selectedTaskItem ? (
          <>
          <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
     

            {/*  Input */}
            <textarea
              
              value={editTaskName}
              onChange={(e) => setEditTaskName(e.target.value)}
              height={200}
              className=" p-2 rounded w-full mb-2 h-30 border border-gray-300 outline-none resize-none bg-gray-100 "
              placeholder="Edit task name"
            />
        </div>
         
            {/* Textarea */}  
            <textarea
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
              className=" p-2 rounded w-full mb-2 h-30 border border-gray-300 outline-none  resize-none bg-gray-100 "
              placeholder="Write notes..."
            />

          </div>

            {/* ✅ Save Button */}
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-sky-500  w-full  text-white rounded  hover:bg-green-400 mr-2"
            >
              Save
            </button>
            <div>
        {selectedTaskItem && (
          <button
            onClick={() => {
              {const updated = oldtaskData.filter(
                (t) => t.id !== selectedTaskItem.id
              );

              setOldTaskData(updated);
              localStorage.setItem("tasks", JSON.stringify(updated));

              setSelectedTaskItem(null);}
              setTaskBar(false);
            }}
            className="px-4 py-2 bg-red-500 text-white w-full rounded hover:bg-red-600 mt-2"
          >
            Delete Task
          </button>
        )}
      </div>
          </>
        ) : (
          <p>No task selected</p>
        )}
      </div>
     <p className='uppercase text-center text-sm text-gray-400 font-semibold'>🧠 Clear mind. Clear tasks.</p>
      
      </main>
    </>
  );
}