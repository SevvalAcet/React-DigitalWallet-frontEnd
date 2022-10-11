import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ChoosingAnAccount from '../../components/choosing-an-account'
import LastTransaction from '../../components/last-transaction'
import Options from '../../components/options'

const MoneyTransfer = () => {
    return (
        <div className='d-flex flex-row money-transfer-container w-100'>
            <div className='form w-100'>
                <div className='container-wrapper'>
                    <Options />
                    <ChoosingAnAccount />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicIban">
                            <Form.Label>İBAN</Form.Label>
                            <Form.Control type="" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>İsim Soyisim</Form.Label>
                            <Form.Control type="name" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Tutar</Form.Label>
                            <Form.Control type="" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Açıklama</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Gönder
                        </Button>
                    </Form>
                </div>
            </div>
            <div className='last-transaction'>
                <LastTransaction />
            </div>
        </div>
    )
}

export default MoneyTransfer
