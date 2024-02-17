import React from 'react';

import styles from './Leistung.module.css';
import { getImageUrl } from '../Utils';

const Leistung = () => {
    return (
        <div id='leistung' className={styles.Leistung_container}>
            <h2 className={styles.Leistung_headline}>Schönste Portrait Fotografie</h2>
            <div className={styles.Service_container}>
            <div className={styles.Leistung_content}>
                <h3>leistung</h3>
                <p>
                Wir bieten unseren Kunden<br/>
                ein breites Spektrum an fotografischen Leistungen.<br/>
                Ob Aufnahmen für Privatpersonen oder für Unternehmen,<br/>
                lernen Sie unser Portfolio kennen.
                </p>
                <img className={styles.Leistung_Image} src={getImageUrl('./Leistung-Service/LeistungImage.jpg')} />
            </div>
            <div className={styles.Service_content}>
                <h3>service</h3>
                <p>
                Über die reine Fotografie hinaus bieten wir unseren Kunden<br/>
                weiterführende Dienstleistungen an. Bildbearbeitung oder Rahmung.<br/>
                bilden nur den Anfang. Welche Leistungen Sie bei uns erwarten<br/>
                können, erfahren Sie auf der Seite Service.
                </p>
                <img className={styles.Leistung_Image} src={getImageUrl('./Leistung-Service/ServiceImage.jpg')} />
            </div>
            </div>
        </div>
    );
};

export default Leistung;