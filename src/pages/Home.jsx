import { useState } from 'react'
import NowShowing from '../components/NowShowing'
import ComingSoon from '../components/ComingSoon'
import Slider from '../components/Slider'




function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider/>
      <NowShowing/>
      <ComingSoon/>
    </>
  )
}

export default Home
