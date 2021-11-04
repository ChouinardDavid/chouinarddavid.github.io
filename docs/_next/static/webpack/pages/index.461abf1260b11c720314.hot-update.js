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
    'SQL', // 'EF Core / NHibernate',
    '.NET Core', 'Node.js', 'Next.js']
  }, {
    id: 'langages',
    title: 'Langages',
    skills: ['C#', //
    ' vb.net', 'Javascript', 'React', 'HTML/CSS' // 'JQuery',
    ]
  }, {
    id: 'outils',
    title: 'Outils',
    skills: ['Visual Studio', 'Visual Studio Code', 'SSMS (SQL)', 'Azure DevOps', 'Git', 'Postman']
  }, {
    id: 'designs',
    title: 'Designs et concepts',
    skills: ['MVC', //
    'REST API', 'S.O.L.I.D.', 'Design patterns', 'Cloud Azure']
  }, {
    id: 'complementaires',
    title: 'Complémentaires',
    skills: ['Méthode agile', 'Scrum Master', 'Tests unitaires', 'Kendo', 'Rapport SSRS']
  }, {
    id: 'perso',
    title: 'Personnelles',
    skills: ['Communique activement', //
    'Autonome', 'Initiative', 'Organisé']
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
          lineNumber: 166,
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
          lineNumber: 188,
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
          lineNumber: 211,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].backToSchool,
    content: {
      title: "Retour à l'école (Technique de l’informatique)",
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
          lineNumber: 222,
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
          lineNumber: 238,
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
          lineNumber: 253,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNW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QUFLLEVBQUUsU0FEWDtBQUVJK0IsUUFBSSxFQUFFUSx3RUFGVjtBQUdJTixTQUFLLEVBQUU7QUFIWCxHQS9CTyxFQW9DUDtBQUNJakMsU0FBSyxFQUFFLGFBRFg7QUFFSStCLFFBQUksRUFBRVMseUVBRlY7QUFHSVAsU0FBSyxFQUFFO0FBSFgsR0FwQ08sRUF5Q1A7QUFDSWpDLFNBQUssRUFBRSxpQkFEWDtBQUVJK0IsUUFBSSxFQUFFVSw2RUFGVjtBQUdJUixTQUFLLEVBQUU7QUFIWCxHQXpDTyxFQThDUDtBQUNJakMsU0FBSyxFQUFFLGlCQURYO0FBRUkrQixRQUFJLEVBQUVXLCtFQUZWO0FBR0lULFNBQUssRUFBRTtBQUhYLEdBOUNPLEVBbURQO0FBQ0lqQyxTQUFLLEVBQUUsU0FEWDtBQUVJK0IsUUFBSSxFQUFFWSw2RUFGVjtBQUdJVixTQUFLLEVBQUU7QUFIWCxHQW5ETyxFQXdEUDtBQUNJakMsU0FBSyxFQUFFLFlBRFg7QUFFSStCLFFBQUksRUFBRWEsMkVBRlY7QUFHSVgsU0FBSyxFQUFFO0FBSFgsR0F4RE87QUFIZSxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NjFhYmYxMjYwYjExYzcyMDMxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXHJcbmltcG9ydCB7XHJcbiAgICBmYUxlYWYsXHJcbiAgICBmYU1pY3Jvc2NvcGUsXHJcbiAgICBmYUdvbGZCYWxsLFxyXG4gICAgZmFUdixcclxuICAgIGZhQm9vayxcclxuICAgIGZhSGFuZFNwb2NrLFxyXG4gICAgZmFDaGVzc0tuaWdodCxcclxuICAgIGZhSGFtYnVyZ2VyLFxyXG4gICAgZmFGbGFzayxcclxuICAgIGZhSG9ja2V5UHVjayxcclxuICAgIGZhUm9ib3QsXHJcbiAgICBmYVlpbllhbmcsXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IEJhY2tUb1NjaG9vbCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2JhY2tUb1NjaG9vbCc7XHJcbmltcG9ydCBKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9qb2InO1xyXG5pbXBvcnQgeyBkb21haW5lcyB9IGZyb20gJy4vZG9tYWluZXMnO1xyXG5cclxuY29uc3Qgc2VjdGlvbnMgPSB7XHJcbiAgICBwcmVzZW50YXRpb246IHtcclxuICAgICAgICBpZDogJ3ByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ1Byw6lzZW50YXRpb24nLFxyXG4gICAgfSxcclxuICAgIGNvbXBldGVuY2VzOiB7XHJcbiAgICAgICAgaWQ6ICdjb21wZXRlbmNlcycsXHJcbiAgICAgICAgbmFtZTogJ0NvbXDDqXRlbmNlcycsXHJcbiAgICB9LFxyXG4gICAgcGFyY291cnM6IHtcclxuICAgICAgICBpZDogJ2NhcnJpZXJlJyxcclxuICAgICAgICBuYW1lOiAnQ2FycmnDqHJlJyxcclxuICAgIH0sXHJcbiAgICBlZHVjYXRpb246IHtcclxuICAgICAgICBpZDogJ2VkdWNhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ8OJZHVjYXRpb24nLFxyXG4gICAgfSxcclxuICAgIGNlcnRpZmljYXRpb246IHtcclxuICAgICAgICBpZDogJ2NlcnRpZmljYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICdDZXJ0aWZpY2F0aW9ucycsXHJcbiAgICB9LFxyXG4gICAgcHJvamVjdHM6IHtcclxuICAgICAgICBpZDogJ3JlYWxpc2F0aW9ucycsXHJcbiAgICAgICAgbmFtZTogJ1LDqWFsaXNhdGlvbnMnLFxyXG4gICAgfSxcclxuICAgIGludGVyZXN0OiB7XHJcbiAgICAgICAgaWQ6ICdpbnRlcmVzdCcsXHJcbiAgICAgICAgbmFtZTogJ0ludMOpcsOqdHMnLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJfdGV4dCA9IHtcclxuICAgIGlkOiAnaGVhZGVyJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJfdGV4dCA9IHtcclxuICAgIGlkOiAnZm9vdGVyJyxcclxuICAgIHNlY3Rpb25zOiBzZWN0aW9ucyxcclxuICAgIGVtYWlsOiAnY2hvdWluYXJkLmRjQGdtYWlsLmNvbScsXHJcbiAgICBpbWFnZTogJy9waG90b1BlcnNvMy5qcGcnLFxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgICAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhdmlkLWNob3VpbmFyZC8nLFxyXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vQ2hvdWluYXJkRGF2aWQnLFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmVzZW50YXRpb25fdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wcmVzZW50YXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucHJlc2VudGF0aW9uLm5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbjogYEFwcsOocyA1IGFucyBkZSBjYXJyacOocmUgZGFucyBsZSBkb21haW5lIGRlIGxhIDxzcGFuIGNsYXNzPVwiYmlvdGVjaFwiPmJpb3RlY2hub2xvZ2llPC9zcGFuPiwgaidhaSBkw6ljaWTDqSBkZSByZXRvdXJuZXIgw6AgbCfDqWNvbGUgcG91clxyXG4gICAgIHLDqW9yaWVudGVyIG1hIGNhcnJpw6hyZSBlbiB0YW50IHF1ZSA8c3BhbiBjbGFzcz1cImluZm9cIj5kw6l2ZWxvcHBldXIgd2ViIGZ1bGwtc3RhY2s8L3NwYW4+LlxyXG4gICAgIEwnaW5mb3JtYXRpcXVlIGEgdG91am91cnMgZmFpdCBwYXJ0aWUgZGUgbWVzIGludMOpcsOqdHMsIG1haW50ZW5hbnQsIGonZW4gZmFpdCBtb24gbcOpdGllciBldCBqZSBtZSBzdWlzIGphbWFpcyBhdXRhbnQgc2VudGkgw6AgbWEgcGxhY2UgIVxyXG4gICAgIDxici8+XHJcbiAgICAgPGJyLz5cclxuICAgICBKZSBtYcOudHJpc2UgbGEgcGxhdGVmb3JtZSAuTkVULCBsZXMgYmFzZXMgZGUgZG9ubsOpZXMgU1FMIGFpbnNpIHF1ZSBsZSBsYW5nYWd1ZSBKYXZhc2NyaXB0LiBKJ2FpbWUgcGFydGljdWxpw6hyZW1lbnRcclxuICAgICBleHBsb3JlciBkZXMgbm91dmVsbGVzIHRlY2hub2xvZ2llcyBldCBtYWludGVuaXIgw6Agam91ciBtZXMgY29ubmFpc3NhbmNlcyDDoCBsJ2FpZGUgZGUgZm9ybWF0aW9ucyBldCBkZSBwcm9qZXRzIHBlcnNvbm5lbHMuIFxyXG4gICAgIERlIGNldHRlIGZhw6dvbiwgaidhaSBhcXVpcyBkZXMgY29tcMOpdGVuY2VzIHBvdXIgZMOpdmVsb3BwZXIgZGVzIGludGVyZmFjZXMgd2ViIGF2ZWMgUmVhY3QgZXQgZGUgc2VydmljZSB3ZWIgKEFQSSkgYXZlYyAuTkVUIENvcmUuXHJcbiAgICAgPGJyLz5cclxuICAgICA8YnIvPlxyXG4gICAgIE1lcmNpIGRlIHByZW5kcmUgbGUgdGVtcHMgZGUgY29uc3VsdGVyIG1hIHBhZ2Ugd2ViICFcclxuICAgICA8YnIvPlxyXG4gICAgIEJvbm5lIG5hdmlnYXRpb24gOylcclxuICAgICBgLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNraWxsc190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmNvbXBldGVuY2VzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmNvbXBldGVuY2VzLm5hbWUsXHJcbiAgICBzZWN0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdUZWNobm8nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1RlY2hub2xvZ2llcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJy5ORVQnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAvLyAnRUYgQ29yZSAvIE5IaWJlcm5hdGUnLFxyXG4gICAgICAgICAgICAgICAgJy5ORVQgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAnTm9kZS5qcycsXHJcbiAgICAgICAgICAgICAgICAnTmV4dC5qcycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnbGFuZ2FnZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQyMnLCAvL1xyXG4gICAgICAgICAgICAgICAgJyB2Yi5uZXQnLFxyXG4gICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgJ1JlYWN0JyxcclxuICAgICAgICAgICAgICAgICdIVE1ML0NTUycsXHJcbiAgICAgICAgICAgICAgICAvLyAnSlF1ZXJ5JyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdvdXRpbHMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ091dGlscycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ1Zpc3VhbCBTdHVkaW8nLFxyXG4gICAgICAgICAgICAgICAgJ1Zpc3VhbCBTdHVkaW8gQ29kZScsXHJcbiAgICAgICAgICAgICAgICAnU1NNUyAoU1FMKScsXHJcbiAgICAgICAgICAgICAgICAnQXp1cmUgRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICdHaXQnLFxyXG4gICAgICAgICAgICAgICAgJ1Bvc3RtYW4nLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2Rlc2lnbnMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0Rlc2lnbnMgZXQgY29uY2VwdHMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdNVkMnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ1JFU1QgQVBJJyxcclxuICAgICAgICAgICAgICAgICdTLk8uTC5JLkQuJyxcclxuICAgICAgICAgICAgICAgICdEZXNpZ24gcGF0dGVybnMnLFxyXG4gICAgICAgICAgICAgICAgJ0Nsb3VkIEF6dXJlJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdjb21wbGVtZW50YWlyZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NvbXBsw6ltZW50YWlyZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdNw6l0aG9kZSBhZ2lsZScsXHJcbiAgICAgICAgICAgICAgICAnU2NydW0gTWFzdGVyJyxcclxuICAgICAgICAgICAgICAgICdUZXN0cyB1bml0YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgJ0tlbmRvJyxcclxuICAgICAgICAgICAgICAgICdSYXBwb3J0IFNTUlMnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3BlcnNvJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQZXJzb25uZWxsZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdDb21tdW5pcXVlIGFjdGl2ZW1lbnQnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ0F1dG9ub21lJyxcclxuICAgICAgICAgICAgICAgICdJbml0aWF0aXZlJyxcclxuICAgICAgICAgICAgICAgICdPcmdhbmlzw6knLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmVlcl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnBhcmNvdXJzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnBhcmNvdXJzLm5hbWUsXHJcbiAgICBlbXBsb2lzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuaW5mb3JtYXRpcXVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdDSFUgZGUgUXXDqWJlYywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gaW5mb3JtYXRpcXVlIChkw6l2ZWxvcHBldXIpJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ2Fvw7t0IDIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnYXVqLicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVuIHRhbnQgcXVlIGTDqXZlbG9wcGV1ciB3ZWIgZnVsbHN0YWNrLCBcclxuICAgICAgICAgICAgICAgICAgICBqZSBwYXJ0aWNpcGUgYXUgZMOpdmVsb3BwZW1lbnQgZGUgPGEgY2xhc3M9XCJzcGVjaWFsTGlua0VmZmVjdDJcIiBocmVmPVwiaHR0cHM6Ly93d3cuZGNpY3Jpc3RhbG5ldC5jb20vXCI+Q3Jpc3RhbC1OZXQ8L2E+IGF1IHNlaW4gZCd1bmUgw6lxdWlwZSBhZ2lsZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgSWwgcydhZ2l0IGQndW4gc3lzdMOobWUgZCdlbnZlcmd1cmUgdXRpbGlzw6lzIGRhbnMgbGVzIMOpdGFibGlzc2VtZW50cyBkZSBzYW50w6kgZHUgUXXDqWJlYy4gSidhaSBhdXNzaSBsZSByw7RsZSBkZSBTY3J1bSBNYXN0ZXIgcG91ciBzdXBwb3J0ZXIgbCfDqXF1aXBlIGRhbnMgbGEgbcOpdGhvZGUgYWdpbGUuYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLCAvL1xyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2NydW0gbWFzdGVyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0luZHVzdHJpZWxsZSBBbGxpYW5jZSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ0TDqXZlbG9wcGV1cicsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdzZXB0LiAyMDE4JyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVGaW46ICdhb8O7dCAyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBdSBzZWluIGQndW5lIMOpcXVpcGUgRGV2T3BzLCBwcmVuZHJlIHBhcnQgYXUgc3VwcG9ydCBldCBhdSBkw6l2ZWxvcHBlbWVudCBkZXMgc3lzdMOobWVzIGR1IGTDqXBhcnRlbWVudCBkZSBsYSBjb21wdGFiaWxpdMOpLlxyXG4gICAgICAgICAgICAgICAgQ2VsYSBjb25zaXN0YWl0IMOgIHLDqXBvbmRyZSBhdXggdXRpbGlzYXRldXJzIGxvcnMgZGUgc2l0dWF0aW9uIHBhcnRpY3VsacOocmUsIG1haXMgYXVzc2kgZGUgcGFydGljaXBlciBhdXggw6l2b2x1dGlvbnMgZGVzIGFwcGxpY2F0aW9ucy5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWxlYXNlIG1hbmFnZXInLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCYWNrVG9TY2hvb2wgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJhY2tUb1NjaG9vbCxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmV0b3VyIMOgIGwnw6ljb2xlIChUZWNobmlxdWUgZGUgbOKAmWluZm9ybWF0aXF1ZSlcIixcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVzOiAnZsOpdnIuIDIwMTYgLSBkw6ljLiAyMDE4JyxcclxuICAgICAgICAgICAgICAgIGRhdGVzOiAnMjAxNiAtIDIwMTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0dTSywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgcHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdub3YuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ2bDqXZyLiAyMDE3JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFbiB0YW50IHF1ZSB0ZWNobmljaWVuIGRhbnMgdW5lIHVzaW5lIGRlIHByb2R1Y3Rpb24gZHUgdmFjY2luIGFudGktZ3JpcGFsLCBtb24gcsO0bGUgw6l0YWl0IGQnb3DDqXJlciBsZXMgc3lzdMOobWVzIGRlIHJlbXBsaXNzYWdlIGVuIGZsYWNvbi5cclxuICAgICAgICAgICAgICAgICAgICBKZSBjb250cmlidWFpcyBhdXNzaSBhY3RpdmVtZW50IMOgIGxhIGZvcm1hdGlvbiBkZXMgbm91dmVhdXggZW1wbG95w6lzLmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQkQgRGlhZ25vc3RpY3MsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGF1IGNvbnRyw7RsZSBkZSBsYSBxdWFsaXTDqScsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdqYW52LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVGaW46ICdvY3QuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVmZmVjdHVlciBsZXMgYW5hbHlzZXMgZGUgbGFib3JhdG9pcmUgcGVybWV0dGFudCBkZSB2YWxpZGVyIGxhIHF1YWxpdMOpIGR1IHByb2R1aXQuIFxyXG4gICAgICAgICAgICAgICAgQ29tcGlsZXIgZXQgY29uc3RydWlyZSB1biByYXBwb3J0IGRlcyByw6lzdWx0YXRzIG9idGVudXMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdGZWxkYW4sIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIGxhYm9yYXRvaXJlJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ21haSAyMDEyJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVGaW46ICdqYW52LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTInLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBDb250cmlidWVyIGF1eCBhY3Rpdml0w6lzIGRlIHByb2R1Y3Rpb24gZXQgYXV4IHByb2pldHMgZGUgUiZELiBcclxuICAgICAgICAgICAgICAgICAgICBqJ2Fzc3VyYWlzIGF1c3NpIGwnYXBwcm92aXNpb25uZW1lbnQgZGVzIG1hdGnDqHJlcyBwcmVtacOocmVzIGFpbnNpIHF1ZSBsYSBsaXZyYWlzb24gZGVzIGNvbW1hbmRlcyBhdXggY2xpZW50cy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmVkdWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5lZHVjYXRpb24ubmFtZSxcclxuICAgIGRpcGxvbWFzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RFQyBlbiB0ZWNobmlxdWUgZGUgbOKAmWluZm9ybWF0aXF1ZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIGRlIFNhaW50ZS1Gb3ksIFF1w6liZWMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2VydGlmaWNhdCBlbiBiaW90ZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdVbml2ZXJzaXTDqSBMYXZhbCwgUXXDqWJlYyAnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBiaW/DqWNvbG9naWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIFNhaW50LUxhdXJlbnQsIE1vbnRyw6lhbCcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByb2plY3RzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByb2plY3RzLm5hbWUsXHJcbiAgICBwcm9qZWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYSBwYWdlIHdlYicsXHJcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnL3Rvb25QZXJzby5qcGcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYE1hIHBhZ2Ugd2ViIHBlcnNvbm5lbGxlLCBwcmVtaWVyIHByb2pldCByw6lhbGlzw6kgZGUgQSDDoCBaICFgLFxyXG4gICAgICAgICAgICBjb2RlU291cmNlTGluazpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vQ2hvdWluYXJkRGF2aWQvY2hvdWluYXJkZGF2aWQuZ2l0aHViLmlvJyxcclxuICAgICAgICAgICAgY2hpcHM6IFsnUmVhY3QnLCAnTmV4dC5qcycsICdNYXRlcmlhbC1VSSddLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNlcnRmaWNhdGlvbnNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24ubmFtZSxcclxuICAgIGNlcnRpZmljYXRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pY3Jvc29mdCBBenVyZSBGdW5kYW1lbnRhbHMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAyMDIxLFxyXG4gICAgICAgICAgICBpbWFnZTogJy9henVyZS1mdW5kYW1lbnRhbHMucG5nJyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2xlYXJuL2NlcnRpZmljYXRpb25zL2F6dXJlLWZ1bmRhbWVudGFscycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJlc3RzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuaW50ZXJlc3QuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuaW50ZXJlc3QubmFtZSxcclxuICAgIGludGVyZXN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQbGVpbiBhaXInLFxyXG4gICAgICAgICAgICBpY29uOiBmYUxlYWYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UnLFxyXG4gICAgICAgICAgICBpY29uOiBmYU1pY3Jvc2NvcGUsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzM5NjNlMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR29sZicsXHJcbiAgICAgICAgICAgIGljb246IGZhR29sZkJhbGwsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2M1YzhjOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2luw6ltYScsXHJcbiAgICAgICAgICAgIGljb246IGZhVHYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvY2tleScsXHJcbiAgICAgICAgICAgIGljb246IGZhSG9ja2V5UHVjayxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnJhc3NhZ2UgZGUgYmnDqHJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFGbGFzayxcclxuICAgICAgICAgICAgY29sb3I6ICcjYjNiOGM3JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMZWN0dXJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFCb29rLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiZjUwMzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgaWNvbjogZmFSb2JvdCxcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UgZmljdGlvbicsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFuZFNwb2NrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2xpZ2h0R3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pldXggZGUgc29jacOpdMOpJyxcclxuICAgICAgICAgICAgaWNvbjogZmFDaGVzc0tuaWdodCxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ3Vpc2luZScsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFtYnVyZ2VyLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhNjhhNmQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ03DqWRpdGF0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFZaW5ZYW5nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==