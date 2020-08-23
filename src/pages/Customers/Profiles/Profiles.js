import React, { useState } from 'react';
import ProfileForm from "../../../components/ProfileForm/ProfileForm";
import TitleCard from "../../../components/TitleCard/TitleCard";
import { CustomersProfilesContent} from "./Profiles.styles";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import profileForm from '../../../mocks/customers/profileForm.json';

const CustomersProfiles = () => {
    const [actionTrigger, setActionTrigger] = useState(null);

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }

    return (
        <CustomersProfilesContent>
            <TitleCard
                icon={<FingerprintIcon fontSize="large" />}
                title="Consulta de Perfiles"
                action="Generar consulta"
                onClick={() => handleClick()} />
            <ProfileForm formContent={profileForm} triggered={actionTrigger}/>
        </CustomersProfilesContent>

    )
}

export default CustomersProfiles;
