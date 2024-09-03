import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  const navigateByUrl= useNavigate()


  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam quae quisquam nemo molestias minus deleniti doloribus odit? Temporibus veritatis nobis inventore eum corrupti unde quasi neque. In, quo temporibus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <Button onClick={()=>navigateByUrl('/home')} className='bg-primary'>Get Started</Button>
        </Col>
        <Col lg={5}>
        <img src="https://media.giphy.com/media/noLiBWJsX9mes/giphy.gif" alt="" />
        </Col>
        <Col></Col>
    </Row>

    <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <h5 className='text-warning' style={{fontSize:"30px"}}>Features</h5>

      <div  className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'282px'} src="https://i.pinimg.com/originals/54/f8/e3/54f8e332b488dfdb2d3cc2efce8a536a.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text className='text-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" src="https://media.tenor.com/brz3_pBWenIAAAAM/logo-circle.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text className='text-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/61/17/d7/6117d718998317213b9b54c51dc69af6.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text className='text-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

      </div>  
      
    </div>



    <div className="container border rounded p-4 border-dark mb-5 mt-5 d-flex justify-content-center align-items-center">
    
    <div className="col-lg-5 ms-5">
      <h4 className='text-warning'>Simple,Powerful & Fast</h4>
      <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum nemo minus natus laborum illum quia id, hic nisi eligendi facere ipsam fugit repudiandae doloribus accusantium optio sed dignissimos inventore. </h6>
      <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum nemo minus natus laborum illum quia id, hic nisi eligendi facere ipsam fugit repudiandae doloribus accusantium optio sed dignissimos inventore. </h6>
      <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum nemo minus natus laborum illum quia id, hic nisi eligendi facere ipsam fugit repudiandae doloribus accusantium optio sed dignissimos inventore. </h6>
    </div>

    <div className="col-lg-5">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XR7Ev14vUh8?si=sM3ElM61vBvY1HD-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    </div>
    
    </>
  )
}

export default Landingpage
