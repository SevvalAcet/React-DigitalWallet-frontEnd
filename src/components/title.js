import React from 'react'

const Title = ({ title }) => {
    return (
        <div className='title-container d-flex align-items-center'>
            <label className='title'>
                {title}
            </label>
        </div>
    )
}

export default Title
