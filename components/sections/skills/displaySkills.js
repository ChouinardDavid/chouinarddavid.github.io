import React from 'react';
import styles from './skills.module.scss';
import Paper from '@material-ui/core/Paper';


const DisplaySkill = (props) => {
    const { title, skills, ...rest } = props;

    return (
        <>
            {skills.map((skill, index) => {
                return (
                    <Paper elevation={3} className={styles.skillCard}>
                        {skill}
                    </Paper>
                );
            }
            )}
        </>
    )
};

export default DisplaySkill;
