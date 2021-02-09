import styles from './education.module.scss';
import Paper from '@material-ui/core/Paper';





const course = (props) => {
    const { course } = props

    return (
        <Paper elevation={3} className={styles.coursePaper}>
            <div className={styles.course}>
                <h2 className={styles.title}>{course.title}</h2>
                <h3>{course.year}</h3>
                <h4>{course.school}</h4>
            </div>
        </Paper>
    );
};

export default course;