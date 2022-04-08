import Button from '@material-ui/core/Button';
import styles from './header.module.scss';

const Header = (props) => {
    const { labels } = props;
    const onClick = () => {
        globalThis.window.open('/cv_David_Chouinard_Lavoie.pdf');
    };

    return (
        <div className={styles.container} id={labels.id}>
            <img className={styles.image} src='/toonPerso.jpg' />
            <div className={styles.description}>
                <div className={styles.name}>
                    <h1>David Chouinard-Lavoie</h1>
                    <h1>Développeur Web Full-Stack</h1>
                    <h1>Québec, Qc</h1>
                </div>
                {/* <div className={styles.cv}>
                    <span className={styles.cv_text}>
                        Consulter mon CV détaillé
                    </span>
                    <img className={styles.cv_img} src='./arrow.png'></img>
                    <div className={styles.cv_button}>
                        <Button
                            size='large'
                            variant='contained'
                            onClick={onClick}>
                            Ouvrir
                        </Button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
