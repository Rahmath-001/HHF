import React, { useRef, useState }  from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_435oocy', // your EmailJS service ID
            'template_wwtkm9u', // your EmailJS template ID
            form.current,
            'iaoIQ7q9B7zNIkDuP' // your EmailJS public key
        ).then((result) => {
            console.log('Email sent successfully:', result.text);
            showPopup('Message sent successfully!');
        }).catch((error) => {
            console.error('Error sending email:', error);
            showPopup(`Failed to send message: ${error.text || error.message}`);
        });

        e.target.reset(); // Reset the form after submission
    };

    const showPopup = (message) => {
        setPopupMessage(message);
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 3000); // Hide after 3 seconds
    };

return (
    <section className="contact-area">
        <div className="container">
            {popupVisible && (
                <div className={`popup-message ${isError ? 'error' : ''}`}>
                    {popupMessage}
                </div>
            )}
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-heading">
                        <div className="section-icon">
                            <img src="/images/section-icon.png" alt="section-icon" />
                        </div>
                        <h2 className="section__title">Get in Touch With Us</h2>
                        <p className="section__meta">Write a message</p>
                        <p className="section__desc">
                            Aliq is notm hendr erit a augue insu image pellen tes que id erat quis sollicitud.
                            Lorem ipsum is simply free text dolor sit amet,
                            consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                        </p>
                        <ul className="section__list">
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-shared">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 form-group">
                                    <input className="form-control" type="text" name="name" placeholder="Full Name" />
                                </div>

                                <div className="col-lg-6 col-sm-6 form-group">
                                    <input className="form-control" type="email" name="email"
                                           placeholder="Email Address" />
                                </div>

                                <div className="col-lg-12 form-group">
                                    <input className="form-control" type="number" name="phone"
                                           placeholder="Phone Number" />
                                </div>

                                <div className="col-lg-12 col-sm-12 form-group">
                                    <textarea className="textarea" name="message"
                                              placeholder="Write a Message"></textarea>
                                </div>

                                <div className="col-lg-12 col-sm-12">
                                    <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row contact-detail-action">
                <div className="col-lg-4">
                    <div className="contact-item contact-item1">
                        <h3 className="contact__title">About</h3>
                        <p className="contact__desc">
                            Lorem ipsum is simply free text dolor sit
                            amet, duise consectetur ullam blandit
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-item contact-item2">
                        <h3 className="contact__title">Address</h3>
                        <p className="contact__desc">
                            660 broklyn street , 88 new york, United states of
                            america
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-item contact-item3">
                        <h3 className="contact__title">Contact</h3>
                        <p className="contact__desc">
                            hopefulheart1993@gmail.com <br />
                            666 888 000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

};
export default Contact;
