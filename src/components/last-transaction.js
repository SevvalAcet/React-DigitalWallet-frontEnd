import React from 'react'
import TransactionInformation from './transaction-information'

const LastTransaction = () => {
    return (
        <div className='last-transaction'>
            <div className='title text-center'>
                <label>SON 3 İŞLEM</label>
            </div>
            <div>
                <TransactionInformation
                    amount={100}
                    bank={"Ziraat Bankası A.Ş"}
                    name={"Şevval Acet"}
                    iban={"TR12321314123213123"}
                    date={"4"}
                />
                <TransactionInformation
                    amount={200}
                    bank={"DenizBank"}
                    name={"Samet Özkan"}
                    iban={"TR1234543224234234"}
                    date={"5"}
                />
            </div>
        </div>
    )
}

export default LastTransaction
