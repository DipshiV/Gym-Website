import React,{useRef,useEffect,useState} from 'react'
import '../../styles/Navbar.css'
import {CgMenu, CgCloseR} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
   <nav className='navbar'>
   <h3 className='Logo'> Logo</h3>
   <ul className={isMobile ?'nav-links-mobile' :'nav-links' } 
   onClick={()=>{setIsMobile(false)}}>

   <NavLink to='/' className="home"><li>Home</li></NavLink>
  
   <NavLink to='/exercise' className="exercise"><li>Exercise</li></NavLink>
 
   <NavLink to='/about' className="about"><li>AboutUs</li></NavLink>
   
   <NavLink to='/classes' className="classes"><li>Classes</li></NavLink>
  
   <NavLink to='/pricing-plan' className="pricing"><li>Pricing</li></NavLink>
   <NavLink to='/Login' className="signup"><li>Register</li></NavLink>
   </ul>
   <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
   {isMobile ? <CgCloseR/>: <CgMenu/> }</button>
   </nav>
  )
}

export default Navbar