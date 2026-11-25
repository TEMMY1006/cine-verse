import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NowShowingPage from './pages/NowShowingPage'
import ComingSoonPage from './pages/ComingSoonPage'
import Header from './components/Header'
import Footer from './components/Footer'
import FAQs from './pages/FAQs'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cinemas from './pages/Cinemas'
import Showtimes from './pages/Showtimes'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Refreshment from './pages/Refreshment'
import BookingAssistance from './pages/BookingAssistance'
import CancellationPolicy from './pages/CancellationPolicy'
import HelpCenterinDetails from './pages/HelpCenterinDetails'


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
    <Route path='/about us' element={<AboutUs/>}/>
    <Route path='/contact us' element={<ContactUs/>}/>
    <Route path='/refreshment' element={<Refreshment/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/faqs' element={<FAQs/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/bookings' element={<Bookings/>}/>
    <Route path='/bookingassistance' element={<BookingAssistance/>}/>
    <Route path='/cancellationpolicy' element={<CancellationPolicy/>}/>
    <Route path='/helpcenterindetails' element={<HelpCenterinDetails/>}/>

    





   </Routes>
   <Footer/>
   
   
   
   </BrowserRouter>
  )
}

export default App