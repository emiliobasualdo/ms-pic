import React, { useState } from 'react';
import SummaryAccordionItem from '../SummaryAccordionItem/SumaryAccordionItem';
import { AccordionContainer, AccordionItem, ActionParagraph, GreyLine, AnimatedLine, Item } from './SummaryAccordion.styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const SummaryAccordion = ({ accordionHeader }) => {
    const [showFirstItem, setShowFirstItem] = useState(false);
    const [showSecondItem, setShowSecondItem] = useState(false);
    const [showThirdItem, setShowThirdItem] = useState(false);

    const handleClickFirstItem = () => {
        setShowSecondItem(false);
        setShowThirdItem(false);
        setShowFirstItem(!showFirstItem);
    }

    const handleClickSecondItem = () => {
        setShowFirstItem(false);
        setShowThirdItem(false);
        setShowSecondItem(!showSecondItem);
    }

    const handleClickThirdItem = () => {
        setShowFirstItem(false);
        setShowSecondItem(false);
        setShowThirdItem(!showThirdItem);
    }

    // Estos objetos deberian ser armados al recibir la data de la API
    const tableContentOne = {
        headerOne: 'Variables',
        headerTwo: 'Mensual',
        headerThree: 'Semanal',
        headerFour: 'Anual',
        firstRowName: 'Volumen Actual',
        firstRowFirstAmmount: '$ 408774203',
        firstRowSecondAmmount: '$ 102193551',
        firstRowThirdAmmount: '$ 13625807',
        secondRowName: 'Volumen -1',
        secondRowFirstAmmount: '$ 359721298',
        secondRowSecondAmmount: '$ 88089389',
        secondRowThirdAmmount: '$ 11990710',
        thirdRowName: 'Variación',
        thirdRowFirstAmmount: '12 %',
        thirdRowSecondAmmount: '13 %',
        thirdRowThirdAmmount: '12 %',
    }

    const tableContentTwo = {
        headerOne: 'Variables',
        headerTwo: 'Mensual',
        headerThree: 'Semanal',
        headerFour: 'Anual',
        firstRowName: 'Cantidad Actual',
        firstRowFirstAmmount: '68092',
        firstRowSecondAmmount: '17023',
        firstRowThirdAmmount: '2270',
        secondRowName: 'Cantidad -1',
        secondRowFirstAmmount: '57878',
        secondRowSecondAmmount: '14299',
        secondRowThirdAmmount: '2020',
        thirdRowName: 'Variación',
        thirdRowFirstAmmount: '15 %',
        thirdRowSecondAmmount: '16 %',
        thirdRowThirdAmmount: '11 %',
    }

    return (
        <AccordionContainer>
            <h3>{accordionHeader}</h3>
            <AccordionItem>
                <Item onClick={() => handleClickFirstItem()}>
                    { showFirstItem ? <RemoveIcon /> : <AddIcon /> }
                    <ActionParagraph>{ accordionHeader === 'Volumen' ? 'Volumen Operador' : 'Clientes' }</ActionParagraph>
                </Item>
                <GreyLine>
                    { showFirstItem && <AnimatedLine lineColor={ accordionHeader === 'Volumen' ? 'red' : 'green' }/> }
                </GreyLine>
                { showFirstItem && <SummaryAccordionItem
                    rowsContent={ accordionHeader === 'Volumen' ? tableContentOne : tableContentTwo }
                    style={{ marginTop: '30px' }}>Item escondido</SummaryAccordionItem> }
            </AccordionItem>
            <AccordionItem>
                <Item onClick={() => handleClickSecondItem()}>
                    { showSecondItem ? <RemoveIcon /> : <AddIcon /> }
                    <ActionParagraph>{ accordionHeader === 'Volumen' ? 'Volumen de Recargas' : 'Transacciones' }</ActionParagraph>
                </Item>
                <GreyLine>
                    { showSecondItem && <AnimatedLine lineColor={ accordionHeader === 'Volumen' ? 'red' : 'green'} /> }
                </GreyLine>
                { showSecondItem && <SummaryAccordionItem
                    rowsContent={ accordionHeader === 'Volumen' ? tableContentOne : tableContentTwo }
                    style={{ marginTop: '30px' }}>Item escondido</SummaryAccordionItem> }
            </AccordionItem>
            <AccordionItem>
                <Item onClick={() => handleClickThirdItem()}>
                    { showThirdItem ? <RemoveIcon /> : <AddIcon /> }
                    <ActionParagraph>{ accordionHeader === 'Volumen' ? 'Consumos' : 'Tickets' }</ActionParagraph>
                </Item>
                <GreyLine>
                    { showThirdItem && <AnimatedLine lineColor={ accordionHeader === 'Volumen' ? 'red' : 'green'} /> }
                </GreyLine>
                { showThirdItem && <SummaryAccordionItem
                    rowsContent={ accordionHeader === 'Volumen' ? tableContentOne : tableContentTwo }
                    style={{ marginTop: '30px' }}>Item escondido</SummaryAccordionItem> }
            </AccordionItem>
        </AccordionContainer>
    )
}

export default SummaryAccordion;
