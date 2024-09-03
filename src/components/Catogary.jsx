import React, { useEffect, useState } from 'react';
import { FloatingLabel, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { addVideocategoryAPI, getVideocatgoryAPI, deleteCategoryAPI, getAvideoAPI, updateCategoryAPI } from '../../services/allAPI.js';
import VideoCard from './VideoCard.jsx';

function Catogary({dropvideoresponse}) {

  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addVideocategoryAPI({ categoryName, allVideos: [] });
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        alert(result.message);
      }
    } else {
      alert("please fill missing field");
    }
  }

  useEffect(() => {
    getCategories();
  }, [dropvideoresponse]);

  const getCategories = async () => {
    const { data } = await getVideocatgoryAPI();
    setAllCategories(data);
  }

  const dltcategory = async (id) => {
    const result = await deleteCategoryAPI(id);
    if (result.status >= 200 && result.status < 300) {
      getCategories(); // Refresh the list of categories after deletion
    } else {
      alert('Failed to delete the category');
    }
  }

  const dragOver = (e) => {
    console.log("video card dragged over category");
    e.preventDefault();
  }

  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    console.log("video id " + videoId + " dropped over category " + categoryId);
    const { data } = await getAvideoAPI(videoId);

    const selectedCategory = allCategories.find(item => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);

    const res = await updateCategoryAPI(categoryId, selectedCategory);
    if (res.status >= 200 && res.status < 300) {
      getCategories();
    } else {
      alert("Failed to update the category");
    }
  }



   const videoDragStarted=(e,videoId,categoryId)=>{
        let dataShare={videoId,categoryId}
        e.dataTransfer.setData("data",JSON.stringify(dataShare))
   }



  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-info">Add Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD CATEGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel className="mb-3" controlId="floatingName" label="Category">
              <Form.Control type="text" onChange={e => setCategoryName(e.target.value)} placeholder="Enter Category Name" value={categoryName} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>

      {allCategories?.length > 0 ? allCategories.map(category => (
        <div key={category.id} className="border rounded p-4 m-3" data-droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDropped(e, category?.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h5>{category?.categoryName}</h5>
            <button onClick={() => dltcategory(category.id)} className='btn btn-danger'>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>

          <Row>
            {category?.allVideos?.length > 0 ? category?.allVideos.map(card => (
              <Col sm={12} className='mb-3' key={card.id}   draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <VideoCard video={card} insideCategory={true}/>
              </Col>
            )) : <p>No videos in this category</p>}
          </Row>
        </div>
      )) : <p>Nothing to display</p>}
    </>
  );
}

export default Catogary;
