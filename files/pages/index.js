import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
// import EntryArea from "../components/EntryArea";
import HiwArea from "../components/HiwArea";
import ServiceArea from "../components/ServiceArea";
import MixerArea from "../components/MixerArea";
import CausesArea from "../components/CausesArea";
import ClientsLogo from "../components/ClientsLogo";
import HelpingArea from "../components/HelpingArea";
import TeamArea from "../components/TeamArea";
import CallToAction from "../components/CallToAction";
// import BlogHome from "../components/BlogHome";
import Map from "../components/Map";
import CallToActionTwo from "../components/CallToActionTwo";
import AboutArea from '../components/AboutArea';

const HomePage = () => {
    return (
        <Layout pageTitle="HHF - Hopeful Heart Foundation">
          <NavOne />
          <SliderOne />
          {/* <EntryArea /> */}
          {/* <HiwArea /> */}
          <ServiceArea />
          <MixerArea />
          <AboutArea/>
          <CausesArea />
          {/* <ClientsLogo /> */}
          {/* <HelpingArea /> */}
          <TeamArea />
          <CallToAction />
          {/* <BlogHome /> */}
          <Map />
          <CallToActionTwo />
          {/* <Footer /> */}
        </Layout>
    );
};

export default HomePage;
