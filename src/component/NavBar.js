import React from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import{ Link } from 'react-router-dom';
export const NavBar = () => {

  return (
    
      

        <><nav class="navbar navbar-expand-sm navbar-dark fixed-top ">
      <div class="container-fluid ">
        <img src="https://image1.jdomni.in/storeLogo/12082021/3B/2D/E0/A1EE351C97DE7D186F862167D6_1628770076813.png?output-format=webp" className='op' />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarNav">
         <Container>
         <Row>
              <Col xs={6} md={1}>
              </Col>
              <Col xs={6} md={8} className='ui'>
                <ul class="navbar-nav">
                <Link to="/">  <li class="nav-item a6">
                   <a class="nav-link active o" aria-current="page" href="">HOME   </a>
                  </li></Link>
                  <li class="nav-item a7">
                    <a class="nav-link active o" href="#about">ABOUT US    </a>
                  </li>
                  <li class="nav-item a8">
                    <a class="nav-link active o" href="#whyus">WHY US   </a>
                  </li>
                  <li class="nav-item a9">
                    <a class="nav-link active o" href="#contact">CONTACT US   </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={3}>
              <ul class="navbar-nav">
                  <li class="nav-item ">
                   <Link class="nav-link active o hue"  aria-current="page" to="/login">Log In  </Link>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active o hef" href="#">|</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active o hug" href="#">Sign Up  </a>
                  </li>
                  </ul>

              </Col>
            </Row>
      </Container>
        </div>
      </div>
    </nav></>
    
  )
}
/* 
<li class="nav-item df">


            <a class="nav-link active o" href="#">Log In</a>
                   </li>
                 <li class="nav-item df">
               <a class="nav-link active o" href="#">|</a>
                </li>
            <li class="nav-item df">
                <a class="nav-link active o" href="#">Sign Up</a>
                 </li>
 */


