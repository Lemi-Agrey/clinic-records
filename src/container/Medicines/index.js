import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { addMedicine } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Medicines = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const catergory = useSelector((state) => state.catergory);
  const medicine = useSelector((state) => state.medicine);

  const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("quantity", quantity);
    form.append("description", description);
    form.append("category", category);
    for (let pic of productPictures) {
      form.append("productPictures", pic);
    }
    dispatch(addMedicine(form));
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const createCatergoryList = (catergories, options = []) => {
    for (let catergory of catergories) {
      options.push({ value: catergory._id, name: catergory.name });
      if (catergory.children.length > 0) {
        createCatergoryList(catergory.children, options);
      }
    }
    return options;
  };
  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };
  console.log(productPictures);

  const renderMedicine = () => {
    return (
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Product's Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
                    medicine.medicines.length>0 ?
                    medicine.medicines.map(medicine=>
                  <tr>
                    <td>{medicine._id}</td>
                    <td>{medicine.name}</td>
                    <td>{medicine.price}</td>
                    <td>{medicine.quantity}</td>
                    <td>{medicine.description}</td>
                    <td>{medicine.category}</td>
                    
                  </tr>
                    ) : null
                  }
        </tbody>
      </Table>
    );
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Medicines</h3>
              <button variant="primary" onClick={handleShow}>
                Add
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>{renderMedicine()}</Col>
        </Row>
      </Container>
      <Modal
        handleClose={handleClose}
        modalTitle={"Add New medicine"}
        show={show}
      >
        <Input
          value={name}
          placeHolder={"Medicine Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          text={"text"}
          value={price}
          placeHolder={"Price"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          text={"text"}
          value={quantity}
          placeHolder={"Quantity"}
          onChange={(e) => setQuantity(e.target.value)}
        />
        {productPictures.length > 0
          ? productPictures.map((pic, index) => (
              <div key={index}>{pic.name}</div>
            ))
          : null}
        <input
          className="form-control"
          type="file"
          name="productPictures"
          onChange={handleProductPictures}
        />
        <Input
          text={"text"}
          value={description}
          placeHolder={"Price"}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>select catergory</option>
          {createCatergoryList(catergory.catergories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </Modal>
    </Layout>
  );
};

export default Medicines;
