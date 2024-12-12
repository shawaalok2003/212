import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaUserTie, FaGraduationCap, FaChartLine, FaFire } from 'react-icons/fa'; // Importing icons
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css';

const Hero = () => {
  const banners = [
    {
      title: 'Coaching for Success',
      icon: <FaUserTie size={90} color="#ffb74d" />,
      slides: [
        'Empowering Leaders of Tomorrow',
        'Personalized Coaching for Maximum Impact',
        'Your Journey to Excellence Starts Here',
      ],
    },
    {
      title: 'Transformative Training',
      icon: <FaGraduationCap size={90} color="#ffb74d" />,
      slides: [
        'Master New Skills with Confidence',
        'Innovative Training for Real-World Success',
        'Unlock Your Team’s True Potential',
      ],
    },
    {
      title: 'Business Growth Strategies',
      icon: <FaChartLine size={90} color="#ffb74d" />,
      slides: [
        'Driving Results Through Strategic Planning',
        'Scaling Your Business to New Heights',
        'Empowering Sustainable Growth',
      ],
    },
    {
      title: '212° Transformation',
      icon: <FaFire size={90} color="#ffb74d" />,
      slides: [
        'The Extra Degree That Changes Everything',
        'From Good to Great – Achieve More',
        '212° Training: Turning Heat into Momentum',
      ],
    },
  ];

  return (
    <section className="hero-carousel" id="hero">
      <Carousel
        showThumbs={false}
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={3000}
      >
        {banners.map((banner, index) => (
          <div key={index} className="banner-slide">
            <div className="banner-icon">{banner.icon}</div>
            <h2>{banner.title}</h2>
            <div className="banner-content">
              {banner.slides.map((slide, i) => (
                <div key={i} className="banner-slide-item">
                  <h3>{slide}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;