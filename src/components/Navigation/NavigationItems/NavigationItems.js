import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    const isAdmin = localStorage.getItem("userType") === "ADMIN"
    return <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/charts">Charts</NavigationItem>
        <NavigationItem link="/about-us">About Us</NavigationItem>
        <NavigationItem link="/contact-us">Contact Us</NavigationItem>
        {isAdmin ? <NavigationItem link="/users">Users</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
};

export default navigationItems;