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
import {RecoilRoot} from 'recoil'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar';

function App() {
  useEffect(()=>{
  
      Aos.init();
    },[]);
  
  return (
    <RecoilRoot>
  <BrowserRouter>
 <Header/>
  <Routes>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/' element={<Hero/>}></Route>
  <Route path='/exercise' element={<Exercise/>}/>
  <Route path='/about' element={<Start/>}></Route>
  <Route path='/classes' element={<TrainerSection/>}></Route>
  <Route path='/pricing-plan' element={<Pricing/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </RecoilRoot>

    
   
  );
}

export default App;
