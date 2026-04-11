import React, { useEffect, useState } from 'react'

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
      <div>
        {selectedTaskItem ? (
          <>
            <h2>Editing Task</h2>

            {/*  Input */}
            <input
              type="text"
              value={editTaskName}
              onChange={(e) => setEditTaskName(e.target.value)}
              className="border p-2 rounded w-full mb-2"
              placeholder="Edit task name"
            />

            {/* ✅ Textarea */}
            <textarea
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
              className="border p-2 rounded w-full mb-2"
              placeholder="Write notes..."
            />

          

            {/* ✅ Save Button */}
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
            >
              Save
            </button>
          </>
        ) : (
          <p>No task selected</p>
        )}
      </div>

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
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-2"
          >
            Delete Task
          </button>
        )}
      </div>
    </>
  );
}