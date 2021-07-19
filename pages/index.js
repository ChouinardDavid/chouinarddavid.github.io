import styles from '../styles/app.module.scss';
import Header from '../components/sections/header/header';
import Footer from '../components/sections/footer/footer';
import Presentation from '../components/sections/presentation/presentation';
import Skills from '../components/sections/skills/skills';
import Career from '../components/sections/career/career';
import Education from '../components/sections/education/education';
import Container from '@material-ui/core/Container';
// import labels from '../labels/fr2';
import * as labels from '../labels/fr';
import Certification from '../components/sections/certifications/certification';
import Interest from '../components/sections/Interests/interest';
import Projects from './../components/sections/projects/project';

export default function Home() {

    // const labels = labels2()

    return (
        <div >
            <Header labels={labels.header_text} />
            <Container id='App' maxWidth="lg">
                <div className={styles.containerFlex} >
                    <Presentation labels={labels.presentation_text} />
                    <Skills labels={labels.skills_text} />
                    <Career labels={labels.parcours_text} />
                    <Education labels={labels.education_text} />
                    <Projects labels={labels.projects_text} />
                    <Certification labels={labels.certfications_text} />
                    <Interest labels={labels.interests_text} />
                </div>
            </Container>
            <Footer labels={labels.footer_text} />
        </div>
    );
}
