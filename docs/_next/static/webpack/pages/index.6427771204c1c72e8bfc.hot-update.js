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
    skills: ['C# / vb.net', //
    // 'vb.net',
    'Javascript', 'JQuery', 'React', 'HTML/CSS' // 'JQuery',
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
          lineNumber: 168,
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
          lineNumber: 189,
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
      description: "Participer au d\xE9veloppement des \xE9volutions demand\xE9es et assurer le support technique des syst\xE8mes utlis\xE9s dans le d\xE9partement de la comptabilit\xE9.\n                Cela impliquait de communiquer directement avec les utilisateurs lors de situation particuli\xE8re",
      chips: ['.NET', 'Javascript', 'SQL', 'DevOps', 'Release manager']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
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
          lineNumber: 220,
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
      description: "En tant que technicien dans une usine de production du vaccin antigrippal, mon r\xF4le \xE9tait d'op\xE9rer les syst\xE8mes de remplissage en flacon.\n                    Je contribuais aussi activement \xE0 la formation des nouveaux employ\xE9s."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
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
          lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNW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d0VBRlY7QUFHSU4sU0FBSyxFQUFFO0FBSFgsR0EvQk8sRUFvQ1A7QUFDSWpDLFNBQUssRUFBRSxhQURYO0FBRUkrQixRQUFJLEVBQUVTLHlFQUZWO0FBR0lQLFNBQUssRUFBRTtBQUhYLEdBcENPLEVBeUNQO0FBQ0lqQyxTQUFLLEVBQUUsaUJBRFg7QUFFSStCLFFBQUksRUFBRVUsNkVBRlY7QUFHSVIsU0FBSyxFQUFFO0FBSFgsR0F6Q08sRUE4Q1A7QUFDSWpDLFNBQUssRUFBRSxpQkFEWDtBQUVJK0IsUUFBSSxFQUFFVywrRUFGVjtBQUdJVCxTQUFLLEVBQUU7QUFIWCxHQTlDTyxFQW1EUDtBQUNJakMsU0FBSyxFQUFFLFNBRFg7QUFFSStCLFFBQUksRUFBRVksNkVBRlY7QUFHSVYsU0FBSyxFQUFFO0FBSFgsR0FuRE8sRUF3RFA7QUFDSWpDLFNBQUssRUFBRSxZQURYO0FBRUkrQixRQUFJLEVBQUVhLDJFQUZWO0FBR0lYLFNBQUssRUFBRTtBQUhYLEdBeERPO0FBSGUsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjQyNzc3MTIwNGMxYzcyZThiZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xyXG5pbXBvcnQge1xyXG4gICAgZmFMZWFmLFxyXG4gICAgZmFNaWNyb3Njb3BlLFxyXG4gICAgZmFHb2xmQmFsbCxcclxuICAgIGZhVHYsXHJcbiAgICBmYUJvb2ssXHJcbiAgICBmYUhhbmRTcG9jayxcclxuICAgIGZhQ2hlc3NLbmlnaHQsXHJcbiAgICBmYUhhbWJ1cmdlcixcclxuICAgIGZhRmxhc2ssXHJcbiAgICBmYUhvY2tleVB1Y2ssXHJcbiAgICBmYVJvYm90LFxyXG4gICAgZmFZaW5ZYW5nLFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBCYWNrVG9TY2hvb2wgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9iYWNrVG9TY2hvb2wnO1xyXG5pbXBvcnQgSm9iIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvam9iJztcclxuaW1wb3J0IHsgZG9tYWluZXMgfSBmcm9tICcuL2RvbWFpbmVzJztcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0ge1xyXG4gICAgcHJlc2VudGF0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdwcmVzZW50YXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICdQcsOpc2VudGF0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjb21wZXRlbmNlczoge1xyXG4gICAgICAgIGlkOiAnY29tcGV0ZW5jZXMnLFxyXG4gICAgICAgIG5hbWU6ICdDb21ww6l0ZW5jZXMnLFxyXG4gICAgfSxcclxuICAgIHBhcmNvdXJzOiB7XHJcbiAgICAgICAgaWQ6ICdjYXJyaWVyZScsXHJcbiAgICAgICAgbmFtZTogJ0NhcnJpw6hyZScsXHJcbiAgICB9LFxyXG4gICAgZWR1Y2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdlZHVjYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICfDiWR1Y2F0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdjZXJ0aWZpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnQ2VydGlmaWNhdGlvbnMnLFxyXG4gICAgfSxcclxuICAgIHByb2plY3RzOiB7XHJcbiAgICAgICAgaWQ6ICdwcm9qZXRzJyxcclxuICAgICAgICBuYW1lOiAnUsOpYWxpc2F0aW9ucycsXHJcbiAgICB9LFxyXG4gICAgaW50ZXJlc3Q6IHtcclxuICAgICAgICBpZDogJ2ludGVyZXN0JyxcclxuICAgICAgICBuYW1lOiAnSW50w6lyw6p0cycsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdoZWFkZXInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdmb290ZXInLFxyXG4gICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxyXG4gICAgZW1haWw6ICdjaG91aW5hcmQuZGNAZ21haWwuY29tJyxcclxuICAgIGltYWdlOiAnL3Bob3RvUGVyc28zLmpwZycsXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICAgICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWRjaG91aW5hcmRsYXZvaWUvJyxcclxuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkJyxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlc2VudGF0aW9uX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucHJlc2VudGF0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5uYW1lLFxyXG4gICAgZGVzY3JpcHRpb246IGBBcHLDqHMgNSBhbnMgZGUgY2FycmnDqHJlIGRhbnMgbGUgZG9tYWluZSBkZXMgPHNwYW4gY2xhc3M9XCJiaW90ZWNoXCI+YmlvdGVjaG5vbG9naWVzPC9zcGFuPiwgaidhaSBkw6ljaWTDqSBkZSByZXRvdXJuZXIgw6AgbCfDqWNvbGUgcG91clxyXG4gICAgIHLDqW9yaWVudGVyIG1hIGNhcnJpw6hyZSBlbiB0YW50IHF1ZSA8c3BhbiBjbGFzcz1cImluZm9cIj5kw6l2ZWxvcHBldXIgd2ViIGZ1bGwtc3RhY2s8L3NwYW4+LlxyXG4gICAgIEwnaW5mb3JtYXRpcXVlIGEgdG91am91cnMgZmFpdCBwYXJ0aWUgZGUgbWVzIGludMOpcsOqdHMsIG1haW50ZW5hbnQsIGonZW4gZmFpdCBtb24gbcOpdGllciBldCBqZSBtZSBzdWlzIGphbWFpcyBhdXRhbnQgc2VudGkgw6AgbWEgcGxhY2UgIVxyXG4gICAgIDxici8+XHJcbiAgICAgPGJyLz5cclxuICAgICBKZSBtYcOudHJpc2UgbGEgcGxhdGVmb3JtZSAuTkVULCBsZXMgYmFzZXMgZGUgZG9ubsOpZXMgU1FMIGFpbnNpIHF1ZSBsZSBsYW5nYWd1ZSBKYXZhc2NyaXB0LiBKJ2FpbWUgcGFydGljdWxpw6hyZW1lbnRcclxuICAgICBleHBsb3JlciBkZXMgbm91dmVsbGVzIHRlY2hub2xvZ2llcyBldCBtYWludGVuaXIgw6Agam91ciBtZXMgY29ubmFpc3NhbmNlcyDDoCBsJ2FpZGUgZGUgZm9ybWF0aW9ucyBldCBkZSBwcm9qZXRzIHBlcnNvbm5lbHMuIFxyXG4gICAgIERlIGNldHRlIGZhw6dvbiwgaidhaSBhcXVpcyBkZXMgY29tcMOpdGVuY2VzIGVuIGTDqXZlbG9wcGVtZW50IGRlIHBhZ2Ugd2ViIGF2ZWMgUmVhY3QsIGFpbnNpIHF1ZSBkZSBzZXJ2aWNlIHdlYiAoQVBJKSBhdmVjIC5ORVQgQ29yZS5cclxuICAgICA8YnIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgTWVyY2kgZGUgcHJlbmRyZSBsZSB0ZW1wcyBkZSBjb25zdWx0ZXIgbWEgcGFnZSB3ZWIhXHJcbiAgICAgPGJyLz5cclxuICAgICBCb25uZSBuYXZpZ2F0aW9uXHJcbiAgICAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5uYW1lLFxyXG4gICAgc2VjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnVGVjaG5vJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICcuTkVUIC8gLk5FVCBDb3JlJywgLy9cclxuICAgICAgICAgICAgICAgIC8vJy5ORVQgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAnRUYgQ29yZSAvIE5IaWJlcm5hdGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAnTm9kZS5qcycsXHJcbiAgICAgICAgICAgICAgICAnTmV4dC5qcycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnbGFuZ2FnZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQyMgLyB2Yi5uZXQnLCAvL1xyXG4gICAgICAgICAgICAgICAgLy8gJ3ZiLm5ldCcsXHJcbiAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAnSlF1ZXJ5JyxcclxuICAgICAgICAgICAgICAgICdSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICAnSFRNTC9DU1MnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ0pRdWVyeScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZGVzaWducycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGVzaWducyBldCBjb25jZXB0cycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ01WQycsIC8vXHJcbiAgICAgICAgICAgICAgICAnUkVTVCBBUEknLFxyXG4gICAgICAgICAgICAgICAgJ1MuTy5MLkkuRC4nLFxyXG4gICAgICAgICAgICAgICAgJ0Rlc2lnbiBwYXR0ZXJucycsXHJcbiAgICAgICAgICAgICAgICAnQ2xvdWQgQXp1cmUnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ291dGlscycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnT3V0aWxzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnVmlzdWFsIFN0dWRpbycsXHJcbiAgICAgICAgICAgICAgICAvLyAnVmlzdWFsIFN0dWRpbyBDb2RlJyxcclxuICAgICAgICAgICAgICAgICdTU01TIChTUUwpJyxcclxuICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgJ0dpdCcsXHJcbiAgICAgICAgICAgICAgICAnUG9zdG1hbicsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnY29tcGxlbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbMOpbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTcOpdGhvZGUgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NjcnVtIE1hc3RlcicsXHJcbiAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICdUZXN0cyB1bml0YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgJ1JhcHBvcnQgU1NSUycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAncGVyc28nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BlcnNvbm5lbGxlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ0NvbW11bmljYXRpb24gYWN0aXZlJywgLy9cclxuICAgICAgICAgICAgICAgICdDYXBhY2l0w6kgZOKAmWFkYXB0YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F0dGl0dWRlIHBvc2l0aXZlJyxcclxuICAgICAgICAgICAgICAgICdBdXRvbm9tZScsXHJcbiAgICAgICAgICAgICAgICAnT3JnYW5pc8OpJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJlZXJfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wYXJjb3Vycy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wYXJjb3Vycy5uYW1lLFxyXG4gICAgZW1wbG9pczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQ0hVIGRlIFF1w6liZWMsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGluZm9ybWF0aXF1ZSAoZMOpdmVsb3BwZXVyKScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIHdlYiBmdWxsc3RhY2ssIFxyXG4gICAgICAgICAgICAgICAgICAgIGplIHBhcnRpY2lwZSBhdSBkw6l2ZWxvcHBlbWVudCBkZSA8YSBjbGFzcz1cInNwZWNpYWxMaW5rRWZmZWN0MlwiIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICBJbCBzJ2FnaXQgZCd1biBzeXN0w6htZSBkJ2VudmVyZ3VyZSB1dGlsaXPDqSBkYW5zIGxlcyDDqXRhYmxpc3NlbWVudHMgZGUgc2FudMOpIGR1IFF1w6liZWMuIEonYXNzdW1lIGF1c3NpIGxlIHLDtGxlIGRlIFNjcnVtIE1hc3RlciBkYW5zIGNldHRlIMOpcXVpcGUuYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLCAvL1xyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2NydW0gbWFzdGVyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0luZHVzdHJpZWxsZSBBbGxpYW5jZSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ0TDqXZlbG9wcGV1cicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE4JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgUGFydGljaXBlciBhdSBkw6l2ZWxvcHBlbWVudCBkZXMgw6l2b2x1dGlvbnMgZGVtYW5kw6llcyBldCBhc3N1cmVyIGxlIHN1cHBvcnQgdGVjaG5pcXVlIGRlcyBzeXN0w6htZXMgdXRsaXPDqXMgZGFucyBsZSBkw6lwYXJ0ZW1lbnQgZGUgbGEgY29tcHRhYmlsaXTDqS5cclxuICAgICAgICAgICAgICAgIENlbGEgaW1wbGlxdWFpdCBkZSBjb21tdW5pcXVlciBkaXJlY3RlbWVudCBhdmVjIGxlcyB1dGlsaXNhdGV1cnMgbG9ycyBkZSBzaXR1YXRpb24gcGFydGljdWxpw6hyZWAsXHJcbiAgICAgICAgICAgICAgICBjaGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgICcuTkVUJyxcclxuICAgICAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rldk9wcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2UgbWFuYWdlcicsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJhY2tUb1NjaG9vbCBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmFja1RvU2Nob29sLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZXRvdXIgw6AgbCfDqWNvbGUg4oCUIFRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlczogJzIwMTYgLSAyMDE4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdHU0ssIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIHByb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxNycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVuIHRhbnQgcXVlIHRlY2huaWNpZW4gZGFucyB1bmUgdXNpbmUgZGUgcHJvZHVjdGlvbiBkdSB2YWNjaW4gYW50aWdyaXBwYWwsIG1vbiByw7RsZSDDqXRhaXQgZCdvcMOpcmVyIGxlcyBzeXN0w6htZXMgZGUgcmVtcGxpc3NhZ2UgZW4gZmxhY29uLlxyXG4gICAgICAgICAgICAgICAgICAgIEplIGNvbnRyaWJ1YWlzIGF1c3NpIGFjdGl2ZW1lbnQgw6AgbGEgZm9ybWF0aW9uIGRlcyBub3V2ZWF1eCBlbXBsb3nDqXMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdCRCBEaWFnbm9zdGljcywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gYXUgY29udHLDtGxlIGRlIGxhIHF1YWxpdMOpJyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFZmZlY3R1ZXIgbGVzIGFuYWx5c2VzIGRlIGxhYm9yYXRvaXJlIHBlcm1ldHRhbnQgZGUgdmFsaWRlciBsYSBxdWFsaXTDqSBkdSBwcm9kdWl0LiBcclxuICAgICAgICAgICAgICAgIENvbXBpbGVyIGV0IGNvbnN0cnVpcmUgdW4gcmFwcG9ydCBkZXMgcsOpc3VsdGF0cyBvYnRlbnVzLmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnRmVsZGFuLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBkZSBsYWJvcmF0b2lyZScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDEyJyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQ29udHJpYnVlciBhdXggYWN0aXZpdMOpcyBkZSBwcm9kdWN0aW9uIGV0IGF1eCBwcm9qZXRzIGRlIFImRC4gXHJcbiAgICAgICAgICAgICAgICAgICAgaidhc3N1cmFpcyBhdXNzaSBsJ2FwcHJvdmlzaW9ubmVtZW50IGRlcyBtYXRpw6hyZXMgcHJlbWnDqHJlcyBhaW5zaSBxdWUgbGEgbGl2cmFpc29uIGRlcyBjb21tYW5kZXMgYXV4IGNsaWVudHMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZHVjYXRpb25fdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5lZHVjYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuZWR1Y2F0aW9uLm5hbWUsXHJcbiAgICBkaXBsb21hczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBkZSBTYWludGUtRm95LCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NlcnRpZmljYXQgZW4gYmlvdGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnVW5pdmVyc2l0w6kgTGF2YWwsIFF1w6liZWMgJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RFQyBlbiB0ZWNobmlxdWUgZGUgYmlvw6ljb2xvZ2llJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBTYWludC1MYXVyZW50LCBNb250csOpYWwnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wcm9qZWN0cy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcm9qZWN0cy5uYW1lLFxyXG4gICAgcHJvamVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHLDqXNlbnRhdGlvbiBkZSBtb24gcHJvZmlsIGVuIGZvcm1hdCB3ZWInLFxyXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJy90b29uUGVyc28uanBnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBM4oCZb2JqZWN0aWYgZXN0IGRlIHByw6lzZW50ZXIgbW9uIHBhcmNvdXJzIHByb2Zlc3Npb25uZWwgdG91dCBlbiBkw6l2ZWxvcHBhbnQgbWVzIGNvbXDDqXRlbmNlcyBkZSBkw6l2ZWxvcHBldXIgd2ViIGF2ZWMgZGVzIG5vdXZlbGxlcyB0ZWNobm9sb2dpZXMuYCxcclxuICAgICAgICAgICAgY29kZVNvdXJjZUxpbms6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkL2Nob3VpbmFyZGRhdmlkLmdpdGh1Yi5pbycsXHJcbiAgICAgICAgICAgIGNoaXBzOiBbJ1JlYWN0JywgJ05leHQuanMnLCAnTWF0ZXJpYWwtVUknXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjZXJ0ZmljYXRpb25zX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLm5hbWUsXHJcbiAgICBjZXJ0aWZpY2F0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWNyb3NvZnQgQXp1cmUgRnVuZGFtZW50YWxzJyxcclxuICAgICAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICAgICAgaW1hZ2U6ICcvYXp1cmUtZnVuZGFtZW50YWxzLnBuZycsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9mci1jYS9sZWFybi9jZXJ0aWZpY2F0aW9ucy9henVyZS1mdW5kYW1lbnRhbHMvJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcmVzdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5pbnRlcmVzdC5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5pbnRlcmVzdC5uYW1lLFxyXG4gICAgaW50ZXJlc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BsZWluIGFpcicsXHJcbiAgICAgICAgICAgIGljb246IGZhTGVhZixcclxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZScsXHJcbiAgICAgICAgICAgIGljb246IGZhTWljcm9zY29wZSxcclxuICAgICAgICAgICAgY29sb3I6ICcjMzk2M2UzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHb2xmJyxcclxuICAgICAgICAgICAgaWNvbjogZmFHb2xmQmFsbCxcclxuICAgICAgICAgICAgY29sb3I6ICcjYzVjOGM5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaW7DqW1hJyxcclxuICAgICAgICAgICAgaWNvbjogZmFUdixcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSG9ja2V5JyxcclxuICAgICAgICAgICAgaWNvbjogZmFIb2NrZXlQdWNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCcmFzc2FnZSBkZSBiacOocmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUZsYXNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiM2I4YzcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xlY3R1cmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUJvb2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2JmNTAzOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYVJvYm90LFxyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZSBmaWN0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW5kU3BvY2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRHcmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSmV1eCBkZSBzb2Npw6l0w6knLFxyXG4gICAgICAgICAgICBpY29uOiBmYUNoZXNzS25pZ2h0LFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDdWlzaW5lJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW1idXJnZXIsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2E2OGE2ZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTcOpZGl0YXRpb24nLFxyXG4gICAgICAgICAgICBpY29uOiBmYVlpbllhbmcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9