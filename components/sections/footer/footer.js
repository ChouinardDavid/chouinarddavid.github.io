import styles from './footer.module.scss';
import { SocialIcon } from 'react-social-icons';
import { Link } from '@material-ui/core';
import CopyToClipboardIcon from '../../utils/copyToClipboardIcon/copyToClipboardIcon';


const Footer = (props) => {
    const { labels, ...rest } = props;

    return (
        <div className={styles.content} id={labels.id} {...rest}>
            <img className={styles.image} src='/photoPerso3.jpg' />
            <div className={styles.contact}>
                <SocialIcon className={styles.icon} url='https://www.linkedin.com/in/david-chouinard/' />
                <SocialIcon className={styles.icon} url='https://github.com/ChouinardDavid' />
                <span className={styles.email}>{labels.email}</span>
                <CopyToClipboardIcon textToCopy={labels.email}></CopyToClipboardIcon>
            </div>
            <div className={styles.linksContent} >
                {
                    Object.keys(labels.sections).map((key, index) => {
                        return (
                            <a id={key} key={key} href={'#' + labels.sections[key].id} className={styles.link} >
                                {labels.sections[key].name}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Footer;


