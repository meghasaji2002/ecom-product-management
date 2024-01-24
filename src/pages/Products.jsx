import React, { useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import { uploadProduct } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
 
    const[products,setProducts] = useState({
        id:"",
        product_name:"",
        category:"",
        image_Url:"",
        description:"",
        price:""
    })
    
    console.log(products);

    const handleUpload = async(e)=>{
        e.preventDefault()
        const { id,  product_name, category,image_Url,description,price} = products

        if(!id || !product_name || !category ||!image_Url || !description ||!price){
        toast.warning('Please fill the form completely')
        }
        else{
        const response = await uploadProduct(products)
          console.log(response);
         
          if(response.status>=200 && response.status<=300){
          toast.success('uploaded successfully')
            }
          else{
            console.log(response);
          toast.error('something went wrong, try again later')
          }
        }
       }
      

  return (
    <div className='container-fluid'>
         <div className='row'>
            <div className="col-md-2 products-background" >
                <div className='mt-5 fs-5'>
                    <div className='mb-3' style={{color:'black'}}>
                   <Link to='/' style={{color:'black'}}> <i class="fa-solid fa-house me-2"></i></Link>
                      Home
                    </div>
                    <div style={{color:'black'}}>
                        <Link to='/search' style={{color:'black'}}><i class="fa-brands fa-product-hunt me-2"></i></Link>
                        Product List</div>
                </div>
            </div>
            <div className="col-md-10 fs-3  mt-2 dashboard-text mb-5" >
                {/* DashBoard */}
                <div className='d-flex align-items-center justify-content-center  ' style={{marginTop:'20px'}}>
                    <div className='w-75 border-dark shadow p-4 add-form' style={{height:'400px'}}>
                        <div className=''>
                            <h5>Add Product Details</h5>
                             <form className='mt-3' >
                                <input className='form-control mb-2' type="text" placeholder='id'  onChange={(e)=>setProducts({...products,id:e.target.value})}/>
                                
                                <input className='form-control mb-2' type="text" placeholder='Name'  onChange={(e)=>setProducts({...products, product_name:e.target.value})}/>

                                <input className='form-control mb-2' type="text" placeholder='Category' onChange={(e)=>setProducts({...products, category:e.target.value})} />
                                
                                <input className='form-control mb-2' type="text" placeholder='Image Url' onChange={(e)=>setProducts({...products, image_Url:e.target.value})} />

                                <input className='form-control mb-2' type="text" placeholder='Description'  onChange={(e)=>setProducts({...products, description:e.target.value})} />

                                <input className='form-control mb-2' type="text" placeholder='Price' onChange={(e)=>setProducts({...products, price:e.target.value})} />
                                
                                <button className=' CancelBtn'>Cancel</button>
                                <button type='submit' className=' addBtn ms-2' 
                                onClick={handleUpload}
                                >Add</button>
                             </form>
                        </div>
                    </div> 
                </div>
            </div>
         </div>
         <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </div>
  )
}

export default Products