import { useState } from 'react'
import Contact from './Components/pages/Contact/Contact'



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './Components/layout/RootLayout/RootLayout'






function App() {


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
