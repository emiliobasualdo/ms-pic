import React, {useState} from 'react';

//Components
import {
    TitleCard,
    Table2
} from '../../../components';
import { CouponsContractsContainer } from './Contracts.styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import couponContracts from '../../../mocks/coupons/couponContracts.json';

const CouponsContracts = () => {
    const tableHeadings = ['Proveedor', 'Marca', 'Transacción', 'Frecuencia', 'Período', 'Fecha Inicial', 'Fecha Final', 'Tasa', 'Estado']
    return (
        <CouponsContractsContainer>
            <TitleCard
                icon={<FileCopyOutlinedIcon fontSize="large"/>}
                title="Contratos de Adelantamiento"
                description="Seguimiento - Renovación - Baja"
                search={true}
            />
            <Table2 headings={ tableHeadings } items={ couponContracts } buttonName="state" />
        </CouponsContractsContainer>
    )
}

export default CouponsContracts;
