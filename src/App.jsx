
import { NavigationBar } from './components/navbar'
import history from './assets/history-rabbit.png'
import lorong from './assets/lorong.jpeg';
import semak from './assets/semak.jpg';
import kandang from './assets/kandang.jpg';
import rabbitGarden from './assets/rabbitGarden.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function App() {

  const datas = [
    {
      id: 1,
      image: lorong,
      title: "Underground Passage",
      text: 'Rabbits natural habitat is generally underground tunnels in hilly areas or parks. They live in groups, both to defend against enemy attacks, to protect themselves, and to find food. They will make underground passages to store food, take shelter, reproduce, and live in groups. Underground passages are a safe location for rabbits.'
    },
    {
      id: 2,
      image: semak,
      title: "Shrubs",
      text: "Apart from underground passages, rabbit habitat also includes bushes and bush roots in grasslands. Not all rabbits live in the same bushland habitat. It all depends on the type of rabbit. However, in general, grass is the real rabbit habitat. Grass is also a staple food for rabbits and is highly nutritious. Grass can improve the rabbit's digestive system. Therefore, rabbits are called herbivorous animals."
    },
    {
      id: 3,
      image: kandang,
      title: "In the Cage",
      text: "If you want to keep rabbits, it's best to follow their natural habitat. However, if you have to put it in a cage, make sure it is a spacious cage for the rabbit to run around in. Also provide a litter box as a place to urinate and defecate. Make sure the cage is not covered so it can be exposed to morning sunlight. There are two types of cages that must be provided, namely cages to shelter from heat, rain and wind. Second, namely a cage in the form of a box for the rabbits to live in one by one."
    },
    {
      id: 4,
      image: rabbitGarden,
      title: "Rabbit Garden",
      text: "For rabbit keepers, providing a rabbit garden is necessary so that rabbits are able to interact with nature. This rabbit garden can be implemented in the back yard of the house as a playground for rabbits."
    }
  ];

  return (
    <>
      <NavigationBar/>

      {/* History Page */}
      <div className='' style={{backgroundColor: '#d9d9d9'}}>
        <section id='history'>
          <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="row" style={{padding: "80px 0"}}>
              <div className="col-md-6">
                <h1>Bunny</h1>
                <p style={{fontSize: 25}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div className="col-md-6 text-end">
                <img src={history} alt="Bunny Hunter" style={{width: '90%'}}/>
              </div>
            </div>
          </div>
          {/* <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="col d-flex" style={{ padding: '40px 0', gap: 20}}>
              <div>
                <h3>Bunny Hunter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div>
                <img src={history} alt="Bunny Hunter"/>
              </div>
            </div>
          </div> */}
        </section>
      </div>

      {/* Type Page */}
      <section id='type'>
        <h1>zsasda</h1>
      </section>

      {/* Habitat Page */}
      <section id='habitat'>
        <Carousel
          autoPlay
          interval={6000}
          infiniteLoop
          thumbWidth={120}
          showIndicators={false}
          showStatus={false}
          className="crsl"
        >
          {datas.map(slide => (
            <div key={slide.id}>
              <img src={slide.image} alt="" style={{width: '900px', height: '500px'}}/>
              <div className="overlay">
                <h2 className="overlay__title">{slide.title}</h2>
                <p className="overlay__text">{slide.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
        {/* <div className="row justify-content-center">
          <div className="px-wide">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={lorong} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Lorong Bawah Tanah</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, incidunt!</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={semak} className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={kandang} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Foods Page */}
      <section id='foods'>
        <h5>asdasd</h5>
      </section>
    </>
  )
}
