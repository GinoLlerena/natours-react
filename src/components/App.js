import React, { Component } from 'react';
import logo from "../assets/img/logo-white.png";
import nat1small from "../assets/img/nat-1.jpg"
import nat1 from "../assets/img/nat-1-large.jpg"
import nat2small from "../assets/img/nat-2.jpg"
import nat2 from "../assets/img/nat-2-large.jpg"
import nat3small from "../assets/img/nat-3.jpg"
import nat3 from "../assets/img/nat-3-large.jpg"
import nat8 from "../assets/img/nat-8.jpg"
import nat9 from "../assets/img/nat-9.jpg"
import video from "../assets/img/video.mp4"
import videowebm from "../assets/img/video.webm"
import logogreensmall2x from "../assets/img/logo-green-small-2x.png"
import logogreensmall1x from "../assets/img/logo-green-small-1x.png"

import logogreen2x from "../assets/img/logo-green-2x.png"
import logogreen1x from "../assets/img/logo-green-1x.png"


const Navigation = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>
    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item"><a href="" className="navigation__link"><span>01</span>About Natours</a></li>
        <li className="navigation__item"><a href="" className="navigation__link"><span>02</span>Your Benefits</a></li>
        <li className="navigation__item"><a href="" className="navigation__link"><span>03</span>Popular Tours</a></li>
        <li className="navigation__item"><a href="" className="navigation__link"><span>04</span>Stories</a></li>
        <li className="navigation__item"><a href="" className="navigation__link"><span>05</span>Book Now</a></li>
      </ul>
    </nav>
  </div>
)

const Header = () => (
  <header className="header">
    <div className="header__logo-box">
      <img src={logo} alt="Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Outdoors</span>
        <span className="heading-primary--sub">is where life happens</span>
      </h1>
      <a href="" className="btn btn--white btn--animated">Discover our tours</a>
    </div>
  </header>
)

const Grid = () => (
  <section className="grid-test">
    <div className="row">
      <div className="col-1-of-2">col 1 of 2</div>
      <div className="col-1-of-2">col 1 of 2</div>
    </div>
    <div className="row">
      <div className="col-1-of-3">col 1 of 3</div>
      <div className="col-1-of-3">col 1 of 3</div>
      <div className="col-1-of-3">col 1 of 3</div>
    </div>
    <div className="row">
      <div className="col-1-of-3">col 1 of 3</div>
      <div className="col-2-of-3">col 2 of 3</div>
    </div>
    <div className="row">
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
    </div>
    <div className="row">
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-2-of-4">col 2 of 4</div>
    </div>
    <div className="row">
      <div className="col-1-of-4">col 1 of 4</div>
      <div className="col-3-of-4">col 3 of 4</div>
    </div>
  </section>
)

const About = () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit est donec, facilisi suscipit ridiculus porttitor eros class nec fringilla, habitasse enim commodo sagittis pretium curabitur congue convallis. </p>

        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit est donec, facilisi suscipit ridiculus porttitor eros class nec fringilla.</p>

        <a href="" className="btn-text">Learn More &rarr;</a>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img src={nat1} 
               srcSet={nat1small + ' 300w,' + nat1 + ' 1000w'}
               sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
               alt="" className="composition__photo composition__photo--p1"></img>

           <img src={nat2} 
               srcSet={nat2small + ' 300w,' + nat2 + ' 1000w'}
               sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
               alt="" className="composition__photo composition__photo--p2"></img>

             <img src={nat3} 
               srcSet={nat3small + ' 300w,' + nat3 + ' 1000w'}
               sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
               alt="" className="composition__photo composition__photo--p3"></img>        
          {/* <img src={nat1} alt="" className="composition__photo composition__photo--p1"></img>
          <img src={nat2} alt="" className="composition__photo composition__photo--p2"></img>
          <img src={nat3} alt="" className="composition__photo composition__photo--p3"></img> */}
        </div>
      </div>
    </div>
  </section>
)

