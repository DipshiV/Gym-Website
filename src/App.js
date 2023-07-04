import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Exercise from './components/UI/Exercise';
import Start from './components/UI/Start';
import Pricing from './components/UI/Pricing';
import { useEffect } from 'react';

import Aos from 'aos';

import "swiper/css/bundle";
import TrainerSection from './components/UI/TrainerSection';
import Footer from './components/UI/Footer';
import { Login } from './components/UI/Pages/Login';
import Registration from './components/UI/Pages/Registration';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Carousal from './components/UI/Pages/Carousal';
import Trainer from './components/UI/Pages/Trainer';
import TrainingPrograms from './components/UI/Pages/TrainingProgramSection';
import TeamSection from './components/UI/Pages/TeamSection';
import AboutTrainer from './components/UI/Pages/AboutTrainer';


function App() {
  useEffect(()=>{
      Aos.init();
    },[]);
  
  return (
    
  <BrowserRouter>
 <Header/>
  <Routes>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/' element={<Hero/>}></Route>
  <Route path='/exercise' element={<Exercise/>}/>
  <Route path='/about' element={<Start/>}></Route>
  <Route path='/classes' element={<TrainerSection/>}></Route>
  <Route path='/TeamSection' element={<TeamSection/>}></Route>
  <Route path='/abouttrainer' element={<AboutTrainer/>}></Route>
  <Route path='/TrainerProgram' element={<TrainingPrograms/>}></Route>
  <Route path='/pricing-plan' element={<Pricing/>}></Route>
  <Route path='/blog' element={<Trainer/>}></Route>
  <Route path='/blogs' element={<Carousal/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  

    
   
  );
}

export default App;
