import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {


  return (
    <div>
        <Navbar className='navbar w-100 shadow p-3'>
        <Container>
        <Navbar.Brand href="#home">
       <div className='d-flex align-items-center justify-content-center'>
          <i class="fa-solid fa-gears fs-1"></i>
         <h4 className='text-dark'>Product Management</h4>
       </div>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header