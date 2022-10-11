import React from 'react'
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ iconColor, text, imagePath, to }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(to)}
        >
            <div className='d-flex flex-row menu-item align-items-center'>
                <div style={{ backgroundColor: iconColor }} className='d-flex icon align-items-center justify-content-center'>
                    <img src={imagePath}></img>
                </div>
                <div className='text'>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default MenuItem
