import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
// import Portfolio from './pages/portfolio/Portfolio';
import Navbar from './components/navbar/Navbar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {Odi} from './utilis.js/particles';

function App() {

  const location = useLocation();
  console.log(location);
  const handleInit = async (main)=>{
    await loadFull(main)
  }
const renderParticleJsInHomePage = location.pathname === '/'

  return (
    <div className="App">
{
  renderParticleJsInHomePage && 
  (<Particles  id='particles' options={Odi} init={handleInit}/>)
}

      
      <Navbar />
      <div className='App_main_page_content'>
        <Routes>
          <Route  index path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
          {/* <Route path='/portfolio' element={<Portfolio/>}/> */}
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
