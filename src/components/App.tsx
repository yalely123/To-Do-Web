import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  function handleAddTodo(e) {
    e.preventDefault()
    setTodos((prev) => [...prev, {
      id: prev.length + 1,
      title: input,
      complete: false
  }])
    setInput("")
  }
  function handleDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  function handleCheck(id) {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {...todo, complete: !todo.complete} // bring all value in previous todo variable
      }
      return todo
    }))
  }
  function deleteAllCompleteTasks() {
    setTodos((prev) => prev.filter((todo) => !todo.complete))
  }

  function deleteAllTasks() {
    setTodos([])
  }
  // const todos = [
  //   {
  //     id: 1,
  //     title: "Learn React JS basics",
  //     complete: true
  //   },
  //   {
  //     id: 2,
  //     title: "Practice React JS",
  //     complete: false
  //   },
  //   {
  //     id: 3,
  //     title: "Learn Redux",
  //     complete: false
  //   },
  //   {
  //     id: 4,
  //     title: "Code portfolio in React",
  //     complete: false
  //   },
  //   {
  //     id: 5,
  //     title: "Learn React Native",
  //     complete: false
  //   }

  return (
    <div className="w-screen justify-center items-center flex">    
      <div className="flex flex-col w-[768px]">
        <div className="">
          <div className="text-center text-3xl font-semibold">To Do Input</div>
          <div className="flex flex-col border-2 px-4 py-2 m-4">
            <input className="border-2 my-2 h-12" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="btn my-2" type="button" onClick={handleAddTodo}>Add New Task</button>
          </div>
        </div>

        <div className="">
          <div className = "text-center text-3xl font-semibold my-4">To Do List</div>
          <div className="flex flex-row mb-9">
            <button className="btn mr-4" type="button">All</button>
            <button className="btn mx-4" type="button">Done</button>
            <button className="btn ml-4" type="button">TODO</button>
          </div>
          <div className="">
            {todos.map((todo) => {
              return (
                <div key={todo.id} className="flex justify-between border-2 my-2 p-2">
                  <span>{todo.title}</span>
                  <div>
                    <input className="mx-1" type="checkbox" checked={todo.complete} onChange= {() => handleCheck(todo.id)}/>
                    <button className="mx-1" type="button" onClick={()=> handleDelete(todo.id)}>X</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-row my-4">
            <button className="w-full h-12 border-2 border-red-700 bg-red-700 p-3 text-white rounded-md mx-4 hover:bg-red-950" type="button" onClick= {deleteAllCompleteTasks}>Delete Done Task</button>
            <button className="w-full h-12 border-2 border-red-700 bg-red-700 p-3 text-white rounded-md mx-4 hover:bg-red-950" type="button" onClick={deleteAllTasks}>Delete All Task</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
