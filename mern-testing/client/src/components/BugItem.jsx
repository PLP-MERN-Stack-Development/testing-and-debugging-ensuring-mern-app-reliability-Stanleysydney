import React from 'react';

export default function BugItem({bug,onUpdate,onDelete}){
  return (
    <li>
      <h3>{bug.title} ({bug.status})</h3>
      <p>{bug.description}</p>
      <button onClick={()=>onUpdate(bug._id,{status:'in-progress'})}>Mark In-Progress</button>
      <button onClick={()=>onUpdate(bug._id,{status:'resolved'})}>Mark Resolved</button>
      <button onClick={()=>onDelete(bug._id)}>Delete</button>
    </li>
  );
}
