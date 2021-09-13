import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import styles from './../career.module.scss';

const Job = (props) => {
    const { content } = props;

    return (
        <Paper elevation={3} className={styles.job}>
            <div className={styles.title}>
                <h2 className={styles.poste}>{content.poste}</h2>
                <h2 className={styles.dates}>
                    {content.dateDebut}
                    {content.dateFin && ' - ' + content.dateFin}
                </h2>
            </div>
            <h3 className={styles.employeur}>{content.employeur}</h3>

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
