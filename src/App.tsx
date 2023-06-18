import NavBar from './components/common/NavBar';
import Home from './components/pages/home/Home';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
