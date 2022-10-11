import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const MyAccountItem = ({ bank, iban, balance, availableBalance }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='my-account-item d-flex flex-row justify-content-center'>
      <div className='my-account-items d-flex flex-row justify-content-between align-items-center'>
        <div className='money-type-icon d-flex justify-content-center align-items-center'>
          <img src={require('../assets/img/turkish-lira.png')} />
        </div>
        <div className='part d-flex flex-column'>
          <label>{bank}</label>
          <label>{iban}</label>
        </div>
        <div className='part d-flex flex-column'>
          <label>Bakiye</label>
          <label>{balance}</label>
        </div>
        <div className='part d-flex flex-column'>
          <label>Kullanılabilir Bakiye</label>
          <label>{availableBalance}</label>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default MyAccountItem
