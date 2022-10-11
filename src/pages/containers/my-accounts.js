import React from 'react'
import MyAccountItem from '../../components/my-account-item'
import Search from '../../components/search'
import TotalBalanceItem from '../../components/total-balance-item'
import LeftMenu from '../layouts/left-menu'

const MyAccounts = () => {

    return (
        <div className='my-account h-100'>

            <LeftMenu />
            <Search />
            <MyAccountItem
                bank={"DenizBank"}
                iban={"TR1213242342344"}
                balance={"12343"}
                availableBalance={"10.000"}
            />


            <div className='right-card-container'>
                <TotalBalanceItem
                    backgroundColor="#32A7E2"
                    moneyIcon={require('../../assets/img/turkish-money.png')}
                    totalBalance="10.000"
                />
                <TotalBalanceItem
                    backgroundColor="#B548C6"
                    moneyIcon={require('../../assets/img/dollar-icon.png')}
                    totalBalance="20.000"
                />
                <TotalBalanceItem
                    backgroundColor="#FF8700"
                    moneyIcon={require('../../assets/img/euro-icon.png')}
                    totalBalance="20.000"
                />
            </div>
        </div>
    )
}

export default MyAccounts
