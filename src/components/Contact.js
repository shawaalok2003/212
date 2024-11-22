import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 data-aos="fade-up">Get in Touch</h2>
      <p data-aos="fade-up">We’d love to hear from you! Reach out to explore how we can make that one-degree shift together.</p>
      <form data-aos="fade-up">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;