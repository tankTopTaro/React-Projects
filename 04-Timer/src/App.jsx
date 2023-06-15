import Timepicker from "./components/Timepicker"

function App() {

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <Timepicker /> <span className="text-4xl px-2">:</span> <Timepicker /> <span className="text-4xl px-2">:</span> <Timepicker />
      </div>
    </>
  )
}

export default App
