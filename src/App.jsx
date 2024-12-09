import React from 'react';
import FeatureSection from './components/Cardsection/Featuresection';
import Card1 from './components/Cardsection1/Card1';
import Card2 from './components/Cardsectoin2/Card2';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import Review from './components/Review/Review';
import 'aos/dist/aos.css'; 
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      once: true, // Animation should only happen once
      offset: 200, // Adjust animation trigger point
    });
  }, []);
  
  return (
    <div>

      <Navbar/>
      <Hero/>
      
      <FeatureSection />
      <Card1 />
      <Card2 />

      <Review />
      <Download />
      <Footer />
    </div>
  );
};

export default App;