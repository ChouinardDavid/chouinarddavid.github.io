import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './career.module.scss';
import TimeLineUnit from '../../utils/timeLine/TimeLineUnit';
import WorkIcon from '@material-ui/icons/Work';
import Job from './job';
import StarIcon from '@material-ui/icons/Star';
import Timeline from '@material-ui/lab/Timeline';

const Career = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <Timeline align="left">
                {labels.emplois.map((emploi, index) =>
                    <TimeLineUnit
                        key={emploi.employeur}
                        icon={<WorkIcon fontSize="large" />}
                        contenu={<Job emploi={emploi} />}
                    />)}
                <TimeLineUnit
                    icon={<StarIcon fontSize="large" />}
                />
            </Timeline>
        </SectionForm>
    );
};

export default Career;
