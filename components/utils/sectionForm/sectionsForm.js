import styles from './sectionForm.module.scss';

const SectionForm = (props) => {
    const { title, children, ...rest } = props;
    return (
        <div className={styles.sectionForm} {...rest}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default SectionForm;
