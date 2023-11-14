import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'


function Projects() {
  return (
 <>
    <Header/>
    <div style={{marginTop:'100px'}} className='projects'>
      <h1 className='text-center mb-5'>All Projects</h1>
      <div className='d-flex justify-content-center align-items-center w-100'>
        <input style={{width:'520px'}} type="text" className='form-control' placeholder='Search Projects by Technologies Used'/>
        <i style={{marginLeft:'-45px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
      </div>
        <Row className='mt-5 container-fluid'>
         <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
         </Col>
        </Row>
    </div>
   
 </>
  )
}

export default Projects