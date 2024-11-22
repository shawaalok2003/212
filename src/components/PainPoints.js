import React from 'react';
import './PainPoints.css';

const PainPoints = () => {
  const painPoints = [
    {
      title: 'Lack of Clarity in Training Needs',
      description: 'Many organizations invest in generic training without addressing core challenges.',
    },
    {
      title: 'Absence of Real-World Application',
      description: 'Training often fails to connect learning with practical implementation.',
    },
    {
      title: 'Failure to Sustain Learning',
      description: 'Post-training, skills often decay without proper follow-up or reinforcement.',
    },
  ];

  return (
    <section id="pain-points" className="pain-points">
      <h2 data-aos="fade-up">Why Organizations Struggle at 211 Degrees</h2>
      <div className="pain-points-container">
        {painPoints.map((point, index) => (
          <div key={index} className="pain-point-card" data-aos="flip-left">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PainPoints;