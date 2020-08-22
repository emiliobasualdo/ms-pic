import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {BalanceReportsContent} from './Reports.styles';

const BalanceReports = () => {
    return(
        <BalanceReportsContent>
            <TitleCard
                icon={<LibraryBooksIcon fontSize="large"/>}
                title="Reportes"
                description="Información recurrentes"
                diary="Desde"
                weekly="Hasta"
                monthly=""
            />
        </BalanceReportsContent>
    );
}

export default BalanceReports;