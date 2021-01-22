import React from 'react'
import Header from '../Header/index'
import {Container, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import './style.css'

const Layout=(props)=> {
    return (
        <>
            <Header/>
            {
                props.sidebar ? 
                <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                        <ul>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/catergory'}>Catergory</NavLink></li>
                            <li><NavLink to={'/products'}>Products</NavLink></li>
                            <li><NavLink to={'/medicine'}>Medicine</NavLink></li>
                            <li><NavLink to={'/orders'}>Orders</NavLink></li>
                            <li><NavLink to={'/doctors'}>Doctors</NavLink></li>
                            <li><NavLink to={'/patients'}>Patients</NavLink></li>
                            <li><NavLink to={'/lab'}>Laboratory</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={10} style={{marginLeft: "auto", paddingTop: "60px"}}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
            : props.children
            }
            
        </>
    )
}

export default Layout
