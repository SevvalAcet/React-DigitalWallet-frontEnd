import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ChoosingAnAccountItem from './choosing-an-account-item';

const MoneyTransfer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className='sending-account'>
                <label>Gönderen Hesap/Kart</label>
            </div>

            <div className='my-accounts d-flex align-items-center' variant="primary" onClick={handleShow}>
                <div className='icon d-flex justify-content-center align-items-center'>
                    <img src={require('../assets/img/wallet.png')} />
                </div>
                <div className="account d-flex flex-column">
                    <label>İsim Soyisim</label>
                    <label>******</label>
                    <label>9876</label>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Hesabınızı Seçiniz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="my-cards d-flex flex-column">
                        <ChoosingAnAccountItem />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MoneyTransfer
