import React from 'react';
import '../css/Services.css';

class Services extends React.Component {
  render() {
    return (
      <div className="section white Services ">
        <h4 className="center">Services</h4>
        <hr></hr>
        <div className="row center">
          <div className="col s12">
            <h5>What Monsieur Inked Offers?</h5>
          </div>
          <div className="col s12">
            <ul className="services-item">
              <li className="collection-item">
                <i className="fas fa-laptop"></i> Virtual Consultation
              </li>
              <li className="collection-item">
                <i className="fas fa-home"></i> Home Meetings
              </li>
              <li className="collection-item">
                <i className="fas fa-gifts"></i> Personal Shopping
              </li>
              <li className="collection-item">
                <img
                  className="hanger"
                  src={process.env.PUBLIC_URL + '/images/clothes-hanger.png'}
                  alt="pedro"
                />
                Edit Closet
              </li>
              <li className="collection-item">
                <i className="fas fa-person-booth"></i> Styling
              </li>
            </ul>
          </div>
        </div>
      </div>
      // <div className="Services center">
      //   <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
      //     <div className="col m3 s12">Fashion Styling</div>
      //   </ScrollAnimation>
      //   <ScrollAnimation delay={600} animateIn="fadeInDown" animateOnce={true}>
      //     <div className="col m3 s12">Personal Shopping</div>
      //   </ScrollAnimation>
      //   <ScrollAnimation delay={1200} animateIn="fadeInDown" animateOnce={true}>
      //     <div className="col m3 s12">Wardrobe Audits</div>
      //   </ScrollAnimation>
      //   <ScrollAnimation delay={1800} animateIn="fadeInDown" animateOnce={true}>
      //     <div className="col m3 s12">Closet Organization</div>
      //   </ScrollAnimation>
      // </div>
    );
  }
}

export default Services;
