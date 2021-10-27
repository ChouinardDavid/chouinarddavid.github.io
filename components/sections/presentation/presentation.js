import React from 'react';
import Paper from '@material-ui/core/Paper';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './presentation.module.scss';

const Presentation = (props) => {
    const { labels } = props;
    return (
        <SectionForm id={labels.id} title={labels.title}>
            <Paper elevation={3} className={styles.presentation}>
                <p dangerouslySetInnerHTML={{ __html: labels.description }} />
                {/* {labels.description} */}
            </Paper>
        </SectionForm>
    );
};

export default Presentation;
