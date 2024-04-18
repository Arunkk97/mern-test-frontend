import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
              <Navbar.Brand className='fw-bolder'>
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMWGWDl71ea984MWFLG5gSQ06Vzx0xASJG17EB9j6ow&s"
                  width="30"
                  height="30"
                  className="d-inline-block align-top w-50"
                />{' '}
                HSS
              </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header