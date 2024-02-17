import React from 'react';

import styles from './Kontakt.module.css';
import { getImageUrl } from '../Utils';

const Kontakt = () => {
    return (
        <div id='kontakt' className={styles.Kontakt_container}>
            <h2>kontakt</h2><br/>
            <p>Wir freuen uns, wenn Sie uns direkt vor Ort besuchen </p>
            <div className={styles.Öffnungszeiten}>
                <div className={styles.Studio_container}>
                <h3>Hier finden Sie uns:</h3><br/>
                <h4>Portraitstudio Groos</h4><br/>
                <p>
                Hauptstr. 10A<br />
                40597 Düsseldorf Benrath
                </p><br/>
                <br/>
                <h3>Öffnungszeiten</h3><br/>
                <h4>Montag - Freitag</h4><br/>
                <p>
                09:30 Uhr - 13:30 Uhr<br/>
                14:30 Uhr - 18:30 Uhr<br/>
                </p>
                <h4>Samstag</h4><br/>
                <p>
                10:00 Uhr - 14:00 Uhr<br/>
                und nach Verinbarung
                </p>
                </div>
                <div className={styles.Studio_content}>
                <img className={styles.Studio_Image} src={getImageUrl('./KontaktImage/kontaktbild.png')}/>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;