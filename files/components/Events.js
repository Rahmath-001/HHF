import React from 'react';
import Link from 'next/link';

const Events = () => {
    return (
        <section className="causes-area upcoming-event-area upcoming-event-area2">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src="/images/iftar1.jpg" alt="" className="w-full h-80 object-cover" />
                                    <span className="blog__tag blog__tag1">
                                        <span className="date__num-text">Every Friday</span>
                                    </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">
                                        <Link href="/events-detail">Food Distribution</Link>
                                    </h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <img src="/images/bloodDonation2.jpg" alt="" className="w-full h-80 object-cover" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">
                                        <Link href="/events-detail">Blood Donation Camp</Link>
                                    </h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>San Marcos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item3">
                                <div className="blog-img">
                                    <img src="/images/health_camp.jpeg" alt="" className="w-full h-80 object-cover" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">
                                        <Link href="/events-detail">Health Camp</Link>
                                    </h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>San Marcos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item4">
                                <div className="blog-img">
                                    <img src="/images/img16.jpg" alt="" className="w-full h-80 object-cover" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">
                                        <Link href="/events-detail">Relief Camp</Link>
                                    </h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>San Marcos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item1">
                                <div className="blog-img">
                                    <img src="/images/waterProject.jpg" alt="" className="w-full h-80 object-cover" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">
                                        <Link href="/events-detail">Borwell Construction</Link>
                                    </h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>San Marcos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-content">
                            <div className="blog-item blog-item2">
                                <div className="blog-img">
                                    <img src="/images/img18.jpg" alt="" className="w-full h-80 object-cover" />
                                    <span className="blog__tag blog__tag2">
                                        <span className="date__num-text">Food Distribution</span>
                                    </span>
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title">
                                        <Link href="/events-detail">Fatima Old Age Home</Link>
                                    </h3>
                                    <ul className="blog__list">
                                        <li className="blog__dot-active">8:00am to 2:00pm</li>
                                        <li>San Marcos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
