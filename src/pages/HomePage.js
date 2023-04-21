import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div>
            <h1>From mouthwatering cuisine to mesmerizing viewpoints...</h1>
      <h1>- Uncover Hong Kong's hidden gems -</h1>
    
    <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="/img/Choi Hung View.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Choi Hung Estate </h3>
          <p>Choi Hung Estate (Chinese: 彩虹邨; lit. 'rainbow estate') is a public housing estate in Ngau Chi Wan, Kowloon, Hong Kong.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
       <Carousel.Item interval={3000}>
       <img
         className="d-block w-100"
         src="/img/nite view TST.jpg"
         alt="Second slide"
       />
       <Carousel.Caption>
         <h3>Victoria Harbour</h3>
         <p>The harbour is a major tourist attraction of Hong Kong. Lying in the middle of the territory's dense urban region, the harbour is the site of annual fireworks displays and its promenades are used as gathering places for residents and also tourists.</p>
       </Carousel.Caption>
     </Carousel.Item>
     
  </Carousel>
  </div>
  )
};
export default HomePage;


