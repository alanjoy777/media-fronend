import React, { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../services/allAPI';

function Add({setUploadVideoResponse}) {


  const [UploadVideo,setUploadVideo]=useState({id:"",name:"",url:"",link:""});
  
  console.log(UploadVideo);


   const getYoutubeLink=(e) =>{
    const {value}=e.target
      if(value.includes("v=")){
        let VID= value.split("v=")[1].slice(0,11)
        console.log(`https://www.youtube.com/embed/${VID}`);

        setUploadVideo({...UploadVideo,link:`https://www.youtube.com/embed/${VID}`})
        
      }else{
        setUploadVideo({...UploadVideo,link:""})
      }
   }


   const handleAdd= async ()=>{
    const {id,name,url,link}=UploadVideo
   
    if(!id||!name||!url||!link){
      alert("please fill the missing fields")
    }else{
      //video upload to json server
     const result= await uploadVideoAPI(UploadVideo)
     console.log(result);
     if(result.status>=200 && result.status<=300){
      alert("video uploaded")
      handleClose()
       
      setUploadVideo({
        id:"",name:"",url:"",link:""
      })
      setUploadVideoResponse(result.data)

     }else{
      alert(result.message)
     }
     



    }

   }




  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex mb-5 mt-5 align-items-center">
        <h2>Upload Videos</h2>
        <button className='btn' onClick={handleShow}>
          <i className="fa-solid fa-arrow-up-from-bracket fa-beat"></i>
        </button>
      </div>   

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel
        controlId="floatingInput"
        label="video id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" onChange={(e) => setUploadVideo({ ...UploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" controlId="floatingName" label="Video Name">
        <Form.Control type="text" placeholder="Enter Video Name" onChange={(e) => setUploadVideo({...UploadVideo,name:e.target.value}) } />
      </FloatingLabel> 
      <FloatingLabel  className="mb-3" controlId="floatingName" label="Image Url">
        <Form.Control type="text" placeholder="Enter Image Url" onChange={(e) => setUploadVideo({...UploadVideo,url:e.target.value}) } />
      </FloatingLabel>
      <FloatingLabel  className="mb-3" controlId="floatingName" label="Video Url">
        <Form.Control type="text" placeholder="Enter Video Url" onChange={getYoutubeLink}/>
      </FloatingLabel>
      

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
