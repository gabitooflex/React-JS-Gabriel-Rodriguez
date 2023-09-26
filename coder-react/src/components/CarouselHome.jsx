import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const items = [
  {
    src: 'https://f.fcdn.app/imgs/bba88a/www.zooko.com.uy/zoo/4978/webp/recursos/2207/1920x500/banner-campus-00s-1920x500-1.jpg',
    key: 1,
  },
  {
    src: 'https://f.fcdn.app/imgs/2870d1/www.zooko.com.uy/zoo/6672/webp/recursos/2242/1920x500/banner-1990x500.jpg',
    key: 2,
  },
  {
    src: 'https://f.fcdn.app/imgs/d0cd22/www.zooko.com.uy/zoo/06fa/webp/recursos/2304/1920x500/banner-vans-plaza.jpg ',
    key: 3,
  },
  {
    src: 'https://f.fcdn.app/imgs/bdb625/www.zooko.com.uy/zoo/66cc/webp/recursos/2129/1920x500/banner-web.jpg',
    key: 4,
  },
    
];

function CarouselHome(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselHome;