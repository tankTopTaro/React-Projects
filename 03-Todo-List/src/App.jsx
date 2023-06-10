import { useState } from "react"
import Navbar from "./components/Navbar"
import TodoCard from "./components/TodoCard"

function App() {
  const [todoCards, setTodoCards] = useState([])

  return (
    <>
      <Navbar todoCards={todoCards} setTodoCards={setTodoCards}/>
      <div className="h-screen bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex flex-col sm:flex-row py-4 px-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {todoCards.map((todoCard) => (
              <TodoCard key={todoCard.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
