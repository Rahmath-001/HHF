import React from 'react';

const TeamArea = () => {
    return (
        <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">Our Team Members</h2>
                            <p className="section__meta">meet profesionals</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
            <div className="col-lg-3 col-sm-6">
              <div className="team-item team-item1">
                <div className="team__img">
                  <img src="/images/team.jpg" alt="team image" />
                  <div className="team__img-links">
                    {/* <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul> */}
                  </div>
                </div>
                <div className="team__title">
                  <h3 className="team__title-title">
                    <a href="#">Mohd Zubair</a>
                  </h3>
                  <span className="team__title-meta">President</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item team-item2">
                <div className="team__img">
                  <img src="/images/team2.jpg" alt="team image" />
                  <div className="team__img-links">
                    {/* <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul> */}
                  </div>
                </div>
                <div className="team__title">
                  <h3 className="team__title-title">
                    <a href="#">Habeeb Mohd Rafayee</a>
                  </h3>
                  <span className="team__title-meta">Vice President</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item team-item3">
                <div className="team__img">
                  <img src="/images/team3.jpg" alt="team image" />
                  <div className="team__img-links">
                    {/* <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul> */}
                  </div>
                </div>
                <div className="team__title">
                  <h3 className="team__title-title">
                    <a href="#">Mohd Aziz</a>
                  </h3>
                  <span className="team__title-meta">Secretary</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item team-item4">
                <div className="team__img">
                  <img src="/images/team4.jpg" alt="team image" />
                  <div className="team__img-links">
                    {/* <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul> */}
                  </div>
                </div>
                <div className="team__title">
                  <h3 className="team__title-title">
                    <a href="#">Husmani Mohd Arbaz</a>
                  </h3>
                  <span className="team__title-meta">Treasurer</span>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item1">
                            <div className="team__img">
                                <img src="/images/team5.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">fred andrew</a></h3>
                                <span className="team__title-meta">student</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item2">
                            <div className="team__img">
                                <img src="/images/team6.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">sarah rose</a></h3>
                                <span className="team__title-meta">volunteer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item3">
                            <div className="team__img">
                                <img src="/images/team7.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">paul danny</a></h3>
                                <span className="team__title-meta">co founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-item team-item4">
                            <div className="team__img">
                                <img src="/images/team8.jpg" alt="team image" />
                                    <div className="team__img-links">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="team__title">
                                <h3 className="team__title-title"><a href="#">jean smith</a></h3>
                                <span className="team__title-meta">student</span>
                            </div>
                        </div>
                    </div> */}
          </div>
            </div>
        </section>
    );
};

export default TeamArea;
