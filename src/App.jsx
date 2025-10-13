import { useState } from 'react'
import Contact from './Components/pages/Contact/Contact'
import ServicePage from './Components/pages/Services/Service-page'
import Footer from './Components/layout/Footer/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Contact/> */}
    <ServicePage/>
    {/* <Footer/> */}

    </>
  )
}

export default App
