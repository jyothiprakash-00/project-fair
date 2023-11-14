import React ,{useState} from 'react'
import { Collapse } from 'react-bootstrap'

function MyProfile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='  mt-5'>
     <div className='d-flex border rounded p-3 justify-content-between'> 
    <h2> profile</h2>
    <button onClick={() => setOpen(!open)} className="btn btn-outline-info"><i class="fa-solid fa-chevron-down fa-beat-fade"></i></button>
    </div>
   <Collapse in={open} >
      <div className="row shadow p-5 justify-content-center mt-3">
        {/* upload picture */}
        <label className='text-center'>
          <input  style={{display:'none'}} type="file" />
          <img height={'200px'} width={'200px'}  src="https://img.freepik.com/free-vector/cute-woman-with-braids_1308-150614.jpg?size=626&ext=jpg&ga=GA1.1.1313597649.1698210608&semt=ais" alt=" upload picture " />
        </label>
        <div className="mt-3">
          <input type="text" className='form-control' placeholder='Github ' />
        </div>
        <div className="mt-3">
          <input type="text" className='form-control' placeholder='LinkedIn ' />
        </div>
        <div className="mt-3 text-center d-grid">
          <button className="btn btn-warning">Update</button>
        </div>
      </div>
   </Collapse>
        
    </div>
  )
}

export default MyProfile