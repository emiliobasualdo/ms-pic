import React from 'react';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import MobileFriendlyOutlinedIcon from '@material-ui/icons/MobileFriendlyOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import totalBusinessData from '../../../mocks/business/total/totalBusiness.json';
import Card2 from '../../../components/Card/Card';
import {TotalBusinessContainer} from './Total.styles';

const Total = () => {

    const icons = {
        icon1: <MonetizationOnOutlinedIcon className="card-header__icon"/>,
        icon2: <MobileFriendlyOutlinedIcon className="card-header__icon"/>,
        icon3: <PaymentOutlinedIcon className="card-header__icon"/>
    }

    return(
        <TotalBusinessContainer>
            {totalBusinessData.map((item, index) => {
                return(
                    <Card2
                        key={index}
                        icon={icons[`icon${index + 1}`]}
                        header={item.header}
                        paragraph={item.paragraph}
                        diary={item.diary}
                        weekly={item.weekly}
                        monthly={item.monthly}
                        clientsAmmount={item.clientsAmmount}
                        clientsText={item.clientsText}
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
        </TotalBusinessContainer>
    );
}

export default Total;
