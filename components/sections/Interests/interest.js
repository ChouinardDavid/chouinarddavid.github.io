import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './interest.module.scss';

const Interest = (props) => {
    const { labels } = props;

    return (
        <SectionForm id={labels.id} title={labels.title}>
            <div className={styles.interestsContainer}>
                {labels.interests.map((interest) => {
                    return (
                        <Paper key={interest.title} elevation={3}>
                            <div className={styles.interest}>
                                <FontAwesomeIcon
                                    icon={interest.icon}
                                    size='3x'
                                    color={interest.color}
                                    className={styles.icon}
                                />
                                <h3 className={styles.title}>
                                    {interest.title}
                                </h3>
                            </div>
                        </Paper>
                    );
                })}
            </div>
        </SectionForm>
    );
};

export default Interest;
