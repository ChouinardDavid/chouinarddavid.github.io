import styles from '../styles/app.module.scss';
import TitleLabel from '../components/titleLabel/titleLabel';
import Header from '../components/sections/header/header';
import Presentation from '../components/sections/presentation/presentation';
import Skills from '../components/sections/skills/skills';
import Career from '../components/sections/carrer/career';
import Education from '../components/sections/education/education';
import Container from '@material-ui/core/Container';
import * as labels from '../labels/fr';



export default function Home() {
    return (
        <>
            <Header labels={labels.header_text} />
            <Container id='App' disableGutters>
                <div className={styles.containerFlex} >
                    <div>
                        <Presentation labels={labels.presentation_text} />
                        <Skills labels={labels.skills_text} />
                        <Career labels={labels.parcours_text} />
                        <Education labels={labels.education_text} />

                        <div id='formations'>
                            <TitleLabel titleName='Formations' />
                        </div>

                        <div id='realisations'>
                            <TitleLabel titleName='Réalisations' />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
