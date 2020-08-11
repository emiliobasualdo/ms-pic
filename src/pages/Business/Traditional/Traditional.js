import React from 'react';
import Card from '../../../components/Card/Card';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import traditionalBusinessData from '../../../mocks/business/traditional/traditionalBusiness.json';
import {TraditionalBusinessContainer} from './Traditional.styles';

const Traditional = () => {
    return (
        <TraditionalBusinessContainer>
            {traditionalBusinessData.map((item, index) => {
                return(
                    <Card
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
        </TraditionalBusinessContainer>
    );
}

export default Traditional;