import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import {addLab} from '../../actions'

const Lab = (props) => {
  const [name, setName] = React.useState('');
  const [test1, setTest1] = React.useState('');
  const [test2, setTest2] = React.useState('');
  const [test3, setTest3] = React.useState('');
  const [findings, setFindings] = React.useState('');
  const [show, setShow] = React.useState(false);
  const lab=useSelector(state=>state.lab)
  const dispatch = useDispatch()

  const handleClose = () => {
    // const form=new FormData();
    // console.log(form)
    // form.append("name", name);
    // form.append("test1", test1);
    // form.append("test2", test2);  
    // form.append("test3", test3);
    // form.append("findings", findings);
    const data={name, test1, test2, test3, findings}
    console.log(data)
    
    dispatch(addLab(data))
    setShow(false)
  };
  //const form = new FormData();

 

  const handleShow = () => setShow(true);
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Laboratory</h3>
              <button variant="primary" onClick={handleShow}>
                Add
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul></ul>
          </Col>
        </Row>
      </Container>
      <Modal
        handleClose={handleClose}
        modalTitle={"Add New Laboratory Test"}
        show={show}
      >
        <Input
          Label="Name"
          value={name}
          placeHolder={"Lab Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          Label="Test-1"
          value={test1}
          placeHolder={"Test 1"}
          onChange={(e) => setTest1(e.target.value)}
        />
        <Input
          Label="Test-2"
          value={test2}
          placeHolder={"Test 2"}
          onChange={(e) => setTest2(e.target.value)}
        />
        <Input
          Label="Test-3"
          value={test3}
          placeHolder={"Test 3"}
          onChange={(e) => setTest3(e.target.value)}
        />

        <textarea
        className="form-control"
          value={findings}
          placeHolder={"Findings"}
          onChange={(e) => setFindings(e.target.value)}
        />
      </Modal>
    </Layout>
  );
};

export default Lab;
