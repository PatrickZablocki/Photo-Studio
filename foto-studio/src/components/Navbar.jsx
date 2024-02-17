import React from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../Utils';

const Navbar = () => {
    return (
        <div id='startseite' className={styles.Navbar_container}>
            <div className={styles.Navbar_content}>
            <img className={styles.Navbar_LogoImage} src={getImageUrl('./LogoImage/logo.png')} alt="" />
                <div className={styles.Navbar_list}>
                    <ul>
                        <li><a href="#startseite">Startseite</a></li>
                        <li><a href="#welcome">Leistungen</a></li>
                        <li><a href="#leistung">Über Uns</a></li>
                        <li><a href="#kontakt">Kontakt</a></li>
                        <li><a href="">impressum</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;