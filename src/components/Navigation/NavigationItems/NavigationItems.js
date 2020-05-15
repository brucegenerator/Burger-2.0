import React from 'react';

import styles from './NavigationItems.module.css'
import NavItem from '../NavItem/NavItem'

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavItem link='/' active>BurgerBuilder</NavItem>
        <NavItem link=''>Checkout</NavItem>
    </ul>
);

export default navigationItems;