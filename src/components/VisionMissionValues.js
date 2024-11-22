import React from 'react';
import './VisionMissionValues.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const VisionMissionValues = () => {
  const content = [
    {
      title: 'Vision',
      description: 'To be the leading catalyst for transformative growth, enabling individuals and organizations to realize their fullest potential.',
      image: '/images/vision.jpg',
    },
    {
      title: 'Mission',
      description: 'Deliver high-impact, experiential training and coaching solutions to empower sustained peak performance.',
      image: '/images/mission.jpg',
    },
    {
      title: 'Values',
      description: 'Our core values define who we are and guide our actions.',
      list: ['Excellence', 'Empathy', 'Integrity', 'Innovation'],
      image: '/images/values.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="vision" className="vision">
      <h2 data-aos="fade-up">Our Vision, Mission, and Values</h2>
      <Slider {...settings} className="vision-slider">
        {content.map((item, index) => (
          <div key={index} className="vision-slide" data-aos="zoom-in">
            <div
              className="vision-content"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(26, 35, 126, 0.8), rgba(63, 81, 181, 0.8)), url(${item.image})`,
              }}
            >
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              {item.list && (
                <ul>
                  {item.list.map((value, idx) => (
                    <li key={idx}>{value}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default VisionMissionValues;