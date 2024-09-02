import React from 'react';
import Link from 'next/link';

const CausesArea = () => {
    return (
        <div>
            <section className="causes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="section-heading blog-heading text-center">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Latest Causes</h2>
                                <p className="section__meta">help us now</p>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-content-wrap flex flex-wrap">
                    <div className="col-lg-4 w-full md:w-1/3 p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img 
                                        src="/images/rationKit4.jpeg" 
                                        alt="Ration-kit Distribution" 
                                        className="w-full h-64 object-cover" 
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Ration-kit Distribution</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                    <Link href="/donate" className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg">
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 w-full md:w-1/3 p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img 
                                        src="/images/rationKit7.jpeg" 
                                        alt="Pension for Single Mothers" 
                                        className="w-full h-64 object-cover" 
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Pension for Single Mothers</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                    <Link href="/donate" className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg">
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 w-full md:w-1/3 p-4">
                        <div className="blog-content bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img 
                                        src="/images/mardasa2.jpg" 
                                        alt="Al-Noora Quran Academy" 
                                        className="w-full h-64 object-cover" 
                                    />
                                </div>
                                <div className="blog-inner-content p-4">
                                    <h3 className="blog__title text-lg font-semibold mb-2">
                                        <Link href="/causes-detail">Al-Noora Quran Academy</Link>
                                    </h3>
                                    <p className="blog__desc text-sm text-gray-600 mb-4">
                                        Aliq is notm hendr erit a augue insu image pellen tes.
                                    </p>
                                    <Link href="/donate" className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg">
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CausesArea;
