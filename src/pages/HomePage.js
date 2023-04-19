import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div>
            <h1>From mouthwatering cuisine to mesmerizing viewpoints...</h1>
      <h1>- Uncover Hong Kong's hidden gems -</h1>
    
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="img/Choi Hung View.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Choi Hung Estate </h3>
          <p>Choi Hung Estate (Chinese: 彩虹邨; lit. 'rainbow estate') is a public housing estate in Ngau Chi Wan, Kowloon, Hong Kong.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
       <Carousel.Item interval={1000}>
       <img
         className="d-block w-100"
         src="/img/nite view TST.jpg"
         alt="Second slide"
       />
       <Carousel.Caption>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
  </Carousel>
  </div>
  )
};
export default HomePage;


