import { useState } from 'react';
import './App.scss';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Topbar from './components/topbar/Topbar';
import Work from './components/works/Work';

function App() {

  const [menu, setmenu] = useState(false)
  return (
    <div className="app">
      <Topbar menu = {menu} setmenu = {setmenu} />
      <Menu menu = {menu} setmenu = {setmenu}/>
      <div className="section">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
