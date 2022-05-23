import React, { useState } from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const SlideWrapper = styled.div`
  width: 300%;
  display: flex;
`;

const Slide = styled.div`
  width: 100%;
  position: relative;
  transform: ${props => props.swipe || 'translateX(0)'};
  transition: 1s;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 4rem;
  font-weight: 900;
  text-shadow: 4px 4px 8px #2f2f2f;
`;

const IndicatorWrapper = styled.div`
  width: 80px;
  height: 1rem;
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.background || 'rgba(255, 255, 255, 0.5)'};
`;

const ButtonWrapper = styled.div`
  width: 92%;
  margin-left: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

const CarouselBtn = styled.div`
  cursor: pointer;
`;

function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id : 1,
      txt : 'Thät’s Dazs',
      url : '../assets/images/main/main_banner_01.jpg'
    },
    {
      id : 2,
      txt : 'Order online from a Shop',
      url : '../assets/images/main/main_banner_02.jpeg'
    },
    {
      id : 3,
      txt : 'Find Your Flavor',
      url : '../assets/images/main/main_banner_03.jpg'
    }
  ];

  const handleSwipe = () => {
    setCurrentIndex(currentIndex < slides.length -1 ? prev => prev + 1 : 0);
    // console.log(currentIndex);
    // console.log(slides.length);
  }

    return ( 
      <Banner onClick={handleSwipe}>
        <SlideWrapper>
          {
            slides.map(slide => (
              <Slide key={slide.id} swipe={`translateX(${-100 * currentIndex}%)`}>
                <Image src={slide.url} alt='banner' />
                <Text>{slide.txt}</Text>
              </Slide>
            ))
          }
        </SlideWrapper>
        <IndicatorWrapper>
          {
            slides.map(slide => (
              currentIndex + 1 === slide.id
              ? <Indicator background='rgba(0, 0, 0, 0.7)' key={slide.id} />
              : <Indicator key={slide.id} />
            ))
          }
        </IndicatorWrapper>
      </Banner>
     );
}

export default Carousel;