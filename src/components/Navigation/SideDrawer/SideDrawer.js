import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop';
import Auxiliary from '../../../HOC/Auxiliary';


const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];

    if(props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Auxiliary>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;