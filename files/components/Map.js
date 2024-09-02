import React from 'react';

const Map = () => {
    return (
        <div>
        <section className="map-area">
            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.2278237163455!2d78.48757897506982!3d17.3361348835424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb994b956275a9%3A0x7d02ad640c27d091!2sHopeful%20Heart%20Foundation!5e1!3m2!1sen!2sin!4v1724774021959!5m2!1sen!2sin" className="map" allowFullScreen="">

                </iframe>

            </div>
        </section>

        <style jsx>{`
           .map {
                width: 100%;
                height: 100%
           } 
        `}</style>
        </div>
    );
};

export default Map;
