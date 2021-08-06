import Paper from '@material-ui/core/Paper';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import DisplaySkill from './displaySkill';
import styles from './skill.module.scss';

const Skill = (props) => {
    const { labels } = props;

    return (
        <SectionForm id={labels.id} title={labels.title}>
            <div className={styles.skillsContainer}>
                {labels.sections.map((section) => {
                    return (
                        <Paper
                            key={section.id}
                            elevation={3}
                            className={styles.skillsPaper}>
                            <h2 className={styles.title}>{section.title}</h2>
                            <DisplaySkill skills={section.skills} />
                        </Paper>
                    );
                })}
            </div>
        </SectionForm>
    );
};

export default Skill;
