// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import WelcomeMessage from './welcomeMessage.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import UserCard from './UserCard.jsx'


function App() {
  // const [count, setCount] = useState(0)

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
    </div>
    <Footer />
    </>
  )
}

export default App
