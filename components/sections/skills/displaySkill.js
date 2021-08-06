import Paper from '@material-ui/core/Paper';
import styles from './skill.module.scss';

const DisplaySkill = (props) => {
    const { skills } = props;

    return (
        <div>
            {skills.map((skill) => {
                return (
                    <Paper key={skill} elevation={3} className={styles.skill}>
                        {skill}
                    </Paper>
                );
            })}
        </div>
    );
};

export default DisplaySkill;
