import React from 'react'
import './Home.css'
import gif from '../gallery/WoZMYyosBw-unscreen.gif'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home container-fluid w-100 pt-5' style={{height:'100vh'}}>
      <div className='row'>
        <div className='col-md-4 d-flex align-items-center justify-content-end ps-5'>
          <div className='d-flex  flex-column align-items-center justify-content-center'>
          <p style={{color:'black',fontSize:'20px',textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sapiente ipsam dolor culpa iure. Soluta quae libero, omnis amet perspiciatis vero quidem. Sunt sapiente eos placeat eligendi! Fugiat, quo blanditiis.</p>
          <button className='mainBtn'><Link className='link' to='/products'>Add Product Details</Link></button> 
          </div>
        </div>
        <div className='col-md-8 d-flex align-items-center justify-content-center'>
          <img src="https://media.licdn.com/dms/image/D5612AQHKy0xjp0Ga7Q/article-cover_image-shrink_720_1280/0/1701763458520?e=2147483647&v=beta&t=l4ndq1x8TXbuuVCF1s7Ek2BXyyOSfiV8PF6Jc4vZ0rg" width={600} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home