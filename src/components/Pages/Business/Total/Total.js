import React from 'react';
import { Card, CardTop, CardHeader, CardTabs, CardData } from './TotalStyles';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import MobileFriendlyOutlinedIcon from '@material-ui/icons/MobileFriendlyOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';


const Total = () => {

    // data mockeada
    const totalHeaderData = [
        {
            icon: <MonetizationOnOutlinedIcon className="card-header__icon" />,
            header: 'Negocio Total',
            paragraph: 'Principales indicadores',
            diary: 'Diaria',
            weekly: 'Semanal',
            monthly: 'Mensual',
            clientsAmmount: 68092,
            clientsText: 'Clientes',
            volumeOpAmmount: 408773.203,
            volumeOpText: 'Volumen Operado',
            volumeCoAmmount: 245940.927,
            volumeCoText: 'Volumen Consumo',
            volumeReAmmount: 408773.203,
            volumeReText: 'Volumen Operado',
            transactionsAmmount: 318918,
            transactionsText: '# Transacciones',
            ticketsAmmount: 183755,
            ticketsText: '# Tickets',
        },
        {
            icon: <MobileFriendlyOutlinedIcon className="card-header__icon" />,
            header: 'Negocio Prepago',
            paragraph: 'Principales indicadores',
            diary: 'Diaria',
            weekly: 'Semanal',
            monthly: 'Mensual',
            clientsAmmount: 56326,
            clientsText: 'Clientes',
            volumeOpAmmount: 319299.238,
            volumeOpText: 'Volumen Operado',
            volumeCoAmmount: 156465.963,
            volumeCoText: 'Volumen Consumo',
            volumeReAmmount: 162796.173,
            volumeReText: 'Volumen Operado',
            transactionsAmmount: 267169,
            transactionsText: '# Transacciones',
            ticketsAmmount: 132006 ,
            ticketsText: '# Tickets',
        },
        {
            icon: <PaymentOutlinedIcon className="card-header__icon" />,
            header: 'Negocio Tradicional',
            paragraph: 'Principales indicadores',
            diary: 'Diaria',
            weekly: 'Semanal',
            monthly: 'Mensual',
            clientsAmmount: 11766,
            clientsText: 'Clientes',
            volumeOpAmmount: 89474.965,
            volumeOpText: 'Volumen Operado',
            volumeCoAmmount: 89474.965,
            volumeCoText: 'Volumen Consumo',
            volumeReAmmount: 0,
            volumeReText: 'Volumen Operado',
            transactionsAmmount: 51749,
            transactionsText: '# Transacciones',
            ticketsAmmount: 51749,
            ticketsText: '# Tickets',
        }
    ]

    return (
        <>
            {totalHeaderData.map((item, index) => {
                return (
                    <Card key={index}>
                        <CardTop>
                            <div className="top">
                                <CardHeader>
                                    {item.icon}
                                    <div className="card-header__text">
                                        <h2>{ item.header }</h2>
                                        <p>{ item.paragraph }</p>
                                    </div>
                                </CardHeader>
                                <div className="card__list">
                                    <CardTabs>
                                        <button><li>{ item.diary }</li></button>
                                        <button><li>{ item.weekly }</li></button>
                                        <button><li>{ item.monthly }</li></button>
                                    </CardTabs>
                                    <span className="bottom-line" />
                                </div>
                            </div>
                        </CardTop>
                        <CardData>
                            <div className="clients">
                                <h2>{ item.clientsAmmount }</h2>
                                <p>{ item.clientsText }</p>
                            </div>
                            <div className="volumes-data">
                                <div className="volume-op">
                                    <h2>{ item.volumeOpAmmount }</h2>
                                    <p>{ item.volumeOpText }</p>
                                </div>
                                <div className="volume-co">
                                    <h2>{ item.volumeCoAmmount }</h2>
                                    <p>{ item.volumeCoText }</p>
                                </div>
                                <div className="volume-re">
                                    <h2>{ item.volumeReAmmount }</h2>
                                    <p>{ item.volumeReText }</p>
                                </div>
                                <div className="transactions">
                                    <h2>{ item.transactionsAmmount }</h2>
                                    <p>{ item.transactionsText }</p>
                                </div>
                                <div className="tickets">
                                    <h2>{ item.ticketsAmmount }</h2>
                                    <p>{ item.ticketsText }</p>
                                </div>
                            </div>
                        </CardData>
                    </Card>
                )
            })}
        </>
    )
}

export default Total;
