import Container from '@material-ui/core/Container';
import Career from '../components/sections/career/career';
import Certification from '../components/sections/certifications/certification';
import Education from '../components/sections/education/education';
import Footer from '../components/sections/footer/footer';
import Header from '../components/sections/header/header';
import Interest from '../components/sections/interests/interest';
import Presentation from '../components/sections/presentation/presentation';
import Project from '../components/sections/projects/project';
import Skill from '../components/sections/skills/skill';
import * as labels from '../labels/fr';

// import styles from '../styles/app.module.scss';

export default function Home() {
    return (
        <div>
            <Header labels={labels.header_text} />
            <Container id='app' maxWidth='lg'>
                {/* <div className={styles.containerFlex}> */}
                <Presentation labels={labels.presentation_text} />
                <Skill labels={labels.skills_text} />
                <Career labels={labels.career_text} />
                <Education labels={labels.education_text} />
                <Project labels={labels.projects_text} />
                <Certification labels={labels.certfications_text} />
                <Interest labels={labels.interests_text} />
                {/* </div> */}
            </Container>
            <Footer labels={labels.footer_text} />
        </div>
    );
}
