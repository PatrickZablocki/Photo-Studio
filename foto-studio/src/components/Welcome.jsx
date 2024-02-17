import React from 'react';

import styles from './Welcome.module.css';
import { getImageUrl } from '../Utils';

const Welcome = () => {
    return (
        <div id='welcome' className={styles.Welcome_container}>
                <h1 className={styles.Welcome_headline}>Willkommen</h1>
                <div className={styles.Welcome_contentOne}>
                    <img className={styles.Welcome_LogoImage1} src={getImageUrl('./HomeImage/Home1.png')} alt="" />
                    <img className={styles.Welcome_LogoImage2} src={getImageUrl('./HomeImage/Home2.png')} alt="" />
                    <img className={styles.Welcome_LogoImage3} src={getImageUrl('./HomeImage/Home3.png')} alt="" />
                </div>
                <div className={styles.Welcome_contentTwo}>
                    <img className={styles.Welcome_LogoImage4} src={getImageUrl('./HomeImage/Home4.png')} alt="" />
                    <img className={styles.Welcome_LogoImage5} src={getImageUrl('./HomeImage/Home5.png')} alt="" />
                    <img className={styles.Welcome_LogoImage6} src={getImageUrl('./HomeImage/Home6.png')} alt="" />
                </div>
                <div className={styles.Welcome_description}>
                    <p>Bilder halten Ihre Erinnerungen am Leben.<br/>
                    Fotoalben erzählen die unterschiedlichen Lebensabschnitte immer wieder<br/>
                    aufs Neue und werden gerne mit Freunden geteilt. Unsere Berufung ist es,<br/>
                    Ihnen diese schönen Momente noch viele Male zu schenken!<br/>
                    <br/>
                    Erfahren Sie alles über unsere Arbeit als Fotografen und zu unserem Portfolio.<br/>
                    Gerne halten wir auch Ihre besonderen Momente fest!
                    </p>
                </div>
        </div>
    );
};

export default Welcome;