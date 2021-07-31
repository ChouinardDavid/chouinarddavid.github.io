import { faLeaf, faMicroscope, faGolfBall, faTv, faBook, faHandSpock, faChessKnight, faHamburger, faFlask, faHockeyPuck, faRobot, faYinYang } from '@fortawesome/free-solid-svg-icons'
import Job from '../components/sections/career/content/job';
import BackToSchool from '../components/sections/career/content/backToSchool';
import { domaines } from './domaines';



const sections = {
    presentation: {
        id: 'presentation',
        name: 'Présentation'
    },
    competences: {
        id: 'competences',
        name: 'Compétences'
    },
    parcours: {
        id: 'parcours',
        name: 'Parcours de Carrière'
    },
    education: {
        id: 'education',
        name: 'Éducation'
    },
    certification: {
        id: 'certification',
        name: 'Certifications'
    },
    projects: {
        id: 'projects',
        name: 'Projets'
    },
    interest: {
        id: 'interest',
        name: 'Intérêts'
    },
}

export const header_text = {
    id: 'header',
}

export const footer_text = {
    id: 'footer',
    sections: sections,
    email: "chouinard.dc@gmail.com",
}

export const presentation_text = {
    id: sections.presentation.id,
    title: sections.presentation.name,
    description:
        `Développeur web full-stack, je maitrise plus particulièrement l'environnement .NET, tant au niveau base de données qu'au niveau du code. 
        ..............
        Passionné par les technologies, je suis constamment à la recherche d'apprentissage pour parfaire mes connaissance dans ce domaine.`
}

export const skills_text = {
    id: sections.competences.id,
    title: sections.competences.name,
    sections:
        [
            {
                id: 'Techno',
                title: 'Technologies',
                children:
                    [
                        '.NET',
                        'Base de données SQL',
                        'Rapport SSRS',
                        '.NET Core',
                        'Cloud Azure',
                        'NextJs'
                    ],
            },
            {
                id: 'langages',
                title: 'Langages',
                children:
                    [
                        'C#',
                        'vb.net',
                        'Javascript',
                        'JQuery',
                        'HTML/CSS',
                        'React',
                    ]
            },
            {
                id: 'outils',
                title: 'Outils',
                children:
                    [
                        'Visual Studio',
                        'SQL Server Management Studio',
                        'Azure DevOps',
                        'Git',
                        'Visual Studio Code',
                        'Postman'
                    ]
            },
            {
                id: 'designs',
                title: 'Designs et concepts',
                children:
                    [
                        'MVC',
                        'MVVM',
                        'Web API',
                        'S.O.L.I.D.',
                        'R.E.S.T. API',
                    ]
            },
            {
                id: 'complementaires',
                title: 'Complémentaires',
                children:
                    [
                        'Tests unitaires',
                        'Méthode agile',
                        'Kendo',
                        'DACPAC',
                        'Projet d\'envergure',
                    ]
            },
            {
                id: 'perso',
                title: 'Personnelles',
                children:
                    [
                        'Communication active',
                        'Autonomie',
                        'Initiative',

                    ]
            },
        ]
}

