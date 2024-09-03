import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI'

function WatchHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory();  // Call the function to fetch history data
  }, []) 

  const getHistory = async () => {
    const result = await getVideoHistoryAPI()
    if (result.status === 200) {
      setHistory(result.data)
    } else {
      console.log("API failed")
      console.log(result.message)
    }
  }




const removeVideoHistory= async(id)=>{
  await deleteVideoHistoryAPI(id)
  getHistory()
}


  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link to={"/home"} style={{ textDecoration: "none", color: "blueviolet", fontSize: "30px" }}>
          Back to Home <i className="fa-solid fa-rotate-left"></i>
        </Link>
      </div>

      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history.length > 0 ? (
              history.map((video, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{video?.name}</td>
                  <td><a href={video?.link} target="_blank" rel="noopener noreferrer">{video?.link}</a></td>
                  <td>{video?.timeStamp}</td>
                  <td><button onClick={()=>removeVideoHistory(video?.id)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-danger">Nothing to display</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory
