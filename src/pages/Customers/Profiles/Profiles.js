import React, { useState } from 'react';
import ProfileForm from "../../../components/ProfileForm/ProfileForm";
import TitleCard from "../../../components/TitleCard/TitleCard";
import RankingCard from "../../../components/RankingCard/RankingCard";
import { CustomersProfilesContent, RankingsRow } from "./Profiles.styles";
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
            subheadingTwo: 'Todas las variables',
            columnOne: 'Perfil',
            columnTwo: 'Clientes',
            columnThree: '% VO',
            columnFour: 'Campaña'
        },
        {
            heading: 'Promociones',
            subheading: 'Ranking - Ahorros promedio por Cliente',
            subheadingTwo: 'Todas las variables',
            columnOne: 'Perfil',
            columnTwo: 'Clientes',
            columnThree: '%',
            columnFour: 'Campaña'
        },
        {
            heading: 'Consumo Promedio',
            subheading: 'Ranking - Volumen del Ticket Promedio por Cliente',
            subheadingTwo: 'Todas las variables',
            columnOne: 'Perfil',
            columnTwo: 'Clientes',
            columnThree: 'TIcket P.',
            columnFour: 'Campaña'
        },
        {
            heading: 'Transacciones Promedio',
            subheading: 'Ranking - Cantidad de Transacciones promedio por Cliente',
            subheadingTwo: 'Todas las variables',
            columnOne: 'Perfil',
            columnTwo: 'Clientes',
            columnThree: 'Txt P.',
            columnFour: 'Campaña'
        }
    ]

    return (
        <CustomersProfilesContent>
            <TitleCard
                icon={<FingerprintIcon fontSize="large" />}
                title="Consulta de Perfiles"
                action="Generar consulta"
                onClick={() => handleClick()}
            />
            <ProfileForm formContent={profileForm} triggered={actionTrigger}/>
            <TitleCard
                icon={<UpdateIcon fontSize="large"/>}
                title="Consultas recurrentes"
            />
            <RankingsRow>
                {profileRankings.map((item, index) => {
                    return(
                        <RankingCard
                            key={index}
                            data={item}
                            structureData={RankingCardStructureData[index]}
                            buttonName={profileRankings[index].buttonName}
                        />
                    )
                })}
            </RankingsRow>
        </CustomersProfilesContent>
    );
}

export default CustomersProfiles;