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
  // const [count, setCount] = useState(0)
const [todos, setTodos] = useState([
  { id: 1, task: "Learn React", priority: "high", completed: false },
  { id: 2, task: "Touch Grass", priority: "low", completed: false },
  { id: 3, task: "Learn React", priority: "high", completed: false }
])
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
      
      <ol>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ol>
      {/* <Counter />  */}
    </div>
    <Footer />
    </>
  )
}

export default App
