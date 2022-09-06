import './App.css';
import Navbar from "../src/components/Navbar/navbar";
import Intro from "../src/components/introduction/intro";
import Service from "../src/components/Services/service";
import Circle from "../src/components/Circle/circle";
import Work from '../src/components/Work/work.jsx';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonial/testimonials';
import Contact from './components/Contacts/contact';
import Footer from './components/Footer/footer';
import { themeContext } from './context';
import { useContext } from 'react';
//import './components/Navbar/navbar.css'
function App() {
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? 'black': '' ,
      color: darkMode ? 'white': ''
    }}>
      <Navbar/>
      <Intro />
      <Service />
      <Circle />
      <Work />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
