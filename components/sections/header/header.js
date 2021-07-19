import React from 'react';
import styles from './header.module.scss';
import OpenPDFButton from '../../utils/openPDFButton/openPDFButton';


const Header = (props) => {
    const { labels, ...rest } = props;

    return (
        <div className={styles.content} id={labels.id} {...rest}>
            <img className={styles.myImage} src='/toonPerso2.jpg' />
            <div className={styles.description}>
                <h1>David Chouinard-Lavoie</h1>
                <h1>Developpeur Web Full-Stack</h1>
                <h1>Québec, Qc</h1>
                <div>
                    <h3>Consulter mon CV détaillé</h3>
                    <OpenPDFButton pdfFile="/cv_David_Chouinard_Lavoie.pdf">
                    </OpenPDFButton>
                </div>
            </div>
        </div>
    );
};

export default Header;


