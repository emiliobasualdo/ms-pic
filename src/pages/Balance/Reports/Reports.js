import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
//Components
import {
    TitleCard,
    MetabaseGraph
} from '../../../components';
//Styles
import {BalanceReportsContent, LastContainer} from './Reports.styles';

const BalanceReports = () => {
    return(
        <BalanceReportsContent>
            <TitleCard
                icon={<LibraryBooksIcon fontSize="large"/>}
                title="Reportes"
                description="Información recurrentes"
                search={true}
            />
            <LastContainer>
                <MetabaseGraph
                    title={"Reportes Balance"}
                    graphId={"6a05725b-3dae-4b6b-bb1e-6163d4264484"}
                    width={"100%"} height={"100%"}
                    dashboard={true}
                />
            </LastContainer>
        </BalanceReportsContent>
    );
}

export default BalanceReports;