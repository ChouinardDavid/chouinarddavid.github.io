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
  description: "Apr\xE8s 5 ans de carri\xE8re dans le domaine des <span class=\"biotech\">biotechnologies</span>, j'ai d\xE9cid\xE9 de retourner \xE0 l'\xE9cole pour\n     r\xE9orienter ma carri\xE8re en tant que <span class=\"info\">d\xE9veloppeur web full-stack</span>.\n     L'informatique a toujours fait partie de mes int\xE9r\xEAts, maintenant, j'en fait mon m\xE9tier et je me suis jamais autant senti \xE0 ma place !\n     <br/>\n     <br/>\n     Je ma\xEEtrise la plateforme .NET, les bases de donn\xE9es SQL ainsi que le langague Javascript. J'aime particuli\xE8rement\n     explorer des nouvelles technologies et maintenir \xE0 jour mes connaissances \xE0 l'aide de formations et de projets personnels. \n     De cette fa\xE7on, j'ai aquis des comp\xE9tences en d\xE9veloppement de page web avec React, ainsi que de service web (API) avec .NET Core.\n     <br/>\n     <br/>\n     Merci de prendre le temps de consulter ma page web!\n     <br/>\n     Bonne navigation\n     "
};
var skills_text = {
  id: sections.competences.id,
  title: sections.competences.name,
  sections: [{
    id: 'Techno',
    title: 'Technologies',
    skills: ['.NET / .NET Core', //
    //'.NET Core',
    'EF Core / NHibernate', 'SQL', 'Node.js', 'Next.js']
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
      description: "Au sein d'une \xE9quipe DevOps, participer au d\xE9veloppement des \xE9volutions demand\xE9es et assurer le support technique des syst\xE8mes utlis\xE9s dans le d\xE9partement de la comptabilit\xE9.\n                Cela impliquait de communiquer directement avec les utilisateurs lors de situation particuli\xE8re",
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
    description: "L\u2019objectif est de pr\xE9senter mon parcours professionnel tout en d\xE9veloppant mes comp\xE9tences de d\xE9veloppeur web avec des nouvelles technologies.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNW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QUFHSU4sU0FBSyxFQUFFO0FBSFgsR0EvQk8sRUFvQ1A7QUFDSWpDLFNBQUssRUFBRSxhQURYO0FBRUkrQixRQUFJLEVBQUVTLHlFQUZWO0FBR0lQLFNBQUssRUFBRTtBQUhYLEdBcENPLEVBeUNQO0FBQ0lqQyxTQUFLLEVBQUUsaUJBRFg7QUFFSStCLFFBQUksRUFBRVUsNkVBRlY7QUFHSVIsU0FBSyxFQUFFO0FBSFgsR0F6Q08sRUE4Q1A7QUFDSWpDLFNBQUssRUFBRSxpQkFEWDtBQUVJK0IsUUFBSSxFQUFFVywrRUFGVjtBQUdJVCxTQUFLLEVBQUU7QUFIWCxHQTlDTyxFQW1EUDtBQUNJakMsU0FBSyxFQUFFLFNBRFg7QUFFSStCLFFBQUksRUFBRVksNkVBRlY7QUFHSVYsU0FBSyxFQUFFO0FBSFgsR0FuRE8sRUF3RFA7QUFDSWpDLFNBQUssRUFBRSxZQURYO0FBRUkrQixRQUFJLEVBQUVhLDJFQUZWO0FBR0lYLFNBQUssRUFBRTtBQUhYLEdBeERPO0FBSGUsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWM1ZTUzNzIyMzVmZGZmYjJhNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xyXG5pbXBvcnQge1xyXG4gICAgZmFMZWFmLFxyXG4gICAgZmFNaWNyb3Njb3BlLFxyXG4gICAgZmFHb2xmQmFsbCxcclxuICAgIGZhVHYsXHJcbiAgICBmYUJvb2ssXHJcbiAgICBmYUhhbmRTcG9jayxcclxuICAgIGZhQ2hlc3NLbmlnaHQsXHJcbiAgICBmYUhhbWJ1cmdlcixcclxuICAgIGZhRmxhc2ssXHJcbiAgICBmYUhvY2tleVB1Y2ssXHJcbiAgICBmYVJvYm90LFxyXG4gICAgZmFZaW5ZYW5nLFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBCYWNrVG9TY2hvb2wgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9iYWNrVG9TY2hvb2wnO1xyXG5pbXBvcnQgSm9iIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvam9iJztcclxuaW1wb3J0IHsgZG9tYWluZXMgfSBmcm9tICcuL2RvbWFpbmVzJztcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0ge1xyXG4gICAgcHJlc2VudGF0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdwcmVzZW50YXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICdQcsOpc2VudGF0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjb21wZXRlbmNlczoge1xyXG4gICAgICAgIGlkOiAnY29tcGV0ZW5jZXMnLFxyXG4gICAgICAgIG5hbWU6ICdDb21ww6l0ZW5jZXMnLFxyXG4gICAgfSxcclxuICAgIHBhcmNvdXJzOiB7XHJcbiAgICAgICAgaWQ6ICdjYXJyaWVyZScsXHJcbiAgICAgICAgbmFtZTogJ0NhcnJpw6hyZScsXHJcbiAgICB9LFxyXG4gICAgZWR1Y2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdlZHVjYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICfDiWR1Y2F0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdjZXJ0aWZpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnQ2VydGlmaWNhdGlvbnMnLFxyXG4gICAgfSxcclxuICAgIHByb2plY3RzOiB7XHJcbiAgICAgICAgaWQ6ICdwcm9qZXRzJyxcclxuICAgICAgICBuYW1lOiAnUsOpYWxpc2F0aW9ucycsXHJcbiAgICB9LFxyXG4gICAgaW50ZXJlc3Q6IHtcclxuICAgICAgICBpZDogJ2ludGVyZXN0JyxcclxuICAgICAgICBuYW1lOiAnSW50w6lyw6p0cycsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdoZWFkZXInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdmb290ZXInLFxyXG4gICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxyXG4gICAgZW1haWw6ICdjaG91aW5hcmQuZGNAZ21haWwuY29tJyxcclxuICAgIGltYWdlOiAnL3Bob3RvUGVyc28zLmpwZycsXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICAgICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWRjaG91aW5hcmRsYXZvaWUvJyxcclxuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkJyxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlc2VudGF0aW9uX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucHJlc2VudGF0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5uYW1lLFxyXG4gICAgZGVzY3JpcHRpb246IGBBcHLDqHMgNSBhbnMgZGUgY2FycmnDqHJlIGRhbnMgbGUgZG9tYWluZSBkZXMgPHNwYW4gY2xhc3M9XCJiaW90ZWNoXCI+YmlvdGVjaG5vbG9naWVzPC9zcGFuPiwgaidhaSBkw6ljaWTDqSBkZSByZXRvdXJuZXIgw6AgbCfDqWNvbGUgcG91clxyXG4gICAgIHLDqW9yaWVudGVyIG1hIGNhcnJpw6hyZSBlbiB0YW50IHF1ZSA8c3BhbiBjbGFzcz1cImluZm9cIj5kw6l2ZWxvcHBldXIgd2ViIGZ1bGwtc3RhY2s8L3NwYW4+LlxyXG4gICAgIEwnaW5mb3JtYXRpcXVlIGEgdG91am91cnMgZmFpdCBwYXJ0aWUgZGUgbWVzIGludMOpcsOqdHMsIG1haW50ZW5hbnQsIGonZW4gZmFpdCBtb24gbcOpdGllciBldCBqZSBtZSBzdWlzIGphbWFpcyBhdXRhbnQgc2VudGkgw6AgbWEgcGxhY2UgIVxyXG4gICAgIDxici8+XHJcbiAgICAgPGJyLz5cclxuICAgICBKZSBtYcOudHJpc2UgbGEgcGxhdGVmb3JtZSAuTkVULCBsZXMgYmFzZXMgZGUgZG9ubsOpZXMgU1FMIGFpbnNpIHF1ZSBsZSBsYW5nYWd1ZSBKYXZhc2NyaXB0LiBKJ2FpbWUgcGFydGljdWxpw6hyZW1lbnRcclxuICAgICBleHBsb3JlciBkZXMgbm91dmVsbGVzIHRlY2hub2xvZ2llcyBldCBtYWludGVuaXIgw6Agam91ciBtZXMgY29ubmFpc3NhbmNlcyDDoCBsJ2FpZGUgZGUgZm9ybWF0aW9ucyBldCBkZSBwcm9qZXRzIHBlcnNvbm5lbHMuIFxyXG4gICAgIERlIGNldHRlIGZhw6dvbiwgaidhaSBhcXVpcyBkZXMgY29tcMOpdGVuY2VzIGVuIGTDqXZlbG9wcGVtZW50IGRlIHBhZ2Ugd2ViIGF2ZWMgUmVhY3QsIGFpbnNpIHF1ZSBkZSBzZXJ2aWNlIHdlYiAoQVBJKSBhdmVjIC5ORVQgQ29yZS5cclxuICAgICA8YnIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgTWVyY2kgZGUgcHJlbmRyZSBsZSB0ZW1wcyBkZSBjb25zdWx0ZXIgbWEgcGFnZSB3ZWIhXHJcbiAgICAgPGJyLz5cclxuICAgICBCb25uZSBuYXZpZ2F0aW9uXHJcbiAgICAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5uYW1lLFxyXG4gICAgc2VjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnVGVjaG5vJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICcuTkVUIC8gLk5FVCBDb3JlJywgLy9cclxuICAgICAgICAgICAgICAgIC8vJy5ORVQgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAnRUYgQ29yZSAvIE5IaWJlcm5hdGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAnTm9kZS5qcycsXHJcbiAgICAgICAgICAgICAgICAnTmV4dC5qcycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnbGFuZ2FnZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQyMnLCAvL1xyXG4gICAgICAgICAgICAgICAgJyB2Yi5uZXQnLFxyXG4gICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgJ1JlYWN0JyxcclxuICAgICAgICAgICAgICAgICdIVE1ML0NTUycsXHJcbiAgICAgICAgICAgICAgICAvLyAnSlF1ZXJ5JyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdkZXNpZ25zJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXNpZ25zIGV0IGNvbmNlcHRzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTVZDJywgLy9cclxuICAgICAgICAgICAgICAgICdSRVNUIEFQSScsXHJcbiAgICAgICAgICAgICAgICAnUy5PLkwuSS5ELicsXHJcbiAgICAgICAgICAgICAgICAnRGVzaWduIHBhdHRlcm5zJyxcclxuICAgICAgICAgICAgICAgICdDbG91ZCBBenVyZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnb3V0aWxzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdPdXRpbHMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvJyxcclxuICAgICAgICAgICAgICAgIC8vICdWaXN1YWwgU3R1ZGlvIENvZGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NTTVMgKFNRTCknLFxyXG4gICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcycsXHJcbiAgICAgICAgICAgICAgICAnR2l0JyxcclxuICAgICAgICAgICAgICAgICdQb3N0bWFuJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdjb21wbGVtZW50YWlyZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NvbXBsw6ltZW50YWlyZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdNw6l0aG9kZSBhZ2lsZScsXHJcbiAgICAgICAgICAgICAgICAnU2NydW0gTWFzdGVyJyxcclxuICAgICAgICAgICAgICAgICdEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgJ1Rlc3RzIHVuaXRhaXJlcycsXHJcbiAgICAgICAgICAgICAgICAnUmFwcG9ydCBTU1JTJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdwZXJzbycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGVyc29ubmVsbGVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQ29tbXVuaWNhdGlvbiBhY3RpdmUnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ0NhcGFjaXTDqSBk4oCZYWRhcHRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAnQXR0aXR1ZGUgcG9zaXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgJ0F1dG9ub21lJyxcclxuICAgICAgICAgICAgICAgICdPcmdhbmlzw6knLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmVlcl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnBhcmNvdXJzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnBhcmNvdXJzLm5hbWUsXHJcbiAgICBlbXBsb2lzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuaW5mb3JtYXRpcXVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdDSFUgZGUgUXXDqWJlYywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gaW5mb3JtYXRpcXVlIChkw6l2ZWxvcHBldXIpJyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJ2F1ai4nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFbiB0YW50IHF1ZSBkw6l2ZWxvcHBldXIgd2ViIGZ1bGxzdGFjaywgXHJcbiAgICAgICAgICAgICAgICAgICAgamUgcGFydGljaXBlIGF1IGTDqXZlbG9wcGVtZW50IGRlIDxhIGNsYXNzPVwic3BlY2lhbExpbmtFZmZlY3QyXCIgaHJlZj1cImh0dHBzOi8vd3d3LmRjaWNyaXN0YWxuZXQuY29tL1wiPkNyaXN0YWwtTmV0PC9hPiBhdSBzZWluIGQndW5lIMOpcXVpcGUgYWdpbGUuIFxyXG4gICAgICAgICAgICAgICAgICAgIElsIHMnYWdpdCBkJ3VuIHN5c3TDqG1lIGQnZW52ZXJndXJlIHV0aWxpc8OpIGRhbnMgbGVzIMOpdGFibGlzc2VtZW50cyBkZSBzYW50w6kgZHUgUXXDqWJlYy4gSidhc3N1bWUgYXVzc2kgbGUgcsO0bGUgZGUgU2NydW0gTWFzdGVyIGRhbnMgY2V0dGUgw6lxdWlwZS5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCcsIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTY3J1bSBtYXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnSW5kdXN0cmllbGxlIEFsbGlhbmNlLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnRMOpdmVsb3BwZXVyJyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBdSBzZWluIGQndW5lIMOpcXVpcGUgRGV2T3BzLCBwYXJ0aWNpcGVyIGF1IGTDqXZlbG9wcGVtZW50IGRlcyDDqXZvbHV0aW9ucyBkZW1hbmTDqWVzIGV0IGFzc3VyZXIgbGUgc3VwcG9ydCB0ZWNobmlxdWUgZGVzIHN5c3TDqG1lcyB1dGxpc8OpcyBkYW5zIGxlIGTDqXBhcnRlbWVudCBkZSBsYSBjb21wdGFiaWxpdMOpLlxyXG4gICAgICAgICAgICAgICAgQ2VsYSBpbXBsaXF1YWl0IGRlIGNvbW11bmlxdWVyIGRpcmVjdGVtZW50IGF2ZWMgbGVzIHV0aWxpc2F0ZXVycyBsb3JzIGRlIHNpdHVhdGlvbiBwYXJ0aWN1bGnDqHJlYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZSBtYW5hZ2VyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QmFja1RvU2Nob29sIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iYWNrVG9TY2hvb2wsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJldG91ciDDoCBsJ8OpY29sZSDigJQgVGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWVcIixcclxuICAgICAgICAgICAgICAgIGRhdGVzOiAnMjAxNiAtIDIwMTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0dTSywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgcHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE3JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgdGVjaG5pY2llbiBkYW5zIHVuZSB1c2luZSBkZSBwcm9kdWN0aW9uIGR1IHZhY2NpbiBhbnRpLWdyaXBhbCwgbW9uIHLDtGxlIMOpdGFpdCBkJ29ww6lyZXIgbGVzIHN5c3TDqG1lcyBkZSByZW1wbGlzc2FnZSBlbiBmbGFjb24uXHJcbiAgICAgICAgICAgICAgICAgICAgSmUgY29udHJpYnVhaXMgYXVzc2kgYWN0aXZlbWVudCDDoCBsYSBmb3JtYXRpb24gZGVzIG5vdXZlYXV4IGVtcGxvecOpcy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0JEIERpYWdub3N0aWNzLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBhdSBjb250csO0bGUgZGUgbGEgcXVhbGl0w6knLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVmZmVjdHVlciBsZXMgYW5hbHlzZXMgZGUgbGFib3JhdG9pcmUgcGVybWV0dGFudCBkZSB2YWxpZGVyIGxhIHF1YWxpdMOpIGR1IHByb2R1aXQuIFxyXG4gICAgICAgICAgICAgICAgQ29tcGlsZXIgZXQgY29uc3RydWlyZSB1biByYXBwb3J0IGRlcyByw6lzdWx0YXRzIG9idGVudXMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdGZWxkYW4sIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIGxhYm9yYXRvaXJlJyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTInLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBDb250cmlidWVyIGF1eCBhY3Rpdml0w6lzIGRlIHByb2R1Y3Rpb24gZXQgYXV4IHByb2pldHMgZGUgUiZELiBcclxuICAgICAgICAgICAgICAgICAgICBqJ2Fzc3VyYWlzIGF1c3NpIGwnYXBwcm92aXNpb25uZW1lbnQgZGVzIG1hdGnDqHJlcyBwcmVtacOocmVzIGFpbnNpIHF1ZSBsYSBsaXZyYWlzb24gZGVzIGNvbW1hbmRlcyBhdXggY2xpZW50cy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmVkdWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5lZHVjYXRpb24ubmFtZSxcclxuICAgIGRpcGxvbWFzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RFQyBlbiB0ZWNobmlxdWUgZGUgbOKAmWluZm9ybWF0aXF1ZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIGRlIFNhaW50ZS1Gb3ksIFF1w6liZWMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2VydGlmaWNhdCBlbiBiaW90ZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdVbml2ZXJzaXTDqSBMYXZhbCwgUXXDqWJlYyAnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBiaW/DqWNvbG9naWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIFNhaW50LUxhdXJlbnQsIE1vbnRyw6lhbCcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByb2plY3RzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByb2plY3RzLm5hbWUsXHJcbiAgICBwcm9qZWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcsOpc2VudGF0aW9uIGRlIG1vbiBwcm9maWwgZW4gZm9ybWF0IHdlYicsXHJcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnL3Rvb25QZXJzby5qcGcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEzigJlvYmplY3RpZiBlc3QgZGUgcHLDqXNlbnRlciBtb24gcGFyY291cnMgcHJvZmVzc2lvbm5lbCB0b3V0IGVuIGTDqXZlbG9wcGFudCBtZXMgY29tcMOpdGVuY2VzIGRlIGTDqXZlbG9wcGV1ciB3ZWIgYXZlYyBkZXMgbm91dmVsbGVzIHRlY2hub2xvZ2llcy5gLFxyXG4gICAgICAgICAgICBjb2RlU291cmNlTGluazpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vQ2hvdWluYXJkRGF2aWQvY2hvdWluYXJkZGF2aWQuZ2l0aHViLmlvJyxcclxuICAgICAgICAgICAgY2hpcHM6IFsnUmVhY3QnLCAnTmV4dC5qcycsICdNYXRlcmlhbC1VSSddLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNlcnRmaWNhdGlvbnNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24ubmFtZSxcclxuICAgIGNlcnRpZmljYXRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pY3Jvc29mdCBBenVyZSBGdW5kYW1lbnRhbHMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAyMDIxLFxyXG4gICAgICAgICAgICBpbWFnZTogJy9henVyZS1mdW5kYW1lbnRhbHMucG5nJyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2ZyLWNhL2xlYXJuL2NlcnRpZmljYXRpb25zL2F6dXJlLWZ1bmRhbWVudGFscy8nLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGVyZXN0c190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmludGVyZXN0LmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmludGVyZXN0Lm5hbWUsXHJcbiAgICBpbnRlcmVzdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGxlaW4gYWlyJyxcclxuICAgICAgICAgICAgaWNvbjogZmFMZWFmLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFNaWNyb3Njb3BlLFxyXG4gICAgICAgICAgICBjb2xvcjogJyMzOTYzZTMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dvbGYnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUdvbGZCYWxsLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNjNWM4YzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NpbsOpbWEnLFxyXG4gICAgICAgICAgICBpY29uOiBmYVR2LFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIb2NrZXknLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhvY2tleVB1Y2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JyYXNzYWdlIGRlIGJpw6hyZScsXHJcbiAgICAgICAgICAgIGljb246IGZhRmxhc2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2IzYjhjNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGVjdHVyZScsXHJcbiAgICAgICAgICAgIGljb246IGZhQm9vayxcclxuICAgICAgICAgICAgY29sb3I6ICcjYmY1MDM5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIGljb246IGZhUm9ib3QsXHJcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlIGZpY3Rpb24nLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhhbmRTcG9jayxcclxuICAgICAgICAgICAgY29sb3I6ICdsaWdodEdyZWVuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKZXV4IGRlIHNvY2nDqXTDqScsXHJcbiAgICAgICAgICAgIGljb246IGZhQ2hlc3NLbmlnaHQsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0N1aXNpbmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhhbWJ1cmdlcixcclxuICAgICAgICAgICAgY29sb3I6ICcjYTY4YTZkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNw6lkaXRhdGlvbicsXHJcbiAgICAgICAgICAgIGljb246IGZhWWluWWFuZyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=