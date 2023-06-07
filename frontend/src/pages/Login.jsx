import { React, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useLogin } from '../hooks/useLogin'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {

    const { login, isLoading, error } = useLogin()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(formData)
    }

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col md={6} lg={4}>
                        <h4 className="text-center mb-5"> SIGN IN </h4>
                        <Form onSubmit={handleSubmit}>
                            
                            {error && 
                                <div className="alert alert-danger mt-3" role="alert">
                                    {error}
                                </div>
                            }
                            
                            <Form.Group as={Row} className="mb-3">
                                <Col lg="12" className="mb-3">
                                    <label> Email </label>
                                    <Form.Control type="text" className="mt-1 border border-secondary" id="email" name="email" value={email} onChange={onChange} />
                                </Col>
                                <Col lg="12" className="mb-3">
                                    <label> Password </label>
                                    <Form.Control type="password" className="mt-1 border border-secondary" id="password" name="password" value={password} onChange={onChange} />
                                </Col>

                                <span> Not a member yet? <Link to="/sign-up"> Sign up for free </Link> </span>
                            </Form.Group>


                            <div className="d-flex justify-content-end">
                                <Button className="rounded-1" disabled={isLoading} variant="primary" type="submit">
                                    Sign In
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login