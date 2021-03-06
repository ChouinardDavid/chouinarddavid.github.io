import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './career.module.scss';
import TimeLineUnit from '../../utils/timeLine/TimeLineUnit';
import WorkIcon from '@material-ui/icons/Work';
import Job from './content/job';
import StarIcon from '@material-ui/icons/Star';
import Timeline from '@material-ui/lab/Timeline';
import BackToSchool from './content/backToSchool';
import { faCode, faDna, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
{/* <FontAwesomeIcon icon={interest.icon} size="3x" color={interest.color} className={styles.icon} /> */ }
import Icon from '@material-ui/core/Icon';

const Career = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <Timeline align="left" className={styles.timeline}>
                {labels.emplois.map((emploi, index) => {
                    return (
                        <React.Fragment key={emploi.employeur}>
                            <TimeLineUnit
                                // icon={<WorkIcon fontSize="large" />}
                                icon={<FontAwesomeIcon icon={faDna} size="2x" color="black" />}
                                // icon={<Icon>{faCode}</Icon>}
                                content={<Job emploi={emploi} />}
                            />

                            {emploi.retourEcole &&
                                <TimeLineUnit
                                    icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" color="black" />}
                                    content={<BackToSchool />}
                                />}
                        </React.Fragment >
                    )
                }
                )}
                <TimeLineUnit
                    icon={<StarIcon fontSize="large" />}
                />
            </Timeline>
        </SectionForm>
    );
};

export default Career;
