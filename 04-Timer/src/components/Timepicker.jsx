import React from 'react'
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

const Timepicker = () => {
    return (
        <div className="flex-col w-20 h-20">
            <div className="flex items-center justify-center"><ChevronUpIcon className="h-6 w-6 block"/></div>
            <div className="border-solid border-black border-2 text-4xl text-center flex items-center justify-center">
                00
            </div>
            <div className="flex items-center justify-center"><ChevronDownIcon className="h-6 w-6 block"/></div>
        </div>
    )
}

export default Timepicker
