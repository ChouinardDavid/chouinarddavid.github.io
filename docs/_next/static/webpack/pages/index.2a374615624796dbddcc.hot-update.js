webpackHotUpdate_N_E("pages/index",{

/***/ "./labels/fr.js":
/*!**********************!*\
  !*** ./labels/fr.js ***!
  \**********************/
/*! exports provided: header_text, footer_text, presentation_text, skills_text, career_text, education_text, projects_text, certfications_text, interests_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header_text", function() { return header_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_text", function() { return footer_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presentation_text", function() { return presentation_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills_text", function() { return skills_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "career_text", function() { return career_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "education_text", function() { return education_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects_text", function() { return projects_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "certfications_text", function() { return certfications_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interests_text", function() { return interests_text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/career/content/backToSchool */ "./components/sections/career/content/backToSchool.js");
/* harmony import */ var _components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections/career/content/job */ "./components/sections/career/content/job.js");
/* harmony import */ var _domaines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domaines */ "./labels/domaines.js");
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\labels\\fr.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/display-name */




var sections = {
  presentation: {
    id: 'presentation',
    name: 'Présentation'
  },
  competences: {
    id: 'competences',
    name: 'Compétences'
  },
  parcours: {
    id: 'carriere',
    name: 'Carrière'
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
    id: 'projets',
    name: 'Réalisations'
  },
  interest: {
    id: 'interest',
    name: 'Intérêts'
  }
};
var header_text = {
  id: 'header'
};
var footer_text = {
  id: 'footer',
  sections: sections,
  email: 'chouinard.dc@gmail.com',
  image: '/photoPerso3.jpg',
  socialLinks: ['https://www.linkedin.com/in/davidchouinardlavoie/', 'https://github.com/ChouinardDavid']
};
var presentation_text = {
  id: sections.presentation.id,
  title: sections.presentation.name,
  description: "Apr\xE8s 5 ans de carri\xE8re dans le domaine de la <span class=\"biotech\">biotechnologie</span>, j'ai d\xE9cid\xE9 de retourner \xE0 l'\xE9cole pour\n     r\xE9orienter ma carri\xE8re en tant que <span class=\"info\">d\xE9veloppeur web full-stack</span>.\n     L'informatique a toujours fait partie de mes int\xE9r\xEAts, maintenant, j'en fait mon m\xE9tier et je me suis jamais autant senti \xE0 ma place !\n     <br/>\n     <br/>\n     Je ma\xEEtrise la plateforme .NET, les bases de donn\xE9es SQL ainsi que le langague Javascript. J'aime particuli\xE8rement\n     explorer des nouvelles technologies et maintenir \xE0 jour mes connaissances \xE0 l'aide de formations et de projets personnels. \n     De cette fa\xE7on, j'ai aquis des comp\xE9tences en d\xE9veloppement de page web avec React, ainsi que de service web (API) avec .NET Core.\n     <br/>\n     <br/>\n     Merci de prendre le temps de consulter ma page web!\n     <br/>\n     Bonne navigation ;)\n     "
};
var skills_text = {
  id: sections.competences.id,
  title: sections.competences.name,
  sections: [{
    id: 'Techno',
    title: 'Technologies',
    skills: ['.NET', //
    '.NET Core', // 'EF Core / NHibernate',
    'SQL', 'Node.js', 'Next.js']
  }, {
    id: 'langages',
    title: 'Langages',
    skills: ['C#', //
    ' vb.net', 'Javascript', 'React', 'HTML/CSS' // 'JQuery',
    ]
  }, {
    id: 'designs',
    title: 'Designs et concepts',
    skills: ['MVC', //
    'REST API', 'S.O.L.I.D.', 'Design patterns', 'Cloud Azure']
  }, {
    id: 'outils',
    title: 'Outils',
    skills: ['Visual Studio', // 'Visual Studio Code',
    'SSMS (SQL)', 'Azure DevOps', 'Git', 'Postman']
  }, {
    id: 'complementaires',
    title: 'Complémentaires',
    skills: ['Méthode agile', 'Scrum Master', 'DevOps', 'Tests unitaires', 'Rapport SSRS']
  }, {
    id: 'perso',
    title: 'Personnelles',
    skills: ['Communication active', //
    'Capacité d’adaptation', 'Attitude positive', 'Autonome', 'Organisé']
  }]
};
var career_text = {
  id: sections.parcours.id,
  title: sections.parcours.name,
  emplois: [{
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].informatique,
    content: {
      employeur: 'CHU de Québec, Québec',
      poste: 'Technicien informatique (développeur)',
      dateDebut: '2019',
      dateFin: 'auj.',
      description: "En tant que d\xE9veloppeur web fullstack, \n                    je participe au d\xE9veloppement de <a class=\"specialLinkEffect2\" href=\"https://www.dcicristalnet.com/\">Cristal-Net</a> au sein d'une \xE9quipe agile. \n                    Il s'agit d'un syst\xE8me d'envergure utilis\xE9 dans les \xE9tablissements de sant\xE9 du Qu\xE9bec. J'assume aussi le r\xF4le de Scrum Master dans cette \xE9quipe.",
      chips: ['.NET', //
      'Javascript', 'SQL', 'Scrum master']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].informatique,
    content: {
      employeur: 'Industrielle Alliance, Québec',
      poste: 'Développeur',
      dateDebut: '2018',
      dateFin: '2019',
      description: "Au sein d'une \xE9quipe DevOps, prendre part au support et au d\xE9veloppement des syst\xE8mes du d\xE9partement de la comptabilit\xE9.\n                Cela consistait \xE0 r\xE9pondre aux utilisateurs lors de situation particuli\xE8re, mais aussi de participer aux \xE9volutions des applications.",
      chips: ['.NET', 'Javascript', 'SQL', 'DevOps', 'Release manager']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].backToSchool,
    content: {
      title: "Retour à l'école — Technique de l’informatique",
      dates: '2016 - 2018'
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    content: {
      employeur: 'GSK, Québec',
      poste: 'Technicien de production',
      dateDebut: '2014',
      dateFin: '2017',
      description: "En tant que technicien dans une usine de production du vaccin anti-gripal, mon r\xF4le \xE9tait d'op\xE9rer les syst\xE8mes de remplissage en flacon.\n                    Je contribuais aussi activement \xE0 la formation des nouveaux employ\xE9s."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    content: {
      employeur: 'BD Diagnostics, Québec',
      poste: 'Technicien au contrôle de la qualité',
      dateDebut: '2014',
      description: "Effectuer les analyses de laboratoire permettant de valider la qualit\xE9 du produit. \n                Compiler et construire un rapport des r\xE9sultats obtenus."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    content: {
      employeur: 'Feldan, Québec',
      poste: 'Technicien de laboratoire',
      dateDebut: '2012',
      dateFin: '2014',
      description: "Contribuer aux activit\xE9s de production et aux projets de R&D. \n                    j'assurais aussi l'approvisionnement des mati\xE8res premi\xE8res ainsi que la livraison des commandes aux clients."
    }
  }]
};
var education_text = {
  id: sections.education.id,
  title: sections.education.name,
  diplomas: [{
    title: 'DEC en technique de l’informatique',
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].informatique,
    school: 'Cégep de Sainte-Foy, Québec',
    year: '2018'
  }, {
    title: 'Certificat en biotechnologie',
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    school: 'Université Laval, Québec ',
    year: '2012'
  }, {
    title: 'DEC en technique de bioécologie',
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    school: 'Cégep Saint-Laurent, Montréal',
    year: '2010'
  }]
};
var projects_text = {
  id: sections.projects.id,
  title: sections.projects.name,
  projects: [{
    title: 'Présentation de mon profil en format web',
    imageSource: '/toonPerso.jpg',
    description: "L\u2019objectif est de pr\xE9senter mon parcours professionnel tout en d\xE9veloppant mes comp\xE9tences de d\xE9veloppeur web avec de nouvelles technologies.",
    codeSourceLink: 'https://github.com/ChouinardDavid/chouinarddavid.github.io',
    chips: ['React', 'Next.js', 'Material-UI']
  }]
};
var certfications_text = {
  id: sections.certification.id,
  title: sections.certification.name,
  certifications: [{
    title: 'Microsoft Azure Fundamentals',
    year: 2021,
    image: '/azure-fundamentals.png',
    link: 'https://docs.microsoft.com/fr-ca/learn/certifications/azure-fundamentals/'
  }]
};
var interests_text = {
  id: sections.interest.id,
  title: sections.interest.name,
  interests: [{
    title: 'Plein air',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLeaf"],
    color: 'green'
  }, {
    title: 'Science',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMicroscope"],
    color: '#3963e3'
  }, {
    title: 'Golf',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGolfBall"],
    color: '#c5c8c9'
  }, {
    title: 'Cinéma',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTv"],
    color: 'black'
  }, {
    title: 'Hockey',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHockeyPuck"],
    color: 'black'
  }, {
    title: 'Brassage de bière',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFlask"],
    color: '#b3b8c7'
  }, {
    title: 'Lecture',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBook"],
    color: '#bf5039'
  }, {
    title: 'Technologie',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRobot"],
    color: 'red'
  }, {
    title: 'Science fiction',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandSpock"],
    color: 'lightGreen'
  }, {
    title: 'Jeux de société',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChessKnight"],
    color: 'black'
  }, {
    title: 'Cuisine',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHamburger"],
    color: '#a68a6d'
  }, {
    title: 'Méditation',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYinYang"],
    color: 'black'
  }]
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNW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TixTQUFLLEVBQUU7QUFIWCxHQS9CTyxFQW9DUDtBQUNJakMsU0FBSyxFQUFFLGFBRFg7QUFFSStCLFFBQUksRUFBRVMseUVBRlY7QUFHSVAsU0FBSyxFQUFFO0FBSFgsR0FwQ08sRUF5Q1A7QUFDSWpDLFNBQUssRUFBRSxpQkFEWDtBQUVJK0IsUUFBSSxFQUFFVSw2RUFGVjtBQUdJUixTQUFLLEVBQUU7QUFIWCxHQXpDTyxFQThDUDtBQUNJakMsU0FBSyxFQUFFLGlCQURYO0FBRUkrQixRQUFJLEVBQUVXLCtFQUZWO0FBR0lULFNBQUssRUFBRTtBQUhYLEdBOUNPLEVBbURQO0FBQ0lqQyxTQUFLLEVBQUUsU0FEWDtBQUVJK0IsUUFBSSxFQUFFWSw2RUFGVjtBQUdJVixTQUFLLEVBQUU7QUFIWCxHQW5ETyxFQXdEUDtBQUNJakMsU0FBSyxFQUFFLFlBRFg7QUFFSStCLFFBQUksRUFBRWEsMkVBRlY7QUFHSVgsU0FBSyxFQUFFO0FBSFgsR0F4RE87QUFIZSxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYTM3NDYxNTYyNDc5NmRiZGRjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXHJcbmltcG9ydCB7XHJcbiAgICBmYUxlYWYsXHJcbiAgICBmYU1pY3Jvc2NvcGUsXHJcbiAgICBmYUdvbGZCYWxsLFxyXG4gICAgZmFUdixcclxuICAgIGZhQm9vayxcclxuICAgIGZhSGFuZFNwb2NrLFxyXG4gICAgZmFDaGVzc0tuaWdodCxcclxuICAgIGZhSGFtYnVyZ2VyLFxyXG4gICAgZmFGbGFzayxcclxuICAgIGZhSG9ja2V5UHVjayxcclxuICAgIGZhUm9ib3QsXHJcbiAgICBmYVlpbllhbmcsXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IEJhY2tUb1NjaG9vbCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2JhY2tUb1NjaG9vbCc7XHJcbmltcG9ydCBKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9qb2InO1xyXG5pbXBvcnQgeyBkb21haW5lcyB9IGZyb20gJy4vZG9tYWluZXMnO1xyXG5cclxuY29uc3Qgc2VjdGlvbnMgPSB7XHJcbiAgICBwcmVzZW50YXRpb246IHtcclxuICAgICAgICBpZDogJ3ByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ1Byw6lzZW50YXRpb24nLFxyXG4gICAgfSxcclxuICAgIGNvbXBldGVuY2VzOiB7XHJcbiAgICAgICAgaWQ6ICdjb21wZXRlbmNlcycsXHJcbiAgICAgICAgbmFtZTogJ0NvbXDDqXRlbmNlcycsXHJcbiAgICB9LFxyXG4gICAgcGFyY291cnM6IHtcclxuICAgICAgICBpZDogJ2NhcnJpZXJlJyxcclxuICAgICAgICBuYW1lOiAnQ2FycmnDqHJlJyxcclxuICAgIH0sXHJcbiAgICBlZHVjYXRpb246IHtcclxuICAgICAgICBpZDogJ2VkdWNhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ8OJZHVjYXRpb24nLFxyXG4gICAgfSxcclxuICAgIGNlcnRpZmljYXRpb246IHtcclxuICAgICAgICBpZDogJ2NlcnRpZmljYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICdDZXJ0aWZpY2F0aW9ucycsXHJcbiAgICB9LFxyXG4gICAgcHJvamVjdHM6IHtcclxuICAgICAgICBpZDogJ3Byb2pldHMnLFxyXG4gICAgICAgIG5hbWU6ICdSw6lhbGlzYXRpb25zJyxcclxuICAgIH0sXHJcbiAgICBpbnRlcmVzdDoge1xyXG4gICAgICAgIGlkOiAnaW50ZXJlc3QnLFxyXG4gICAgICAgIG5hbWU6ICdJbnTDqXLDqnRzJyxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyX3RleHQgPSB7XHJcbiAgICBpZDogJ2hlYWRlcicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyX3RleHQgPSB7XHJcbiAgICBpZDogJ2Zvb3RlcicsXHJcbiAgICBzZWN0aW9uczogc2VjdGlvbnMsXHJcbiAgICBlbWFpbDogJ2Nob3VpbmFyZC5kY0BnbWFpbC5jb20nLFxyXG4gICAgaW1hZ2U6ICcvcGhvdG9QZXJzbzMuanBnJyxcclxuICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgICAgJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYXZpZGNob3VpbmFyZGxhdm9pZS8nLFxyXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vQ2hvdWluYXJkRGF2aWQnLFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmVzZW50YXRpb25fdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wcmVzZW50YXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucHJlc2VudGF0aW9uLm5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbjogYEFwcsOocyA1IGFucyBkZSBjYXJyacOocmUgZGFucyBsZSBkb21haW5lIGRlIGxhIDxzcGFuIGNsYXNzPVwiYmlvdGVjaFwiPmJpb3RlY2hub2xvZ2llPC9zcGFuPiwgaidhaSBkw6ljaWTDqSBkZSByZXRvdXJuZXIgw6AgbCfDqWNvbGUgcG91clxyXG4gICAgIHLDqW9yaWVudGVyIG1hIGNhcnJpw6hyZSBlbiB0YW50IHF1ZSA8c3BhbiBjbGFzcz1cImluZm9cIj5kw6l2ZWxvcHBldXIgd2ViIGZ1bGwtc3RhY2s8L3NwYW4+LlxyXG4gICAgIEwnaW5mb3JtYXRpcXVlIGEgdG91am91cnMgZmFpdCBwYXJ0aWUgZGUgbWVzIGludMOpcsOqdHMsIG1haW50ZW5hbnQsIGonZW4gZmFpdCBtb24gbcOpdGllciBldCBqZSBtZSBzdWlzIGphbWFpcyBhdXRhbnQgc2VudGkgw6AgbWEgcGxhY2UgIVxyXG4gICAgIDxici8+XHJcbiAgICAgPGJyLz5cclxuICAgICBKZSBtYcOudHJpc2UgbGEgcGxhdGVmb3JtZSAuTkVULCBsZXMgYmFzZXMgZGUgZG9ubsOpZXMgU1FMIGFpbnNpIHF1ZSBsZSBsYW5nYWd1ZSBKYXZhc2NyaXB0LiBKJ2FpbWUgcGFydGljdWxpw6hyZW1lbnRcclxuICAgICBleHBsb3JlciBkZXMgbm91dmVsbGVzIHRlY2hub2xvZ2llcyBldCBtYWludGVuaXIgw6Agam91ciBtZXMgY29ubmFpc3NhbmNlcyDDoCBsJ2FpZGUgZGUgZm9ybWF0aW9ucyBldCBkZSBwcm9qZXRzIHBlcnNvbm5lbHMuIFxyXG4gICAgIERlIGNldHRlIGZhw6dvbiwgaidhaSBhcXVpcyBkZXMgY29tcMOpdGVuY2VzIGVuIGTDqXZlbG9wcGVtZW50IGRlIHBhZ2Ugd2ViIGF2ZWMgUmVhY3QsIGFpbnNpIHF1ZSBkZSBzZXJ2aWNlIHdlYiAoQVBJKSBhdmVjIC5ORVQgQ29yZS5cclxuICAgICA8YnIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgTWVyY2kgZGUgcHJlbmRyZSBsZSB0ZW1wcyBkZSBjb25zdWx0ZXIgbWEgcGFnZSB3ZWIhXHJcbiAgICAgPGJyLz5cclxuICAgICBCb25uZSBuYXZpZ2F0aW9uIDspXHJcbiAgICAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5uYW1lLFxyXG4gICAgc2VjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnVGVjaG5vJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICcuTkVUJywgLy9cclxuICAgICAgICAgICAgICAgICcuTkVUIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ0VGIENvcmUgLyBOSGliZXJuYXRlJyxcclxuICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgJ05vZGUuanMnLFxyXG4gICAgICAgICAgICAgICAgJ05leHQuanMnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdMYW5nYWdlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ0MjJywgLy9cclxuICAgICAgICAgICAgICAgICcgdmIubmV0JyxcclxuICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICdSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICAnSFRNTC9DU1MnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ0pRdWVyeScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZGVzaWducycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGVzaWducyBldCBjb25jZXB0cycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ01WQycsIC8vXHJcbiAgICAgICAgICAgICAgICAnUkVTVCBBUEknLFxyXG4gICAgICAgICAgICAgICAgJ1MuTy5MLkkuRC4nLFxyXG4gICAgICAgICAgICAgICAgJ0Rlc2lnbiBwYXR0ZXJucycsXHJcbiAgICAgICAgICAgICAgICAnQ2xvdWQgQXp1cmUnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ291dGlscycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnT3V0aWxzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnVmlzdWFsIFN0dWRpbycsXHJcbiAgICAgICAgICAgICAgICAvLyAnVmlzdWFsIFN0dWRpbyBDb2RlJyxcclxuICAgICAgICAgICAgICAgICdTU01TIChTUUwpJyxcclxuICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgJ0dpdCcsXHJcbiAgICAgICAgICAgICAgICAnUG9zdG1hbicsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnY29tcGxlbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbMOpbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTcOpdGhvZGUgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NjcnVtIE1hc3RlcicsXHJcbiAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICdUZXN0cyB1bml0YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgJ1JhcHBvcnQgU1NSUycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAncGVyc28nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BlcnNvbm5lbGxlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ0NvbW11bmljYXRpb24gYWN0aXZlJywgLy9cclxuICAgICAgICAgICAgICAgICdDYXBhY2l0w6kgZOKAmWFkYXB0YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F0dGl0dWRlIHBvc2l0aXZlJyxcclxuICAgICAgICAgICAgICAgICdBdXRvbm9tZScsXHJcbiAgICAgICAgICAgICAgICAnT3JnYW5pc8OpJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJlZXJfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wYXJjb3Vycy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wYXJjb3Vycy5uYW1lLFxyXG4gICAgZW1wbG9pczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQ0hVIGRlIFF1w6liZWMsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGluZm9ybWF0aXF1ZSAoZMOpdmVsb3BwZXVyKScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIHdlYiBmdWxsc3RhY2ssIFxyXG4gICAgICAgICAgICAgICAgICAgIGplIHBhcnRpY2lwZSBhdSBkw6l2ZWxvcHBlbWVudCBkZSA8YSBjbGFzcz1cInNwZWNpYWxMaW5rRWZmZWN0MlwiIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICBJbCBzJ2FnaXQgZCd1biBzeXN0w6htZSBkJ2VudmVyZ3VyZSB1dGlsaXPDqSBkYW5zIGxlcyDDqXRhYmxpc3NlbWVudHMgZGUgc2FudMOpIGR1IFF1w6liZWMuIEonYXNzdW1lIGF1c3NpIGxlIHLDtGxlIGRlIFNjcnVtIE1hc3RlciBkYW5zIGNldHRlIMOpcXVpcGUuYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLCAvL1xyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2NydW0gbWFzdGVyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0luZHVzdHJpZWxsZSBBbGxpYW5jZSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ0TDqXZlbG9wcGV1cicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE4JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQXUgc2VpbiBkJ3VuZSDDqXF1aXBlIERldk9wcywgcHJlbmRyZSBwYXJ0IGF1IHN1cHBvcnQgZXQgYXUgZMOpdmVsb3BwZW1lbnQgZGVzIHN5c3TDqG1lcyBkdSBkw6lwYXJ0ZW1lbnQgZGUgbGEgY29tcHRhYmlsaXTDqS5cclxuICAgICAgICAgICAgICAgIENlbGEgY29uc2lzdGFpdCDDoCByw6lwb25kcmUgYXV4IHV0aWxpc2F0ZXVycyBsb3JzIGRlIHNpdHVhdGlvbiBwYXJ0aWN1bGnDqHJlLCBtYWlzIGF1c3NpIGRlIHBhcnRpY2lwZXIgYXV4IMOpdm9sdXRpb25zIGRlcyBhcHBsaWNhdGlvbnMuYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZSBtYW5hZ2VyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QmFja1RvU2Nob29sIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iYWNrVG9TY2hvb2wsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJldG91ciDDoCBsJ8OpY29sZSDigJQgVGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWVcIixcclxuICAgICAgICAgICAgICAgIGRhdGVzOiAnMjAxNiAtIDIwMTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0dTSywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgcHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE3JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgdGVjaG5pY2llbiBkYW5zIHVuZSB1c2luZSBkZSBwcm9kdWN0aW9uIGR1IHZhY2NpbiBhbnRpLWdyaXBhbCwgbW9uIHLDtGxlIMOpdGFpdCBkJ29ww6lyZXIgbGVzIHN5c3TDqG1lcyBkZSByZW1wbGlzc2FnZSBlbiBmbGFjb24uXHJcbiAgICAgICAgICAgICAgICAgICAgSmUgY29udHJpYnVhaXMgYXVzc2kgYWN0aXZlbWVudCDDoCBsYSBmb3JtYXRpb24gZGVzIG5vdXZlYXV4IGVtcGxvecOpcy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0JEIERpYWdub3N0aWNzLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBhdSBjb250csO0bGUgZGUgbGEgcXVhbGl0w6knLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVmZmVjdHVlciBsZXMgYW5hbHlzZXMgZGUgbGFib3JhdG9pcmUgcGVybWV0dGFudCBkZSB2YWxpZGVyIGxhIHF1YWxpdMOpIGR1IHByb2R1aXQuIFxyXG4gICAgICAgICAgICAgICAgQ29tcGlsZXIgZXQgY29uc3RydWlyZSB1biByYXBwb3J0IGRlcyByw6lzdWx0YXRzIG9idGVudXMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdGZWxkYW4sIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIGxhYm9yYXRvaXJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTInLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBDb250cmlidWVyIGF1eCBhY3Rpdml0w6lzIGRlIHByb2R1Y3Rpb24gZXQgYXV4IHByb2pldHMgZGUgUiZELiBcclxuICAgICAgICAgICAgICAgICAgICBqJ2Fzc3VyYWlzIGF1c3NpIGwnYXBwcm92aXNpb25uZW1lbnQgZGVzIG1hdGnDqHJlcyBwcmVtacOocmVzIGFpbnNpIHF1ZSBsYSBsaXZyYWlzb24gZGVzIGNvbW1hbmRlcyBhdXggY2xpZW50cy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmVkdWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5lZHVjYXRpb24ubmFtZSxcclxuICAgIGRpcGxvbWFzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RFQyBlbiB0ZWNobmlxdWUgZGUgbOKAmWluZm9ybWF0aXF1ZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIGRlIFNhaW50ZS1Gb3ksIFF1w6liZWMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2VydGlmaWNhdCBlbiBiaW90ZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdVbml2ZXJzaXTDqSBMYXZhbCwgUXXDqWJlYyAnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBiaW/DqWNvbG9naWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIFNhaW50LUxhdXJlbnQsIE1vbnRyw6lhbCcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByb2plY3RzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByb2plY3RzLm5hbWUsXHJcbiAgICBwcm9qZWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcsOpc2VudGF0aW9uIGRlIG1vbiBwcm9maWwgZW4gZm9ybWF0IHdlYicsXHJcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnL3Rvb25QZXJzby5qcGcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEzigJlvYmplY3RpZiBlc3QgZGUgcHLDqXNlbnRlciBtb24gcGFyY291cnMgcHJvZmVzc2lvbm5lbCB0b3V0IGVuIGTDqXZlbG9wcGFudCBtZXMgY29tcMOpdGVuY2VzIGRlIGTDqXZlbG9wcGV1ciB3ZWIgYXZlYyBkZSBub3V2ZWxsZXMgdGVjaG5vbG9naWVzLmAsXHJcbiAgICAgICAgICAgIGNvZGVTb3VyY2VMaW5rOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaG91aW5hcmREYXZpZC9jaG91aW5hcmRkYXZpZC5naXRodWIuaW8nLFxyXG4gICAgICAgICAgICBjaGlwczogWydSZWFjdCcsICdOZXh0LmpzJywgJ01hdGVyaWFsLVVJJ10sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2VydGZpY2F0aW9uc190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5uYW1lLFxyXG4gICAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWljcm9zb2Z0IEF6dXJlIEZ1bmRhbWVudGFscycsXHJcbiAgICAgICAgICAgIHllYXI6IDIwMjEsXHJcbiAgICAgICAgICAgIGltYWdlOiAnL2F6dXJlLWZ1bmRhbWVudGFscy5wbmcnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZnItY2EvbGVhcm4vY2VydGlmaWNhdGlvbnMvYXp1cmUtZnVuZGFtZW50YWxzLycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJlc3RzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuaW50ZXJlc3QuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuaW50ZXJlc3QubmFtZSxcclxuICAgIGludGVyZXN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQbGVpbiBhaXInLFxyXG4gICAgICAgICAgICBpY29uOiBmYUxlYWYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UnLFxyXG4gICAgICAgICAgICBpY29uOiBmYU1pY3Jvc2NvcGUsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzM5NjNlMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR29sZicsXHJcbiAgICAgICAgICAgIGljb246IGZhR29sZkJhbGwsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2M1YzhjOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2luw6ltYScsXHJcbiAgICAgICAgICAgIGljb246IGZhVHYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvY2tleScsXHJcbiAgICAgICAgICAgIGljb246IGZhSG9ja2V5UHVjayxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnJhc3NhZ2UgZGUgYmnDqHJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFGbGFzayxcclxuICAgICAgICAgICAgY29sb3I6ICcjYjNiOGM3JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMZWN0dXJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFCb29rLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiZjUwMzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgaWNvbjogZmFSb2JvdCxcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UgZmljdGlvbicsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFuZFNwb2NrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2xpZ2h0R3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pldXggZGUgc29jacOpdMOpJyxcclxuICAgICAgICAgICAgaWNvbjogZmFDaGVzc0tuaWdodCxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ3Vpc2luZScsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFtYnVyZ2VyLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhNjhhNmQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ03DqWRpdGF0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFZaW5ZYW5nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==