import React from 'react';
import BugItem from './BugItem';

export default function BugList({bugs,onUpdate,onDelete}){
  return (
    <ul>
      {bugs.map(bug => <BugItem key={bug._id} bug={bug} onUpdate={onUpdate} onDelete={onDelete} />)}
    </ul>
  );
}
