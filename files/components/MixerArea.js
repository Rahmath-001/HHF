import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class MixerArea extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }


    render() {
        return (
            <div>
                <section className="mixer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-heading mixer-heading">
                                    <div className="section-icon">
    
                                    </div>
                                    <h2 className="section__title text__white">Fundraising for the people and causes you
                                        care about</h2>
                                    <a href="/donate" className="theme-btn">start donation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mixer-area2">
                    <div className="container">
                        <div className="row fun-content-wrap">
                            <div className="col-lg-6">
                                <div className="fun-content">
                                    <div className="fun-item fun-item1">
                                        <i className="icon-charity"></i>
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 900000 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p className="fun__text">Target to raise funds</p>
                                    </div>
                                </div>
                                <div className="fun-content">
                                    <div className="fun-item fun-item2">
                                        <i className="icon-cancer"></i>
                                        <h3 className="counter">
                                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 1000 : 0} /></VisibilitySensor>
                                        </h3>
                                        <p className="fun__text">Target to reach volunteers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="fun-content-slide">

                                    <Swiper>

                                        <div className="fun-slide-item">
                                            <div className="icon-quote">“</div>
                                            <h3 className="funslide__text">
                                                You have not lived today until you have done 
                                                something for someone who can never repay you.
                                            </h3>
                                            <p className="funslide__name">John Bunyan</p>
                                        </div>
                                        <div className="fun-slide-item">
                                            <div className="icon-quote">“</div>
                                            <h3 className="funslide__text">
                                                Every man must decide whether he will walk in the light
                                                of creative altruism or in the darkness of destructive selfishness.
                                            </h3>
                                            <p className="funslide__name">Martin Luther King, jr</p>
                                        </div>
                                        <div className="fun-slide-item">
                                            <div className="icon-quote">“</div>
                                            <h3 className="funslide__text">
                                                Every man must decide whether he will walk in the light
                                                of creative altruism or in the darkness of destructive selfishness.
                                            </h3>
                                            <p className="funslide__name">Martin Luther King, jr</p>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MixerArea;