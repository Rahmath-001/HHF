import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        return (
          <div>
            <header className="header-area">
              {/* <div className="header-top-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="top-action-content">
                                        <div className="info-box info-box-1 d-flex align-items-center">
                                            <ul className="d-flex align-items-center">
                                                <li><a href="#"><i
                                                    className="fa fa-envelope"></i>hopefulheart1993@gmail.com</a></li>
                                                <li><a href="#"><i className="fa fa-phone-square"></i>666 888 0000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="top-action-content info-action-content">
                                        <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                            <ul className="top-action-list d-flex align-items-center">
                                                <li className="action__text"><a href="#">login</a></li>
                                                <li className="action__text"><a href="#">register</a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
              <div
                className={`header-top header-menu-action ${
                  this.state.sticky ? "header-fixed" : ""
                }`}
              >
                <div className="container">
                  <div className="row ostion-top-wrap">
                    <div className="col-lg-5 col-sm-5 site-branding">
                      <div className="logo-action d-flex align-items-center">
                        <div className="ostion-logo">
                          <Link href="/">
                            <img
                              src="/images/logo.png"
                              alt="HHF - Hopeful Heart Foundation"
                              title="HHF - Hopeful Heart Foundation"
                              className="img-fluid w-40 h-30"
                            />
                          </Link>
                        </div>
                        <div className="header-btn ml-auto mx-3">
                          <Link href="/donate" className="theme-btn">
                            donate now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 ostion-menu">
                      <div className="ostion-menu-innner">
                        <div className="ostion-menu-content">
                          <div className="navigation-top">
                            <nav className="main-navigation">
                              <ul>
                                <li className="active">
                                  <Link href="/">Home</Link>
                                  {/* <ul className="dropdown-menu-item"> */}
                                  {/* <li><Link href="/">Home 1</Link></li> */}
                                  {/* <li><Link href="/index2">Home 2</Link></li> */}
                                  {/* </ul> */}
                                </li>
                                {/* <li><a href="#">causes</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/causes">causes</Link></li>
                                                                <li><Link href="/causes-detail">causes detail</Link></li>
                                                                <li><Link href="/donate">donate now</Link></li>
                                                            </ul>
                                                        </li> */}
                                <li>
                                  <a href="/events">events</a>
                                  {/* <ul className="dropdown-menu-item">
                                    <li>
                                      <Link href="/events">events</Link>
                                    </li>
                                    <li>
                                      <Link href="/events-detail">
                                        events detail
                                      </Link>
                                    </li>
                                  </ul> */}
                                </li>
                                <li>
                                  <a href="/causes">causes</a>
                                </li>
                                {/* <li>
                                  <a href="#">news</a>
                                  <ul className="dropdown-menu-item">
                                    <li>
                                      <Link href="/news">news</Link>
                                    </li>
                                    <li>
                                      <Link href="/single-news">
                                        news detail
                                      </Link>
                                    </li>
                                  </ul>
                                </li> */}
                                <li>
                                  <Link href="/gallery">gallery</Link>
                                </li>
                                <li>
                                  <Link href="/about">About Us</Link>
                                </li>
                                <li>
                                  <Link href="/contact">Contact Us</Link>
                                </li>
                                <li>
                                  <Link href="https://forms.gle/wAkbHJnDh8qEdJ8z5">
                                    become a volunteer
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/team">our team</Link>
                                </li>
                                {/* <li>
                                  <Link href="/sponsor">sponsors</Link>
                                </li> */}
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className="mobile-menu-toggle">
                          <i className="fa fa-bars"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-nav-container">
                <div className="humburger-menu">
                  <div className="humburger-menu-lines side-menu-close"></div>
                </div>
                <div className="side-menu-wrap">
                  <ul className="side-menu-ul">
                    <li className="sidenav__item">
                      <Link href="/">home</Link>
                      {/* <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/">Home 1</Link></li> */}
                      {/* <li><Link href="/index2">Home 2</Link></li> */}
                      {/* </ul> */}
                    </li>
                    {/* <li className="sidenav__item"><a href="#">causes</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/causes">causes</Link></li>
                                        <li><Link href="/causes-detail">causes detail</Link></li>
                                        <li><Link href="/donate">donate now</Link></li>
                                    </ul>
                                </li> */}
                    <li className="sidenav__item">
                      <Link href="/events">events</Link>
                    </li>
                    <li className="sidenav__item">
                      <Link href="/causes">causes</Link>
                    </li>
                    <li className="sidenav__item">
                      <Link href="/gallery">gallery</Link>
                    </li>
                    <li className="sidenav__item">
                      <Link href="/about">about Us</Link>
                    </li>
                    <li className="sidenav__item">
                      <Link href="/contact">contact Us</Link>
                    </li>
                    <li className="sidenav__item">
                      <Link href="https://forms.gle/wAkbHJnDh8qEdJ8z5">become a volunteer</Link>
                    </li>
                    <li className="sidenav__item">
                      <Link href="/team">our team</Link>
                    </li>
                  </ul>
                  <div className="side-btn">
                    <Link href="/donate" className="theme-btn">
                      donate now
                    </Link>
                  </div>
                </div>
              </div>
            </header>
          </div>
        );
    }
}

export default NavOne;