import React from 'react';
import '../css/Welcome.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ScrollAnimation from 'react-animate-on-scroll';
import Review from '../utils/Review';
import Slick from '../utils/Slick';

class Welcome extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, { height: '200px' });
    const elemSlide = document.querySelectorAll('.slider');
    M.Slider.init(elemSlide, {});
  }

  render() {
    return (
      <div>
        <div className="section black">
          <div className="row container">
            <div className="wrapper-banner center">
              <div className="logo-me">
                <img
                  src={process.env.PUBLIC_URL + '/images/logo.png'}
                  alt="logo"
                />
              </div>
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <h2>Monsieur Inked</h2>
                <h5>A distinguished Fashion Consultant & Personal Stylist</h5>
                <h5>
                  <a style={{ color: '#d4af37' }} href="mailto:pedro@gmail.com">
                    Contact him
                  </a>
                </h5>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <div className="col m4 s12">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="img-me">
                  <img
                    src={process.env.PUBLIC_URL + '/images/me.jpg'}
                    alt="pedro"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="col m8 s12">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <h4 className="black-text header">Who is Monsieur Inked?</h4>
                <p className="black-text text-darken-3 lighten-3">
                  Parallax is an effect where the background content or image in
                  this case, is moved at a different speed than the foreground
                  content while scrolling.Parallax is an effect where the
                  background content or image in this case, is moved at a
                  different speed than the foreground content while
                  scrolling.Parallax is an effect where the background content
                  or image in this case, is moved at a different speed than the
                  foreground content while scrolling.
                </p>
                <div className="row  black-text text-darken-3 lighten-3">
                  <div className="col m4">
                    <h6>Personal Shopper</h6>
                  </div>
                  <div className="col m4">
                    <h6>Image Consulting</h6>
                  </div>
                  <div className="col m4">
                    <h6>Wardrobe Detox</h6>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section black portfolio">
          <h4 className="center">My Portfolio</h4>
          <hr></hr>
          <div className="container">
            <div className="row">
              <Slick />
              <Review />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
