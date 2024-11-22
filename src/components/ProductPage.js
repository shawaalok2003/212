import React from 'react';
import './ProductPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ProductPage = () => {
  const products = [
    { name: 'Leadership Training', price: '$299', description: 'Empower your leaders to inspire and guide.', image: '/images/leadership.jpg' },
    { name: 'Communication Workshop', price: '$199', description: 'Enhance team communication and collaboration.', image: '/images/communication.jpg' },
    { name: 'Sales Mastery Program', price: '$349', description: 'Boost your sales with cutting-edge techniques.', image: '/images/sales.jpg' },
    { name: 'Team Building Sessions', price: '$249', description: 'Strengthen bonds and foster collaboration.', image: '/images/team-building.jpg' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="products" className="products">
      <h2 data-aos="fade-up">Our Products</h2>
      <Slider {...settings} className="product-slider">
        {products.map((product, index) => (
          <div key={index} className="product-card" data-aos="fade-up">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductPage;