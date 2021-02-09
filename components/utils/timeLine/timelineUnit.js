import styles from './timelineUnit.module.scss';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { InView } from 'react-intersection-observer';
import Zoom from '@material-ui/core/Zoom';



const TimeLineUnit = (props) => {
    const { contenu, icon } = props

    const removeBeforeCssClass = input => {
        if (input)
            input.classList.remove("MuiTimelineItem-missingOppositeContent");
    };

    return (
        <TimelineItem ref={removeBeforeCssClass}>
            <TimelineSeparator>
                <TimelineDot color="primary">
                    {icon}
                </TimelineDot>
                <TimelineConnector className={styles.customBlackLine} />
            </TimelineSeparator>
            <InView threshold={0.75} triggerOnce>
                {contenu &&
                    (({ inView, ref, entry }) => (
                        <Zoom in={inView} timeout={900}>
                            <TimelineContent ref={ref} className={styles.item}>
                                {contenu}
                            </TimelineContent>
                        </Zoom>
                    ))}
            </InView>
        </TimelineItem>
    )
};

export default TimeLineUnit;
