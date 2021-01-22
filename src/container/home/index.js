import React from 'react';
import Layout from '../../components/Layout';
import {Jumbotron, Row, Col, Container} from 'react-bootstrap';
//import './style.css';
import {NavLink} from 'react-router-dom'

const Home=(props)=>{
    
    return(
        <Layout sidebar>
            
            {/* <Jumbotron style={{margin: "5rem", background: "#fff"}} className="text-center">
                <h1>Welcome Admin Dashboard</h1>
                <p>This is the first time iam using react js to do a real life project and I am very sure that by the end of the project i shall have learn of things </p>
            </Jumbotron> */}
        </Layout>
    )
}

export default Home