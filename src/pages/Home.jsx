import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Catogary from '../components/Catogary'
function Home() {


 const[uploadVideoResponse,setUploadVideoResponse]=useState({})
const [dropvideoresponse,setDropVideoResponse]=useState({})

  return (
    <>

    <div className="container mt-3 mb-3 d-flex justify-content-between">
      <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>
   
   <Link to={'/watch-history'}>Watch-History <i class="fa-solid fa-arrow-right-to-bracket"></i></Link>



    </div>



    <div className="container-fluid mt-5 mb-3 row">

     <div className="all-videos col-lg-9">
      <h2>All-Videos</h2>
      <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
     </div>

     <div className="col-lg-3">
      <Catogary dropvideoresponse={dropvideoresponse}/>
     </div>

    </div>
      

    </>
  )
}

export default Home
