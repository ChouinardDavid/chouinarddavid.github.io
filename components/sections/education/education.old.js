import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import { parcours_text } from '../../../labels/fr';
import Timeline from '@material-ui/lab/Timeline';
import TimeLineUnit from '../../utils/timeLine/TimeLineUnit';
// import styles from '../../styles/formations.module.scss';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import Course from './course';

const Education = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <Timeline align="left">
                {labels.courses.map((course, index) =>
                    <TimeLineUnit
                        icon={<WorkIcon fontSize="large" />}
                        contenu={<Course course={course} />}
                    />)}
                <TimeLineUnit
                    icon={<StarIcon fontSize="large" />}
                />
            </Timeline>
        </SectionForm>
    );
};

export default Education;