import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import Paper from '@material-ui/core/Paper';

const Projects = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <div>
                <Paper elevation={3}>

                </Paper>
            </div>
        </SectionForm >
    );
};

export default Projects;