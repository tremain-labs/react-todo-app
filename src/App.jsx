// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import WelcomeMessage from './welcomeMessage.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import UserCard from './UserCard.jsx'
import Todo from './todo.jsx'
// import Counter from './count.jsx'
import { useState } from "react";

function App() {
  // the todo state 
const [todos, setTodos] = useState([
  { id: 1, task: "Learn React", priority: "high", completed: false },
  { id: 2, task: "Touch Grass", priority: "low", completed: false },
  { id: 3, task: "Learn React", priority: "high", completed: false },
  { id: 4, task: "Eat", priority: "high", completed: false },
  { id: 5, task: "Sleep", priority: "high", completed: false },
  { id: 6, task: "Code", priority: "high", completed: false }
])

// filtering the completed tasks
const completedTasks = todos.filter(todo => todo.completed)

function deleteTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}
function toggleTodo(id) {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
      }


  return (
    <>
    <Header />
    <div>
      
      <h1>Hello, Daniel's React App!</h1>
      <p>React is ready, let's go!</p>
      <p>let's get started!</p>
      <WelcomeMessage />
      <UserCard name="Daniel" role="Developer" />
      <UserCard name="Heather" role="Loving Wife" />
      {todos.length === 0 ? (
        <p>No tasks at this time. Try adding some!</p>
      ) : (
      <ol>

        {todos.map(todo => (
          <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        ))}
      </ol>)}
      {todos.every(todo => todo.completed) && <p>All tasks completed!</p>}
      
      {/* <Counter />  */}
    </div>
    <Footer />
    </>
  )
}

export default App
