/* eslint-disable react/display-name */
import {
    faLeaf,
    faMicroscope,
    faGolfBall,
    faTv,
    faBook,
    faHandSpock,
    faChessKnight,
    faHamburger,
    faFlask,
    faHockeyPuck,
    faRobot,
    faYinYang,
} from '@fortawesome/free-solid-svg-icons';
import BackToSchool from '../components/sections/career/content/backToSchool';
import Job from '../components/sections/career/content/job';
import { domaines } from './domaines';

const sections = {
    presentation: {
        id: 'presentation',
        name: 'Présentation',
    },
    competences: {
        id: 'competences',
        name: 'Compétences',
    },
    parcours: {
        id: 'carriere',
        name: 'Carrière',
    },
    education: {
        id: 'education',
        name: 'Éducation',
    },
    certification: {
        id: 'certification',
        name: 'Certifications',
    },
    projects: {
        id: 'realisations',
        name: 'Réalisations',
    },
    interest: {
        id: 'interest',
        name: 'Intérêts',
    },
};

export const header_text = {
    id: 'header',
};

export const footer_text = {
    id: 'footer',
    sections: sections,
    email: 'chouinard.dc@gmail.com',
    image: '/photoPerso3.jpg',
    socialLinks: [
        'https://www.linkedin.com/in/david-chouinard/',
        'https://github.com/ChouinardDavid',
    ],
};

export const presentation_text = {
    id: sections.presentation.id,
    title: sections.presentation.name,
    description: `Après 5 ans de carrière dans le domaine de la <span class="biotech">biotechnologie</span>, j'ai décidé de retourner à l'école pour
     réorienter ma carrière en tant que <span class="info">développeur web full-stack</span>.
     L'informatique a toujours fait partie de mes intérêts, maintenant, j'en fait mon métier et je me suis jamais autant senti à ma place !
     <br/>
     <br/>
     Je maîtrise la plateforme .NET, les bases de données SQL ainsi que le langague Javascript. J'aime particulièrement
     explorer des nouvelles technologies et maintenir à jour mes connaissances à l'aide de formations et de projets personnels. 
     De cette façon, j'ai aquis des compétences pour développer des interfaces web avec React et de service web (API) avec .NET Core.
     <br/>
     <br/>
     Merci de prendre le temps de consulter ma page web !
     <br/>
     Bonne navigation ;)
     `,
};

export const skills_text = {
    id: sections.competences.id,
    title: sections.competences.name,
    sections: [
        {
            id: 'Techno',
            title: 'Technologies',
            skills: [
                '.NET', //
                'SQL',
                'EF Core / NHibernate',
                '.NET Core',
                'Cloud Azure',
                'Next.js',
            ],
        },
        {
            id: 'langages',
            title: 'Langages',
            skills: [
                'C#', //
                ' vb.net',
                'Javascript',
                'JQuery',
                'HTML/CSS',
                'React',
            ],
        },
        {
            id: 'outils',
            title: 'Outils',
            skills: [
                'Visual Studio',
                'Visual Studio Code',
                'SSMS (SQL)',
                'Azure DevOps',
                'Git',
                'Postman',
            ],
        },
        {
            id: 'designs',
            title: 'Designs et concepts',
            skills: [
                'MVC', //
                'API',
                'S.O.L.I.D.',
                'R.E.S.T.',
                'Design patterns',
            ],
        },
        {
            id: 'complementaires',
            title: 'Complémentaires',
            skills: [
                'Méthode agile',
                'Scrum Master',
                'Tests unitaires',
                'Kendo',
                'Rapport SSRS',
            ],
        },
        {
            id: 'perso',
            title: 'Personnelles',
            skills: [
                'Communication active', //
                'Autonomie',
                'Initiative',
            ],
        },
    ],
};

