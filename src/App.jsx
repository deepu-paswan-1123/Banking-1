import React from 'react';
import FeatureSection from './components/Cardsection/Featuresection';
import Card1 from './components/Cardsection1/Card1';
import Card2 from './components/Cardsectoin2/Card2';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import Review from './components/Review/Review';
import 'aos/dist/aos.css'; 

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 700,
    });
  }, []);

  return (
    <div>
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