import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";



 //upload video

 export const uploadVideoAPI= async(video)=> {
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
 }


 //get alluploadedVideos 

 export const getAlluploadedVidoesApi= async()=> {
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
 }

 //get a video

 export const getAvideoAPI= async(id) =>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
 }


 //delte a video

 export const dltAvideoAPI= async(id) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
 }

  // add history

  export const addVideoHistoryAPI= async(video)=> {
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
 }

 //get history

 export const getVideoHistoryAPI= async()=> {
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
 }

 //delete history

 export const deleteVideoHistoryAPI= async(id)=> {
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
 }


 //add videos category

 export const addVideocategoryAPI= async (category)=>{
   return await commonAPI ("POST",`${SERVER_URL}/category`,category)
 }

 //get category

 export const getVideocatgoryAPI= async()=>{
   return await commonAPI("GET",`${SERVER_URL}/category`,"")
 }

 //delete category

 export const deleteCategoryAPI= async(id)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
 }

 //update category

 export const updateCategoryAPI= async(id,categoryDetails)=>{
   return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
 }
