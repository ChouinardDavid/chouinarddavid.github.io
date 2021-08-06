import { SocialIcon } from 'react-social-icons';
import CopyToClipboardIcon from '../../utils/copyToClipboardIcon/copyToClipboardIcon';
import styles from './footer.module.scss';

const Footer = (props) => {
    const { labels } = props;

    return (
        <div className={styles.container} id={labels.id}>
            <img className={styles.image} src='/photoPerso3.jpg' />
            <div className={styles.contact}>
                <SocialIcon
                    className={styles.icon}
                    url='https://www.linkedin.com/in/david-chouinard/'
                />
                <SocialIcon
                    className={styles.icon}
                    url='https://github.com/ChouinardDavid'
                />
                <span className={styles.email}>{labels.email}</span>
                <CopyToClipboardIcon
                    textToCopy={labels.email}></CopyToClipboardIcon>
            </div>
            <div className={styles.linksContent}>
                {Object.keys(labels.sections).map((key) => {
                    return (
                        <a
                            key={key}
                            href={'#' + labels.sections[key].id}
                            className={`${styles.link} specialLinkEffect`}>
                            {labels.sections[key].name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
