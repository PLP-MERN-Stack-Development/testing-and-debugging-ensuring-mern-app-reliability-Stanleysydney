import React, { useState } from 'react';
import api from '../services/api';

export default function BugForm({onCreated}){
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [error,setError]=useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try{
      const res = await api.post('/bugs',{title,description});
      onCreated(res.data);
      setTitle(''); setDescription('');
    }catch(err){ setError(err.response?.data?.error || 'Error'); }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{color:'red'}}>{error}</p>}
      <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required/>
      <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <button type="submit">Add Bug</button>
    </form>
  );
}
