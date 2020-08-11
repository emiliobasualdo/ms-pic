import React from 'react';
import {
    CardContainer,
    CardTop,
    CardHeader,
    CardTabs,
    CardData
} from './Card.styles';

const Card = (props) => {
    return(
        <CardContainer key={props.key}>
            <CardTop>
                <div className="top">
                    <CardHeader>
                        {props.icon}
                        <div className="card-header__text">
                            <h2>{props.header}</h2>
                            <p>{props.paragraph}</p>
                        </div>
                    </CardHeader>
                    <div className="card__list">
                        <CardTabs>
                            <button><li>{props.diary}</li></button>
                            <button><li>{props.weekly}</li></button>
                            <button><li>{props.monthly}</li></button>
                        </CardTabs>
                        <span className="bottom-line" />
                    </div>
                </div>
            </CardTop>
            <CardData>
                <div className="clients">
                    <h2>{props.clientsAmmount}</h2>
                    <p>{props.clientsText}</p>
                </div>
                <div className="volumes-data">
                    <div className="volume-op">
                        <h2>{props.volumeOpAmmount}</h2>
                        <p>{props.volumeOpText}</p>
                    </div>
                    <div className="volume-co">
                        <h2>{props.volumeCoAmmount}</h2>
                        <p>{props.volumeCoText}</p>
                    </div>
                    <div className="volume-re">
                        <h2>{props.volumeReAmmount}</h2>
                        <p>{props.volumeReText}</p>
                    </div>
                    <div className="transactions">
                        <h2>{props.transactionsAmmount}</h2>
                        <p>{props.transactionsText}</p>
                    </div>
                    <div className="tickets">
                        <h2>{props.ticketsAmmount}</h2>
                        <p>{props.ticketsText}</p>
                    </div>
                </div>
            </CardData>
        </CardContainer>
    );
}

export default Card;