import React from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../components/title'
import AccountActivities from '../containers/account-activities'
import MoneyTransfer from '../containers/money-transfer'
import MyAccounts from '../containers/my-accounts'
import LeftMenu from './left-menu'

const PageContainer = () => {
    const { pageName } = useParams(); //App.js dosyasında bulunan pageName parametersini getirir.

    const returnPage = () => {
        switch (pageName) {
            case "money-transfer":
                return <MoneyTransfer />;
            case "account-activities":
                return <AccountActivities />
            case "my-accounts":
                return <MyAccounts />
            default:
                return "404";
        }
    }

    const returnTitle = () => {
        switch (pageName) {
            case "money-transfer":
                return "Para Transferi";
            case "account-activities":
                return "Hesap Hareketleri"
            case "my-accounts":
                return "Hesaplarım"
            default:
                return "404";
        }
    }

    return (
        <div className='page-container w-100 d-flex flex-row'>

            <div className='wrapper'>
                <Title
                    title={returnTitle()}
                />
                {returnPage()}
            </div>

        </div>
    )
}

export default PageContainer
