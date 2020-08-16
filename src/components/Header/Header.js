import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import logo from '../../assets/img/simplelogo.png';
import { Link } from "@reach/router";
import { LeftSide, BadgeAfter, BadgeAfterTwo } from './Header.styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NavbarPopup from "../NavbarPopup/NavbarPopup";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import BallotIcon from '@material-ui/icons/Ballot';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import GridOnIcon from '@material-ui/icons/GridOn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const drawerWidth = 240;
const DrawerStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'hidden',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState('/');
    const [openNotifications, setOpenNotifications] = useState(false);
    const [openTasks, setOpenTasks] = useState(false);
    const [openChat, setOpenChat] = useState(false);

    useEffect(() => {
        setLocation('negocio');
    }, []);

    const classes = DrawerStyles();
    const theme = useTheme();

    const sidebarData = [
        {
            path: 'negocio',
            icon: <HomeIcon />,
            textContent: 'Negocio'
        },
        {
            path: 'clientes',
            icon: <EmailIcon />,
            textContent: 'Clientes'
        },
        {
            path: 'zonas',
            icon: <PlaceIcon />,
            textContent: 'Zonas'
        },
        {
            path: 'balance',
            icon: <ShowChartIcon />,
            textContent: 'Balance'
        },
        {
            path: 'cupones',
            icon: <ViewCarouselIcon />,
            textContent: 'Cupones'
        },
        {
            path: 'servicios',
            icon: <BallotIcon />,
            textContent: 'Servicios'
        },
        {
            path: 'promociones',
            icon: <GridOnIcon />,
            textContent: 'Promociones'
        },
        {
            path: 'informes',
            icon: <AssignmentIndIcon />,
            textContent: 'Informes'
        }
    ]

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleNavigation = (path) => {
        setLocation(path);
        handleDrawerClose();
    }

    const toggleNotifications = () => {
        setOpenNotifications(!openNotifications);
        setOpenTasks(false);
        setOpenChat(false);
    }

    const toggleTasks = () => {
        setOpenTasks(!openTasks);
        setOpenNotifications(false);
        setOpenChat(false);
    }

    const toggleChat = () => {
        setOpenChat(!openChat);
        setOpenNotifications(false);
        setOpenTasks(false);
    }

    return (
        <>
            <AppBar
                position="static"
                style={{ backgroundColor: '#000' }}>
                <Container maxWidth="lg">
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <LeftSide>
                            <IconButton
                                edge="start"
                                className={clsx(classes.menuButton, open && classes.hide)}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link to="negocio" onClick={ () => handleNavigation('negocio') }>
                                <img src={logo} style={{ width: '100px' }} alt="Más Simple logo"/>
                            </Link>
                        </LeftSide>
                        <div>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <SearchIcon />
                            </IconButton>
                            <IconButton
                                aria-label="show 15 new notifications"
                                color="inherit"
                                style={{ position: 'relative' }}
                                onClick={() => toggleNotifications()}>
                                <Badge badgeContent={15}>
                                    <NotificationsIcon />
                                </Badge>
                                <BadgeAfter />
                                <BadgeAfterTwo />
                            </IconButton>
                            <IconButton color="inherit" onClick={() => toggleTasks()}>
                                <AssignmentIcon />
                            </IconButton>
                            <IconButton color="inherit" onClick={() => toggleChat()}>
                                <ChatIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            { openNotifications && <NavbarPopup name="notifications" /> }
            { openTasks && <NavbarPopup name="tasks" /> }
            { openChat && <NavbarPopup name="chat" /> }

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {sidebarData.map((navItem, index) => (
                        <React.Fragment key={index}>
                            <Link
                                to={navItem.path}
                                onClick={() => handleNavigation(navItem.path)}
                                style={{ textDecoration: 'none' }}
                            >
                                <ListItem
                                    button>
                                    <ListItemIcon style={{ color: navItem.path === location ? '#e46a76' : '#333' }}>{navItem.icon}</ListItemIcon>
                                    <ListItemText style={{ color: navItem.path === location ? '#e46a76' : '#333' }} primary={navItem.textContent} />
                                </ListItem>
                            </Link>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default Header;