const Features = () => {
  return(
    <section className="section-features">
    
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Tours = () => {
  return(
    <section className="section-tours" id="section-tours" >
      <div className="u-center-text u-margin-bottom-big">
        <h3 className="heading-secondary">
          Most popular tours
        </h3>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">

              <div className="card__picture card__picture--1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                The sea explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 days tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$255</p>
                </div>
                <a href="#popup" className="btn btn--white">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                  The forest hiker
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                      <li>7 days tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$255</p>
                  </div>
                  <a href="#popup" className="btn btn--white">Book Now</a>
                </div>
              </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
           
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    The snow aventurer
                    </span>
                  </h4>
                <div className="card__details">
                  <ul>
                    <li>5 days tour</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$255</p>
                  </div>
                  <a href="#popup" className="btn btn--white">Book Now</a>
                </div>
              </div>
           
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="" className="btn btn--green">Discover all tours</a>
      </div>
    </section>
  )
}

const Stories = () => {

  return(
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src={videowebm} type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h3 className="heading-secondary">
          We make people genuinely happy
        </h3>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat8} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
            I had the best ever week with my family
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat9} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
            WOW! My life is completely different now.
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur adipiscing elit est donec ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="" className="btn-text">Read all stories &rarr;</a>
      </div>
    </section>
  )
}

const Booking = () => {

  return(
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="" className="form">
              <div className="u-margin-bottom-median">
                <h3 className="heading-secondary">
                  Start booking now
                </h3>
              </div>

              <div className="form__group">
                <input id="name" type="text" className="form__input" placeHolder="Full name" required />
                <label htmlFor="name"  className="form__label">Full name</label>
              </div>
              <div className="form__group">
                <input id="email" type="email" className="form__input" placeHolder="Email address" required />
                <label htmlFor="email"  className="form__label">Email address</label>
              </div>
              <div className="form__group u-margin-bottom-median">
                <div className="form__radio-group">
                  <input id="small" type="radio" className="form__radio-input" name="size"/>
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input id="large" type="radio" className="form__radio-input" name="size" />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form_group ">
                <button className="btn btn--green">Next Step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source srcSet={logogreensmall1x + ' 1x,' + logogreensmall2x + ' 2x'} 
                  media="(max-width: 37.5em)" />
          <img srcSet={logogreen1x + ' 1x,' + logogreen2x + ' 2x'} alt="Full logo" />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">Company</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Contact us</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Carrers</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Privacy policy</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by <a href="" className="footer__link">Gino Llerena</a> for this online course <a href="" className="footer__link">Advanced CSS and SASS</a>.  Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  )
}

const Popup = () => (
  <div className="popup" id="popup" >
    <div className="popup__content">
      <div className="popup__left">
        <img src={nat8} alt="Tour Photo 1" className="popup__img" />
        <img src={nat9} alt="Tour Photo 2" className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">&times;</a>
        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
        <p className="popup__text">
        Lorem ipsum dolor sit amet, iusto causae percipit an ius. Everti deserunt democritum ea sit, mei simul tation ut, nec nonumy everti eleifend at. An ius adipisci corrumpit evertitur. Nemore aliquip voluptaria per ei, debet vocibus pro in. Ad iisque ancillae eum. Nec vocibus consequat ex, ut nusquam periculis eloquentiam sea. Lorem ipsum dolor sit amet, iusto causae percipit an ius. Everti deserunt democritum ea sit, mei simul tation ut, nec nonumy everti eleifend at. An ius adipisci corrumpit evertitur. Nemore aliquip voluptaria per ei, debet vocibus pro in. Ad iisque ancillae eum. Nec vocibus consequat ex, ut nusquam periculis eloquentiam sea.
        </p>
        <a href="" className="btn btn--green">Book now</a>

      </div>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Header></Header>
        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
          <Booking />
        </main>
        <Footer/>
        <Popup />
      </React.Fragment>
    );
  }
}

export default App;
