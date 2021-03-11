import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './career.module.scss';
import Timeline from '@material-ui/lab/Timeline';
import ContentFactory from './content/contentFactory';
import { contentType } from '../../../labels/domaines'

const Career = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <Timeline align="left" className={styles.timeline}>
                {labels.emplois.map((content, index) => {
                    return (
                        <ContentFactory type={content.type} content={content} />
                    )
                })}
                <ContentFactory type={contentType.start} />
            </Timeline>
        </SectionForm>
    );
};

export default Career;
