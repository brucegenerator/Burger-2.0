import React from 'react';

import styles from './NavigationItems.module.css'
import NavItem from '../NavItem/NavItem'

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavItem link='/'>BurgerBuilder</NavItem>
        <NavItem link='/orders'>Orders</NavItem>
    </ul>
);

export default navigationItems;