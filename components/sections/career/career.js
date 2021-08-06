import { faRocket } from '@fortawesome/free-solid-svg-icons';
import Timeline from '@material-ui/lab/Timeline';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import TimeLineUnit from '../../utils/timeLine/TimeLineUnit';
import styles from './career.module.scss';

const Career = (props) => {
    const { labels } = props;

    return (
        <SectionForm id={labels.id} title={labels.title}>
            <Timeline align='left' className={styles.timeline}>
                {labels.emplois.map((emploi) => {
                    return <TimeLineUnit key={emploi} emploi={emploi} />;
                })}
                <TimeLineUnit icon={faRocket} />
            </Timeline>
        </SectionForm>
    );
};

export default Career;
