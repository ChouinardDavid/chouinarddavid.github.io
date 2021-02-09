import styles from '../styles/app.module.scss';
import Header from '../components/sections/header/header';
import Presentation from '../components/sections/presentation/presentation';
import Skills from '../components/sections/skills/skills';
import Career from '../components/sections/career/career';
import Education from '../components/sections/education/education';
import Container from '@material-ui/core/Container';
import * as labels from '../labels/fr';
import Certification from '../components/sections/certifications/certification';



export default function Home() {
    return (
        <>
            <Header labels={labels.header_text} />
            <Container id='App' disableGutters>
                <div className={styles.containerFlex} >
                    <Presentation labels={labels.presentation_text} />
                    <Skills labels={labels.skills_text} />
                    <Career labels={labels.parcours_text} />
                    <Education labels={labels.education_text} />
                    <Certification labels={labels.certfications_text} />
                </div>
            </Container>
        </>
    );
}
