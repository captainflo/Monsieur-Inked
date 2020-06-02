import React from 'react';
import '../css/Review.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Review extends React.Component {
  componentDidMount() {
    // SideBar
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, { padding: 0 });
  }
  render() {
    return (
      <div className="Review">
        <div className="container center">
          <div className="row">
            <h3>Reviews</h3>
            <hr></hr>
          </div>
          <div className="carousel">
            <div className="carousel-item">
              <p>Sheila Ruiz</p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i>Monsieur Inked is such an
                inspiration! When it comes to styling he is very knowledgeable
                on what works best for you and the looks you are trying to
                achieve. He is professional and makes you feel comfortable
                throughout the whole process! Thank you for the beautiful
                confidence you’ve helped me radiate! A new life long friend and
                go to stylist!
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Atlanta</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>
            <div className="carousel-item">
              <p>Steve Henry </p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i> Monsieur Inked changed the
                way I dress and feel in a weekend. One of the best choices I’ve
                made for myself - ever!
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Houston</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>{' '}
            <div className="carousel-item">
              <p>Katya Prekrasnaya</p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i> Monsieur Inked has a great
                talent for integrating who you are as a person with what you
                want to say through your appearance. A master at work giving you
                a 110% of confidence to take over the world.
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Atlanta</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>
            <div className="carousel-item">
              <p>Russell Purser </p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i> I reached out to Monsieur
                Inked to assist me on two different levels. First as my fashion
                consultant and second to organize my closet. He listened to all
                my needs and made it happen. I couldn’t be happier. When I open
                my closet doors it’s so organized and it now makes sense. Thank
                you for all you do and did to make me look my best and be at
                ease.
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Atlanta</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>
            <div className="carousel-item">
              <p>Anna Kersh</p>
              <p className="text-review">
                <i className="fas fa-quote-left"></i> Monsieur Inked has
                exquisite personal style and an eye for perfection. He has
                advised me on several looks for major events for which I
                received many compliments. I’ve used his services for closet
                organization and was incredibly pleased with the result. He’s
                also a wonderful person to work with, highly recommend!
                <i className="fas fa-quote-right"></i>
              </p>
              <p>Philadelphia</p>
              <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
