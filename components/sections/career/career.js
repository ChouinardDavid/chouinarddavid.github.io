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
                            icon={emploi.icon}
                            color={emploi.color}
                            render={emploi.render}
                            content={emploi.content}
                        />
                    )
                })}
                <TimeLineUnit
                    icon={faRocket}
                    color="primary"
                />
            </Timeline>
        </SectionForm>
    );
};

export default Career;
