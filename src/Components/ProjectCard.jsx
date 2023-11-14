import React, { useState } from 'react'
import { Card, Modal,Row,Col } from 'react-bootstrap'
function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Card className='shadow mb-5 btn'onClick={handleShow}>
      <Card.Img variant="top" height={'250px'} src="https://wp-content.solidprofessor.com/uploads/2019/03/design-challenge-ideas-jumbotron.jpg" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
       
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Row>
        <Col md={6}>
            <img  height={'250px'} src="https://wp-content.solidprofessor.com/uploads/2019/03/design-challenge-ideas-jumbotron.jpg" alt="" />
        </Col>
        <Col md={6}>
            <h2>Media Player</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, laboriosam. Dicta esse nemo incidunt ipsa velit id facere ipsam corporis officia, quod eos adipisci distinctio delectus necessitatibus pariatur nobis explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias quibusdam, animi porro, nulla inventore error optio quod sint accusamus necessitatibus recusandae commodi eaque quaerat iusto, beatae molestiae aliquam consectetur.</p>
         <p>Language used: <span className='fw-bolder'>HTML,CSS,React</span></p>
        </Col>
        
       </Row>
       <div className='mt-3'>
       <a href="https://github.com/jyothiprakash-00/veedio" target="_blank" className='me-3 btn'><i className='fa-brands fa-github fa-2x'></i></a>
        <a href="https://verdant-chaja-4629c9.netlify.app" target="_blank" className='me-3 btn'><i className='fa-solid fa-link fa-2x'></i></a>
       </div>
       </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard