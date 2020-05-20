import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding: '0px',
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
