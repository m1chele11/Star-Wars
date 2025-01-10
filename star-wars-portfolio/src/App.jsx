import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import StarField from './components/starfield/Starfield.jsx';
import About from './components/about/About.jsx';

const App = () => {
  return (
    <>
      <StarField />
      <Navbar />
      <Hero />
      <About/>
    </>
  );
};

export default App;

