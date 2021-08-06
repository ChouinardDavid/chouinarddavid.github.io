import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './education.module.scss';

const Education = (props) => {
    const { labels } = props;

    return (
        <SectionForm id={labels.id} title={labels.title}>
            <div className={styles.diplomasContainer}>
                {labels.diplomas.map((diploma) => (
                    <Paper key={diploma.year} elevation={3}>
                        <div className={styles.diploma}>
                            <div className={styles.titleContainer}>
                                <span></span>
                                <h2 className={styles.title}>
                                    {diploma.title}
                                </h2>
                                <span
                                    className={`fa-stack fa-sm ${styles.domaineIcon}`}>
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        color={diploma.domaine.color}
                                        className='fa-stack-2x'
                                    />
                                    <FontAwesomeIcon
                                        icon={diploma.domaine.icon}
                                        color='black'
                                        className='fa-stack-1x'
                                    />
                                </span>
                            </div>
                            <h3>{diploma.year}</h3>
                            <h4>{diploma.school}</h4>
                        </div>
                    </Paper>
                ))}
            </div>
        </SectionForm>
    );
};

export default Education;
