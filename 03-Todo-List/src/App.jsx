import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import TodoCard from "./components/TodoCard"

function App() {
  const [todoCards, setTodoCards] = useState([])

  // Fetch all ToDo Cards from the database

  useEffect(() => {
    async function getCards() {
      const response = await fetch(`http://localhost:5050/todo/`)

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`
        window.alert(message)
        return
      }

      const cards = await response.json()
      setTodoCards(cards)
    }

    getCards()

    return
  }, [todoCards.length])

  return (
    <>
      <Navbar todoCards={todoCards} setTodoCards={setTodoCards}/>
      <div className="h-screen bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex flex-col sm:flex-row py-4 px-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {todoCards.map((todoCard) => (
              <TodoCard key={todoCard.id} title={todoCard.title} note={todoCard.note}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
