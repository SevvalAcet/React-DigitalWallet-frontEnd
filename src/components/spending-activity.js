import React from 'react'

const SpendingActivity = () => {
    return (
        <div className='spending-activity d-flex flex-row justify-content-between'>
            <label className='title'>Harcama Aktivitesi</label>
            <label className='date'>
                01-12 December 2020
                <img src={require('../assets/img/down.png')}></img>
            </label>
        </div>
    )
}

export default SpendingActivity
