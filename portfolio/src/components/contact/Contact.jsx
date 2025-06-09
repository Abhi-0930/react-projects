import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


import{ useRef } from 'react';
import emailjs from "emailjs-com";
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2l0550o', 'template_zf7qium', form.current, {
        publicKey: 'uq7o3-kx-ckVePfY5',
      })
      e.target.reset()
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail />
            <h4>Email</h4>
            <h5>abhishek.j3094@gmail.com</h5>
            <a href="mailto:abhishek.j3094@gmail.com" target="_blank">
              Send a mail
            </a>
          </article>

          <article className="contact_option">
            <FaLinkedin />
            <h4>Linkedin</h4>
            <h5>Abhishek Jujjuvarapu</h5>
            <a href="mailto:abhishek.j3094@gmail.com" target="_blank">
              Send a mail
            </a>
          </article>

          <article className="contact_option">
            <FaWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+91 6302160783</h5>
            <a
              href="https://api.whatsapp.com/send?phone=916302160783"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