export const parcours_text = {
    id: sections.parcours.id,
    title: sections.parcours.name,
    emplois:
        [
            {
                render: (content) => { return (<Job content={content} />) },
                domaine: domaines.informatique,
                content: {
                    employeur: 'CHU de Québec, Québec',
                    poste: 'Technicien en informatique (développeur)',
                    dateDebut: 'août 2019',
                    dateFin: 'auj.',
                    description:
                        `En tant que développeur fullstack, je participe au développement de l'application <a href="https://www.dcicristalnet.com/">Cristal-Net</a> au sein d'une équipe agile. 
                    Celle-ci permet au personnel soigant de gérer les données relatives aux visites des patients dans les hopitaux.`,
                    chips:
                        [
                            '.NET (C#/vb.net)',
                            'Javascript',
                            'SQL',
                            'JQuery',
                            'Kendo',
                            'Azure DevOps',
                        ]
                }
            },
            {
                render: (content) => { return (<Job content={content} />) },
                domaine: domaines.informatique,
                content: {
                    employeur: 'Industrielle Alliance, Québec',
                    poste: 'Développeur',
                    dateDebut: ' sept. 2018',
                    dateFin: ' août 2019',
                    description:
                        `Assurer un support aux utilisateurs des applications corporatives dans le département de la comptabilité et fiscalité. 
                    Cela consistait à corriger les anomalies, mais aussi à participer aux évolutions des systèmes utilisés.`,
                    chips:
                        [
                            '.NET (C#)',
                            'Javascript',
                            'SQL',
                            'Azure DevOps (Release manager)',
                        ]
                }
            },
            {
                render: (content) => { return (<BackToSchool content={content} />) },
                domaine: domaines.backToSchool,
                content: {
                    title: 'Retour à l\'école',
                    dates: 'févr. 2016 - déc. 2018'
                }
            },
            {
                render: (content) => { return (<Job content={content} />) },
                domaine: domaines.biologie,
                content: {
                    employeur: 'GSK, Québec',
                    poste: 'Technicien de production',
                    dateDebut: 'nov. 2014',
                    dateFin: 'févr. 2017',
                    description:
                        `Participer à la production du vaccin *anti-grippal*, mon rôle était d'opérer les systèmes de remplissage en fiole ou en flacon.
                    Je contribuais aussi activement à la formation des nouveaux employés.`,
                }
            },
            {
                render: (content) => { return (<Job content={content} />) },
                domaine: domaines.biologie,
                content: {
                    employeur: 'BD Diagnostics, Québec',
                    poste: 'Technicien au contrôle de la qualité',
                    dateDebut: 'janv. 2014',
                    dateFin: 'oct. 2014',
                    description:
                        `Effectuer les analyses de laboratoire permettant de valider la qualité du produit à toutes les étapes de sa préparation.
                    Ces données étaient ensuite compilées et présentées à l'assurance qualité sous forme de rapport.`,
                }
            },
            {
                render: (content) => { return (<Job content={content} />) },
                domaine: domaines.biologie,
                content: {
                    employeur: 'Feldan, Québec',
                    poste: 'Technicien de laboratoire',
                    dateDebut: 'mai 2012',
                    dateFin: 'janv. 2014',
                    description:
                        `Mon rôle dans cette entreprise était plutôt diversifié. Principalement, je participais aux activités de production et aux projets de R&D. 
                    Mais j'assurais aussi l'approvisionnement des matières premières ainsi que la livraison des commandes aux clients.`,
                }
            },
        ]
}

export const education_text = {
    id: sections.education.id,
    title: sections.education.name,
    courses: [
        {
            title: 'DEC en technique de l’informatique',
            school: 'Cégep de Sainte-Foy, Québec',
            year: '2018',
        },
        {
            title: 'Certificat en biotechnologie',
            school: 'Université Laval, Québec ',
            year: '2012',
        },
        {
            title: 'DEC en technique de bioécologie',
            school: 'Cégep Saint-Laurent, Montréal',
            year: '2010',
        }
    ]
}

export const certfications_text = {
    id: sections.certification.id,
    title: sections.certification.name,
    certifications: [
        {
            titre: 'Microsoft Certified: Azure Fundamentals',
            image: '/azure-fundamentals.png',
            link: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals'
        }
    ]
}

export const projects_text = {
    id: sections.projects.id,
    title: sections.projects.name,
    projects: [
        {
            title: "Mon CV web",
            imageLink: "/photoPerso.png",
            description: `Mon premier projet personnel! Il m'a permis de mettre en pratique React et d'acquérir plusieurs compétences en programmation front-end.
            Le design reste simpliste, peut-être que ce sera une amélioration à venir!`,
            codeSourceLink: "https://github.com/ChouinardDavid/chouinarddavid.github.io",
            chips: [
                "React",
                "Next.js",
                "Material-UI"
            ]
        },
    ]
}

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
    ]
}
