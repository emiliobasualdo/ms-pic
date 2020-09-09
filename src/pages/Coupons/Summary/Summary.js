import React, {useState} from 'react';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import prepaidCunsumptionsSummary from '../../../mocks/coupons/prepaid&cunsumptionsSummary.json';
//Components
import {
    TitleCard,
    ProfileForm,
    MetabaseGraph
} from '../../../components';
//Styles
import {CouponsSummaryContent, LastContainer} from './Summary.styles';

const CouponsSummary = () => {

    const [actionTrigger, setActionTrigger] = useState(null);

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }

    return (
        <CouponsSummaryContent>
            <div style={{marginBottom: '2rem'}}>
                <TitleCard
                    icon={<ConfirmationNumberIcon fontSize="large"/>}
                    title="Cupones"
                    description="Resumen Prepago y Consumos"
                    search={true}
                />
                <ProfileForm formContent={prepaidCunsumptionsSummary} triggered={actionTrigger}/>
            </div>
            <LastContainer>
                <MetabaseGraph
                    title={"Resumen Cupones"}
                    graphId={"c180af24-cd13-4591-8d7a-aa2ffd265c37"}
                    width={"100%"} height={"100%"}
                    dashboard={true}
                />
            </LastContainer>
        </CouponsSummaryContent>
    );
}

export default CouponsSummary;