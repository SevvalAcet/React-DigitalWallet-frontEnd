import React from 'react'
import Title from '../../components/title'
import AccountActivitiesItem from '../../components/acount-activities-item'

const AccountActivities = () => {
    return (
        <div className='account-activities'>
            <div className='d-flex flex-column  w-100'>
                <AccountActivitiesItem
                    date={"12.05.2022 17.52"}
                    type={"Taksitli Nakit Avans"}
                    description={"Ototmatik Tahsilat"}
                    balance={"100 TL"}
                    currentBalance={"300 TL"}
                    color={"#005AAA"}
                />
                <AccountActivitiesItem
                    date={"12.05.2022 17.52"}
                    type={"Taksitli Nakit Avans"}
                    description={"Ototmatik Tahsilat"}
                    balance={"-100 TL"}
                    currentBalance={"300 TL"}
                    color={"#FB0102"}
                />
                <AccountActivitiesItem
                    date={"12.05.2022 17.52"}
                    type={"Taksitli Nakit Avans"}
                    description={"Ototmatik Tahsilat"}
                    balance={"100 TL"}
                    currentBalance={"300 TL"}
                    color={"#005AAA"}
                />
            </div>
        </div>
    )
}

export default AccountActivities
