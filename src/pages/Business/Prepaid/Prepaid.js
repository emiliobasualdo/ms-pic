import React from 'react';
import Card2 from '../../../components/Card/Card';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import {PrepaidBusinessContainer} from './Prepaid.styles';
import prepaidBusinessData from '../../../mocks/business/prepaid/prepaidBusiness.json';

const Prepaid = () => {
    return(
        <PrepaidBusinessContainer>
            {prepaidBusinessData.map((item, index) => {
                return(
                    <Card2
                        key={index}
                        icon={<PaymentOutlinedIcon className="card-header__icon"/>}
                        header={item.header}
                        paragraph={item.paragraph}
                        diary={item.diary}
                        weekly={item.weekly}
                        monthly={item.monthly}
                        clientsAmmount={item.clientsAmmount}
                        volumeOpAmmount={item.volumeOpAmmount}
                        volumeOpText={item.volumeOpText}
                        volumeCoAmmount={item.volumeCoAmmount}
                        volumeCoText={item.volumeCoText}
                        volumeReAmmount={item.volumeReAmmount}
                        volumeReText={item.volumeReText}
                        transactionsAmmount={item.transactionsAmmount}
                        transactionsText={item.transactionsText}
                        ticketsAmmount={item.ticketsAmmount}
                        ticketsText={item.ticketsText}
                    />
                )
            })}
        </PrepaidBusinessContainer>
    )
}

export default Prepaid;