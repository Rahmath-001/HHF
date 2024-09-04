import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";
import MixerAreaTwo from "../components/MixerAreaTwo";
import TeamArea from "../components/TeamArea";
import FaqArea from "../components/FaqArea";
import ServiceArea from "../components/ServiceArea";
import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
      <Layout pageTitle="HHF - Hopeful Heart Foundation | About">
        <NavOne />
        <PageHeader title="About" />
        <AboutArea />

        {/* Mission and Vision Section */}
        <section className="about-area py-12">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="about-heading">
                  <div className="section-heading">
                    <h2 className="section__title">Our Vision</h2>
                    <p className="section__meta">learn about our vision</p>
                    <p className="section__desc">
                      Our vision is to extend our support to those who face
                      challenges silently due to their self-respect. We
                      understand that there are individuals who may not seek
                      help during their hardest moments, and our goal is to
                      reach out to them. While many come to us for assistance,
                      we are determined to find and support those who are unable
                      to ask for help. We believe in proactive care, ensuring
                      that no one is left behind in their time of need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-large-img">
                  <img
                    src="/images/snacksCopy.jpeg"
                    alt="Our Vision"
                    className="w-[400px] h-[349px] max-w-full"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-5">
                <div className="about-large-img">
                  <img
                    src="/images/rationKit7Copy.jpeg"
                    alt="Our Mission"
                    className="w-[400px] h-[349px] max-w-full"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-heading">
                  <div className="section-heading">
                    <h2 className="section__title">Our Mission</h2>
                    <p className="section__meta">learn about our mission</p>
                    <p className="section__desc">
                      At Hopeful Heart Foundation, we are driven by a profound
                      commitment to support and uplift those who face
                      significant hardships. Our focus is on assisting widowed
                      and divorced women, as well as those who have lost their
                      spouses, by providing essential support and resources. Our
                      mission includes offering employment opportunities for
                      children under 18 and ensuring they receive monthly food
                      aid. We aim to prevent these children from falling into
                      difficult situations and help them build a promising
                      future. We are dedicated to supporting those who strive to
                      earn a living, whether through challenging circumstances
                      or legal means, by providing guidance and fostering
                      self-reliance. Through our efforts, Hopeful Heart
                      Foundation seeks to make a meaningful difference and help
                      individuals achieve their full potential with dignity and
                      respect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MixerAreaTwo />
        <TeamArea />
        {/* <FaqArea /> */}
        <ServiceArea />
        {/* <ClientsLogoTwo /> */}
        <Footer />
      </Layout>
    );
};

export default AboutPage;
