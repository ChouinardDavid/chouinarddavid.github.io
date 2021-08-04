import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './certification.module.scss';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image'
//import Link from 'next/link'
import Link from '@material-ui/core/Link';



const Certification = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} title={labels.title} {...rest}>
            <div>
                {
                    labels.certifications.map((certification, index) => {
                        return (
                            <Paper key={certification} className={styles.certificationPaper} elevation={3}>
                                {/* <Image
                            src={certification.image}
                            width={500}
                            height={500} /> */}

                                <img className={styles.image} src={certification.image} />
                                <a className="specialLinkEffect2" href={certification.link}>
                                    <h2 className={styles.title}>{certification.title}</h2>
                                </a>
                            </Paper>
                        )
                    })
                }
            </div>
        </SectionForm>
    );
};

export default Certification;
