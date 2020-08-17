import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { PopupWrapper, Heading, List, IconWrapper, ListTitle, LoadingContent } from "./NavbarPopup.styles";
import Button from '../../components/Button/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PlayForWorkOutlinedIcon from '@material-ui/icons/PlayForWorkOutlined';

const NavbarPopup = ({ name, onClose }) => {
    const [heading, setHeading] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // this should be replaced by a useEffect hook to fetch from API (now: mocked data only)
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
                setData([
                    {
                        title: 'pendiente: tareas item 1'
                    },
                    {
                        title: 'pendiente: tareas item 2'
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
                                                <div>
                                                    <ListTitle>{item.title}</ListTitle>
                                                    <p>{item.description}</p>
                                                </div>
                                            </li>
                                        )
                                    }
                                    {
                                        name === 'Tareas' && (
                                            <li>
                                                <div>
                                                    <ListTitle>{item.title}</ListTitle>
                                                </div>
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
