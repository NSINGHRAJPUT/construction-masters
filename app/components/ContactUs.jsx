"use client";

import React, { useEffect, useState } from "react";
import "./contact.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaMapMarker,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "123 Main Street",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div id="contact" className="flex-1 w-full mt-[5vh] lg:mt-0 mb-[10vh]">
        <section className="contact w-full pt-[23vh]">
          <div className="content">
            <h2 className="text-4xl">Contact Us</h2>
          </div>
          <div className="container w-full">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <b></b>
                  <FaMapMarker className="text-[#fff] z-10 text-2xl" />
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p className="text-gray-700">
                    <span className="text-slate-700 mt-2 font-bold">
                      Office Address :{" "}
                    </span>
                    123 Main Street, Anytown, USA 12345
                    <br />
                    <span className="text-gray-700 mt-2 font-bold">
                      Registered Address:{" "}
                    </span>{" "}
                    456 Elm Street, Othertown, USA 67890
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <b></b>
                  <FaPhone className="text-[#fff] z-10 text-2xl" />
                </div>
                <div className="text text-gray-700">
                  <h3>Phone</h3>
                  <p className="text-gray-700"> +1 234-567-8901</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <b></b>
                  <FaMailBulk className="text-[#fff] z-10 text-2xl" />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p className="text-gray-700">contact@example.com</p>
                </div>
              </div>
              <h2 className="txt">Connect with us</h2>
              <ul className="sci">
                <li>
                  <a href="#">
                    <FaFacebook className="text-[#EC9706] text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter className="text-[#EC9706] text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin className="text-[#EC9706] text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="contactForm">
              <form action="" onSubmit={handleSubmit}>
                <h2>Send Message</h2>
                <div className="inputBox">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    required
                  />
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                  <span>Phone</span>
                </div>
                <div className="inputBox">
                  <textarea
                    required
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                  />
                  <span>Type Your Message...</span>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
