import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import zonesRegistrationData from '../../../mocks/zones/zonesRegistrationData.json';
import zonesRegistrationValidationData from '../../../mocks/zones/zonesRegistration&ValidationData.json';
//Components
import {
    TitleCard,
    Form,
    ProcessValidationCard
} from '../../../components';
//Styles
import {ZonesRegistrationContent, FormsContainer} from './Registration.styles';

const ZonesRegistration = () => {

    const RankingCardStructureData = [
        {
            heading: 'Alta de Comercio',
            subheading: 'Proceso Estructurado'
        },
        {
            heading: 'Alta de métodos de captura',
            subheading: 'Digital & Presencial'
        },
        {
            heading: 'Alta de aceptación',
            subheading: 'Selección del tipo de medio de pago'
        },
        {
            heading: 'Banco Pagador & Aspectos Legales',
            subheading: 'Selección de acreditación de Fondos & Formularios Legales'
        }
    ]

    const formHeaders = ["Tipología", "Fecha", "Selección"]

    const headerData = {
            heading: 'Validación de Procesos',
            subheading: 'Compruebe que todos los pasos estan validados'
        }
    
    const tableHeader = ["Tipología", "Fecha", "Validación"]

    const buttonsName = ["Comercio", "Captación", "Aceptación", "Archivos"]

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
            <FormsContainer>
                {zonesRegistrationData.map((item, index) => {
                    return(
                        <Form
                            key={index}
                            structureData={RankingCardStructureData[index]}
                            headers={formHeaders}
                            rows={item}
                            buttonName={buttonsName[index]}
                        />
                    )
                })}
            </FormsContainer>
            <ProcessValidationCard
                heading={headerData.heading}
                subheading={headerData.subheading}
                headers={tableHeader}
                rows={zonesRegistrationValidationData}
                buttonName="Implementación"
            />
        </ZonesRegistrationContent>
    );
}

export default ZonesRegistration;