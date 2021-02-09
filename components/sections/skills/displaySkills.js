import React from 'react';
import styles from './skills.module.scss';
import Paper from '@material-ui/core/Paper';


const DisplaySkill = (props) => {
    const { title, skills, ...rest } = props;

    return (
        <div className={styles.groupskills}>
            {skills.map((skill, index) => {
                return (
                    <Paper key={skill} elevation={3} className={styles.skill}>
                        {skill}
                    </Paper>
                );
            }
            )}
        </div>
    )
};

export default DisplaySkill;
