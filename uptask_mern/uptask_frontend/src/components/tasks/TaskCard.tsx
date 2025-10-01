import { Task } from '@/types/index'
import React from 'react'
type TaskCardProps = {
    task: Task
}

export default function TaskCard({task} :TaskCardProps) {
    console.log(task,"task from task card")
  return (
    <>
    <li className='p-5 bg-white border border-slate-300 flex justify-between gap-3'>
        <div className='min-w-0 flex flex-col gap-y-4'>
            <button type="button" className='text-xl font-bold text-slate-600 text-left'>{task.name}</button>

        </div>
        <div>

        </div>
    </li>
     
    </>
  )
}
