import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import {
    PopupWrapper,
    Heading,
    List,
    IconWrapper,
    ListItemWrapper,
    ListTitle,
    ListDescription,
    LinearProgressWrapper,
    LinearProgressDescription,
    PopupInput,
    FormIconWrapper,
    PopupForm,
    LoadingContent
} from "./NavbarPopup.styles";
import Button from '../../components/Button/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearWithValueLabel from "../LinearProgressWithLabel/LinealProgressWithLabel";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PlayForWorkOutlinedIcon from '@material-ui/icons/PlayForWorkOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NavbarPopup = ({ popupType, onClose }) => {
    const [heading, setHeading] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState('');

    // this should be replaced by a useEffect hook to fetch from API (now: mocked data only)
    // The data should only use the first three items so the popup has no need for scrolling
    useEffect(() => {
        setHeading(popupType);
        setLoading(true);
        const obtainData = setTimeout(() => {
            if (popupType === 'Mensajes') {
                setData([
                    {
                        title: 'Acreditación Pendiente',
                        description: 'Ir al Balance -> Pendientes',
                        icon: <MonetizationOnOutlinedIcon fontSize="large" />
                    },
                    {
                        title: 'Banco Santander acreditado',
                        description: 'Acreditación en cuenta',
                        icon: <AccountBalanceWalletOutlinedIcon fontSize="large" />
                    },
                    {
                        title: 'Cupones rechazados',
                        description: 'Ir a cupones -> Rechazados',
                        icon: <PlayForWorkOutlinedIcon fontSize="large"/>
                    }
                ]);
            }
            if (popupType === 'Tareas') {
                // This should be passed to LinearProgressDescription and LinearWithvalueLabel below
                setData([
                    {
                        title: 'Acreditación Pago',
                        value: 95
                    },
                    {
                        title: 'Recarga en Efectivo',
                        value: 85
                    },
                    {
                        title: 'Transferencia en efectivo',
                        value: 66
                    }
                ]);
            }
            if (popupType === 'Chat') {
                setData([
                    {
                        title: 'pendiente: componente chat'
                    }
                ]);
            }
            setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(obtainData);
        }
    }, [popupType]);

    const handleSearchUser = (e) => {
        e.preventDefault();
        console.log('Submitted');
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    return (
        <PopupWrapper>
            <Heading>{ heading }</Heading>
                { loading ? (
                    <LoadingContent>
                        <CircularProgress color="primary" />
                    </LoadingContent>
                ) : (
                    <List>
                        {data.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {
                                        popupType === 'Mensajes' && (
                                            <Link to="/" onClick={() => onClose()}>
                                                <li>
                                                    <IconWrapper>
                                                        {item.icon}
                                                    </IconWrapper>
                                                    <ListItemWrapper>
                                                        <ListTitle>{item.title}</ListTitle>
                                                        <ListDescription>{item.description}</ListDescription>
                                                    </ListItemWrapper>
                                                </li>
                                            </Link>
                                        )
                                    }
                                    {
                                        popupType === 'Tareas' && (
                                            <Link to="/" onClick={() => onClose()}>
                                                <li>
                                                    <LinearProgressWrapper>
                                                        <LinearProgressDescription>{item.title}</LinearProgressDescription>
                                                        <LinearWithValueLabel value={item.value} />
                                                    </LinearProgressWrapper>
                                                </li>
                                            </Link>
                                        )
                                    }
                                    {
                                        popupType === 'Chat' && (
                                            <div>
                                                <PopupForm>
                                                    <FormIconWrapper><ArrowBackIcon/></FormIconWrapper>
                                                    <PopupInput
                                                        onChange={(e) => handleInputChange(e)}
                                                        type="text"
                                                        name="name"
                                                        placeholder="Buscar personas" />
                                                    <Button
                                                        buttonName="Buscar"
                                                        isSubmit={true}
                                                        isDisabled={!inputText}
                                                        onButtonClicked={(e) => handleSearchUser(e)} />
                                                </PopupForm>
                                            </div>
                                        )
                                    }
                                </React.Fragment>
                            )
                        })}
                    </List>
                )}
            { !loading && <Button buttonName="Ver más" isSubmit={false} isDisabled={false} /> }
        </PopupWrapper>
    )
}

export default NavbarPopup;
