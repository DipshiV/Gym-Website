import React,{useRef,useEffect,useState} from 'react'
import {AiOutlineMenuFold} from 'react-icons/ai'
import {CgMenu, CgCloseR} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navigate= useNavigate();
  const headerRef = useRef(null)
  const headerFunc = ()=>{
    if(document.body.scrollTop> 80 || document.documentElement.scrollTop>80){
     headerRef.current.classList.add('sticky__header');
  }else{
   headerRef.current.classList.remove('sticky__header')
  }
}
useEffect(()=>{
  window.addEventListener('scroll', headerFunc)
  return()=> window.removeEventListener('scroll' , headerFunc)
},[])

const handleRegister=()=>{
   navigate('/Login')
}


  return (
   <header className='header' ref={headerRef}>
   <div className='container'>
   <div className='nav__wrapper'>
   <NavLink to='/'>
   <div className='logo'>
    <div className='logo__img'>
    <img  src="https://img.freepik.com/free-vector/girl-silhouette-fitness-logo-flat-design_23-2148200349.jpg?w=740&t=st=1688035349~exp=1688035949~hmac=f08cd2781929af0ba05f250af911e1fafc5492f753836f9995e80b065359b126" alt='' srcset=''/>
    </div>
    <h2>FitMe</h2>
    </div>
   </NavLink>
   {/*navigation*/}
   <div className='navigation'>
   <ul className={isMobile ? "menu-mobile" : "menu"} onClick={() => setIsMobile(false)}>
   <li className='nav__item'>
   <NavLink to='/'>Home</NavLink>
   </li>
  
   <li>
   <NavLink to='/about'>About Us</NavLink>
   </li>
  
   <li>
   <NavLink to='/TeamSection'>Team</NavLink>
   </li>
   <li><NavLink to='/TrainerProgram'>TrainerProgram</NavLink></li>
   <li>
   <NavLink to='/pricing-plan'>Pricing</NavLink>
   </li>
   </ul>
   </div>
   <div className='nav__right'>
  
   <button className={isMobile ?'register_btn-mobile' :'register_btn'} onClick={handleRegister}>Register</button>
  <span className='mobile_menu' onClick={()=> setIsMobile(!isMobile)}>
  {isMobile ? 
  <CgCloseR  className='close-outline mobile-nav-icon'/>: <AiOutlineMenuFold  className='mobile-nav-icon'/>}
  </span>

   </div>
   </div>
   </div>
   </header>
  )
}

export default Header