import React, {useState} from 'react';
import { NewPromotionsContainer } from "./New.styles";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import {ProfileForm, Table2, TitleCard} from "../../../components";
import newPromotionsForm from '../../../mocks/promotions/newPromotionsForm.json';
import newPromotionsTable from "../../../mocks/promotions/newPromotions.json";

const NewPromotions = () => {
    const [actionTrigger, setActionTrigger] = useState(null);
    const tableHeadings = ['ID', 'Cantidad de clientes', 'Clientes Impactados', 'Desde', 'Hasta', 'Descuento Asociado', '% Propio', '% Terceros', 'Est. R. Rate', 'Pieza', 'Mensaje', 'Selección'];

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }
    return (
        <NewPromotionsContainer>
            <TitleCard
                icon={ <FingerprintIcon fontSize="large" /> }
                title="Desarrollo de Campañas"
                action="Generación"
                borderLine={ true }
                onClick={() => handleClick()}
            />
            <ProfileForm formContent={ newPromotionsForm } triggered={ actionTrigger } />
            <Table2
                title="Resultados de Campañas"
                headings={tableHeadings}
                items={newPromotionsTable}
                threeButtons={true}
                firstButtonName="Subir"
                secondButtonName="Subir"
                thirdButtonName="Up"
            />
        </NewPromotionsContainer>
    )
}

export default NewPromotions;
