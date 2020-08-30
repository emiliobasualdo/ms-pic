import React, { useState } from 'react';
import SummaryAccordionItem from '../SummaryAccordionItem/SumaryAccordionItem';
import { SquareProgressCircular, CircularProgressContainer } from '../../components';
import { AccordionContainer, AccordionItem, ActionParagraph, GreyLine, AnimatedLine, Item, CircularProgressCardsContainer, CirclesWrapper, CirclesOpacity } from './SummaryAccordion.styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import zonesProvincesCirclesData from '../../mocks/Zones/zonesProvincesCirclesData.json';

const SummaryAccordion = ({ accordionHeader, circlesData }) => {
    const [showFirstItem, setShowFirstItem] = useState(false);
    const [showSecondItem, setShowSecondItem] = useState(false);
    const [showThirdItem, setShowThirdItem] = useState(false);
    const [showFirstCircleItem, setShowFirstCircleItem] = useState(false);
    const [showSecondCircleItem, setShowSecondCircleItem] = useState(false);
    const [showThirdCircleItem, setShowThirdCircleItem] = useState(false);

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

    const handleClickFirstCircleItem = () => {
        setShowSecondCircleItem(false);
        setShowThirdCircleItem(false);
        setShowFirstCircleItem(!showFirstCircleItem);
    }

    const handleClickSecondCircleItem = () => {
        setShowFirstCircleItem(false);
        setShowThirdCircleItem(false);
        setShowSecondCircleItem(!showSecondCircleItem);
    }

    const handleClickThirdCircleItem = () => {
        setShowFirstCircleItem(false);
        setShowSecondCircleItem(false);
        setShowThirdCircleItem(!showThirdCircleItem);
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
            { circlesData === false && (
                <>
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
                </>
            )}
            { circlesData === true && (
                <>
                    <AccordionItem>
                        <Item onClick={() => handleClickFirstCircleItem()}>
                            { showFirstCircleItem ? <RemoveIcon /> : <AddIcon /> }
                            <ActionParagraph>{ accordionHeader === 'ProfilesLeft' ? 'CABA' : 'Entre Rios' }</ActionParagraph>
                        </Item>
                        <GreyLine>
                            { showFirstCircleItem && <AnimatedLine lineColor={ accordionHeader === 'ProfilesLeft' ? 'red' : 'green' }/> }
                        </GreyLine>
                        { showFirstCircleItem &&
                            <CirclesWrapper>
                                <CirclesOpacity>
                                    <CircularProgressCardsContainer>
                                        <SquareProgressCircular
                                            width="100%"
                                            buttonName="Ver todo"
                                        >
                                            { accordionHeader === 'ProfilesLeft' && zonesProvincesCirclesData['circlesContentOneRight'].map((item, index) => {
                                                return (
                                                    <CircularProgressContainer
                                                        key={index}
                                                        percentage={item.value}
                                                        progressDescription={item.title}
                                                        width="25%"
                                                        height="60%"
                                                        textColor="rgb(255, 0, 0)"
                                                        pathColor="rgb(255, 0, 0)"
                                                    />
                                                )
                                            })}
                                            { accordionHeader === 'ProfilesRight' && zonesProvincesCirclesData['circlesContentOneRight'].map((item, index) => {
                                                return (
                                                    <CircularProgressContainer
                                                        key={index}
                                                        percentage={item.value}
                                                        progressDescription={item.title}
                                                        width="25%"
                                                        height="60%"
                                                        textColor="rgb(255, 0, 0)"
                                                        pathColor="rgb(255, 0, 0)"
                                                    />
                                                )
                                            })}
                                        </SquareProgressCircular>
                                    </CircularProgressCardsContainer>
                                </CirclesOpacity>
                            </CirclesWrapper>
                        }
                    </AccordionItem>
                    <AccordionItem>
                        <Item onClick={() => handleClickSecondCircleItem()}>
                            { showSecondCircleItem ? <RemoveIcon /> : <AddIcon /> }
                            <ActionParagraph>{ accordionHeader === 'ProfilesLeft' ? 'Córdoba' : 'GBA' }</ActionParagraph>
                        </Item>
                        <GreyLine>
                            { showSecondCircleItem && <AnimatedLine lineColor={ accordionHeader === 'ProfilesLeft' ? 'red' : 'green' }/> }
                        </GreyLine>
                        { showSecondCircleItem &&
                        <CirclesWrapper>
                            <CirclesOpacity>
                                <CircularProgressCardsContainer>
                                    <SquareProgressCircular
                                        width="100%"
                                        buttonName="Ver todo"
                                    >
                                        { accordionHeader === 'ProfilesLeft' && zonesProvincesCirclesData['circlesContentTwoLeft'].map((item, index) => {
                                            return (
                                                <CircularProgressContainer
                                                    key={index}
                                                    percentage={item.value}
                                                    progressDescription={item.title}
                                                    width="25%"
                                                    height="60%"
                                                    textColor="rgb(255, 0, 0)"
                                                    pathColor="rgb(255, 0, 0)"
                                                />
                                            )
                                        })}
                                        { accordionHeader === 'ProfilesRight' && zonesProvincesCirclesData['circlesContentTwoRight'].map((item, index) => {
                                            return (
                                                <CircularProgressContainer
                                                    key={index}
                                                    percentage={item.value}
                                                    progressDescription={item.title}
                                                    width="25%"
                                                    height="60%"
                                                    textColor="rgb(255, 0, 0)"
                                                    pathColor="rgb(255, 0, 0)"
                                                />
                                            )
                                        })}
                                    </SquareProgressCircular>
                                </CircularProgressCardsContainer>
                            </CirclesOpacity>
                        </CirclesWrapper>
                        }
                    </AccordionItem>
                    <AccordionItem>
                        <Item onClick={() => handleClickThirdCircleItem()}>
                            { showThirdCircleItem ? <RemoveIcon /> : <AddIcon /> }
                            <ActionParagraph>{ accordionHeader === 'ProfilesLeft' ? 'Corrientes' : 'Santa Fe' }</ActionParagraph>
                        </Item>
                        <GreyLine>
                            { showThirdCircleItem && <AnimatedLine lineColor={ accordionHeader === 'ProfilesLeft' ? 'red' : 'green' }/> }
                        </GreyLine>
                        { showThirdCircleItem &&
                        <CirclesWrapper>
                            <CirclesOpacity>
                                <CircularProgressCardsContainer>
                                    <SquareProgressCircular
                                        width="100%"
                                        buttonName="Ver todo"
                                    >
                                        { accordionHeader === 'ProfilesLeft' && zonesProvincesCirclesData['circlesContentThreeLeft'].map((item, index) => {
                                            return (
                                                <CircularProgressContainer
                                                    key={index}
                                                    percentage={item.value}
                                                    progressDescription={item.title}
                                                    width="25%"
                                                    height="60%"
                                                    textColor="rgb(255, 0, 0)"
                                                    pathColor="rgb(255, 0, 0)"
                                                />
                                            )
                                        })}
                                        { accordionHeader === 'ProfilesRight' && zonesProvincesCirclesData['circlesContentThreeRight'].map((item, index) => {
                                            return (
                                                <CircularProgressContainer
                                                    key={index}
                                                    percentage={item.value}
                                                    progressDescription={item.title}
                                                    width="25%"
                                                    height="60%"
                                                    textColor="rgb(255, 0, 0)"
                                                    pathColor="rgb(255, 0, 0)"
                                                />
                                            )
                                        })}
                                    </SquareProgressCircular>
                                </CircularProgressCardsContainer>
                            </CirclesOpacity>
                        </CirclesWrapper>
                        }
                    </AccordionItem>
                </>
            )}
        </AccordionContainer>
    )
}

export default SummaryAccordion;