export const career_text = {
    id: sections.parcours.id,
    title: sections.parcours.name,
    emplois: [
        {
            render: (content) => {
                return <Job content={content} />;
            },
            domaine: domaines.informatique,
            content: {
                employeur: 'CHU de Québec, Québec',
                poste: 'Technicien informatique (développeur)',
                // dateDebut: 'août 2019',
                dateDebut: '2019',
                dateFin: 'auj.',
                description: `En tant que développeur web fullstack, 
                    je participe au développement de <a class="specialLinkEffect2" href="https://www.dcicristalnet.com/">Cristal-Net</a> au sein d'une équipe agile. 
                    Il s'agit d'un système d'envergure utilisés dans les établissements de santé du Québec. J'ai aussi le rôle de Scrum Master pour supporter l'équipe dans la méthode agile.`,
                chips: [
                    '.NET', //
                    'Javascript',
                    'SQL',
                    'Scrum master',
                ],
            },
        },
        {
            render: (content) => {
                return <Job content={content} />;
            },
            domaine: domaines.informatique,
            content: {
                employeur: 'Industrielle Alliance, Québec',
                poste: 'Développeur',
                // dateDebut: 'sept. 2018',
                // dateFin: 'août 2019',
                dateDebut: '2018',
                dateFin: '2019',
                description: `Au sein d'une équipe DevOps, prendre part au support et au développement des systèmes du département de la comptabilité.
                Cela consistait à répondre aux utilisateurs lors de situation particulière, mais aussi de participer aux évolutions des applications.`,
                chips: [
                    '.NET',
                    'Javascript',
                    'SQL',
                    'DevOps',
                    'Release manager',
                ],
            },
        },
        {
            render: (content) => {
                return <BackToSchool content={content} />;
            },
            domaine: domaines.backToSchool,
            content: {
                title: "Retour à l'école (Technique de l’informatique)",
                // dates: 'févr. 2016 - déc. 2018',
                dates: '2016 - 2018',
            },
        },
        {
            render: (content) => {
                return <Job content={content} />;
            },
            domaine: domaines.biologie,
            content: {
                employeur: 'GSK, Québec',
                poste: 'Technicien de production',
                // dateDebut: 'nov. 2014',
                // dateFin: 'févr. 2017',
                dateDebut: '2014',
                dateFin: '2017',
                description: `En tant que technicien dans une usine de production du vaccin anti-gripal, mon rôle était d'opérer les systèmes de remplissage en flacon.
                    Je contribuais aussi activement à la formation des nouveaux employés.`,
            },
        },
        {
            render: (content) => {
                return <Job content={content} />;
            },
            domaine: domaines.biologie,
            content: {
                employeur: 'BD Diagnostics, Québec',
                poste: 'Technicien au contrôle de la qualité',
                // dateDebut: 'janv. 2014',
                // dateFin: 'oct. 2014',
                dateDebut: '2014',
                description: `Effectuer les analyses de laboratoire permettant de valider la qualité du produit. 
                Compiler et construire un rapport des résultats obtenus.`,
            },
        },
        {
            render: (content) => {
                return <Job content={content} />;
            },
            domaine: domaines.biologie,
            content: {
                employeur: 'Feldan, Québec',
                poste: 'Technicien de laboratoire',
                // dateDebut: 'mai 2012',
                // dateFin: 'janv. 2014',
                dateDebut: '2012',
                dateFin: '2014',
                description: `Contribuer aux activités de production et aux projets de R&D. 
                    j'assurais aussi l'approvisionnement des matières premières ainsi que la livraison des commandes aux clients.`,
            },
        },
    ],
};

export const education_text = {
    id: sections.education.id,
    title: sections.education.name,
    diplomas: [
        {
            title: 'DEC en technique de l’informatique',
            domaine: domaines.informatique,
            school: 'Cégep de Sainte-Foy, Québec',
            year: '2018',
        },
        {
            title: 'Certificat en biotechnologie',
            domaine: domaines.biologie,
            school: 'Université Laval, Québec ',
            year: '2012',
        },
        {
            title: 'DEC en technique de bioécologie',
            domaine: domaines.biologie,
            school: 'Cégep Saint-Laurent, Montréal',
            year: '2010',
        },
    ],
};

export const projects_text = {
    id: sections.projects.id,
    title: sections.projects.name,
    projects: [
        {
            title: 'Ma page web',
            imageSource: '/toonPerso2.jpg',
            description: `Ma page web personnelle, premier projet réalisé de A à Z !`,
            codeSourceLink:
                'https://github.com/ChouinardDavid/chouinarddavid.github.io',
            chips: ['React', 'Next.js', 'Material-UI'],
        },
    ],
};

export const certfications_text = {
    id: sections.certification.id,
    title: sections.certification.name,
    certifications: [
        {
            title: 'Microsoft Azure Fundamentals',
            year: 2021,
            image: '/azure-fundamentals.png',
            link: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals',
        },
    ],
};

export const interests_text = {
    id: sections.interest.id,
    title: sections.interest.name,
    interests: [
        {
            title: 'Plein air',
            icon: faLeaf,
            color: 'green',
        },
        {
            title: 'Science',
            icon: faMicroscope,
            color: '#3963e3',
        },
        {
            title: 'Golf',
            icon: faGolfBall,
            color: '#c5c8c9',
        },
        {
            title: 'Cinéma',
            icon: faTv,
            color: 'black',
        },
        {
            title: 'Hockey',
            icon: faHockeyPuck,
            color: 'black',
        },
        {
            title: 'Brassage de bière',
            icon: faFlask,
            color: '#b3b8c7',
        },
        {
            title: 'Lecture',
            icon: faBook,
            color: '#bf5039',
        },
        {
            title: 'Technologie',
            icon: faRobot,
            color: 'red',
        },
        {
            title: 'Science fiction',
            icon: faHandSpock,
            color: 'lightGreen',
        },
        {
            title: 'Jeux de société',
            icon: faChessKnight,
            color: 'black',
        },
        {
            title: 'Cuisine',
            icon: faHamburger,
            color: '#a68a6d',
        },
        {
            title: 'Méditation',
            icon: faYinYang,
            color: 'black',
        },
    ],
};
