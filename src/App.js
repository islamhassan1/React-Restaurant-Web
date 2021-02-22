import React from 'react';
import './App.css';
import About from './components/About';
import App1 from './components/App1';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Header from './components/Header';
import  Home  from './components/Home';
import Menu from './components/Menu';
import Service from './components/Service';
import PublishIcon from '@material-ui/icons/Publish';

function App() {
  /*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
  return (
    <div className="App">
      {/* <!--========== SCROLL TOP ==========--> */}
        <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bx-chevron-up scrolltop__icon'>
              <PublishIcon /> </i>
        </a>
        <Header />
        <Home />
        <About />
        <Service />
        <Menu />
        <App1 />
        <Contactus />
        <Footer />
    </div>
  );
}

export default App;
