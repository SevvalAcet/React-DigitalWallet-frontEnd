import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <div className='login d-flex justify-content-center align-items-center'>
            <div className='login-item d-flex justify-content-center align-items-center'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicT">
                        <Form.Label>T.C. Kimlik/Müşteri Numaranız:</Form.Label>
                        <Form.Control type="" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control type="name" placeholder="" />
                    </Form.Group>
                    <Button className="btn" variant="primary" type="submit">
                        Giriş
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
