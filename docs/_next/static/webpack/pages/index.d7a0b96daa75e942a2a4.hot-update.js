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
    id: 'realisations',
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
  socialLinks: ['https://www.linkedin.com/in/david-chouinard/', 'https://github.com/ChouinardDavid']
};
var presentation_text = {
  id: sections.presentation.id,
  title: sections.presentation.name,
  description: "Apr\xE8s 5 ans de carri\xE8re dans le domaine de la <span class=\"biotech\">biotechnologie</span>, j'ai d\xE9cid\xE9 de retourner \xE0 l'\xE9cole pour\n     r\xE9orienter ma carri\xE8re en tant que <span class=\"info\">d\xE9veloppeur web full-stack</span>.\n     L'informatique a toujours fait partie de mes int\xE9r\xEAts, maintenant, j'en fait mon m\xE9tier et je me suis jamais autant senti \xE0 ma place !\n     <br/>\n     <br/>\n     Je ma\xEEtrise la plateforme .NET, les bases de donn\xE9es SQL ainsi que le langague Javascript. J'aime particuli\xE8rement\n     explorer des nouvelles technologies et maintenir \xE0 jour mes connaissances \xE0 l'aide de formations et de projets personnels. \n     De cette fa\xE7on, j'ai aquis des comp\xE9tences pour d\xE9velopper des interfaces web avec React et de service web (API) avec .NET Core.\n     <br/>\n     <br/>\n     Merci de prendre le temps de consulter ma page web !\n     <br/>\n     Bonne navigation ;)\n     "
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
    skills: ['Communique activement', //
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
      // dateDebut: 'août 2019',
      dateDebut: '2019',
      dateFin: 'auj.',
      description: "En tant que d\xE9veloppeur web fullstack, \n                    je participe au d\xE9veloppement de <a class=\"specialLinkEffect2\" href=\"https://www.dcicristalnet.com/\">Cristal-Net</a> au sein d'une \xE9quipe agile. \n                    Il s'agit d'un syst\xE8me d'envergure utilis\xE9s dans les \xE9tablissements de sant\xE9 du Qu\xE9bec. J'ai aussi le r\xF4le de Scrum Master pour supporter l'\xE9quipe dans la m\xE9thode agile.",
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
      // dateDebut: 'sept. 2018',
      // dateFin: 'août 2019',
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
          lineNumber: 212,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].backToSchool,
    content: {
      title: "Retour à l'école — Technique de l’informatique",
      // dates: 'févr. 2016 - déc. 2018',
      dates: '2016 - 2018'
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    content: {
      employeur: 'GSK, Québec',
      poste: 'Technicien de production',
      // dateDebut: 'nov. 2014',
      // dateFin: 'févr. 2017',
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
          lineNumber: 239,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    content: {
      employeur: 'BD Diagnostics, Québec',
      poste: 'Technicien au contrôle de la qualité',
      // dateDebut: 'janv. 2014',
      // dateFin: 'oct. 2014',
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
          lineNumber: 254,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    content: {
      employeur: 'Feldan, Québec',
      poste: 'Technicien de laboratoire',
      // dateDebut: 'mai 2012',
      // dateFin: 'janv. 2014',
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
    title: 'Ma page web',
    imageSource: '/toonPerso.jpg',
    description: "Ma page web personnelle, premier projet r\xE9alis\xE9 de A \xE0 Z !",
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
    link: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNW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QUNJakMsU0FBSyxFQUFFLFNBRFg7QUFFSStCLFFBQUksRUFBRVEsd0VBRlY7QUFHSU4sU0FBSyxFQUFFO0FBSFgsR0EvQk8sRUFvQ1A7QUFDSWpDLFNBQUssRUFBRSxhQURYO0FBRUkrQixRQUFJLEVBQUVTLHlFQUZWO0FBR0lQLFNBQUssRUFBRTtBQUhYLEdBcENPLEVBeUNQO0FBQ0lqQyxTQUFLLEVBQUUsaUJBRFg7QUFFSStCLFFBQUksRUFBRVUsNkVBRlY7QUFHSVIsU0FBSyxFQUFFO0FBSFgsR0F6Q08sRUE4Q1A7QUFDSWpDLFNBQUssRUFBRSxpQkFEWDtBQUVJK0IsUUFBSSxFQUFFVywrRUFGVjtBQUdJVCxTQUFLLEVBQUU7QUFIWCxHQTlDTyxFQW1EUDtBQUNJakMsU0FBSyxFQUFFLFNBRFg7QUFFSStCLFFBQUksRUFBRVksNkVBRlY7QUFHSVYsU0FBSyxFQUFFO0FBSFgsR0FuRE8sRUF3RFA7QUFDSWpDLFNBQUssRUFBRSxZQURYO0FBRUkrQixRQUFJLEVBQUVhLDJFQUZWO0FBR0lYLFNBQUssRUFBRTtBQUhYLEdBeERPO0FBSGUsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDdhMGI5NmRhYTc1ZTk0MmEyYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xyXG5pbXBvcnQge1xyXG4gICAgZmFMZWFmLFxyXG4gICAgZmFNaWNyb3Njb3BlLFxyXG4gICAgZmFHb2xmQmFsbCxcclxuICAgIGZhVHYsXHJcbiAgICBmYUJvb2ssXHJcbiAgICBmYUhhbmRTcG9jayxcclxuICAgIGZhQ2hlc3NLbmlnaHQsXHJcbiAgICBmYUhhbWJ1cmdlcixcclxuICAgIGZhRmxhc2ssXHJcbiAgICBmYUhvY2tleVB1Y2ssXHJcbiAgICBmYVJvYm90LFxyXG4gICAgZmFZaW5ZYW5nLFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBCYWNrVG9TY2hvb2wgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9iYWNrVG9TY2hvb2wnO1xyXG5pbXBvcnQgSm9iIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvam9iJztcclxuaW1wb3J0IHsgZG9tYWluZXMgfSBmcm9tICcuL2RvbWFpbmVzJztcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0ge1xyXG4gICAgcHJlc2VudGF0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdwcmVzZW50YXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICdQcsOpc2VudGF0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjb21wZXRlbmNlczoge1xyXG4gICAgICAgIGlkOiAnY29tcGV0ZW5jZXMnLFxyXG4gICAgICAgIG5hbWU6ICdDb21ww6l0ZW5jZXMnLFxyXG4gICAgfSxcclxuICAgIHBhcmNvdXJzOiB7XHJcbiAgICAgICAgaWQ6ICdjYXJyaWVyZScsXHJcbiAgICAgICAgbmFtZTogJ0NhcnJpw6hyZScsXHJcbiAgICB9LFxyXG4gICAgZWR1Y2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdlZHVjYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICfDiWR1Y2F0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdjZXJ0aWZpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnQ2VydGlmaWNhdGlvbnMnLFxyXG4gICAgfSxcclxuICAgIHByb2plY3RzOiB7XHJcbiAgICAgICAgaWQ6ICdyZWFsaXNhdGlvbnMnLFxyXG4gICAgICAgIG5hbWU6ICdSw6lhbGlzYXRpb25zJyxcclxuICAgIH0sXHJcbiAgICBpbnRlcmVzdDoge1xyXG4gICAgICAgIGlkOiAnaW50ZXJlc3QnLFxyXG4gICAgICAgIG5hbWU6ICdJbnTDqXLDqnRzJyxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyX3RleHQgPSB7XHJcbiAgICBpZDogJ2hlYWRlcicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyX3RleHQgPSB7XHJcbiAgICBpZDogJ2Zvb3RlcicsXHJcbiAgICBzZWN0aW9uczogc2VjdGlvbnMsXHJcbiAgICBlbWFpbDogJ2Nob3VpbmFyZC5kY0BnbWFpbC5jb20nLFxyXG4gICAgaW1hZ2U6ICcvcGhvdG9QZXJzbzMuanBnJyxcclxuICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgICAgJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYXZpZC1jaG91aW5hcmQvJyxcclxuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkJyxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlc2VudGF0aW9uX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucHJlc2VudGF0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5uYW1lLFxyXG4gICAgZGVzY3JpcHRpb246IGBBcHLDqHMgNSBhbnMgZGUgY2FycmnDqHJlIGRhbnMgbGUgZG9tYWluZSBkZSBsYSA8c3BhbiBjbGFzcz1cImJpb3RlY2hcIj5iaW90ZWNobm9sb2dpZTwvc3Bhbj4sIGonYWkgZMOpY2lkw6kgZGUgcmV0b3VybmVyIMOgIGwnw6ljb2xlIHBvdXJcclxuICAgICByw6lvcmllbnRlciBtYSBjYXJyacOocmUgZW4gdGFudCBxdWUgPHNwYW4gY2xhc3M9XCJpbmZvXCI+ZMOpdmVsb3BwZXVyIHdlYiBmdWxsLXN0YWNrPC9zcGFuPi5cclxuICAgICBMJ2luZm9ybWF0aXF1ZSBhIHRvdWpvdXJzIGZhaXQgcGFydGllIGRlIG1lcyBpbnTDqXLDqnRzLCBtYWludGVuYW50LCBqJ2VuIGZhaXQgbW9uIG3DqXRpZXIgZXQgamUgbWUgc3VpcyBqYW1haXMgYXV0YW50IHNlbnRpIMOgIG1hIHBsYWNlICFcclxuICAgICA8YnIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgSmUgbWHDrnRyaXNlIGxhIHBsYXRlZm9ybWUgLk5FVCwgbGVzIGJhc2VzIGRlIGRvbm7DqWVzIFNRTCBhaW5zaSBxdWUgbGUgbGFuZ2FndWUgSmF2YXNjcmlwdC4gSidhaW1lIHBhcnRpY3VsacOocmVtZW50XHJcbiAgICAgZXhwbG9yZXIgZGVzIG5vdXZlbGxlcyB0ZWNobm9sb2dpZXMgZXQgbWFpbnRlbmlyIMOgIGpvdXIgbWVzIGNvbm5haXNzYW5jZXMgw6AgbCdhaWRlIGRlIGZvcm1hdGlvbnMgZXQgZGUgcHJvamV0cyBwZXJzb25uZWxzLiBcclxuICAgICBEZSBjZXR0ZSBmYcOnb24sIGonYWkgYXF1aXMgZGVzIGNvbXDDqXRlbmNlcyBwb3VyIGTDqXZlbG9wcGVyIGRlcyBpbnRlcmZhY2VzIHdlYiBhdmVjIFJlYWN0IGV0IGRlIHNlcnZpY2Ugd2ViIChBUEkpIGF2ZWMgLk5FVCBDb3JlLlxyXG4gICAgIDxici8+XHJcbiAgICAgPGJyLz5cclxuICAgICBNZXJjaSBkZSBwcmVuZHJlIGxlIHRlbXBzIGRlIGNvbnN1bHRlciBtYSBwYWdlIHdlYiAhXHJcbiAgICAgPGJyLz5cclxuICAgICBCb25uZSBuYXZpZ2F0aW9uIDspXHJcbiAgICAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5uYW1lLFxyXG4gICAgc2VjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnVGVjaG5vJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICcuTkVUJywgLy9cclxuICAgICAgICAgICAgICAgICcuTkVUIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ0VGIENvcmUgLyBOSGliZXJuYXRlJyxcclxuICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgJ05vZGUuanMnLFxyXG4gICAgICAgICAgICAgICAgJ05leHQuanMnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdMYW5nYWdlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ0MjJywgLy9cclxuICAgICAgICAgICAgICAgICcgdmIubmV0JyxcclxuICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICdSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICAnSFRNTC9DU1MnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ0pRdWVyeScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZGVzaWducycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGVzaWducyBldCBjb25jZXB0cycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ01WQycsIC8vXHJcbiAgICAgICAgICAgICAgICAnUkVTVCBBUEknLFxyXG4gICAgICAgICAgICAgICAgJ1MuTy5MLkkuRC4nLFxyXG4gICAgICAgICAgICAgICAgJ0Rlc2lnbiBwYXR0ZXJucycsXHJcbiAgICAgICAgICAgICAgICAnQ2xvdWQgQXp1cmUnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ291dGlscycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnT3V0aWxzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnVmlzdWFsIFN0dWRpbycsXHJcbiAgICAgICAgICAgICAgICAvLyAnVmlzdWFsIFN0dWRpbyBDb2RlJyxcclxuICAgICAgICAgICAgICAgICdTU01TIChTUUwpJyxcclxuICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgJ0dpdCcsXHJcbiAgICAgICAgICAgICAgICAnUG9zdG1hbicsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnY29tcGxlbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbMOpbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTcOpdGhvZGUgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NjcnVtIE1hc3RlcicsXHJcbiAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICdUZXN0cyB1bml0YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgJ1JhcHBvcnQgU1NSUycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAncGVyc28nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BlcnNvbm5lbGxlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ0NvbW11bmlxdWUgYWN0aXZlbWVudCcsIC8vXHJcbiAgICAgICAgICAgICAgICAnQ2FwYWNpdMOpIGTigJlhZGFwdGF0aW9uJyxcclxuICAgICAgICAgICAgICAgICdBdHRpdHVkZSBwb3NpdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAnQXV0b25vbWUnLFxyXG4gICAgICAgICAgICAgICAgJ09yZ2FuaXPDqScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZWVyX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucGFyY291cnMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucGFyY291cnMubmFtZSxcclxuICAgIGVtcGxvaXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0NIVSBkZSBRdcOpYmVjLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBpbmZvcm1hdGlxdWUgKGTDqXZlbG9wcGV1ciknLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIHdlYiBmdWxsc3RhY2ssIFxyXG4gICAgICAgICAgICAgICAgICAgIGplIHBhcnRpY2lwZSBhdSBkw6l2ZWxvcHBlbWVudCBkZSA8YSBjbGFzcz1cInNwZWNpYWxMaW5rRWZmZWN0MlwiIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICBJbCBzJ2FnaXQgZCd1biBzeXN0w6htZSBkJ2VudmVyZ3VyZSB1dGlsaXPDqXMgZGFucyBsZXMgw6l0YWJsaXNzZW1lbnRzIGRlIHNhbnTDqSBkdSBRdcOpYmVjLiBKJ2FpIGF1c3NpIGxlIHLDtGxlIGRlIFNjcnVtIE1hc3RlciBwb3VyIHN1cHBvcnRlciBsJ8OpcXVpcGUgZGFucyBsYSBtw6l0aG9kZSBhZ2lsZS5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCcsIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTY3J1bSBtYXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnSW5kdXN0cmllbGxlIEFsbGlhbmNlLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnRMOpdmVsb3BwZXVyJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ3NlcHQuIDIwMTgnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ2Fvw7t0IDIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEF1IHNlaW4gZCd1bmUgw6lxdWlwZSBEZXZPcHMsIHByZW5kcmUgcGFydCBhdSBzdXBwb3J0IGV0IGF1IGTDqXZlbG9wcGVtZW50IGRlcyBzeXN0w6htZXMgZHUgZMOpcGFydGVtZW50IGRlIGxhIGNvbXB0YWJpbGl0w6kuXHJcbiAgICAgICAgICAgICAgICBDZWxhIGNvbnNpc3RhaXQgw6AgcsOpcG9uZHJlIGF1eCB1dGlsaXNhdGV1cnMgbG9ycyBkZSBzaXR1YXRpb24gcGFydGljdWxpw6hyZSwgbWFpcyBhdXNzaSBkZSBwYXJ0aWNpcGVyIGF1eCDDqXZvbHV0aW9ucyBkZXMgYXBwbGljYXRpb25zLmAsXHJcbiAgICAgICAgICAgICAgICBjaGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgICcuTkVUJyxcclxuICAgICAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rldk9wcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2UgbWFuYWdlcicsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJhY2tUb1NjaG9vbCBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmFja1RvU2Nob29sLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZXRvdXIgw6AgbCfDqWNvbGUg4oCUIFRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlczogJ2bDqXZyLiAyMDE2IC0gZMOpYy4gMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlczogJzIwMTYgLSAyMDE4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdHU0ssIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIHByb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnbm92LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVGaW46ICdmw6l2ci4gMjAxNycsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE3JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgdGVjaG5pY2llbiBkYW5zIHVuZSB1c2luZSBkZSBwcm9kdWN0aW9uIGR1IHZhY2NpbiBhbnRpLWdyaXBhbCwgbW9uIHLDtGxlIMOpdGFpdCBkJ29ww6lyZXIgbGVzIHN5c3TDqG1lcyBkZSByZW1wbGlzc2FnZSBlbiBmbGFjb24uXHJcbiAgICAgICAgICAgICAgICAgICAgSmUgY29udHJpYnVhaXMgYXVzc2kgYWN0aXZlbWVudCDDoCBsYSBmb3JtYXRpb24gZGVzIG5vdXZlYXV4IGVtcGxvecOpcy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0JEIERpYWdub3N0aWNzLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBhdSBjb250csO0bGUgZGUgbGEgcXVhbGl0w6knLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnamFudi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnb2N0LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFZmZlY3R1ZXIgbGVzIGFuYWx5c2VzIGRlIGxhYm9yYXRvaXJlIHBlcm1ldHRhbnQgZGUgdmFsaWRlciBsYSBxdWFsaXTDqSBkdSBwcm9kdWl0LiBcclxuICAgICAgICAgICAgICAgIENvbXBpbGVyIGV0IGNvbnN0cnVpcmUgdW4gcmFwcG9ydCBkZXMgcsOpc3VsdGF0cyBvYnRlbnVzLmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnRmVsZGFuLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBkZSBsYWJvcmF0b2lyZScsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdtYWkgMjAxMicsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnamFudi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDEyJyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQ29udHJpYnVlciBhdXggYWN0aXZpdMOpcyBkZSBwcm9kdWN0aW9uIGV0IGF1eCBwcm9qZXRzIGRlIFImRC4gXHJcbiAgICAgICAgICAgICAgICAgICAgaidhc3N1cmFpcyBhdXNzaSBsJ2FwcHJvdmlzaW9ubmVtZW50IGRlcyBtYXRpw6hyZXMgcHJlbWnDqHJlcyBhaW5zaSBxdWUgbGEgbGl2cmFpc29uIGRlcyBjb21tYW5kZXMgYXV4IGNsaWVudHMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZHVjYXRpb25fdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5lZHVjYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuZWR1Y2F0aW9uLm5hbWUsXHJcbiAgICBkaXBsb21hczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBkZSBTYWludGUtRm95LCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NlcnRpZmljYXQgZW4gYmlvdGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnVW5pdmVyc2l0w6kgTGF2YWwsIFF1w6liZWMgJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RFQyBlbiB0ZWNobmlxdWUgZGUgYmlvw6ljb2xvZ2llJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBTYWludC1MYXVyZW50LCBNb250csOpYWwnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wcm9qZWN0cy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcm9qZWN0cy5uYW1lLFxyXG4gICAgcHJvamVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWEgcGFnZSB3ZWInLFxyXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJy90b29uUGVyc28uanBnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBNYSBwYWdlIHdlYiBwZXJzb25uZWxsZSwgcHJlbWllciBwcm9qZXQgcsOpYWxpc8OpIGRlIEEgw6AgWiAhYCxcclxuICAgICAgICAgICAgY29kZVNvdXJjZUxpbms6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkL2Nob3VpbmFyZGRhdmlkLmdpdGh1Yi5pbycsXHJcbiAgICAgICAgICAgIGNoaXBzOiBbJ1JlYWN0JywgJ05leHQuanMnLCAnTWF0ZXJpYWwtVUknXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjZXJ0ZmljYXRpb25zX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLm5hbWUsXHJcbiAgICBjZXJ0aWZpY2F0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWNyb3NvZnQgQXp1cmUgRnVuZGFtZW50YWxzJyxcclxuICAgICAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICAgICAgaW1hZ2U6ICcvYXp1cmUtZnVuZGFtZW50YWxzLnBuZycsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9sZWFybi9jZXJ0aWZpY2F0aW9ucy9henVyZS1mdW5kYW1lbnRhbHMnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGVyZXN0c190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmludGVyZXN0LmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmludGVyZXN0Lm5hbWUsXHJcbiAgICBpbnRlcmVzdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGxlaW4gYWlyJyxcclxuICAgICAgICAgICAgaWNvbjogZmFMZWFmLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFNaWNyb3Njb3BlLFxyXG4gICAgICAgICAgICBjb2xvcjogJyMzOTYzZTMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dvbGYnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUdvbGZCYWxsLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNjNWM4YzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NpbsOpbWEnLFxyXG4gICAgICAgICAgICBpY29uOiBmYVR2LFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIb2NrZXknLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhvY2tleVB1Y2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JyYXNzYWdlIGRlIGJpw6hyZScsXHJcbiAgICAgICAgICAgIGljb246IGZhRmxhc2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2IzYjhjNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGVjdHVyZScsXHJcbiAgICAgICAgICAgIGljb246IGZhQm9vayxcclxuICAgICAgICAgICAgY29sb3I6ICcjYmY1MDM5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIGljb246IGZhUm9ib3QsXHJcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlIGZpY3Rpb24nLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhhbmRTcG9jayxcclxuICAgICAgICAgICAgY29sb3I6ICdsaWdodEdyZWVuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKZXV4IGRlIHNvY2nDqXTDqScsXHJcbiAgICAgICAgICAgIGljb246IGZhQ2hlc3NLbmlnaHQsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0N1aXNpbmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhhbWJ1cmdlcixcclxuICAgICAgICAgICAgY29sb3I6ICcjYTY4YTZkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNw6lkaXRhdGlvbicsXHJcbiAgICAgICAgICAgIGljb246IGZhWWluWWFuZyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=