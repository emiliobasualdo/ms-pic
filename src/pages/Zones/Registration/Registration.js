import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {ZonesRegistrationContent} from './Registration.styles';

const ZonesRegistration = () => {
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
        </ZonesRegistrationContent>
    );
}

export default ZonesRegistration;