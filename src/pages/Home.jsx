import React from 'react';
import Slider from '../components/Hero/Slider';
import TopBar from '../components/TopBar/TopBar';
import MainNav from '../components/MainNav/MainNav';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';
import Footers from '../components/Footer/Footers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu/Menu';
import ScrollButton from '../components/ScrollButton';
import LoadingScreen from '../components/LoadingScreen';
import Aos from 'aos';

const Home = () => {
  Aos.init({ duration: 1300, delay: 50 });
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return !isLoading ? (
    <div>
      <TopBar />
      <MainNav />
      <Slider />
      <About />
      <Menu />
      <Gallery />
      <Footers />
      <ScrollButton />
    </div>
  ) : (
    <LoadingScreen />
  );
};

export default Home;
