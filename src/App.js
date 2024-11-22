import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PainPoints from './components/PainPoints';
import SuccessStories from './components/SuccessStories';
import VisionMissionValues from './components/VisionMissionValues';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import GalleryPage from './components/GalleryPage';
import BookOurServicePage from './components/BookOurServicePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProductPage/>
      <Services />
      <PainPoints />
      <SuccessStories />
      <VisionMissionValues />
      <GalleryPage/>
      <BookOurServicePage/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;