import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function CarouselExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imgUrl={'https://cdn.marvel.com/content/2x/005smp_com_mas_mob_03_3.jpg'}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imgUrl={'https://disneyartonmain.com/cdn/shop/products/batman-detective-1000.jpg?v=1586036281&width=1500'}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imgUrl={'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2009/12/17/1261051924334/Scene-from-Avatar-2009-001.jpg?width=465&dpr=1&s=none&crop=none'}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;