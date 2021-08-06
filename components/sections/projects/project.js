import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './Project.module.scss';

const Project = (props) => {
    const { labels } = props;

    return (
        <SectionForm id={labels.id} title={labels.title}>
            {labels.projects.map((project) => {
                return (
                    <Paper
                        key={project.title}
                        className={styles.projectPaper}
                        elevation={3}>
                        <div>
                            <img
                                className={styles.image}
                                src={project.imageSource}
                            />
                        </div>

                        <div className={styles.chipsContainer}>
                            {project.chips &&
                                project.chips.map((chip) => {
                                    return (
                                        <Chip
                                            key={chip}
                                            label={chip}
                                            className={styles.chip}></Chip>
                                    );
                                })}
                        </div>

                        <div>
                            <h1>{project.title}</h1>
                            <h3>{project.description}</h3>
                        </div>

                        <div>
                            <Button
                                variant='contained'
                                href={project.codeSourceLink}>
                                Code source
                            </Button>
                        </div>
                    </Paper>
                );
            })}
        </SectionForm>
    );
};

export default Project;
