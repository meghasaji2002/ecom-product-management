import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();
  const path = location.pathname
  console.log(path);


  return (
    <div>
        <Navbar className='navbar w-100 shadow p-3'>
        <Container>
        <Navbar.Brand href="#home" className='d-flex align-items-center justify-content-between'>
       <div className='d-flex align-items-center justify-content-center'>
          <i class="fa-solid fa-gears fs-1"></i>
         <h4 className='text-dark'>Product Management</h4>
       </div>
       
      </Navbar.Brand>
      {path==='/'?null:
      <div className='nav-icons d-flex align-items-center justify-content-around' >
      <Link to='/' style={{color:'black'}}> <i class="fa-solid fa-house fs-3 icon"></i></Link>
      { path==='/search'?null: <Link to='/search' style={{color:'black'}}><i class="fa-brands fa-product-hunt fs-2 icon"></i></Link>}
    { path==='/products'?null:   <Link  to='/products' style={{color:'black'}}><i class="fa-brands fa-dashcube fs-3 icon"></i></Link>}
       </div>}
    </Container>
  </Navbar></div>
  )
}

export default Header