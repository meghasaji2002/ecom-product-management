import { commonAPI } from "./commonAPI"
import { base_URL } from "./serverURL"



export const uploadProduct= async(reqBody)=>{
   return await commonAPI('POST',`${base_URL}/Products`,reqBody)
}


export const getAllProducts = async()=>{
  return await commonAPI('GET',`${base_URL}/Products`,"")
}



export const deleteProducts = async(id)=>{
   return await commonAPI('DELETE',`${base_URL}/Products/${id}`,{})
}
