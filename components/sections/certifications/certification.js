import React from 'react';
import TitleLabel from '../../utils/titleLabel/titleLabel';
import SectionForm from '../../utils/sectionForm/sectionsForm';
import styles from './certification.module.scss';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image'
import Link from 'next/link'


const Certification = (props) => {
    const { labels, ...rest } = props;

    return (
        <SectionForm id={labels.id} {...rest}>
            <TitleLabel titleName={labels.title} />
            {
                labels.certifications.map((certification, index) => {
                    return (<Paper key={certification} className={styles.certificationPaper} elevation={3}>
                        {/* <Image
                            src={certification.image}
                            width={500}
                            height={500} /> */}

                        <img className={styles.image} src={certification.image} />
                        <Link href="https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals">
                            <a>
                                Microsoft Certified: Azure Fundamentals (En cours)
                            </a>
                        </Link>
                    </Paper>

                    )
                })
            }
        </SectionForm>
    );
};

export default Certification;
