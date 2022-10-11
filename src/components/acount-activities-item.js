import React from 'react'

const AccountActivitiesItem = ({ date, type, description, balance, currentBalance, color }) => {
    return (
        <div className='account-activities-item d-flex flex-column justify-content-center'>
            <div className='items d-flex align-items-center'>
                <div className='explanation d-flex flex-column'>
                    <label>{date}</label>
                    <label>{type}</label>
                    <label>{description}</label>
                </div>
                <div className='sum d-flex flex-column'>
                    <label style={{ color }}>{balance}</label>
                    <label>Güncel Bakiye:</label>
                    <label>{currentBalance}</label>
                </div>
            </div>
        </div>
    )
}

export default AccountActivitiesItem
