import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollBtn: false,
      });
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <footer
        style={{ backgroundColor: "#003366" }}
        className="text-white py-10"
      >
        {/* Footer top section */}
        <div className="container mx-auto px-4">
          <div className="footer-top grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            {/* About section */}
            <div className="footer-item">
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/causes" className="hover:text-gray-400">
                    Causes
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-gray-400">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact section */}
            <div className="footer-item">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  18-12-418/O, Yousufain Colony, Omer Colony, Hafiz Baba Nagar,
                  Hyderabad, Telangana 500005
                </li>
                <li>
                  <a
                    href="mailto:hopefulheart1993@gmail.com"
                    className="hover:text-gray-400"
                  >
                    hopefulheart1993@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:6668880000" className="hover:text-gray-400">
                    090639 06886
                  </a>
                </li>
              </ul>

      {/* Social media icons */}
      <ul className="space-y-2" style={{
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}}>
  <li>
    <a
      href="#"
      className="hover:text-gray-400"
      aria-label="Facebook"
    >
      <i className="fa fa-facebook" style={{ width: "24px", height: "24px", fontSize: "26px", marginRight: "15px" }}></i> </a>
  </li>
  <li>
    <a
      target="_blank"
      href="https://www.instagram.com/hopeful.heart.foundation/"
      className="hover:text-gray-400"
      aria-label="Instagram"
    >
      <i className="fa fa-instagram" style={{ width: "24px", height: "24px", fontSize: "28px" }}></i> </a>
  </li>
</ul>

              
              {/* <div className="mt-4">
                <ul className="flex justify-center md:justify-start space-x-4">
                  
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © Copyright 2024 by{" "}
              <a
                href="https://hopefulheartfoundation.in"
                className="text-blue-400 hover:underline"
              >
                HopefulHeartFoundation.in
              </a>
            </p>
          </div>
        </div>

        {/* Back to top button */}
        <div
          onClick={this.scrollTop}
          id="back-to-top"
          className={`fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full cursor-pointer shadow-lg transition-opacity ${
            this.state.scrollBtn ? "opacity-100" : "opacity-0"
          }`}
          title="Go top"
        >
          <i className="fa fa-angle-up"></i>
        </div>
      </footer>
    );
  }
}

export default Footer;
