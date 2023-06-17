import { useEffect, useState } from "react"
import Timepicker from "./components/Timepicker"

function App() {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [history, setHistory] = useState([])

  const time = (t) => {
    let c = [...Array(t).keys()]
    return c
  }

  const hours = time(24)
  const minutes = time(60)
  const seconds = time(60)

  useEffect(() => {
    let intervalId = null

    if (isRunning) {
      intervalId = setInterval(() => {
        if (hour === 0 && minute === 0 && second === 0) {
          setHour(0)
          setMinute(0)
          setSecond(0)
          clearInterval(intervalId)
          setIsRunning(false)
        } else {
          if (second > 0) {
            setSecond((prev) => prev - 1)
          } else {
            if (minute > 0) {
              setSecond(59)
              setMinute((prev) => prev - 1)
            } else {
              setSecond(59)
              setMinute(59)
              setHour((prev) => prev - 1)
            }
          }
        }
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, hour, minute, second])

  const handleClick = () => {
    const timeString = `${hour} : ${minute} : ${second}`
    setHistory(prev => [...prev, timeString])
    setIsRunning((prev) => !prev)
  }

  const handleReset = () => {
    setHistory([])
    setIsRunning(false)
    setHour(0)
    setMinute(0)
    setSecond(0)
  }

  return (
    <div className="flex-col h-screen items-center justify-center">
      <div className="text-center text-4xl mt-10">Timer</div>
      <div className="flex items-center justify-center w-screen mt-10">
        <Timepicker time={hours} count={hour} setCount={setHour} /> 
        <span className="text-4xl px-2">:</span> 
        <Timepicker time={minutes} count={minute} setCount={setMinute} /> 
        <span className="text-4xl px-2">:</span> 
        <Timepicker time={seconds} count={second} setCount={setSecond} />
      </div>
      <div className="flex items-center justify-center mt-5">
        {<button
          onClick={handleClick}
          disabled={hour === 0 && minute === 0 && second === 0}
          className={`border-solid border-2 w-80 border-black py-3 px-5 text-2xl ${isRunning ? 'bg-yellow-300' : 'bg-green-300'}`}>
          {isRunning ? 'Pause' : 'Start'}
        </button>}
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={handleReset}
          className="border-solid border-2 w-80 border-black py-3 px-5 text-2xl bg-red-300"
        >
          Reset
        </button>
      </div>
      <div className="flex text-center items-center justify-center mt-5">
        <div>
          <p className="text-2xl">History</p>
            <ul className="text-sm">
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default App
