"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [maintask, setmaintask] = useState([])
    const submithandler = (e)=>{
        e.preventDefault();

        setmaintask([...maintask,{title,desc}])
        settitle("")
        setdesc("")

        console.log(maintask);
        
    }
    const deletehandler=(i)=>{
        let copytask = [...maintask]
        copytask.splice(i,1);
        setmaintask(copytask)
    }
    let render = <h2 className='text-2xl'>No task Available</h2>

   if(maintask.length>0){
    render = maintask.map((t,i)=>{
        return(
            <li key={i} className='flex items-center justify-between'>
                <div className='flex items-center justify-between mb-5 w-2/3'>
                <h5 className='text-2xl font-bold p-4'>{t.title}</h5>
                <h6 className='text-xl font-semibold p-4'>{t.desc}</h6>
            </div>
            <button onClick={(i)=>{
                deletehandler(i)
            }}
            className='bg-red-600 text-white border-2 rounded px-4 py-2
            text-2xl font-bold  border-black hover:text-black'>Delete</button>
            </li>
        );
    })
   }
  return (
    <>
    <h1 className='bg-amber-50 text-orange-950 text-5xl font-bold 
    p-5 text-center border-b-amber-950 border-2'>My To-Do list</h1>
    <form className='bg-cyan-100' onSubmit={(e)=>{
        submithandler(e)
    }}>
        <input type='text' className='text-2xl border-zinc-800 
        border-4 m-8 px-4 py-2' placeholder='Enter Task' 
        value ={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}/>
        <input type='text' className='text-2xl border-zinc-800 
        border-4 m-8 px-4 py-2' placeholder='Enter Description' 
        value={desc}
        onChange={(e)=>{
        setdesc(e.target.value)
        }}/>
        <button className='bg-white text-black border-2 rounded px-4 py-2 
        text-2xl m-5 font-bold  border-black hover:bg-amber-50'>Add Task</button>
    </form>
    <hr className='border border-black'/>
    <div className='p-8 bg-slate-300'>
        <ul>
            {render}
        </ul>
    </div>
    </>
    
  )
}

export default page