import styles from './../career.module.scss';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    date: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down(600)]: {
            flexDirection: 'column',
        }
    },

}));


const Job = (props) => {
    const { emploi } = props
    const classes = useStyles();

    return (
        <Paper elevation={3} className={styles.job}>
            <div className={classes.date}>
                <h2 className={styles.poste}>{emploi.poste}</h2>
                <h3 className={styles.dates}>{emploi.dateDebut}{emploi.dateFin && ' - ' + emploi.dateFin}</h3>
            </div>
            <h4 className={styles.employeur}>{emploi.employeur}</h4>
            <ul>
                {
                    emploi.description.map((point, index) => {
                        return <li key={index}>{point}</li>
                    })
                }
            </ul>
            <div>
                {emploi.chips && emploi.chips.map((chip, index) => {
                    return <Chip key={chip} label={chip} className={styles.chip}></Chip>
                })}
            </div>
        </Paper>
    );
};
export default Job;