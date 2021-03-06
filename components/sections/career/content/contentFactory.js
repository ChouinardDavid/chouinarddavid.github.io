import React from 'react';
import styles from '.././career.module.scss';
import TimeLineUnit from '../../../utils/timeLine/TimeLineUnit';
import WorkIcon from '@material-ui/icons/Work';
import Job from './job';
import StarIcon from '@material-ui/icons/Star';
import BackToSchool from './backToSchool';
import TimelineContent from '@material-ui/lab/TimelineContent';



export const ContentType = {

    backToSchool: "backToSchool",
    job: "job",
    start: "start"

}



export function Create(type, ref, options) {

    switch (type) {
        case ContentType.backToSchool:

            <TimelineContent ref={ref} className={styles.backToSchool}>
                <TimeLineUnit
                    icon={<StarIcon fontSize="large" />}
                    content={<BackToSchool />}
                />
            </TimelineContent>
            break;

        case ContentType.job:
            <TimelineContent ref={ref} className={styles.job}>
                <TimeLineUnit
                    key={options.employeur}
                    icon={<WorkIcon fontSize="large" />}
                    content={<Job emploi={options} />}
                />
            </TimelineContent>
            break;

        case ContentType.start:
            <TimelineContent ref={ref} className={styles.start}>
                <TimeLineUnit
                    icon={<StarIcon fontSize="large" />}
                />
            </TimelineContent>
            break;

        default:
            break;
    }


}

