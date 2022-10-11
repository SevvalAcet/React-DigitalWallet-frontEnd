import React from 'react'

const LatestTransaction = ({ iconColor, text1, text2, text3, text4, imagePath }) => {
    return (
        <div className='latest-transaction d-flex align-items-center w-100'>
            <div className='d-flex align-items-center justify-content-between flex-row w-100'>
                <div style={{ color: iconColor }} className="icon d-flex align-items-center justify-content-center">
                    <img src={imagePath}></img>
                </div>
                <div className='text text4'>
                    {text1}
                </div>
                <div className='text text2'>
                    {text2}
                </div>
                <div className='text text2'>
                    {text3}
                </div>
                <div className='text text4'>
                    {text4}
                </div>
            </div>
        </div>
    )
}

export default LatestTransaction

