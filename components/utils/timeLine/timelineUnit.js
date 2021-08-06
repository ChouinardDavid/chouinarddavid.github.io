import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InView } from 'react-intersection-observer';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import styles from './timelineUnit.module.scss';

const useStyles = makeStyles({
    dotColor: {
        backgroundColor: (props) => props.emploi?.domaine.color || props.color,
    },
});

const TimeLineUnit = (props) => {
    const { emploi: { render, domaine, content } = {} } = props;
    const classes = useStyles(props);

    const removeMuiCssClass = (input) => {
        if (input)
            input.classList.remove('MuiTimelineItem-missingOppositeContent');
    };

    return (
        <TimelineItem ref={removeMuiCssClass}>
            <TimelineSeparator>
                <TimelineDot
                    className={`${styles.timelineDot} ${classes.dotColor}`}>
                    <FontAwesomeIcon
                        icon={domaine?.icon || props.icon}
                        size='2x'
                        color='black'
                    />
                </TimelineDot>
                <TimelineConnector className={styles.customBlackLine} />
            </TimelineSeparator>
            <InView threshold={0.75} triggerOnce>
                {content &&
                    // eslint-disable-next-line no-unused-vars
                    (({ inView, ref, entry }) => (
                        <Zoom in={inView} timeout={900}>
                            <TimelineContent ref={ref} className={styles.item}>
                                {render(content)}
                            </TimelineContent>
                        </Zoom>
                    ))}
            </InView>
        </TimelineItem>
    );
};

export default TimeLineUnit;
