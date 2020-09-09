import React from 'react';
import Button from "../Button/Button";
import Checkbox from '@material-ui/core/Checkbox';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import {
    MainContainer,
    CardHeader,
    IconContainer,
    Table,
    TextContainer,
    Title,
    SecondaryText,
    StyledTd
} from './Form.styles';

const Form = ({structureData, headers, rows, buttonName}) => {
    const handleChange = () => {
        console.log('checked');
    }

    return(
        <MainContainer>
            <CardHeader>
                <IconContainer>
                    <PlayCircleOutlineOutlinedIcon fontSize="large" />
                </IconContainer>
                <TextContainer>
                    <Title>{structureData.heading}</Title>
                    <SecondaryText>
                        <h3>{structureData.subheading}</h3>
                        <p>{structureData.subheadingTwo}</p>
                    </SecondaryText>
                </TextContainer>
            </CardHeader>
            <Table>
                <thead>
                    <tr>
                        {
                            headers.map((item, index) => {
                                return <th key={index}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        Object.values(row).map((eachRow, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    {typeof eachRow !== 'boolean' && (
                                                        <StyledTd>{eachRow}</StyledTd>
                                                    )}
                                                    {typeof eachRow === 'boolean' && (
                                                        <StyledTd>
                                                            {<Checkbox
                                                                color="primary"
                                                                type="checkbox"
                                                                onChange={() => handleChange()}
                                                            />}
                                                        </StyledTd>
                                                    )}
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button buttonName={buttonName} isSubmit={true} margin="0" />
        </MainContainer>
    );
}

export default Form;