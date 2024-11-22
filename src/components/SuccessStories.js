import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    {
      title: "Transforming a Finance Team's Communication",
      description: '40% improvement in project turnaround times and enhanced collaboration.',
    },
    {
      title: 'Shifting from Average to Exceptional Leadership',
      description: 'Employee engagement rose by 35%, with a 25% productivity increase.',
    },
  ];

  return (
    <section id="success" className="success-stories">
      <h2 data-aos="fade-up">Real Success Stories</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div key={index} className="story-card" data-aos="flip-up">
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;