import Paper from '@material-ui/core/Paper';
import styles from './../career.module.scss';

const BackToSchool = (props) => {
    const { content } = props;

    return (
        <Paper elevation={3} className={styles.backToSchool}>
            <div className={styles.title}>
                <h2 className={styles.poste}>{content.title}</h2>
                <h2 className={styles.dates}>{content.dates}</h2>
            </div>
        </Paper>
    );
};

export default BackToSchool;
