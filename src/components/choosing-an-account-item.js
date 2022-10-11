import React from 'react'

const ChoosingAnAccountItem = () => {
    return (
        <div className='choosing-an-account-item d-flex flex-row align-items-center justify-content-between'>
            <div className='d-flex flex-row align-items-center'>
                <div className='icon d-flex align-items-center justify-content-center'>
                    <img src={require('../assets/img/wallet.png')} />
                </div>
                <div className='information d-flex flex-column'>
                    <label>Personal Account</label>
                    <label>*******</label>
                    <label>9876</label>
                </div>
            </div>
            <div>
                <img src={require('../assets/img/correct.png')} />
            </div>
        </div>
    )
}

export default ChoosingAnAccountItem
