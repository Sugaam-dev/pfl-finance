import { useState } from 'react'
import Contact from './Components/pages/Contact/Contact'



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './Components/layout/RootLayout/RootLayout'
import ServicePage from './Components/pages/Services/Service-page'
import About from './Components/pages/About/About'






function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<div>Home Page</div>} />
            <Route path='contact' element={<Contact />} />
               <Route path='services' element={<ServicePage/>} />
                     <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
