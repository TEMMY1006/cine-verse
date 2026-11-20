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
import MovieCard from './MovieCard';
import Card from 'react-bootstrap/Card';




function Slider() {
  return (
    <Carousel>

      <Carousel.Item>
        <img src={Five} alt="Five Figurine" />
        
         <div className="slider-content">
           <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/bIVGZqbA_so?si=hFKa0AcLRMuv9-ko"}
    className="play"
  >
     <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>FIVE-FIGURINES</h1>
          <p>When a young man dies under mysterious circumstances, his grieving mother seeks revenge. As suspicion spreads among a close circle of friends, five mysterious figurines become connected to a dark story of betrayal, secrets and hidden truths.</p>
         <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/2LcKRO31C8A?si=1oWrJejH-T4b9F_V"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>

      </Carousel.Item>

      <Carousel.Item>
        <img src={Cat} alt="Cat" />
        <div className="slider-content">
           <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/jz8pLlPhSeY?si=zs3j6Qd4xc3xgFYB"}
    className="play"
  >
    <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>THE CAT IN THE HAT</h1>
          <p>Meet the mischievous Cat in the Hat as he takes two siblings on a magical adventure filled with imagination, unexpected surprises and hilarious chaos. His mission is to bring joy back into their lives, but things quickly get out of hand!</p>
                  <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/5E580wyHsrE?si=1M63_ABN44AUDDU6"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>

      </Carousel.Item>

      <Carousel.Item>
        <img src={Ebe} alt="EBE" />
        <div className="slider-content">
          <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/A7lyvgnDuDE?si=NB9c9pxfuCBXNByC"}
    className="play"
  >
   <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>EBENEZER</h1>
          <p>A wealthy but bitter businessman, Ebenezer Scrooge, is forced to reconsider his life when three mysterious spirits take him on a supernatural journey through his past, present and future. Will he change before it is too late?</p>
                 <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/yoLD0UuqMp4?si=rV1tf02Vx39lG-d5"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>

<Carousel.Item >
        <img src={Ghost} alt="" />
        <div className="slider-content">
           <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/UKaWzMf9Ybc?si=2IOrTsGauRwA2o-P"}
    className="play"
  >
   <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>GHOST SOLDIER</h1>
          <p>Henry Fitzgerald is a mysterious former soldier living a quiet life until a powerful corporation threatens his community. When his neighbours' homes and land are at risk, he must stand up and protect the people around him.</p>
                  <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/PBuIi9td4b4?si=nhZbuEiSZBb5yjya"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Godz} alt="" />
        <div className="slider-content">
           <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/C_Xfz5IMGDs?si=-ReNzCOhpYC9DaOf"}
    className="play"
  >
    <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>GODZILLA MINUS ZERO</h1>
          <p>Two years after Japan's devastating war, the country struggles to rebuild and restore hope. Just when peace seems possible, Godzilla returns with a terrifying new threat that puts humanity's future at risk.</p>
                  <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/gbcDS3gvSds?si=ile606nOzdHt6X2r"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <img src={How} alt="" />
        <div className="slider-content">
          <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/ORxw68y3lyw?si=-e6uCMQ9V1GbxTWm"}
    className="play"
  >
    <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>HOW TO ROB A BANK</h1>
          <p>A group of daring criminals turn their bank robberies into viral online spectacles. But their growing popularity attracts the attention of an FBI agent and a brilliant software expert, setting off a thrilling race to stop their next big operation.</p>
                <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/FDJKXt-Lw-Q?si=hfOnOK8Hqwxbl77x"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <img src={Ram} alt="" />
        <div className="slider-content">
          <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/1zip1rNaNYs?si=igq1tyelnupkTmtc"}
    className="play"
  >
   <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>RAMAYANA</h1>
          <p>Based on the legendary Indian epic, Ramayana follows Prince Rama, whose journey is shaped by duty, sacrifice and destiny. As he faces the powerful King Ravana, an extraordinary battle between good and evil unfolds.</p>
                  <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/5j77G2-8T6g?si=F77cUMpn98Vrok82"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <img src={Wild} alt="" />
        <div className="slider-content">
            <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/Haw_sznA5aQ?si=vnaMDX5S62_hr_i6"}
    className="play"
  >
   <span>▶</span>Play Trailer
  </button>
        </div>
                  <h1>WILD HORSE NINE</h1>
          <p>Set in 1973, two CIA agents, Chris and Lee, are sent from Santiago, Chile, to Easter Island on a special assignment. As they explore the island, old secrets, political tensions and unexpected friendships threaten to turn their journey into a complicated adventure.</p>
                  <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/qhY86C09WpE?si=0cZOz2o5Jgxz1fuB"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <img src={Wood} alt="" />
        <div className="slider-content">
           <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/dtr5JL1zkiM?si=c78vneM7N5mhQaVl"}
    className="play"
  >
    <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>WILDWOOD</h1>
          <p>When Prue McKeel's baby brother is kidnapped by a mysterious flock of crows, she sets out on a dangerous rescue mission into an enchanted forest. Joined by her classmate Curtis, she discovers a magical world filled with talking animals, unexpected allies and powerful enemies.</p>
         
                 <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/yo58dHmxyv4?si=F9xf3N6AkJuKrF6u"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <img src={You} alt="" />
        <div className="slider-content">
          <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/HvW_N5p1q44?si=Hdfyl2UPILtzVV0Z"}
    className="play"
  >
   <span>▶</span>Play Trailer
  </button>
        </div>
          <h1>YOU CAN SEE EVERYTHING</h1>
          <p>A documentary crew sets out to capture the life of Elizabeth Holmes shortly before her imprisonment. What begins as a simple filming project develops into a fascinating, multi-year look at ambition, controversy and the rise and fall of a famous technology entrepreneur.</p>
                  <div>
         <button
    onClick={() => window.location.href = "https://youtu.be/WdMG3ZIYVwE?si=OCLO2HVT-sUpcW9G"}
    className="watch-btn"
  >
    Watch Now
  </button>
        </div>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}
 



export default Slider;