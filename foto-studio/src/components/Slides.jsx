// import { useState, useEffect } from 'react';
// import './Slides.module.css';

// const Slides = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const images = [
//         'slider1.jpg',
//         'slider2.jpg',
//         'slider3.jpg',
//         'slider4.jpg'
//     ];

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//         }, 5000);
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div className="slides-container">
//             <img className="slide-image" src={`/SlidesImage/${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />
//         </div>
//     );
// };

// export default Slides;
import { useState, useEffect } from 'react';
import styles from './Slides.module.css';

const Slides = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'slider1.jpg',
        'slider2.jpg',
        'slider3.jpg',
        'slider4.jpg'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles["slides-container"]}>
            <img className={`${styles["slide-image"]} ${styles["custom-size"]}`} src={`/SlidesImage/${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />
        </div>
    );
};

export default Slides;