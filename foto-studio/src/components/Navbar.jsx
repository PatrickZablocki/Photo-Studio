import React from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../Utils';

const Navbar = () => {
    return (
        <div className={styles.Navbar_container}>
            <div className={styles.Navbar_content}>
            <img className={styles.Navbar_LogoImage} src={getImageUrl('./LogoImage/logo.png')} alt="" />
                <div className={styles.Navbar_list}>
                    <ul>
                        <li><a href="">Startseite</a></li>
                        <li><a href="">Leistungen</a></li>
                        <li><a href="">Über Uns</a></li>
                        <li><a href="">Kontakt</a></li>
                        <li><a href="">Impressum</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;