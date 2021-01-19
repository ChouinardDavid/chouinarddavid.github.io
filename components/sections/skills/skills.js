import React from 'react';
import TitleLabel from '../../titleLabel/titleLabel';
import SectionForm from '../../sectionForm/sectionsForm';
import styles from './skills.module.scss';
import DisplaySkill from './displaySkills';
import Paper from '@material-ui/core/Paper';

const Skills = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} className={styles.skillsSection}>
            <TitleLabel titleName={labels.title} />
            <div className={styles.skillsCards}>
                {labels.sections.map((section) => {
                    return (
                        <Paper key={section.id} elevation={3} className={styles.card}>
                            <h2 className={styles.title}>{section.title}</h2>
                            <DisplaySkill skills={section.children} />
                        </Paper>
                    );
                })}
            </div>
        </SectionForm>
    );
};

export default Skills;
