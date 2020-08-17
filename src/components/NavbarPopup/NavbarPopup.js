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
    LoadingContent
} from "./NavbarPopup.styles";
import Button from '../../components/Button/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearWithValueLabel from "../LinearProgressWithLabel/LinealProgressWithLabel";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PlayForWorkOutlinedIcon from '@material-ui/icons/PlayForWorkOutlined';

const NavbarPopup = ({ name, onClose }) => {
    const [heading, setHeading] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // this should be replaced by a useEffect hook to fetch from API (now: mocked data only)
    // The data should only use the first three items so the popup has no need for scrolling
    useEffect(() => {
        setHeading(name);
        setLoading(true);
        const obtainData = setTimeout(() => {
            if (name === 'Mensajes') {
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
            if (name === 'Tareas') {
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
            if (name === 'Chat') {
                setData([
                    {
                        title: 'pendiente: componente chat'
                    }
                ]);
            }
            setLoading(false);
        }, 2000);
        return () => {
            clearTimeout(obtainData);
        }
    }, [name]);

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
                                <Link key={index} to="/" onClick={() => onClose()}>
                                    {
                                        name === 'Mensajes' && (
                                            <li>
                                                <IconWrapper>
                                                    {item.icon}
                                                </IconWrapper>
                                                <ListItemWrapper>
                                                    <ListTitle>{item.title}</ListTitle>
                                                    <ListDescription>{item.description}</ListDescription>
                                                </ListItemWrapper>
                                            </li>
                                        )
                                    }
                                    {
                                        name === 'Tareas' && (
                                            <li>
                                                <LinearProgressWrapper>
                                                    <LinearProgressDescription>{item.title}</LinearProgressDescription>
                                                    <LinearWithValueLabel value={item.value} />
                                                </LinearProgressWrapper>
                                            </li>
                                        )
                                    }
                                    {
                                        name === 'Chat' && (
                                            <li>
                                                <div>
                                                    <ListTitle>{item.title}</ListTitle>
                                                </div>
                                            </li>
                                        )
                                    }
                                </Link>
                            )
                        })}
                    </List>
                )}
            { !loading && <Button buttonName="Ver más" /> }
        </PopupWrapper>
    )
}

export default NavbarPopup;
