import Carousel from 'react-bootstrap/Carousel';
import Five from '../assets/slider/Five.png'
import Cat from '../assets/slider/Cat.jpg'
import Ebe from '../assets/slider/Ebe.jpg'
import Ghost from '../assets/slider/Ghost.jpg'
import Godz from '../assets/slider/Godz.jpg'
import How from '../assets/slider/How.jpg'
import Ram from '../assets/slider/Ram.jpg'
import Wild from '../assets/slider/Wild.jpg'
import Wood from '../assets/slider/Wood.jpg'
import You from '../assets/slider/You.jpg'





function Slider() {
  return (
    <Carousel>

      <Carousel.Item>
        <img src={Five} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Cat} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Ebe} alt="" />
      </Carousel.Item>

<Carousel.Item>
        <img src={Ghost} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Godz} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={How} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Ram} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Wild} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Wood} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={You} alt="" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;