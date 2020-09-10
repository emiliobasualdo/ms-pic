import React, {useState} from 'react';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import advantageForm from '../../../mocks/coupons/advantageForm.json';
import {CouponsAdvantageContent} from './Advantage.styles';
//Components
import {
    TitleCard,
    ProfileForm
} from '../../../components';

const CouponsAdvantage = () => {

    const [actionTrigger, setActionTrigger] = useState(null);

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }

    return (
        <CouponsAdvantageContent>
            <div style={{marginBottom: '2rem'}}>
                <TitleCard
                    icon={<ConfirmationNumberIcon fontSize="large"/>}
                    title="Adelantamiento de Cupones"
                    description="Selecciones las variables"
                    action="Eventual"
                    onClick={() => handleClick()}
                />
                <ProfileForm formContent={advantageForm} triggered={actionTrigger}/>
            </div>
        </CouponsAdvantageContent>
    );
}

export default CouponsAdvantage;