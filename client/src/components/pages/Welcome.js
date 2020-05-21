import React from 'react';
import '../css/Welcome.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ScrollAnimation from 'react-animate-on-scroll';
import Review from '../utils/Review';
import Slick from '../utils/Slick';
import Typing from 'react-typing-animation';
import Services from '../utils/Services';
class Welcome extends React.Component {
  componentDidMount() {
    new Audio(
      'https://res.cloudinary.com/monsieur-inked/video/upload/v1590087962/ON_DECK__The_Geek_x_VRV_eshsfd.mp3'
    ).play();

    const elemSlide = document.querySelectorAll('.slider');
    M.Slider.init(elemSlide, {});
  }

  render() {
    return (
      <div>
        <div className="section black">
          <div className="row container">
            <div className="wrapper-banner center">
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                <div className="logo-me">
                  <img
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    alt="logo"
                  />
                </div>
                <Typing ms={1000} className="monsieur" speed={100}>
                  <Typing.Delay ms={1200} />
                  <span>Monsieur Inked</span>
                </Typing>
                <h5>A Distinguished Fashion Stylist & Personal Shopper</h5>
                <h5 style={{ marginTop: 30 }}>
                  <a className="btn-contact" href="mailto:pedro@gmail.com">
                    Contact him
                  </a>
                </h5>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div style={{ padding: 60 }} className="section white">
          <div className="row container">
            <div className="col m4 s12">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <div className="img-me">
                  <img
                    src={process.env.PUBLIC_URL + '/images/monsieur-inked.jpg'}
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
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section black portfolio">
          <h4 className="center">My Portfolio</h4>
          <hr></hr>
          <div style={{ paddingBottom: 30 }} className="container">
            <div className="row">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <Slick />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section white">
          <div className="container">
            <div className="row">
              <Services />
            </div>
          </div>
        </div>
        <div className="section black portfolio">
          <div className="container">
            <div className="row">
              <Review />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
