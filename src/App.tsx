import NavBar from './components/common/NavBar';
import Home from './components/pages/home/Home';
import Footer from './components/common/Footer';
import Footer2 from './components/common/footer2';

const App = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <Home />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default App;
