import { useState } from 'react'
import  Header  from './components/Header'
import  Footer  from './components/Footer'
import Slider from './components/slider'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App
