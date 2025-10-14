import { useState } from 'react'
import Contact from './Components/pages/Contact/Contact'
import MapEmbed from './Components/pages/Contact/MapEmbed'
import Header from './Components/layout/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './Components/layout/RootLayout/RootLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<div>Home Page</div>} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
