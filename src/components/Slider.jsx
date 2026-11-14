import Carousel from 'react-bootstrap/Carousel';
import Gods from '../assets/slider/Gods.jpg'
import Jumong from '../assets/slider/Jumong.jpg'
import Rush from '../assets/slider/Rush.jpg'
import Thundermans from '../assets/slider/Thundermans.jpg'
import Danger from '../assets/slider/Danger.jpg'





function Slider() {
  return (
    <Carousel>

      <Carousel.Item>
        <img src={Gods} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Jumong} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Rush} alt="" />
      </Carousel.Item>

<Carousel.Item>
        <img src={Thundermans} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Danger} alt="" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;