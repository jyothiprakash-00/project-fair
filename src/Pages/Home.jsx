import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import titleimg from '../Assests/designer.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../Services/allAPI'

function Home() {
  const [loggedin,setLoggedin] = useState(false)
  const [homeProjects,setHomeProjects] = useState([])
  // api calling
  const getHomeProjects = async ()=>{
    const result = await homeProjectAPI()
    if(result.status===200){
      setHomeProjects(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)

    }else{
      setLoggedin(false)
    }
    // api call
    getHomeProjects()
  },[])
  return (
    <>
    {/* LANDING SECTION */}
      <div style={{width:'100%',height:'100vh'}} className='container-fluid rounded bg-success '>
        <Row className='align-itemscenter p-5'>
          <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px',marginTop:'150px'}} className='fw-bolder text-light'>
            <i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis minima iure expedita dicta debitis cupiditate obcaecati incidunt alias magnam earum ea explicabo delectus eveniet, rem officia itaque similique aliquid quidem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam obcaecati incidunt maxime officiis? Debitis, possimus fugit, quis accusamus itaque maxime quidem dicta natus mollitia nihil perferendis facilis praesentium totam!</p>
           { loggedin?
            <Link to={'/dashboard'} className='btn btn-warning'>Manage your projects<i class='fa-solid fa-right-long fa-beat ms-2'></i></Link>:

            <Link to={'/login'} className='btn btn-warning'>Start to explore<i class='fa-solid fa-right-long fa-beat ms-2'></i></Link>
            }
          </Col>
          <Col sm={12} md={6}>
            <img style={{marginTop:'100px'}} className='w-75' src={titleimg} alt="" />
          </Col>
        </Row>


      </div>

      {/* ALL PROJECTS */}
      <div className='all-projects mt-5'>
        <h1 className="text-center mb-5">Explore Our Projects</h1>
      <marquee scrollAmount={25}>
          <div className='d-flex justify-content-between'>
            {
            homeProjects?.length>0?homeProjects.map(project=>(
              <div className='me-5'>
              <ProjectCard project={project}/>
            </div>
            )):null
            }
            
          </div>
      </marquee>
      <div className='text-center mt-4 mb-5'><Link to={'/projects'}>View More Projects</Link></div>

      </div>
    </>
  )
}

export default Home