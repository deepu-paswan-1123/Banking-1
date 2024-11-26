import React from 'react'
import FeatureSection from './components/Cardsection/Featuresection'
import Card1 from './components/Cardsection1/Card1'
import Card2 from './components/Cardsectoin2/Card2'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'
// import Review from './components/Review/Review'

function App() {
  return (
    <div>
      <FeatureSection/>
      <Card1/>
      <Card2/>
      {/* <Review/> */}
      <Download/>
      <Footer/>
    </div>
  )
}

export default App
