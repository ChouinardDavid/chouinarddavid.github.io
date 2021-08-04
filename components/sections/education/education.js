import React from 'react';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './education.module.scss';
import Course from './course';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Education = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} title={labels.title} {...rest}>
            <div className={styles.groupCourses}>
                {labels.courses.map((course, index) =>
                    // <Course key={course.year} course={course} />
                    <Paper elevation={3} className={styles.coursePaper}>
                        <div className={styles.course}>
                            <div className={styles.titleContainer}>
                                <span></span>
                                <h2 className={styles.title}>{course.title}</h2>
                                <span className={`fa-stack fa-sm ${styles.domaineIcon}`}>
                                    <FontAwesomeIcon icon={faCircle} color={course.domaine.color} className="fa-stack-2x" />
                                    <FontAwesomeIcon icon={course.domaine.icon} color="black" className="fa-stack-1x" />
                                </span>
                            </div>
                            <h3>{course.year}</h3>
                            <h4>{course.school}</h4>
                        </div>
                    </Paper>
                )}
            </div>
        </SectionForm>
    );
};

export default Education;