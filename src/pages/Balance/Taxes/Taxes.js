import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
//Components
import {
    TitleCard,
    MovementsColumnData,
    Table2
} from '../../../components';
//Styles
import {BalanceTaxesContent, MovementsWrapper} from './Taxes.styles';
//Mock
import totalTaxes from '../../../mocks/balance/totalTaxes.json';
import detailedTaxes from '../../../mocks/balance/detailedTaxes.json';

const BalanceTaxes = () => {

    const tableHeadings = [
        'Fecha',
        'Arancel',
        'IVA C.F.A. (21%)',
        'Dto. F. O.',
        'IVA D.F.O. (10.5%)',
        'II.BB',
        'Desc. Bancario',
        'Total Retenciones',
        ''
    ]

    return(
        <BalanceTaxesContent>
            <TitleCard
                icon={<MonetizationOnIcon fontSize="large"/>}
                title="Impuestos"
                description="Posición consolidada"
                search={true}
            />
            <MovementsWrapper>
                <MovementsColumnData
                    title="Retenciones"
                    subtitle="Detalle de movimientos"
                    movements={totalTaxes}
                />
                <Table2
                    title="Últimos Movimientos"
                    subtitle="Detalle de movimientos"
                    headings={tableHeadings}
                    buttonName="Detalle"
                    items={detailedTaxes}
                />
            </MovementsWrapper>
        </BalanceTaxesContent>
    );
}

export default BalanceTaxes;