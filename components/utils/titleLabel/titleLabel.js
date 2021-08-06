import styles from './titleLabel.module.scss';

const TitleLabel = (props) => {
    var { titleName, ...rest } = props;
    return (
        <div className={styles.container} {...rest}>
            <h1 className={styles.title}>{titleName}</h1>
        </div>
    );
};

export default TitleLabel;
