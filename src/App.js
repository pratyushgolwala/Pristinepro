import Navbar from './components/Navbar';
import './styles/global.css';
import Home from './components/Home';
import About from './components/About';
import Flavors from './components/Flavors';
import Footer from './components/Footer';
import PopUpOrder from './components/PopUpOrder';


function App() {


  
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        
      </div>
      {/* Your main content can go here */}
      <Home />
      <About />
      <Flavors/>
      <PopUpOrder/>
      <Footer/>
    </div>
  );
}

export default App;