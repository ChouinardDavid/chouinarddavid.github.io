import TitleLabel from '../titleLabel/titleLabel';
import styles from './sectionForm.module.scss';

const SectionForm = (props) => {
    const { title, children, ...rest } = props;
    return (
        <div className={styles.sectionForm} {...rest}>
            <div className={styles.title}>
                <TitleLabel titleName={title} />
            </div>

            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default SectionForm;
