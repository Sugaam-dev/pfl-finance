import { useState } from 'react'
import About from './Components/pages/About/About'
// import Contact from './Components/pages/Contact/Contact'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Contact/> */}
    <About/>
    </>
  )
}

export default App
