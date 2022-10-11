import React from 'react'

const TransactionInformation = ({ date, name, bank, iban, amount }) => {
    return (
        <div className='transaction-information d-flex flex-row justify-content-center align-items-center'>
            <div className='content w-100 d-flex flex-row justify-content-center'>
                <div className='date d-flex align-items-center'>
                    <label>{date}</label>
                    <label>{date}</label>
                </div>
                <div className='info d-flex flex-column w-100'>
                    <label>{name}</label>
                    <label>{bank}</label>
                    <label>{iban}</label>
                </div>
                <div className='amount d-flex flex-column justify-content-center'>
                    <label>Tutar</label>
                    <label>{amount}</label>
                </div>
            </div>
        </div>
    )
}

export default TransactionInformation
