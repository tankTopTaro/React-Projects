import { useEffect, useState } from "react"
import Timepicker from "./components/Timepicker"

function App() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const time = (t) => {
    let c = [...Array(t).keys()]
    return c
  }

  const hours = time(24)
  const minutes = time(60)
  const seconds = time(60)

  useEffect(() => {
    if (hour === 0 && minute === 0) {
      setSecond(1)
    } 
  }, [])

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <Timepicker time={hours} count={hour} setCount={setHour} /> 
        <span className="text-4xl px-2">:</span> 
        <Timepicker time={minutes} count={minute} setCount={setMinute} /> 
        <span className="text-4xl px-2">:</span> 
        <Timepicker time={seconds} count={second} setCount={setSecond} />
      </div>
    </>
  )
}

export default App
