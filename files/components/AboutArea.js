import React from 'react';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-large-img">
                            <img src="/images/about-img.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/about-img2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <h2 className="section__title">Discover About HHF - Hopeful Heart Foundation</h2>
                                <p className="section__desc">
                                Hopeful Heart Foundation (HHF) was founded with a deep understanding of the hardships faced by those in need. 
                                Our founder, who grew up in a large family with limited resources, experienced the harsh realities of poverty firsthand. 
                                From a young age, he worked various jobs to support his family, witnessing the stark inequalities in society. 
                                His journey, filled with challenges like struggling to afford education and witnessing others’ difficulties in celebrating occasions like Ramadan, 
                                fueled his determination to make a difference. Officially established on January 11, 2024, but rooted in nearly two decades of personal efforts, 
                                HHF was created to provide support and dignity to those who need it most. Our mission is to prevent others from enduring the same struggles 
                                by offering assistance that allows them to live without relying on anyone but Allah.
                                HHF focuses on empowering individuals and families, ensuring that no parent has to struggle silently or feel the 
                                burden of providing for their loved ones. Through acts of kindness and generosity, HHF aims to create a future where everyone 
                                can live with dignity, security, and hope, fulfilling our founder’s vision of a compassionate and supportive community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
