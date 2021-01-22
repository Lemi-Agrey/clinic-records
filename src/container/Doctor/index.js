import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../../components/Layout'
import {addDoctor} from '../../actions'
import {Container, Row, Col, Table} from 'react-bootstrap'
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";

const Doctor=(props)=> {
    
    const [name, setName]=useState("")
    const [gender, setGender]=useState("")
    const [address, setAddress]=useState("")
    const [status, setStatus]=useState("")
    const [contact, setContact]=useState("")
    const [email, setEmail]=useState("")
    const [time_available, setTime_available]=useState("")
    const [occupation, setOccupation]=useState("")
    const [show,  setShow] = useState(false);
    const doctor=useSelector((state)=>state.doctor);
    const dispatch = useDispatch();

  const handleClose=()=>{
    const form=new FormData();
    form.append('name', name);
    form.append('gender', gender);
    form.append('address', address);
    form.append('status', status);
    form.append('contact', contact);
    form.append('email', email);
    form.append('time_available', time_available);
    form.append('occupation', occupation);
    dispatch(addDoctor(form))
    setShow(false)
  }
  const handleShow=()=>setShow(true)
  const renderDoctors=()=>{
    return (
      <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Doctor's Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Time Available</th>
                    <th>Occupation</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    doctor.doctors.length>0 ?
                    doctor.doctors.map(doctor=>
                  <tr>
                    <td>{doctor._id}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.gender}</td>
                    <td>{doctor.address}</td>
                    <td>{doctor.status}</td>
                    <td>{doctor.contact}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.time_available}</td>
                    <td>{doctor.occupation}</td>
                  </tr>
                    ) : null
                  }
                  
                </tbody>
              </Table>
    )
  }
    
    return (
        <Layout sidebar>
          <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Doctors</h3>
              <button variant="primary" onClick={handleShow}>
                Add a doctor
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {renderDoctors()}
          </Col>
        </Row>
      </Container>
        <Modal handleClose={handleClose} modalTitle={"Add New Doctor"} show={show}>
        <Input
          Label="Name"
          value={name}
          placeHolder={"Doctor's Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          Label="Gender"
          value={gender}
          placeHolder={"Gender"}
          onChange={(e) => setGender(e.target.value)}
        />
        <Input
          Label="Address"
          value={address}
          placeHolder={"Doctor's address"}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          Label="Status"
          value={status}
          placeHolder={"Status"}
          onChange={(e) => setStatus(e.target.value)}
        />
        <Input
          Label="Contact"
          value={contact}
          placeHolder={"Contact"}
          onChange={(e) => setContact(e.target.value)}
        />
        <Input
          Label="Email"
          value={email}
          placeHolder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          Label="Availability time"
          value={time_available}
          placeHolder={"Time of availability"}
          onChange={(e) => setTime_available(e.target.value)}
        />
        <Input
          Label="Occupation"
          value={occupation}
          placeHolder={"Occupation"}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </Modal>
        </Layout>
    )
}

export default Doctor
