import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectAPI } from '../Services/allAPI'


function Projects() {
  const [allProjects,setAllProjects]= useState([])
  const getallProjects = async ()=>{
    if (sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader ={
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
      }
      const result = await allProjectAPI(reqHeader)
      if(result.status === 200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }
  useEffect(()=>{
    getallProjects()

  },[])
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
        {allProjects?.length>0?allProjects?.map(project=>(
        <Col sm={12} md={6} lg={4}>
          <ProjectCard project={project}/>
         </Col>)):null }
        </Row>
    </div>
   
 </>
  )
}

export default Projects