import React from 'react';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './Project.module.scss';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';



const Projects = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} title={labels.title} {...rest}>

            {labels.projects.map((projet, index) => {

                return (
                    <Paper key={projet.title} className={styles.card} elevation={3}>
                        <div>
                            <img className={styles.picture} src='/photoPerso.png' />
                        </div>

                        <div className={styles.chipsContent}>
                            {projet.chips && projet.chips.map((chip, index) => {
                                return <Chip key={chip} label={chip} className={styles.chip}></Chip>
                            })}
                        </div>

                        <div>
                            <h1>{projet.title}</h1>
                            <h3>{projet.description}</h3>
                        </div>

                        <div>
                            <Button variant="contained" href={projet.codeSourceLink}>
                                Code source
                            </Button>
                        </div>
                    </Paper>
                )
            })}
        </SectionForm >
    );
};

export default Projects;