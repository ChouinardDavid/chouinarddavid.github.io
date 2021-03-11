import React from 'react';
import styles from '.././career.module.scss';
import TimeLineUnit from '../../../utils/timeLine/TimeLineUnit';
import Job from './job';
import StarIcon from '@material-ui/icons/Star';
import BackToSchool from './backToSchool';
import { faCode, faDna, faGraduationCap, faLaptopCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { contentType } from '../../../../labels/domaines'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContentFactory = (props) => {
    const { type, content, ...rest } = props;

    switch (type) {
        case contentType.backToSchool:
            return (
                <TimeLineUnit
                    icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" color="black" />}
                    content={<BackToSchool />}
                />
            )

        case contentType.informatique:
            return (
                <TimeLineUnit
                    icon={<FontAwesomeIcon icon={faLaptopCode} size="2x" color="black" />}
                    content={<Job emploi={content} />}
                />
            )

        case contentType.biologie:
            return (
                <TimeLineUnit
                    icon={<FontAwesomeIcon icon={faDna} size="2x" color="black" />}
                    content={<Job emploi={content} />}
                />
            )

        case contentType.start:
            return (
                <TimeLineUnit
                    icon={<StarIcon fontSize="large" />}
                />
            )
    }
}

export default ContentFactory;