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
                        <a
                            className='specialLinkEffect2'
                            href={certification.link}>
                            <h2 className={styles.title}>
                                {certification.title}
                            </h2>
                        </a>
                        <h2 className={styles.certificationYear}>
                            {' – ' + certification.year}
                        </h2>
                    </Paper>
                );
            })}
        </SectionForm>
    );
};

export default Certification;
