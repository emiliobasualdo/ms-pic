import React, {useState} from 'react';
import {ProfileForm, Form, TitleCard} from '../../../components';
import {CustomersProfilesContent, FormsContainer} from "./Profiles.styles";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import UpdateIcon from '@material-ui/icons/Update';
import profileForm from '../../../mocks/customers/profileForm.json';
import profileRankings from '../../../mocks/customers/profileRankings.json';

const CustomersProfiles = () => {
    const [actionTrigger, setActionTrigger] = useState(null);

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }

    const RankingCardStructureData = [
        {
            heading: 'Volumen operado',
            subheading: 'Ranking - Mayor volumen operado por Cliente',
            subheadingTwo: 'Todas las variables'
        },
        {
            heading: 'Promociones',
            subheading: 'Ranking - Ahorros promedio por Cliente',
            subheadingTwo: 'Todas las variables'
        },
        {
            heading: 'Consumo Promedio',
            subheading: 'Ranking - Volumen del Ticket Promedio por Cliente',
            subheadingTwo: 'Todas las variables'
        },
        {
            heading: 'Transacciones Promedio',
            subheading: 'Ranking - Cantidad de Transacciones promedio por Cliente',
            subheadingTwo: 'Todas las variables'
        }
    ]

    const formHeaders = [
        ["Perfil", "Clientes", "%VO", "Campaña"],
        ["Perfil", "Clientes", "%", "Campaña"],
        ["Perfil", "Clientes", "Ticket P.", "Campaña"],
        ["Perfil", "Clientes", "Txt P.", "Campaña"]
    ]

    return (
        <CustomersProfilesContent>
            <TitleCard
                icon={<FingerprintIcon fontSize="large" />}
                title="Consulta de Perfiles"
                action="Generar consulta"
                borderLine={true}
                onClick={() => handleClick()}
            />
            <ProfileForm formContent={profileForm} triggered={actionTrigger}/>
            <TitleCard
                icon={<UpdateIcon fontSize="large"/>}
                title="Consultas recurrentes"
            />
            <FormsContainer>
                {profileRankings.map((item, index) => {
                    return(
                        <Form
                            key={index}
                            structureData={RankingCardStructureData[index]}
                            headers={formHeaders[index]}
                            rows={item}
                            buttonName="Más Detalles"
                        />
                    )
                })}
            </FormsContainer>
        </CustomersProfilesContent>
    );
}

export default CustomersProfiles;
