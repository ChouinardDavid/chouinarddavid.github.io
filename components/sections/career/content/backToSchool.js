import Paper from '@material-ui/core/Paper';
import styles from './../career.module.scss';

const BackToSchool = (props) => {
    const { content } = props;

    return (
        <Paper elevation={3} className={styles.backToSchool}>
            <h2 className={styles.poste}>{content.title}</h2>
            <h3 className={styles.dates}>{content.dates}</h3>
        </Paper>
    );
};

export default BackToSchool;
