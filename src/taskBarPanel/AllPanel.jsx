import React from 'react'

export default function AllPanel({ selectedTaskItem, setSelectedTaskItem }) {
  return (
   <div>
      {selectedTaskItem ? (
        <>
          <h2>{selectedTaskItem.taskName}</h2>
          <p>Status: {selectedTaskItem.status ? "Done" : "Pending"}</p>
        </>
      ) : (
        <p>No task selecteddsa</p>
      )}
    </div>
  )
}
