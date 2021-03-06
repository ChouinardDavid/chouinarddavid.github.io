import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './education.module.scss';
import Course from './course';

const Education = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            {/* <div className={styles.groupCoursesContainer}> */}
            <div className={styles.groupCourses}>
                {labels.courses.map((course, index) =>
                    <Course key={course.year} course={course} />
                )}
            </div>
            {/* </div> */}
        </SectionForm>
    );
};

export default Education;