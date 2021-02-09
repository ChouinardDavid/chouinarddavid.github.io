
import { domaines } from './domaines';


// export const home_text = {

// }

export const header_text = {
    id: 'header',
    title: "David Chouinard-Lavoie",
    addLink: false,
}

export const presentation_text = {
    id: 'presentation',
    title: 'Présentation',
    description: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum
    `
}

export const skills_text = {
    id: 'competences',
    title: 'Compétences',
    sections:
        [
            {
                id: 'Techno',
                title: 'Technologies',
                children:
                    [
                        '.NET',
                        '.NET Core',
                        'Base de données SQL',
                        'Rapport SSRS',
                        'Cloud Azure',
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
                        'React',
                        'JQuery',
                        'HTML/CSS',
                    ]
            },
            {
                id: 'outils',
                title: 'Outils',
                children:
                    [
                        'Visual Studio',
                        'Visual Studio Code',
                        'SSMS',
                        'Azure DevOps',
                        'Git',
                    ]
            },
            {
                id: 'architecturesSystemes',
                title: 'Architectures systèmes',
                children:
                    [
                        'MVC',
                        'MVVM',
                        'Web API',
                        'S.O.L.I.D.',
                        'R.E.S.T.',
                    ]
            },
            {
                id: 'autres',
                title: 'Autres',
                children:
                    [
                        "Projet d'envergure",
                        'Tests unitaires',
                        'Méthode agile',
                    ]
            },
            {
                id: 'saisPas',
                title: 'À déterminer...',
                children:
                    [
                        "chose",
                        'Patente',
                        'gogosse',
                    ]
            },
        ]
}

export const parcours_text = {
    id: 'parcours',
    title: 'Parcours de Carrière',
    emplois:
        [
            {
                domaine: domaines.info,
                employeur: 'CHU de Québec, Québec',
                poste: 'Développeur',
                dateDebut: '2019',
                dateFin: 'auj.',
                description: [
                    ' Participer au développement de l’application web «Cristal-Net»',
                    'Travailler dans une équipe agile pour concevoir des nouvelles fonctionnalités',
                    "Contribuer aux discussions sur l'architecture émergente dans nos projets"
                ],
                chips:
                    [
                        '.NET',
                        'Javascript',
                        'SQL',
                    ]
            },
            {
                domaine: domaines.info,
                employeur: 'Industrielle Alliance, Québec',
                poste: 'Développeur',
                dateDebut: '2018',
                dateFin: '2019',
                description: [
                    'Améliorer et entretenir les applications corporatives du département de la compatibilité',
                    "Exercer le rôle de «Release manager» pour assurer l'intégration continue",
                    'Assurer un support de premier niveau aux utilisateurs dans un environnement «DevOps»'
                ],
                chips:
                    [
                        '.NET',
                        'Javascript',
                        'SQL',
                    ]
            },
            {
                domaine: domaines.bio,
                employeur: 'GSK, Québec',
                poste: 'Technicien de production',
                dateDebut: '2014',
                dateFin: '2017',
                description: [
                    'Opérer les systèmes de remplissage de vaccin en salle blanche',
                    'Participer au projet de validation des nouvelles lignes de remplissage',
                    'Former les nouveaux employés aux multiples procédures opératoires normalisées',
                    'Effectuer le suivi environnemental dans les zones de production'
                ]
            },
            {
                domaine: domaines.bio,
                employeur: 'BD Diagnostics, Québec',
                poste: 'Technicien au contrôle de la qualité',
                dateDebut: '2014',
                description: [
                    'Effectuer le contrôle de la qualité sur les composantes du produit',
                    'Préparer le rapport d’analyse pour l’assurance qualité',
                    'Assurer le suivi des tests de stabilité des produits commerciaux'
                ]
            },
            {
                domaine: domaines.bio,
                employeur: 'Feldan',
                poste: 'Technicien de laboratoire',
                dateDebut: '2012',
                dateFin: '2014',
                description: [
                    'Participer aux activités de production et aux projets de recherche et développement',
                    'Opérer les différents équipements du laboratoire de biologie moléculaire',
                    'Assurer l‘approvisionnement du laboratoire en matières premières',
                    'Procéder à l’envoi des commandes aux clients et assurer un suivi',
                    'Améliorer le processus de livraison des commandes en écrivant des procédures opératoires',
                    'normalisées. Cela a permis de diminuer les erreurs de manutention'
                ]
            },
        ]
}


export const education_text = {
    id: 'education',
    title: "Éducation",
    courses: [
        {
            title: 'DEC en techniques de l’informatique',
            school: 'Cégep de Sainte-Foy, Québec',
            year: '2018',
        },
        {
            title: 'Certificat en biotechnologie',
            school: 'Université Laval, Québec ',
            year: '2012',
        },
        {
            title: 'DEC en techniques de bioécologie',
            school: 'Cégep Saint-Laurent, Montréal',
            year: '2010',
        }
    ]
}


export const certfications_text = {
    id: 'certification',
    title: 'Certification',
    certifications: [
        {
            titre: 'Microsoft Certified: Azure Fundamentals',
            image: '/azure_fundamentals.png'
        }
    ]
}
