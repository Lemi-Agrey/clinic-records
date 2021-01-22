import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {addCatergory} from '../../actions'
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";

const Catergory = (props) => {
  const catergory = useSelector((state) => state.catergory);
  const [catergoryName, setCatergoryName] = useState("");
  const [parentCatergoryId, setParentCatergoryId] = useState("");
  const [catergoryImage, setCatergoryImage] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    const form = new FormData();
    form.append("name", catergoryName);
    form.append("parentId", parentCatergoryId);
    form.append("catergoryImage", catergoryImage);
    dispatch(addCatergory(form));
    setCatergoryName("");
    setParentCatergoryId("");
    //   const cat={
    //       catergoryName,
    //       parentCatergoryId,
    //       catergoryImage
    //   };
    //console.log(cat)
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const renderCatergories = (catergories) => {
    let myCategories = [];
    for (let catergory of catergories) {
      myCategories.push(
        <li key={catergory.name}>
          {catergory.name}
          {catergory.children.length > 0 ? (
            <ul>{renderCatergories(catergory.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };
  const createCatergoryList = (catergories, options = []) => {
    for (let catergory of catergories) {
      options.push({ value: catergory._id, name: catergory.name });
      if (catergory.children.length > 0) {
        createCatergoryList(catergory.children, options);
      }
    }
    return options;
  };
  const handleCatergoryImage = (e) => {
    setCatergoryImage(e.target.files[0]);
  };
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Catergory</h3>
              <button variant="primary" onClick={handleShow}>
                Add
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderCatergories(catergory.catergories)}</ul>
          </Col>
        </Row>
      </Container>
      <Modal handleClose={handleClose} modalTitle={"Add New Catergory"} show={show}>
        <Input
          value={catergoryName}
          placeHolder={"Catergory Name"}
          onChange={(e) => setCatergoryName(e.target.value)}
        />

        <select
          className="form-control"
          value={parentCatergoryId}
          onChange={(e) => setParentCatergoryId(e.target.value)}
        >
          <option>select catergory</option>
          {createCatergoryList(catergory.catergories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          name="catergoryImage"
          onChange={handleCatergoryImage}
        />
      </Modal>
    </Layout>
  );
};

export default Catergory;
