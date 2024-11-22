import React, { useState } from 'react';
import './Services.css';
import { FaChartLine, FaChalkboardTeacher, FaUserCheck, FaCogs } from 'react-icons/fa';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaChartLine />,
      title: 'Training Needs Analysis',
      description:
        'We analyze your organization’s challenges to craft impactful, personalized training solutions.',
      details:
        'Our comprehensive training needs analysis evaluates your organizational gaps, identifies opportunities for growth, and customizes a roadmap tailored to your objectives.',
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      title: 'Experiential Training Programs',
      description:
        'Interactive training sessions focusing on practical applications and real-world results.',
      details:
        'These programs use role-playing, scenario-based learning, and hands-on workshops to ensure concepts translate to actionable skills in the workplace.',
    },
    {
      id: 3,
      icon: <FaUserCheck />,
      title: 'Post-Training Coaching',
      description:
        'Sustain your growth with continuous coaching to reinforce learning and improve outcomes.',
      details:
        'Our post-training coaching involves 1:1 sessions, progress monitoring, and tailored interventions to sustain momentum and long-term results.',
    },
    {
      id: 4,
      icon: <FaCogs />,
      title: 'Custom Solutions',
      description:
        'Fully tailored programs for startups and enterprises to meet specific goals and challenges.',
      details:
        'We create bespoke training programs that address your unique needs, blending innovative tools, strategies, and techniques for maximum impact.',
    },
    {
      id: 5,
      icon: <FaCogs />,
      title: 'Custom Solutions',
      description:
        'Fully tailored programs for startups and enterprises to meet specific goals and challenges.',
      details:
        'We create bespoke training programs that address your unique needs, blending innovative tools, strategies, and techniques for maximum impact.',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="parallax-bg"></div>
      <h2 data-aos="fade-up">Our Services</h2>
      <p data-aos="fade-up" className="services-intro">
        Discover a range of solutions crafted to make that one-degree shift and drive impactful growth.
      </p>

      <div className="services-carousel" data-aos="fade-up">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => setSelectedService(service)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-modal" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.details}</p>
            <button onClick={() => setSelectedService(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;