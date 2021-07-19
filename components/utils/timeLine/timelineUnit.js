import styles from './timelineUnit.module.scss';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { InView } from 'react-intersection-observer';
import Zoom from '@material-ui/core/Zoom';
import useRemoveCssClass from '../hooks/useRemoveCssClass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@material-ui/core/styles';



const TimeLineUnit = (props) => {
    const { render, icon, color, content } = props
    const removeMuiCssClass = useRemoveCssClass("MuiTimelineItem-missingOppositeContent");

    return (
        <TimelineItem ref={removeMuiCssClass}>
            <TimelineSeparator>
                <TimelineDot color={color} className={styles.timelineDot}>
                    <FontAwesomeIcon icon={icon} size="2x" color="black" />
                </TimelineDot>
                <TimelineConnector className={styles.customBlackLine} />
            </TimelineSeparator>
            <InView threshold={0.75} triggerOnce>
                {content &&
                    (({ inView, ref, entry }) => (
                        <Zoom in={inView} timeout={900}>
                            <TimelineContent ref={ref} className={styles.item}>
                                {render(content)}
                            </TimelineContent>
                        </Zoom>
                    ))}
            </InView>
        </TimelineItem>
    )
};

export default TimeLineUnit;
