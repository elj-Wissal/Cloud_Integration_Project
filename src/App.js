import './App.css';  // Importing CSS file for styling

import Navbar from './components/Navbar';  // Importing Navbar component
import HomeSection from './components/HomeSection';  // Importing HomeSection component
import ContactSection from './components/ContactSection';  // Importing ContactSection component
import Footer from './components/Footer';  // Importing Footer component
import Map from './components/Map';  // Importing Map component

function App() {
  return (
    <div>
      <Navbar/>  {/* Rendering Navbar component */}
      <HomeSection />  {/* Rendering HomeSection component */}
      <ContactSection />  {/* Rendering ContactSection component */}
      <Map/>  {/* Rendering Map component */}
      
      {/* 
      <Footer />  // Footer component is not being used in the code
      */}
    </div>
  );
}

export default App;  // Exporting App component as the default export
