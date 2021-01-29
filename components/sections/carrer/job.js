import styles from './career.module.scss';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    date: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
        },
    },

}));


const Job = (props) => {
    const { emploi } = props
    const classes = useStyles();

    return (
        <Paper elevation={3} className={styles.card}>
            <div className={styles.title}>
                <h3>{emploi.poste}</h3>
                <h3 className={classes.date}>{emploi.dateDebut}{emploi.dateFin && ' - ' + emploi.dateFin}</h3>
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