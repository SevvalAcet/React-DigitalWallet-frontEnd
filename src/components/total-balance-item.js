import React from 'react'

const TotalBalanceItem = ({ backgroundColor, moneyIcon, totalBalance }) => {
    return (
        <div style={{ backgroundColor }} className='total-balance-item d-flex flex-row justify-content-center align-items-center'>
            <div className='card-eleman'>
                <img src={moneyIcon} />
            </div>
            <div className='total-balance d-flex flex-column'>
                <label>Toplam Bakiye:</label>
                <label>{totalBalance}</label>
            </div>
        </div>
    )
}

export default TotalBalanceItem
