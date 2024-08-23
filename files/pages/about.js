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
            <section className="mission-vision py-12 bg-gray-100">
                <div className="container mx-auto">
                    {/* Mission Section */}
                    <div className="mission mb-8 bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-center">
                        <h3 className="section__title text-2xl text-blue-700 mb-4">Our Vision</h3>
                            <img
                                src="/images/about-img2.jpg"
                                alt="Our Mission"
                                className="w-full max-w-md mx-auto mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
                            />
                            <p className="section__desc custom-text-size">
                                Our vision is to extend our support to those who face challenges silently due to their self-respect. 
                                We understand that there are individuals who may not seek help during their hardest moments, and our goal is to reach out to them.
                                While many come to us for assistance, we are determined to find and support those who are unable to ask for help. 
                                We believe in proactive care, ensuring that no one is left behind in their time of need.
                            </p>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="vision bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-center">
                        <h3 className="section__title text-2xl text-blue-700 mb-4">Our Mission</h3>
                            <img
                                src="/images/about-img2.jpg"
                                alt="Our Vision"
                                className="w-full max-w-md mx-auto mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
                            />
                            <p className="section__desc custom-text-size">
                                At Hopeful Heart Foundation, we are driven by a profound commitment to support and uplift those who face significant hardships. 
                                Our focus is on assisting widowed and divorced women, as well as those who have lost their spouses, by providing essential support and resources.
                                Our mission includes offering employment opportunities for children under 18 and ensuring they receive monthly food aid. 
                                We aim to prevent these children from falling into difficult situations and help them build a promising future. 
                                We are dedicated to supporting those who strive to earn a living, whether through challenging circumstances or legal means, by 
                                providing guidance and fostering self-reliance. Through our efforts, Hopeful Heart Foundation seeks to 
                                make a meaningful difference and help individuals achieve their full potential with dignity and respect.
                            </p>
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
