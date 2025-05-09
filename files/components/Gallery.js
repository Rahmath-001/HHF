import React,{useEffect} from 'react';

const Gallery = () => {

    useEffect(() => {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            beforeSlideLoad: (slide, data) => {
                // Need to execute a script in the slide?
                // You can do that here...
            }
        });

    });
    return (
      <section className="gallery-area2">
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Ration Kit Distribution</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/ration_kit.jpeg" alt="" />
                <a
                  href="/images/ration_kit.jpeg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/rationKit1.jpeg" alt="" />
                <a
                  href="images/rationKit1.jpeg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/rationKit3.jpeg" alt="" />
                <a
                  href="images/rationKit3.jpeg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/rationKit4.jpeg" alt="" />
                <a
                  href="images/rationKit4.jpeg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/rationKit2.jpeg" alt="" />
                <a
                  href="images/rationKit2.jpeg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/rationKit7.jpeg" alt="" />
                <a
                  href="images/rationKit7.jpeg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Blood Donation Camp</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/bloodDonation2.jpg" alt="" />
                <a
                  href="/images/bloodDonation2.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/bloodDonation3.jpg" alt="" />
                <a
                  href="images/bloodDonation3.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/bloodDonation4.jpg" alt="" />
                <a
                  href="images/bloodDonation4.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/bloodDonation5.jpg" alt="" />
                <a
                  href="images/bloodDonation5.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/bloodDonation1.jpg" alt="" />
                <a
                  href="images/bloodDonation1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/bloodDonation6.jpg" alt="" />
                <a
                  href="images/bloodDonation6.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Mid Day Meal</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/iftar1.jpg" alt="" />
                <a
                  href="/images/iftar1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/iftar2.jpg" alt="" />
                <a
                  href="images/iftar2.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/iftar3.jpg" alt="" />
                <a
                  href="images/iftar3.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Mardasa</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/mardasa1.jpg" alt="" />
                <a
                  href="/images/mardasa1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/mardasa2.jpg" alt="" />
                <a
                  href="images/mardasa2.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/mardasa3.jpg" alt="" />
                <a
                  href="images/mardasa3.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">BoreWell</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/borewell1.jpg" alt="" />
                <a
                  href="/images/borewell1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/waterProject.jpg" alt="" />
                <a
                  href="images/waterProject.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Marriage Assistance</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/marriage.jpg" alt="" />
                <a
                  href="/images/mardasa1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Snacks Distribution</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/snacks.jpeg" alt="" />
                <a
                  href="/images/mardasa1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Health Camp</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/health_camp.jpeg" alt="" />
                <a
                  href="/images/mardasa1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/health_camp2.jpeg" alt="" />
                <a
                  href="/images/mardasa1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title font-bold p-3">
            <h2 className="text-4xl">Skill Development</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/skill_dev.jpeg" alt="" />
                <a
                  href="/images/mardasa1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-item">
                <img src="/images/skill_dev2.jpeg" alt="" />
                <a
                  href="/images/mardasa1.jpg"
                  className="w-full h-64 object-cover shadow-sm rounded-lg"
                >
                  <span className="gallery-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Gallery;
