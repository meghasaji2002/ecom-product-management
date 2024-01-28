import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProducts, getAllProducts } from '../services/allAPI';
import './Search.css'

function Search() {

  const [deleteProductStatus,setDeleteProductStatus]=useState(false);
  const[searchedProducts,setSearchedProducts] = useState([]);
  const[search,setSearch] = useState("");
  // console.log(search);
  const [searchText,setSearchText]=useState("");
 

  const [allProducts,setAllProducts]= useState([]);

  const searchProduct = ()=>{
    setSearchText(search);
  } 

  const getAllUploadedProduct = async()=>{
  const response = await getAllProducts(); 
  // console.log(response);
  const{data} = response;
  console.log(data);
  setAllProducts(data);
}
console.log(allProducts);

const removeProducts = async(id)=>{
  const response = await deleteProducts(id)
  setDeleteProductStatus(true)
}

useEffect(()=>{
  getAllUploadedProduct()
  setDeleteProductStatus(false)
},[deleteProductStatus])

useEffect(()=>{
  const searchedProducts = allProducts.filter((item)=>item?.category?.includes(searchText))
  console.log(searchedProducts);
  setSearchedProducts(searchedProducts);
},[allProducts,searchText])

  return (
    <div className='container-fluid search-container'>
      <div className=' search-row'>
     
        <div className=' d-flex flex-column align-items-center pt-4 second-col '>
          <div className='w-100  d-flex align-items-center justify-content-center '>
             <div className='w-25 px-2 d-flex align-items-center justify-content-center ' style={{border:'1px solid gray',borderRadius:'25px'}}>
                <input onChange={(e)=>setSearch(e.target.value)} type="text" className='form-control search-box' style={{border:'transparent'}} placeholder='search products' />
               <button onClick={searchProduct} type='submit' style={{border:'transparent',backgroundColor:'transparent'}}> <i class="fa-solid fa-magnifying-glass fs-4" ></i></button>
             </div>
             { 
              <div></div>}
          </div>
           <div className='mt-5 w-75'> 
              <table style={{tableLayout:'fixed'}} className='table table-bordered border-dark'>
                <colgroup>
                  <col className='col-1' />
                  <col className='col-2' />
                  <col className='col-3'/>
                  <col className='col-4'  />
                  <col className='col-5' />
                  <col className='col-6' />
                </colgroup>
                <thead>
                  <tr className='table-active text-center p-2'>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Product Image</th>
                    <th>Price</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                    
                <tbody>
                  { searchedProducts.length>0?
                    searchedProducts.map((item)=>(<tr className='text-center p-2 '>
                    <td >{item.id}</td>
                    <td style={{width:'100px',overflow:'auto'}}>
                    {item.product_name} 
                    </td>
                    <td>{item.category}</td>
                    <td><img className='product-img' src={item.image_Url} alt="" /></td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>removeProducts(item.id)} style={{border:'transparent'}}><i class="fa-solid fa-trash-can fs-2 text-danger"></i></button></td>
                    
                 </tr>))
                   
                 : 
               <div style={{width:'500px'}}> 
                 {/* <p className='text-danger fw-bold'>Nothing to display</p> */}
                 <img src="https://assets-global.website-files.com/65084cba9d60b1182e9f0021/651eb137d966b69fb46ce3f9_ezgif_com_gif_maker_ccdec5da19.gif" width={'400px'} alt="" /></div>}
                </tbody>
             </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search