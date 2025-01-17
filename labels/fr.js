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
        name: 'Scolarité',
    },
    certification: {
        id: 'certification',
        name: 'Certifications',
    },
    projects: {
        id: 'projets',
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
        'https://www.linkedin.com/in/davidchouinardlavoie/',
        'https://github.com/ChouinardDavid',
    ],
};

export const presentation_text = {
    id: sections.presentation.id,
    title: sections.presentation.name,
    description: `Après 5 ans de carrière dans le domaine des <span class="biotech">biotechnologies</span>, j'ai décidé de me former pour réorienter ma carrière
     en tant que <span class="info">développeur web full-stack</span>.
     L'informatique a toujours fait partie de mes intérêts, maintenant, j'en fais mon métier !
     <br/>
     <br/>
     Je maîtrise la plateforme .NET, les bases de données SQL ainsi que le langague Javascript. J'aime particulièrement
     explorer des nouvelles technologies et maintenir à jour mes connaissances à l'aide de formations et de projets personnels. 
     De cette façon, j'ai aquis des compétences en intégration de page web avec React, ainsi qu'en développement de service web (API) avec .NET Core.
     <br/>
     <br/>
     Merci de prendre le temps de consulter ma page web!
     <br/>
     Bonne navigation
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
                '.NET / .NET Core', //
                'SQL',
                'Blazor',
                'EF Core / NHibernate',
                'Node.js'
            ],
        },
        {
            id: 'langages',
            title: 'Langages',
            skills: [
                'C# / vb.net', //
                'Javascript',
                'JQuery',
                'React',
                'HTML/CSS',
            ],
        },
        {
            id: 'designs',
            title: 'Designs et concepts',
            skills: [
                'MVC / MVVM', //
                'REST API',
                'S.O.L.I.D.',
                'Design patterns',
                'Cloud Azure',
            ],
        },
        {
            id: 'outils',
            title: 'Outils',
            skills: [
                'Visual Studio',
                'SSMS (SQL)',
                'Azure DevOps',
                'Git',
                'Telerik',
            ],
        },
        {
            id: 'complementaires',
            title: 'Complémentaires',
            skills: [
                'Méthode agile',
                'Scrum Master',
                'DevOps',
                'Tests unitaires',
                'Rapport SSRS',
            ],
        },
        {
            id: 'perso',
            title: 'Personnelles',
            skills: [
                'Communication active', //
                'Capacité d’adaptation',
                'Attitude positive',
                'autonomie',
                'Bonne organisation',
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
                dateDebut: '2019',
                dateFin: 'auj.',
                description: `En tant que développeur web fullstack, 
                    je prends part au développement de <a class="specialLinkEffect2" href="https://www.dcicristalnet.com/">Cristal-Net</a> au sein d'une équipe agile. 
                    Il s'agit d'un système d'envergure utilisé dans les établissements de santé du Québec.`,
                chips: [
                    'C#/vb.net', //
                    'Javascript',
                    'SQL',
                    // 'Scrum master',
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
                dateDebut: '2018',
                dateFin: '2019',
                description: `Participer au développement des évolutions demandées et assurer le support technique des systèmes utlisés dans le département de la comptabilité.
                Cela impliquait de communiquer directement avec les utilisateurs pour clarifier les besoins.`,
                chips: [
                    'C#',
                    'Javascript',
                    'SQL',
                    'DevOps',
                    // 'Release manager',
                ],
            },
        },
        {
            render: (content) => {
                return <BackToSchool content={content} />;
            },
            domaine: domaines.backToSchool,
            content: {
                title: 'Formation professionnelle — Technique de l’informatique',
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
                dateDebut: '2014',
                dateFin: '2017',
                description: `En tant que technicien dans une usine de production du vaccin antigrippal, mon rôle était d'opérer les systèmes de remplissage en flacon.
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
                dateDebut: '2014',
                description: `Effectuer les analyses de laboratoire permettant de valider la qualité du produit. 
                Compiler les données et construire un rapport pour présenter les résultats obtenus à l'assurance qualité.`,
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
                dateDebut: '2012',
                dateFin: '2014',
                description: `Tout en contribant aux activités de production et aux projets de R&D, 
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
            title: 'Présentation de mon profil en format web',
            imageSource: '/toonPerso.jpg',
            description: `L’objectif est de présenter mon parcours professionnel tout en développant mes compétences de développeur web avec des nouvelles technologies.`,
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
            link: 'https://docs.microsoft.com/fr-ca/learn/certifications/azure-fundamentals/',
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
