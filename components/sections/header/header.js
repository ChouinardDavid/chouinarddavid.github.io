import React from 'react';
import styles from './header.module.scss';
import Button from '@material-ui/core/Button';


const Header = (props) => {
    const { labels, ...rest } = props;
    const onClick = () => { window.open("/cv_David_Chouinard_Lavoie.pdf"); };

    return (
        <div className={styles.content} id={labels.id} {...rest}>
            <img className={styles.myImage} src='/toonPerso2.jpg' />
            <div className={styles.description}>
                <h1>David Chouinard-Lavoie</h1>
                <h1>Developpeur Web Full-Stack</h1>
                <h1>Québec, Qc</h1>
                <div className={styles.consultCV}>
                    <span className={styles.consultCV_text}>Consulter mon CV détaillé</span>
                    <img className={styles.consultCV_img} src="./arrow.png"></img>
                    <div className={styles.consultCV_button}>
                        <Button
                            size='large'
                            variant="contained"
                            onClick={onClick}
                            {...rest}
                        >
                            Ouvrir
                        </Button >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;


