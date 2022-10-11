import React from 'react'


const UserAvatar = () => {
    return (
        <div className='d-flex flex-row user-avatar w-100 align-items-center'>
            <div className='avatar'>
                <img src={require('../assets/img/avatar.png')} />
            </div>
            <div className='information'>
                <label> Şevval</label>
                <label>sevvalacet1134@gmail.com</label>
            </div>
            <div className='settings d-flex align-items-center justify-content-center'>
                <img src={require('../assets/img/setting.png')} />
            </div>
        </div>
    )
}

export default UserAvatar
