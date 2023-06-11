import React from 'react'

const TodoCard = ({title, note}) => {
    return (
        <div className="flex items-center">
            <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="animate-spin-slow absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                <div className="relative rounded-[15px] bg-white p-6">
                    <div className="space-y-4">
                        <p className="text-2xl font-semibold text-slate-800">{title}</p>
                        <p className="font-md text-slate-500">{note}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoCard
