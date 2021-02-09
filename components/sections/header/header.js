import React from 'react';
import styles from './header.module.scss';
import TitleLabel from '../../utils/titleLabel/titleLabel';


const Header = (props) => {
    const { labels, ...rest } = props;

    return (
        <div className={styles.content} id={labels.id} {...rest}>
            <div className={styles.titleDiv}>
                <img className={styles.myImage} src='/photoPerso.png' />
                <TitleLabel className={styles.headerTitle} titleName={labels.title} />
            </div>
        </div>
    );
};

export default Header;


