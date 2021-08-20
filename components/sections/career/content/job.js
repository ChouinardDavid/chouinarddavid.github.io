import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import styles from './../career.module.scss';

// const useStyles = makeStyles((theme) => ({
//     date: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         [theme.breakpoints.down(600)]: {
//             flexDirection: 'column',
//         },
//     },
// }));

const Job = (props) => {
    const { content } = props;
    // const classes = useStyles();

    return (
        <Paper elevation={3} className={styles.job}>
            <div className={styles.date}>
                <h2 className={styles.poste}>{content.poste}</h2>
                <h3 className={styles.dates}>
                    {content.dateDebut}
                    {content.dateFin && ' - ' + content.dateFin}
                </h3>
            </div>
            <h4 className={styles.employeur}>{content.employeur}</h4>

            <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: content.description }}></div>

            <div>
                {content.chips &&
                    content.chips.map((chip) => {
                        return (
                            <Chip
                                key={chip}
                                label={chip}
                                className={styles.chip}></Chip>
                        );
                    })}
            </div>
        </Paper>
    );
};

export default Job;
