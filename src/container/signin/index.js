import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import {login} from '../../actions'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'


const SignIn=(props)=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')
    const auth =useSelector(state=>state.auth)

    
    const dispatch = useDispatch();

    
    const userLogin=(e)=>{ 
        e.preventDefault()
        const user={
         email, password
        } 
        dispatch(login(user));
    }
    if(auth.authenticate){
        return <Redirect to={'/'}/>
    }
    return (
        <Layout>
            <Container>
                <Row style={{marginTop:60}}>
                    <Col md={{span:6, offset:3}}>
                    <Form onSubmit={userLogin}>

                        <center><h1>LOGIN</h1></center>
                    <Input 
                                Label='Email'
                                placeHolder='Email'
                                type='email'
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

export default SignIn
