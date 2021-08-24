import Paper from '@material-ui/core/Paper';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './certification.module.scss';

const Certification = (props) => {
    const { labels } = props;

    return (
        <SectionForm id={labels.id} title={labels.title}>
            {labels.certifications.map((certification) => {
                return (
                    <Paper
                        key={certification}
                        className={styles.certificationPaper}
                        elevation={3}>
                        <img
                            className={styles.image}
                            src={certification.image}
                        />
                        <div className={styles.linkContent}>
                            <a
                                className={`${styles.link} specialLinkEffect2`}
                                href={certification.link}>
                                <span className={styles.title}>
                                    {certification.title}
                                </span>
                            </a>
                        </div>
                        <span className={styles.certificationYear}>
                            <span className={styles.hyphen}>
                                &nbsp;&nbsp;{'–'}&nbsp;&nbsp;
                            </span>
                            <span className={styles.year}>
                                {certification.year}
                            </span>
                        </span>
                    </Paper>
                );
            })}
        </SectionForm>
    );
};

export default Certification;
