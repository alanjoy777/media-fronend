import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="" className='text-light fw-25'>
            <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
            <i class="fa-solid fa-play"></i>
           Media-Player 
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
