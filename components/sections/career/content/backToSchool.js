import styles from './../career.module.scss';
import Paper from '@material-ui/core/Paper';



const BackToSchool = (props) => {

    return (
        <Paper elevation={3} className={styles.backToSchool}>
            <h2 className={styles.poste}>Retour à l'école</h2>
            <h3 className={styles.dates}>févr. 2016 - déc. 2018</h3>
        </Paper>
    );
};

export default BackToSchool;