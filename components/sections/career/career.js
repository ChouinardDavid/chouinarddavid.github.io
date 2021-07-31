import { faRocket } from '@fortawesome/free-solid-svg-icons'
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './career.module.scss';
import Timeline from '@material-ui/lab/Timeline';
import TimeLineUnit from '../../utils/timeLine/TimeLineUnit';



const Career = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} title={labels.title} {...rest}>
            <Timeline align="left" className={styles.timeline}>
                {labels.emplois.map((emploi, index) => {
                    return (
                        <TimeLineUnit
                            key={index}
                            emploi={emploi}
                        />
                    )
                })}
                <TimeLineUnit
                    icon={faRocket}
                // color="#e6ed15"
                // color="white"
                />
            </Timeline>
        </SectionForm>
    );
};

export default Career;
