import React, {Component} from 'react';

class Footer extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
          <div>
            <section className="footer-area">
              <div className="newsletter-area">
                <div className="container">
                  <div className="row">
                    {/* <div className="col-lg-6 mx-auto text-center">
                                    <div className="section-heading footer-heading">
                                        <div className="section-icon">
        
                                        </div>
                                        <h2 className="section__title text__white">Newsletter</h2>
                                        <p className="section__meta">stay updated</p>
                                    </div>
                                    <div className="newsletter-form">
                                        <div className="form-shared">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control"
                                                                   placeholder="Email address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <button className="theme-btn submit__btn"
                                                                type="submit">subscribe
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}
                  </div>
                </div>
              </div>
              <div className="footer-top">
                <div className="container">
                  <div className="row footer-widget-wrap">
                    <div className="col footer-item footer-item1">
                      <h3 className="widget__title">about</h3>
                      <ul className="foot__links">
                        <li>
                          <a href="/causes">causes</a>
                        </li>
                        <li>
                          <a href="/about">about</a>
                        </li>
                      </ul>
                    </div>

                    <div className="col footer-item footer-item4">
                      <h3 className="widget__title">contact</h3>
                      <ul className="contact__info">
                        <li>
                          18-12-418/O, Yousufain Colony, Omer Colony, Hafiz Baba
                          Nagar, Hyderabad, Telangana 500005
                        </li>
                        <li>
                          <a href="mailto:hopefulheart1993@gmail.com">
                            hopefulheart1993@gmail.com
                          </a>
                        </li>
                        <li>
                          <a href="tel:6668880000">090639 06886 </a>
                        </li>
                      </ul>
                      <div className="footer__social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="copyright-desc">
                        <p>
                          © Copyright 2024 by{" "}
                          <a href="hopefulheartfoundation.in">
                            HopefulHeartFoundation.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              onClick={this.scrollTop}
              id="back-to-top"
              className={this.state.scrollBtn ? "back-btn-shown" : ""}
            >
              <i className="fa fa-angle-up" title="Go top"></i>
            </div>
          </div>
        );
    }
}

export default Footer;