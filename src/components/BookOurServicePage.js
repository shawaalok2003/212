import React from 'react';
import './BookOurServicePage.css';

const BookOurServicePage = () => {
  return (
    <section id="book-service" className="book-service">
      <h2 data-aos="fade-up">Book Our Service</h2>
      <p data-aos="fade-up">
        Ready to make the 212-degree shift? Book our services today and start your journey toward growth and transformation.
      </p>
      <form data-aos="fade-up">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <select required>
          <option value="">Select Service</option>
          <option value="leadership-training">Leadership Training</option>
          <option value="communication-workshop">Communication Workshop</option>
          <option value="sales-program">Sales Mastery Program</option>
        </select>
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookOurServicePage;