import React, { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

const Timepicker = ({ time, count, setCount }) => {
    const formattedTime = parseInt(count).toString().padStart(2, '0')

    const increaseTime = (maxTime) => {
        let t = count + 1
        if (t >= maxTime.length) {
          t = 0
        }
        setCount(t)
    }

    const decreaseTime = (maxTime) => {
        let t = count - 1
        if (t < 0) {
            t = maxTime.slice(-1)
        }
        setCount(t)
    }

    return (
        <div className="flex-col w-20 h-20">
            <div className="flex items-center justify-center">
                <button 
                    type='button' 
                    onClick={() => increaseTime(time)}>
                    <ChevronUpIcon className="h-6 w-6 block"/>
                </button>
            </div>
            <div className="border-solid border-black border-2 text-4xl text-center flex items-center justify-center">
                {formattedTime}
            </div>
            <div className="flex items-center justify-center">
                <button 
                    onClick={() => decreaseTime(time)}
                    type='button' 
                    >
                    <ChevronDownIcon className="h-6 w-6 block"/>
                </button>
            </div>
        </div>
    )
}

export default Timepicker

