import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import zonesRegistrationData from '../../../mocks/zones/zonesRegistrationData.json';
//Components
import {
    TitleCard,
    RankingCard,
    ProcessValidationCard
} from '../../../components';
//Styles
import {ZonesRegistrationContent, RankingsRow} from './Registration.styles';

const ZonesRegistration = () => {

    const RankingCardStructureData = [
        {
            heading: 'Alta de Comercio',
            subheading: 'Proceso Estructurado',
            columnTwo: 'ID',
            columnThree: 'Tipología',
            columnFour: 'Selección'
        },
        {
            heading: 'Alta de métodos de captura',
            subheading: 'Digital & Presencial',
            columnTwo: 'ID',
            columnThree: 'Tipología',
            columnFour: 'Selección'
        },
        {
            heading: 'Alta de aceptación',
            subheading: 'Selección del tipo de medio de pago',
            columnTwo: 'ID',
            columnThree: 'Tipología',
            columnFour: 'Selección'
        },
        {
            heading: 'Banco Pagador & Aspectos Legales',
            subheading: 'Selección de acreditación de Fondos & Formularios Legales',
            columnTwo: 'ID',
            columnThree: 'Tipología',
            columnFour: 'Selección'
        }
    ]

    const headerData = {
            heading: 'Validación de Procesos',
            subheading: 'Compruebe que todos los pasos estan validados'
        }
    

    return(
        <ZonesRegistrationContent>
            <TitleCard
                icon={<AddCircleIcon fontSize="large"/>}
                title="Proceso de alta - Captura de cobros"
                description="Proceso de alta"
                diary="Alta"
                weekly="Baja"
                monthly="Modificación"
            />
            <RankingsRow>
                {zonesRegistrationData.map((item, index) => {
                    return(
                        <RankingCard
                            key={index}
                            data={item}
                            structureData={RankingCardStructureData[index]}
                            buttonName={zonesRegistrationData[index].buttonName}
                        />
                    )
                })}
            </RankingsRow>
            <ProcessValidationCard
                heading={headerData.heading}
                subheading={headerData.subheading}
                header1="Tipología"
                header2="Fecha"
                header3="Validación"
                buttonName="Implementación"
            />
        </ZonesRegistrationContent>
    );
}

export default ZonesRegistration;