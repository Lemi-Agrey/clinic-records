import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../../components/Layout'
import {addPatient} from '../../actions/patient.action'
import {Container, Row, Col, Table} from 'react-bootstrap'
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";

const Patients=(props)=> {
    const patient=useSelector((state)=>state.patient);
    const [name, setName]=useState("")
    const [age, setAge]=useState("")
    const [blood_grp, setBlood_grp]=useState("")
    const [temperature, setTemperature]=useState("")
    const [gender, setGender]=useState("")
    const [contact, setContact]=useState("")
    const [address, setAddress]=useState("")
    const [allegies, setAllegies]=useState("")
    const [next_of_kin, setNext_of_kin]=useState("")
    const [nok_address, setNok_address]=useState("")
    const [nok_contact, setNok_contact]=useState("")
    const [show,  setShow] = useState(false);
    const dispatch = useDispatch();

  const handleClose=()=>{
    const form=new FormData();
    form.append("name",name);
    form.append("age", age);
    form.append("blood_grp", blood_grp);
    form.append('temperature', temperature);
    form.append('gender', gender);
    form.append('allegies', allegies);
    form.append('contact', contact);
    form.append('address', address);
    form.append('next_of_kin', next_of_kin);
    form.append('nok_address', nok_address);
    form.append('nok_contact', nok_contact);
    dispatch(addPatient(form))
    setShow(false)
  }
  const handleShow=()=>setShow(true)
  const renderPatients=()=>{
    return (
      <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Patient's ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Blood group</th>
                    <th>Temp</th>
                    <th>Gender</th>
                    <th>Allergies</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Next of Kin</th>
                    <th>Address</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    patient.patients.length>0 ?
                    patient.patients.map(patient=>
                  <tr>
                    <td>{patient._id}</td>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.blood_grp}</td>
                    <td>{patient.temperature}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.allegies}</td>
                    <td>{patient.address}</td>
                    <td>{patient.contact}</td>
                    <td>{patient.next_of_kin}</td>
                    <td>{patient.nok_address}</td>
                    <td>{patient.nok_contact}</td>
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
              <h3>Patients</h3>
              <button variant="primary" onClick={handleShow}>
                Add a Patient
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {renderPatients()}
          </Col>
        </Row>
      </Container>
        <Modal handleClose={handleClose} modalTitle={"Add New Patient"} show={show}>
        <Input
          Label="Name"
          value={name}
          placeHolder={"Patient's Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          Label="Age"
          value={age}
          placeHolder={"Patient's age"}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          Label="Blood Group"
          value={blood_grp}
          placeHolder={"Blood Group"}
          onChange={(e) => setBlood_grp(e.target.value)}
        />
        <Input
          Label="Temperature"
          value={temperature}
          placeHolder={"Temperature in degree Celcius"}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <Input
          Label="Gender"
          value={gender}
          placeHolder={"Gender"}
          onChange={(e) => setGender(e.target.value)}
        />
        <Input
          Label="Contact"
          value={contact}
          placeHolder={"Contact"}
          onChange={(e) => setContact(e.target.value)}
        />
        <Input
          Label="Address"
          value={address}
          placeHolder={"address"}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          Label="Allergies"
          value={allegies}
          placeHolder={"Allegies"}
          onChange={(e) => setAllegies(e.target.value)}
        />
        <Input
          Label="Next of Kin"
          value={next_of_kin}
          placeHolder={"Next of Kin"}
          onChange={(e) => setNext_of_kin(e.target.value)}
        />
        <Input
          Label="Address"
          value={nok_address}
          placeHolder={"Address of Next of Kin"}
          onChange={(e) => setNok_address(e.target.value)}
        />
        <Input
          Label="Next of kin contact"
          value={nok_contact}
          placeHolder={"Next of kin contact"}
          onChange={(e) => setNok_contact(e.target.value)}
        />
        
      </Modal>
        </Layout>
    )
}

export default Patients;
