import React from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

const TodoCard = (props) => {
    const editAction = (action) => {
        if (action === 'edit') {
            console.log("EDIT")
        }
    }
    
    return (
        <div className="flex items-center ">
            <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="animate-spin-slow absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                <div className="relative rounded-[15px] bg-[#F5EFE7] p-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-semibold text-slate-800">{props.todoCard.title}</p>
                            {props.isEdit && (<div className="inline-flex gap-2">
                                <button
                                    onClick={() => editAction('edit')}
                                    className='inline-flex items-center rounded-md bg-orange-700 px-2 py-1 text-base font-medium text-white hover:bg-gray-600 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                                    <PencilIcon className='block h-5 w-5' />
                                </button>
                                <button 
                                    onClick={() => {props.deleteCard(props.todoCard._id)}}
                                    className='inline-flex items-center rounded-md bg-orange-700 px-2 py-1 text-base font-medium text-white hover:bg-gray-600 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                                    <TrashIcon className='block h-5 w-5' />
                                </button>
                            </div>)}
                        </div>
                        <p className="font-md text-slate-500">{props.todoCard.note}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoCard
