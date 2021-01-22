import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Layout from '../../components/Layout'
import {Container, Row, Col, Table} from 'react-bootstrap'
import Input from '../../components/UI/Input'
import {addProduct} from '../../actions/product.action'
import Modal from '../../components/UI/Modal'

const Products = (props) => {
    const [name, setName]=useState('');
    const [unit, setUnit]=useState('');
    const [price, setPrice]=useState('');
    const [description, setDescription]=useState('');
    const [expiry, setExpiry]=useState('');
    const [catergoryId, setCatergoryId]=useState('');
    const [quantity, setQuantity]=useState('');
    const [show, setShow] = useState(false);
    const catergory = useSelector((state) => state.catergory);
    const product=useSelector((state)=>state.product)
    const dispatch = useDispatch();

  const handleClose = () => {
    const form = new FormData();
    form.append('name', name);
    form.append('price', price);
    form.append('unit', unit)
    form.append('description', description);
    form.append('expiry', expiry);
    form.append('catergory', catergoryId);
    form.append('quantity', quantity);
    // for(let pic of productPictures){
    //     form.append('productPictures', pic)
    // }
    dispatch(addProduct(form))

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
//   const handleProductPictures=(e)=>{
//       setProductPictures([
//           ...productPictures,
//           e.target.files[0]
//       ]);
//   }
// console.log(productPictures);

const renderProduct=()=>{
  return (
    <Table responsive="sm" striped bordered hover>
              <thead>
                <tr>
                  <th>Product's Id</th>
                  <th>Name</th>
                  <th>Unit</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Expiry</th>
                  {/* <th>Category</th> */}
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {
                  product.products.length>0 ?
                  product.products.map(product=>
                <tr>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.unit}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.expiry}</td>
                  {/* <td>{product.catergory.name}</td> */}
                  <td>{product.quantity}</td>
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
              <h3>Product</h3>
              <button variant="primary" onClick={handleShow}>
                Add
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {renderProduct()}
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add new product"}
        >
        <Input
          Label="Name"
          value={name}
          placeHolder={"Product Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          Label="Unit"
          value={unit}
          placeHolder={"Unit of measure"}
          onChange={(e) => setUnit(e.target.value)}
        />
        <Input
          Label="Price"
          value={price}
          placeHolder={"Product price"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          Label="Description"
          value={description}
          placeHolder={"Product description"}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          Label="Expiry date"
          value={expiry}
          placeHolder={"Date of product expiry"}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <Input
          Label="Quanity"
          value={quantity}
          placeHolder={"quantity"}
          onChange={(e) => setQuantity(e.target.value)}
        />
        
        <select
          className="form-control"
          value={catergoryId}
          onChange={(e) => setCatergoryId(e.target.value)}
        >
          <option>select catergory</option>
          {createCatergoryList(catergory.catergories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {/* {
            productPictures.length>0 ? 
            productPictures.map((pic, index)=><div key={index}>{pic.name}</div>) : null
          }
          <Input type='file' name='productPictures' onChange={handleProductPictures}/> */}
      </Modal>
    </Layout>  
  );
};

export default Products
