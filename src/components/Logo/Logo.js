import React from 'react';

import burger from '../../assets/images/burger.png'
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={burger} alt="burger" />
    </div>
);

export default logo;