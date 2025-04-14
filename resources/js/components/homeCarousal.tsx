import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HomeCarousal() {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true, // this adds the prev/next buttons
    navText: [
      '<span class="custom-nav prev">← PREV</span>',
      '<span class="custom-nav next">NEXT →</span>',
    ],
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div>
        <img src="/images/banner-img.png" alt="Image 1" />
      </div>
      <div>
        <img src="/images/banner-img.png" alt="Image 2" />
      </div>
      <div>
        <img src="/images/banner-img.png" alt="Image 3" />
      </div>
    </OwlCarousel>
  );
}
