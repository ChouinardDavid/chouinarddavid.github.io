import styles from './career.module.scss';
import Paper from '@material-ui/core/Paper';




const Job = (props) => {

    const { emploi } = props

    return (
        <Paper elevation={3} className={styles.card}>
            <div className={styles.title}>
                <h3>{emploi.poste}</h3>
                <h4>{emploi.dateDebut} {emploi.dateFin && '- ' + emploi.dateFin}</h4>
            </div>
            <h4 className={styles.employeur}>{emploi.employeur}</h4>
            <ul>
                {
                    emploi.description.map((point, index) => {
                        return <li key={index}>{point}</li>
                    })
                }
            </ul>
        </Paper>
    );
};
export default Job;
