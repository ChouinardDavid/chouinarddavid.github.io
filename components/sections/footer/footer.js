import { SocialIcon } from 'react-social-icons';
import CopyToClipboardIcon from '../../utils/copyToClipboardIcon/copyToClipboardIcon';
import styles from './footer.module.scss';

const Footer = (props) => {
    const { labels } = props;

    return (
        <div className={styles.container} id={labels.id}>
            <img className={styles.image} src={labels.image} />
            <div className={styles.contact}>
                <div className={styles.socialIcons}>
                    {labels.socialLinks.map((link) => {
                        return (
                            <SocialIcon
                                key={link}
                                className={styles.icon}
                                url={link}
                            />
                        );
                    })}
                </div>
                <div className={styles.emailContent}>
                    <span className={styles.email}>{labels.email}</span>
                    <CopyToClipboardIcon
                        textToCopy={labels.email}></CopyToClipboardIcon>
                </div>
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
