import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signup} from '../../actions'

const SignUp=(props)=>{
        const [firstName, setFirstname]=useState("")
        const [lastName, setLastname]=useState("")
        const [email, setEmail]=useState("")
        const [password, setPassword]=useState("")
        const [error, setError]=useState("")
    const auth =useSelector(state=>state.auth)
    const user=useSelector(state=>state.user)
    const dispatch = useDispatch();

    const userSignup=(e)=>{
        e.preventDefault()
        const user={
            firstName, lastName, email, password
        }
        dispatch(signup(user));
    }
    if(auth.authenticate){
        return <Redirect to={'/signin'}/>
    }
    if(user.loading){
        return <h1>Loading....</h1>
    }
    return (
        <Layout>
            <Container>
                {user.message}
                <Row style={{marginTop:60}}>
                    <Col md={{span:6, offset:3}}>
                    <Form onSubmit={userSignup}>
                    <center><h1>REGISTRATION</h1></center>
                        <Row>
                            <Col md={6}>
                                <Input 
                                Label='First name'
                                placeHolder='First name'
                                value={firstName}
                                onChange={(e)=>setFirstname(e.target.value)}
                                />
                        
                            </Col>
                            <Col md={6}>
                            <Input 
                                Label='Last name'
                                placeHolder='Last name'
                                value={lastName}
                                onChange={(e)=>setLastname(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Input 
                                Label='Email'
                                placeHolder='Email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Input 
                                Label='Password'
                                placeHolder='Password'
                                type='password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                        />
                    <Button variant='secondary' type='submit'>
                        Submit
                    </Button>
                </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SignUp
