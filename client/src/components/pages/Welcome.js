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
          <div classNsme="row container">
            <div className="wrapper-banner center">
              <div className="logo-me">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
              </div>
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <h2>Monsieur Inked</h2>
                <h5>A distinguished Fashion Consultant & Personal Stylist</h5>
                <h5>
                  <a href="mailto:pedro@gmail.com">Contact him</a>
                </h5>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <div className="col m4">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div classNsme="img-me">
                  <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
                </div>
              </ScrollAnimation>
            </div>
            <div className="col m8">
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
        <div className="section black">
          <h4 className="center">My Portfolio</h4>
          <br></br>
          <div className="container">
            <div classNsme="row">
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
