import React, { useState } from "react";
import Link from "next/link";

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    comment: "",
    amount: "",
    upiTransactionId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Details:", formData);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <section className="donate-area2 py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-8/12 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="donate__title text-2xl font-semibold text-gray-800 mb-6">
                Enter Your Donation
              </h3>
              <div className="form-shared">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div className="yellow-form relative">
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Donation Amount"
                        required
                      />
                      <span className="dollar-sign absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500">
                        $
                      </span>
                      <span className="number-symble absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500">
                        .00
                      </span>
                    </div>
                  </div>

                  <h3 className="donate__title text-2xl font-semibold text-gray-800 mb-6">
                    Personal Info
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="First Name"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Last Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Address"
                    />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>
                        Country
                      </option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                  </div>

                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="textarea w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                    placeholder="Leave a Comment"
                  ></textarea>

                  <h3 className="donate__title text-2xl font-semibold text-gray-800 mb-6">
                    Payment Info
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <input
                      type="text"
                      name="upiTransactionId"
                      value={formData.upiTransactionId}
                      onChange={handleChange}
                      className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="UPI Transaction ID"
                      required
                    />
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-gray-700 font-medium mb-2">
                      Scan the QR code below to make a payment
                    </p>
                    <img
                      src="/images/qr_code.jpeg"
                      alt="Google Pay QR Code"
                      className="mx-auto w-48 h-auto"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg"
                    >
                      Donate Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 px-4">
            <div className="sidebar-shared">
              <div className="side-widget blog-content bg-white p-8 rounded-lg shadow-lg mb-6">
                <div className="blog-item">
                  <div className="blog-img mb-4">
                    <img
                      src="/images/img15.jpg"
                      alt=""
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="blog-inner-content">
                    <h3 className="blog__title text-xl font-semibold text-gray-800 mb-4">
                      <Link href="/causes-detail">They Want to Study</Link>
                    </h3>
                    <ul className="blog__list mb-4">
                      <li>
                        <i className="icon-target"></i> Goal:{" "}
                        <span>$30,000</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Raised:{" "}
                        <span>$25,270</span>
                      </li>
                    </ul>
                    <p className="blog__desc text-gray-600">
                      Raised by 25 donors
                    </p>
                  </div>
                </div>
              </div>
              <div className="side-widget author-box bg-white p-8 rounded-lg shadow-lg">
                <div className="author__avatar mb-4">
                  <img
                    src="/images/author-avatar.jpg"
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="author__detail">
                  <span className="author__meta block text-gray-500 mb-2">
                    Created April 11, 2018
                  </span>
                  <h4 className="author__title text-lg font-semibold text-gray-800 mb-2">
                    Organizer: <a href="#">Jessica Smith</a>
                  </h4>
                  <ul className="author__list">
                    <li>
                      <i className="fa fa-tag"></i> Education
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i> Wrightwood, Canada
                    </li>
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

export default Donate;
