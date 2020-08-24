import React from 'react';
import Button from '../Button/Button';
import {StyledDiv, StyledP, StyledSpan} from '../ColumnData/ColumnData.styles';
import {
    LargeColumnDataContainer,
    Heading,
    IconContainer,
    TextContainer,
    TopText,
    BottomText,
    CirclePair,
    CircleItem
} from "./LargeColumnData.styles";
import CircularProgressCard from "../CircularProgressCard/CircularProgressCard";
import CircularProgress from "../CircularProgress/CircularProgress";

const LargeColumnData = (props) => {

    return(
        <LargeColumnDataContainer>
            <Heading>
                <IconContainer>{props.icon}</IconContainer>
                <TextContainer>
                    <TopText>{props.header}</TopText>
                    <BottomText>{props.subheader}</BottomText>
                </TextContainer>
            </Heading>
            {props.type === 'businessData' && (
                <>
                    <StyledDiv>
                        <StyledP>{props.commerceText}</StyledP>
                        <StyledSpan>{props.commerceAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.clientsText}</StyledP>
                        <StyledSpan>{props.clientsAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.volumeOpText}</StyledP>
                        <StyledSpan>{props.volumeOpAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.volumeCoText}</StyledP>
                        <StyledSpan>{props.volumeCoAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.volumeReText}</StyledP>
                        <StyledSpan>{props.volumeReAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.transactionsText}</StyledP>
                        <StyledSpan>{props.transactionsAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.vFloatText}</StyledP>
                        <StyledSpan>{props.vFloatAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.ticketsText}</StyledP>
                        <StyledSpan>{props.ticketsAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.averageTxtText}</StyledP>
                        <StyledSpan>{props.averageTxtAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.averageVoText}</StyledP>
                        <StyledSpan>{props.averageVoAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.averageTicketsText}</StyledP>
                        <StyledSpan>{props.averageTicketsAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.averageConsumptionText}</StyledP>
                        <StyledSpan>{props.averageConsumptionAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.averageTxtRText}</StyledP>
                        <StyledSpan>{props.averageTxtRAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.averageRechargeText}</StyledP>
                        <StyledSpan>{props.averageRechargeAmmount}</StyledSpan>
                    </StyledDiv>
                </>
            )}
            {props.type === 'zonesData' && (
                <>
                    <StyledDiv>
                        <StyledP>{props.commerceText}</StyledP>
                        <StyledSpan>{props.commerceAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneClientsText}</StyledP>
                        <StyledSpan>{props.zoneClientsAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneClientsPercentageText}</StyledP>
                        <StyledSpan>{props.zoneClientsPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneTransactionsText}</StyledP>
                        <StyledSpan>{props.zoneTransactionsAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneTransactionsPercentageText}</StyledP>
                        <StyledSpan>{props.zoneTransactionsPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneVolumeOpText}</StyledP>
                        <StyledSpan>{props.zoneVolumeOpAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneVolumeOpPercentageText}</StyledP>
                        <StyledSpan>{props.zoneVolumeOpPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneTicketsText}</StyledP>
                        <StyledSpan>{props.zoneTicketsAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneTicketsPercentageText}</StyledP>
                        <StyledSpan>{props.zoneTicketsPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneConsumptionText}</StyledP>
                        <StyledSpan>{props.zoneConsumptionAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneConsumptionPercentageText}</StyledP>
                        <StyledSpan>{props.zoneConsumptionPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneRechargesText}</StyledP>
                        <StyledSpan>{props.zoneRechargesAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneRechargesPercentageText}</StyledP>
                        <StyledSpan>{props.zoneRechargesPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.vRechargesText}</StyledP>
                        <StyledSpan>{props.vRechargesAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.vRechargesPercentageText}</StyledP>
                        <StyledSpan>{props.vRechargesPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneVFloatText}</StyledP>
                        <StyledSpan>{props.zoneVFloatAmmount}</StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledP>{props.zoneVFloatPercentageText}</StyledP>
                        <StyledSpan>{props.zoneVFloatPercentageAmmount}</StyledSpan>
                    </StyledDiv>
                </>
            )}
            {props.type === 'zonesCirclesData' && (
                <>
                    <CircularProgressCard
                        height="8rem"
                    >
                        {
                            <CirclePair>
                                <CircleItem>
                                    <CircularProgress percentage={props.valueF} pathColor={'pink'} textColor={'pink'} />
                                    <StyledP>{props.labelF}</StyledP>
                                </CircleItem>
                                <CircleItem>
                                    <CircularProgress percentage={props.valueM} pathColor={'blue'} textColor={'blue'}/>
                                    <StyledP>{props.labelM}</StyledP>
                                </CircleItem>
                            </CirclePair>
                        }
                    </CircularProgressCard>
                    <CircularProgressCard
                        height="8rem"
                    >
                        {
                            <CirclePair>
                                <CircleItem>
                                    <CircularProgress percentage={props.valueTraditionalOne} pathColor={'green'} textColor={'green'}/>
                                    <StyledP>{props.labelTraditionalOne}</StyledP>
                                </CircleItem>
                                <CircleItem>
                                    <CircularProgress percentage={props.valuePrepaidOne} pathColor={'green'} textColor={'green'}/>
                                    <StyledP>{props.labelPrepaidOne}</StyledP>
                                </CircleItem>
                            </CirclePair>
                        }
                    </CircularProgressCard>
                    <CircularProgressCard
                        height="8rem"
                    >
                        {
                            <CirclePair>
                                <CircleItem>
                                    <CircularProgress percentage={props.valueTraditionalTwo} pathColor={'pink'} textColor={'pink'}/>
                                    <StyledP>{props.labelTraditionalTwo}</StyledP>
                                </CircleItem>
                                <CircleItem>
                                    <CircularProgress percentage={props.valuePrepaidTwo} pathColor={'pink'} textColor={'pink'}/>
                                    <StyledP>{props.labelPrepaidTwo}</StyledP>
                                </CircleItem>
                            </CirclePair>
                        }
                    </CircularProgressCard>
                    <CircularProgressCard
                        height="8rem"
                    >
                        {
                            <CirclePair>
                                <CircleItem>
                                    <CircularProgress percentage={props.valueTraditionalThree} pathColor={'blue'} textColor={'blue'}/>
                                    <StyledP>{props.labelTraditionalThree}</StyledP>
                                </CircleItem>
                                <CircleItem>
                                    <CircularProgress percentage={props.valuePrepaidThree} pathColor={'blue'} textColor={'blue'}/>
                                    <StyledP>{props.labelPrepaidThree}</StyledP>
                                </CircleItem>
                            </CirclePair>
                        }
                    </CircularProgressCard>
                    <CircularProgressCard
                        height="8rem"
                    >
                        {
                            <CirclePair>
                                <CircleItem>
                                    <CircularProgress percentage={props.valueNew} pathColor={'green'} textColor={'green'}/>
                                    <StyledP>{props.labelNew}</StyledP>
                                </CircleItem>
                                <CircleItem>
                                    <CircularProgress percentage={props.valueCurrent} pathColor={'green'} textColor={'green'}/>
                                    <StyledP>{props.labelCurrent}</StyledP>
                                </CircleItem>
                            </CirclePair>
                        }
                    </CircularProgressCard>
                </>
            )}
            <Button buttonName={props.buttonName}/>
        </LargeColumnDataContainer>
    );
}

export default LargeColumnData;
