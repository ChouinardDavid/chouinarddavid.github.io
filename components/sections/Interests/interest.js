import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './interest.module.scss';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Interest = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            <div className={styles.interestGroup}>
                {labels.interests.map((interest, index) => {
                    return (
                        <Paper key={interest.title} className={styles.interestPaper} elevation={3}>
                            <div className={styles.interest}>
                                <FontAwesomeIcon icon={interest.icon} size="3x" color={interest.color} className={styles.icon} />
                                <h3 className={styles.title}>{interest.title}</h3>
                            </div>
                        </Paper>
                    )
                })
                }
            </div>
        </SectionForm>
    );
};

export default Interest;