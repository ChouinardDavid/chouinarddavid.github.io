import React from 'react';
import styles from './presentation.module.scss';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import Paper from '@material-ui/core/Paper';

const Presentation = (props) => {
    const { labels, ...rest } = props;
    return (
        <SectionForm id={labels.id} title={labels.title} {...rest}>
            <Paper elevation={3} className={styles.presentation}>
                {/* <p> {labels.description} </p> */}
                <p dangerouslySetInnerHTML={{ __html: labels.description }} />
            </Paper>
        </SectionForm>
    );
};

export default Presentation;
