import React from 'react'
import './Home.css'
import gif from '../gallery/WoZMYyosBw-unscreen.gif'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home container-fluid w-100 pt-5' style={{height:'100vh'}}>
      <div className='row'>
        <div className='col-md-5 d-flex align-items-center justify-content-end p-5'>
          <div className='d-flex  flex-column align-items-center justify-content-center'>
          <p style={{color:'black',fontSize:'20px',textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sapiente ipsam dolor culpa iure. Soluta quae libero, omnis amet perspiciatis vero quidem. Sunt sapiente eos placeat eligendi! Fugiat, quo blanditiis.</p>
          <Link to='/products' ><button className='btn btn-success'>Add Product Details</button> </Link>
          </div>
        </div>
        <div className='col-md-7 d-flex align-items-center justify-content-center'>
          <img src={gif} width={400} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home