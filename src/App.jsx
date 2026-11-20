import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NowShowingPage from './pages/NowShowingPage'
import ComingSoonPage from './pages/ComingSoonPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Cinemas from './pages/Cinemas'
import Showtimes from './pages/Showtimes'

const App = () => {
  return (
   <BrowserRouter>
   <Header/>

   
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/nowshowing' element={<NowShowingPage/>}/>
    <Route path='/comingsoon' element={<ComingSoonPage/>}/>
    <Route path='/cinemas' element={<Cinemas/>}/>
    <Route path='/showtimes' element={<Showtimes/>}/>





   </Routes>
   <Footer/>
   
   
   
   </BrowserRouter>
  )
}

export default App