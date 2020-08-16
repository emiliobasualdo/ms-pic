import React from 'react';
import { Card, Heading, AccordionsContainer } from './Summary.styles';
import SummaryAccordion from "../../../components/SummaryAccordion/SummaryAccordion";

const Summary = () => {
    return (
        <>
            <Card>
                <Heading>Total Cartera</Heading>
                <AccordionsContainer>
                    <SummaryAccordion accordionHeader="Volumen"/>
                    <SummaryAccordion accordionHeader="Cantidad"/>
                </AccordionsContainer>
            </Card>
        </>
    );
}

export default Summary;
