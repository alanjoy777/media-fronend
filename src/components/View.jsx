import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAlluploadedVidoesApi, getVideocatgoryAPI, updateCategoryAPI } from '../../services/allAPI';


function View({uploadVideoResponse,setDropVideoResponse}) {


  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)


    const[allvideos,setAllvideos]=useState([])

    useEffect(()=>{
      getAllVideos()
      setDeleteVideoResponse(false)
    },[uploadVideoResponse,deleteVideoResponse])

  
    const getAllVideos= async()=>{
      const result= await getAlluploadedVidoesApi()
      console.log(result);
      if(result.status==200){
        console.log(result.data);
        setAllvideos(result.data)
        
      }else{
        console.log("api failed");
        setAllvideos([])
        
      }
      
    }

    console.log(allvideos);
    

    const dragOver=(e)=>{
      e.preventDefault()
    }


    const videoDropped=async(e)=>{
      const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
      console.log(videoId,categoryId);
      const  {data}= await getVideocatgoryAPI()
      const selectedCategory=data.find(item=>item.id==categoryId)
      let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
      console.log(result);
      let{id,categoryName}=selectedCategory
      let newCategory={id,categoryName,allvideos:result}
      console.log(newCategory);
      const res= await updateCategoryAPI(categoryId,newCategory)
      console.log(res);
      setDropVideoResponse(res)
      
    }


  return (


    <>
    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
     
     {
       allvideos?.length>0?allvideos.map(video =>(
        <Col sm={12} md={4} lg={3}>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
       )):<p className='text-danger'>Nothing to display</p>
     }
      
    </Row>
      
    </>
  )
}

export default View
