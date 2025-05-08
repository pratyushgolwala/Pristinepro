import Navbar from './components/Navbar';
import './styles/global.css';
import Particles from './components/Particles';
import Home from './components/Home';
import About from './components/About';
import Flavors from './components/Flavors';


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
        <Particles
          style={{ width: '100vw', height: '100vh', position: 'absolute', top: 5000, left: 0 }}
          particleColors={['#ffffff', '#ffffff']}
          particleCount={2000}
          particleSpread={35}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={20}
        />
      </div>
      {/* Your main content can go here */}
      <Home />
      <About />
      <Flavors/>
    </div>
  );
}

export default App;