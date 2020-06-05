import React from 'react';
import '../css/Welcome.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ScrollAnimation from 'react-animate-on-scroll';
import Review from '../utils/Review';
import Slick from '../utils/Slick';
import Typing from 'react-typing-animation';
import Services from '../utils/Services';
import ReactAudioPlayer from 'react-audio-player';

class Welcome extends React.Component {
  componentDidMount() {
    const elemSlide = document.querySelectorAll('.slider');
    M.Slider.init(elemSlide, {});
  }

  render() {
    return (
      <div>
        <ReactAudioPlayer
          src={process.env.PUBLIC_URL + '/images/sound.mp3'}
          autoPlay
        />
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
                  <a
                    className="btn-contact"
                    href="mailto:monsieurinkedstyling@gmail.com"
                  >
                    Contact him
                  </a>
                </h5>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section white who">
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
                <h4 className="black-text header who-title">
                  Who is Monsieur Inked?
                </h4>
                <p className="black-text text-darken-3 lighten-3">
                  To have your dream unfold in front of your eyes is the
                  greatest gift we can experience in this life. For Monsieur
                  Inked, that dream is actualised every day when he connects
                  with his personal clients who have entrusted him with helping
                  them cultivate their own signature style. From everyday life
                  to red carpet moments, he revels in the opportunity to witness
                  his clients connecting to their soul, the resting place of
                  their confidence, and express that beauty to the world.
                </p>
                <p className="black-text text-darken-3 lighten-3">
                  As a young man growing up in Lisbon, Portugal, he was
                  surrounded by beauty. His mother’s elegance and impeccable
                  taste gave his young heart the craving to see beauty in
                  everything around him. From there, he began forming his own
                  pallet for fashion and interior design. This desire led him to
                  further his experience in the homeland of beauty itself,
                  Paris, France.
                </p>
                <p className="black-text text-darken-3 lighten-3">
                  His time in Paris refined his own signature style and opened
                  up the doors for him to begin helping others form their own as
                  he embraced his role as a personal shopper and stylist at
                  Galeries Lafayette, and later at the iconic Tiffany & Co.
                </p>
                <p className="black-text text-darken-3 lighten-3">
                  Since 2010, he has called America his home. From Atlanta, to
                  New Orleans and finally Miami Beach. With Louis Vuitton as his
                  home, he has the incredible honor of revealing his potential
                  everyday by guiding his clients to explore, develop, innovate,
                  and create a style that is all their own.
                </p>
                <p className="signature black-text text-darken-3 lighten-3 right">
                  Monsieur Inked
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="section black portfolio">
          <h4 className="center">Gallery</h4>
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
