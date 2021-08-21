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
  }
};
var header_text = {
  id: 'header'
};
var footer_text = {
  id: 'footer',
  sections: sections,
  email: 'chouinard.dc@gmail.com'
};
var presentation_text = {
  id: sections.presentation.id,
  title: sections.presentation.name,
  description: "D\xE9veloppeur web full-stack, je maitrise plus particuli\xE8rement l'environnement .NET, tant au niveau base de donn\xE9es qu'au niveau du code. \n        ..............\n        Passionn\xE9 par les technologies, je suis constamment \xE0 la recherche d'apprentissage pour parfaire mes connaissance dans ce domaine."
};
var skills_text = {
  id: sections.competences.id,
  title: sections.competences.name,
  sections: [{
    id: 'Techno',
    title: 'Technologies',
    skills: ['.NET', 'Base de données SQL', 'Rapport SSRS', '.NET Core', 'Cloud Azure', 'NextJs']
  }, {
    id: 'langages',
    title: 'Langages',
    skills: ['C#', 'vb.net', 'Javascript', 'JQuery', 'HTML/CSS', 'React']
  }, {
    id: 'outils',
    title: 'Outils',
    skills: ['Visual Studio', 'SQL Server Management Studio', 'Azure DevOps', 'Git', 'Visual Studio Code', 'Postman']
  }, {
    id: 'designs',
    title: 'Designs et concepts',
    skills: ['MVC', //
    'MVVM', 'Web API', 'S.O.L.I.D.', 'R.E.S.T. API']
  }, {
    id: 'complementaires',
    title: 'Complémentaires',
    skills: ['Tests unitaires', 'Méthode agile', 'Kendo', 'DACPAC', "Projet d'envergure"]
  }, {
    id: 'perso',
    title: 'Personnelles',
    skills: ['Communication active', //
    'Autonomie', 'Initiative']
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
          lineNumber: 149,
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
      description: "En tant que d\xE9veloppeur fullstack, je participe au d\xE9veloppement de l'application <a class=\"specialLinkEffect2\" href=\"https://www.dcicristalnet.com/\">Cristal-Net</a> au sein d'une \xE9quipe agile. \n                    Celle-ci permet au personnel soigant de g\xE9rer les donn\xE9es relatives aux visites des patients dans les hopitaux.",
      chips: ['.NET', //
      'Javascript', 'SQL', 'DevOps', 'Scrum master']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
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
      description: "Assurer un support aux utilisateurs des applications corporatives dans le d\xE9partement de la comptabilit\xE9 et fiscalit\xE9. \n                    Cela consistait \xE0 corriger les anomalies, mais aussi \xE0 participer aux \xE9volutions des syst\xE8mes utilis\xE9s.",
      chips: ['.NET', 'Javascript', 'SQL', 'DevOps', 'Release manager']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
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
          lineNumber: 205,
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
      description: "Participer \xE0 la production du vaccin *anti-grippal*, mon r\xF4le \xE9tait d'op\xE9rer les syst\xE8mes de remplissage en fiole ou en flacon.\n                    Je contribuais aussi activement \xE0 la formation des nouveaux employ\xE9s."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
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
      description: "Effectuer les analyses de laboratoire permettant de valider la qualit\xE9 du produit \xE0 toutes les \xE9tapes de sa pr\xE9paration.\n                    Ces donn\xE9es \xE9taient ensuite compil\xE9es et pr\xE9sent\xE9es \xE0 l'assurance qualit\xE9 sous forme de rapport."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
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
      description: "Mon r\xF4le dans cette entreprise \xE9tait plut\xF4t diversifi\xE9. Principalement, je participais aux activit\xE9s de production et aux projets de R&D. \n                    Mais j'assurais aussi l'approvisionnement des mati\xE8res premi\xE8res ainsi que la livraison des commandes aux clients."
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
    imageSource: '/photoPerso.png',
    description: "Ma page web personnelle, sur laquelle vous \xEAtes en ce moment, me permet de me pr\xE9senter\n            ",
    codeSourceLink: 'https://github.com/ChouinardDavid/chouinarddavid.github.io',
    chips: ['React', 'Next.js', 'Material-UI']
  }]
};
var certfications_text = {
  id: sections.certification.id,
  title: sections.certification.name,
  certifications: [{
    title: 'Microsoft Certified: Azure Fundamentals',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwicHJlc2VudGF0aW9uX3RleHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2tpbGxzX3RleHQiLCJza2lsbHMiLCJjYXJlZXJfdGV4dCIsImVtcGxvaXMiLCJyZW5kZXIiLCJjb250ZW50IiwiZG9tYWluZSIsImRvbWFpbmVzIiwiaW5mb3JtYXRpcXVlIiwiZW1wbG95ZXVyIiwicG9zdGUiLCJkYXRlRGVidXQiLCJkYXRlRmluIiwiY2hpcHMiLCJiYWNrVG9TY2hvb2wiLCJkYXRlcyIsImJpb2xvZ2llIiwiZWR1Y2F0aW9uX3RleHQiLCJkaXBsb21hcyIsInNjaG9vbCIsInllYXIiLCJwcm9qZWN0c190ZXh0IiwiaW1hZ2VTb3VyY2UiLCJjb2RlU291cmNlTGluayIsImNlcnRmaWNhdGlvbnNfdGV4dCIsImNlcnRpZmljYXRpb25zIiwiaW1hZ2UiLCJsaW5rIiwiaW50ZXJlc3RzX3RleHQiLCJpbnRlcmVzdHMiLCJpY29uIiwiZmFMZWFmIiwiY29sb3IiLCJmYU1pY3Jvc2NvcGUiLCJmYUdvbGZCYWxsIiwiZmFUdiIsImZhSG9ja2V5UHVjayIsImZhRmxhc2siLCJmYUJvb2siLCJmYVJvYm90IiwiZmFIYW5kU3BvY2siLCJmYUNoZXNzS25pZ2h0IiwiZmFIYW1idXJnZXIiLCJmYVlpbllhbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNiQyxjQUFZLEVBQUU7QUFDVkMsTUFBRSxFQUFFLGNB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QUFJLEVBQUVTLHlFQUZWO0FBR0lQLFNBQUssRUFBRTtBQUhYLEdBcENPLEVBeUNQO0FBQ0lsQyxTQUFLLEVBQUUsaUJBRFg7QUFFSWdDLFFBQUksRUFBRVUsNkVBRlY7QUFHSVIsU0FBSyxFQUFFO0FBSFgsR0F6Q08sRUE4Q1A7QUFDSWxDLFNBQUssRUFBRSxpQkFEWDtBQUVJZ0MsUUFBSSxFQUFFVywrRUFGVjtBQUdJVCxTQUFLLEVBQUU7QUFIWCxHQTlDTyxFQW1EUDtBQUNJbEMsU0FBSyxFQUFFLFNBRFg7QUFFSWdDLFFBQUksRUFBRVksNkVBRlY7QUFHSVYsU0FBSyxFQUFFO0FBSFgsR0FuRE8sRUF3RFA7QUFDSWxDLFNBQUssRUFBRSxZQURYO0FBRUlnQyxRQUFJLEVBQUVhLDJFQUZWO0FBR0lYLFNBQUssRUFBRTtBQUhYLEdBeERPO0FBSGUsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQyODhkMWE3ZTk0Y2M2MzI1MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xyXG5pbXBvcnQge1xyXG4gICAgZmFMZWFmLFxyXG4gICAgZmFNaWNyb3Njb3BlLFxyXG4gICAgZmFHb2xmQmFsbCxcclxuICAgIGZhVHYsXHJcbiAgICBmYUJvb2ssXHJcbiAgICBmYUhhbmRTcG9jayxcclxuICAgIGZhQ2hlc3NLbmlnaHQsXHJcbiAgICBmYUhhbWJ1cmdlcixcclxuICAgIGZhRmxhc2ssXHJcbiAgICBmYUhvY2tleVB1Y2ssXHJcbiAgICBmYVJvYm90LFxyXG4gICAgZmFZaW5ZYW5nLFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBCYWNrVG9TY2hvb2wgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9iYWNrVG9TY2hvb2wnO1xyXG5pbXBvcnQgSm9iIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvam9iJztcclxuaW1wb3J0IHsgZG9tYWluZXMgfSBmcm9tICcuL2RvbWFpbmVzJztcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0ge1xyXG4gICAgcHJlc2VudGF0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdwcmVzZW50YXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICdQcsOpc2VudGF0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjb21wZXRlbmNlczoge1xyXG4gICAgICAgIGlkOiAnY29tcGV0ZW5jZXMnLFxyXG4gICAgICAgIG5hbWU6ICdDb21ww6l0ZW5jZXMnLFxyXG4gICAgfSxcclxuICAgIHBhcmNvdXJzOiB7XHJcbiAgICAgICAgaWQ6ICdwYXJjb3VycycsXHJcbiAgICAgICAgbmFtZTogJ1BhcmNvdXJzIGRlIENhcnJpw6hyZScsXHJcbiAgICB9LFxyXG4gICAgZWR1Y2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdlZHVjYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICfDiWR1Y2F0aW9uJyxcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdjZXJ0aWZpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnQ2VydGlmaWNhdGlvbnMnLFxyXG4gICAgfSxcclxuICAgIHByb2plY3RzOiB7XHJcbiAgICAgICAgaWQ6ICdwcm9qZWN0cycsXHJcbiAgICAgICAgbmFtZTogJ1Byb2pldHMnLFxyXG4gICAgfSxcclxuICAgIGludGVyZXN0OiB7XHJcbiAgICAgICAgaWQ6ICdpbnRlcmVzdCcsXHJcbiAgICAgICAgbmFtZTogJ0ludMOpcsOqdHMnLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJfdGV4dCA9IHtcclxuICAgIGlkOiAnaGVhZGVyJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJfdGV4dCA9IHtcclxuICAgIGlkOiAnZm9vdGVyJyxcclxuICAgIHNlY3Rpb25zOiBzZWN0aW9ucyxcclxuICAgIGVtYWlsOiAnY2hvdWluYXJkLmRjQGdtYWlsLmNvbScsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlc2VudGF0aW9uX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucHJlc2VudGF0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5uYW1lLFxyXG4gICAgZGVzY3JpcHRpb246IGBEw6l2ZWxvcHBldXIgd2ViIGZ1bGwtc3RhY2ssIGplIG1haXRyaXNlIHBsdXMgcGFydGljdWxpw6hyZW1lbnQgbCdlbnZpcm9ubmVtZW50IC5ORVQsIHRhbnQgYXUgbml2ZWF1IGJhc2UgZGUgZG9ubsOpZXMgcXUnYXUgbml2ZWF1IGR1IGNvZGUuIFxyXG4gICAgICAgIC4uLi4uLi4uLi4uLi4uXHJcbiAgICAgICAgUGFzc2lvbm7DqSBwYXIgbGVzIHRlY2hub2xvZ2llcywgamUgc3VpcyBjb25zdGFtbWVudCDDoCBsYSByZWNoZXJjaGUgZCdhcHByZW50aXNzYWdlIHBvdXIgcGFyZmFpcmUgbWVzIGNvbm5haXNzYW5jZSBkYW5zIGNlIGRvbWFpbmUuYCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5uYW1lLFxyXG4gICAgc2VjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnVGVjaG5vJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICcuTkVUJyxcclxuICAgICAgICAgICAgICAgICdCYXNlIGRlIGRvbm7DqWVzIFNRTCcsXHJcbiAgICAgICAgICAgICAgICAnUmFwcG9ydCBTU1JTJyxcclxuICAgICAgICAgICAgICAgICcuTkVUIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgJ0Nsb3VkIEF6dXJlJyxcclxuICAgICAgICAgICAgICAgICdOZXh0SnMnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdMYW5nYWdlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ0MjJyxcclxuICAgICAgICAgICAgICAgICd2Yi5uZXQnLFxyXG4gICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgJ0pRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAnSFRNTC9DU1MnLFxyXG4gICAgICAgICAgICAgICAgJ1JlYWN0JyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdvdXRpbHMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ091dGlscycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ1Zpc3VhbCBTdHVkaW8nLFxyXG4gICAgICAgICAgICAgICAgJ1NRTCBTZXJ2ZXIgTWFuYWdlbWVudCBTdHVkaW8nLFxyXG4gICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcycsXHJcbiAgICAgICAgICAgICAgICAnR2l0JyxcclxuICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvIENvZGUnLFxyXG4gICAgICAgICAgICAgICAgJ1Bvc3RtYW4nLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2Rlc2lnbnMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0Rlc2lnbnMgZXQgY29uY2VwdHMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdNVkMnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ01WVk0nLFxyXG4gICAgICAgICAgICAgICAgJ1dlYiBBUEknLFxyXG4gICAgICAgICAgICAgICAgJ1MuTy5MLkkuRC4nLFxyXG4gICAgICAgICAgICAgICAgJ1IuRS5TLlQuIEFQSScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnY29tcGxlbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbMOpbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnVGVzdHMgdW5pdGFpcmVzJyxcclxuICAgICAgICAgICAgICAgICdNw6l0aG9kZSBhZ2lsZScsXHJcbiAgICAgICAgICAgICAgICAnS2VuZG8nLFxyXG4gICAgICAgICAgICAgICAgJ0RBQ1BBQycsXHJcbiAgICAgICAgICAgICAgICBcIlByb2pldCBkJ2VudmVyZ3VyZVwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3BlcnNvJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQZXJzb25uZWxsZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdDb21tdW5pY2F0aW9uIGFjdGl2ZScsIC8vXHJcbiAgICAgICAgICAgICAgICAnQXV0b25vbWllJyxcclxuICAgICAgICAgICAgICAgICdJbml0aWF0aXZlJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJlZXJfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wYXJjb3Vycy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wYXJjb3Vycy5uYW1lLFxyXG4gICAgZW1wbG9pczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQ0hVIGRlIFF1w6liZWMsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGluZm9ybWF0aXF1ZSAoZMOpdmVsb3BwZXVyKScsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdhb8O7dCAyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJ2F1ai4nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFbiB0YW50IHF1ZSBkw6l2ZWxvcHBldXIgZnVsbHN0YWNrLCBqZSBwYXJ0aWNpcGUgYXUgZMOpdmVsb3BwZW1lbnQgZGUgbCdhcHBsaWNhdGlvbiA8YSBjbGFzcz1cInNwZWNpYWxMaW5rRWZmZWN0MlwiIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICBDZWxsZS1jaSBwZXJtZXQgYXUgcGVyc29ubmVsIHNvaWdhbnQgZGUgZ8OpcmVyIGxlcyBkb25uw6llcyByZWxhdGl2ZXMgYXV4IHZpc2l0ZXMgZGVzIHBhdGllbnRzIGRhbnMgbGVzIGhvcGl0YXV4LmAsXHJcbiAgICAgICAgICAgICAgICBjaGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgICcuTkVUJywgLy9cclxuICAgICAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rldk9wcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NjcnVtIG1hc3RlcicsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuaW5mb3JtYXRpcXVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdJbmR1c3RyaWVsbGUgQWxsaWFuY2UsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdEw6l2ZWxvcHBldXInLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnc2VwdC4gMjAxOCcsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE4JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQXNzdXJlciB1biBzdXBwb3J0IGF1eCB1dGlsaXNhdGV1cnMgZGVzIGFwcGxpY2F0aW9ucyBjb3Jwb3JhdGl2ZXMgZGFucyBsZSBkw6lwYXJ0ZW1lbnQgZGUgbGEgY29tcHRhYmlsaXTDqSBldCBmaXNjYWxpdMOpLiBcclxuICAgICAgICAgICAgICAgICAgICBDZWxhIGNvbnNpc3RhaXQgw6AgY29ycmlnZXIgbGVzIGFub21hbGllcywgbWFpcyBhdXNzaSDDoCBwYXJ0aWNpcGVyIGF1eCDDqXZvbHV0aW9ucyBkZXMgc3lzdMOobWVzIHV0aWxpc8Opcy5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWxlYXNlIG1hbmFnZXInLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCYWNrVG9TY2hvb2wgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJhY2tUb1NjaG9vbCxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmV0b3VyIMOgIGwnw6ljb2xlIChUZWNobmlxdWUgZGUgbOKAmWluZm9ybWF0aXF1ZSlcIixcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVzOiAnZsOpdnIuIDIwMTYgLSBkw6ljLiAyMDE4JyxcclxuICAgICAgICAgICAgICAgIGRhdGVzOiAnMjAxNiAtIDIwMTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0dTSywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgcHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdub3YuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ2bDqXZyLiAyMDE3JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBQYXJ0aWNpcGVyIMOgIGxhIHByb2R1Y3Rpb24gZHUgdmFjY2luICphbnRpLWdyaXBwYWwqLCBtb24gcsO0bGUgw6l0YWl0IGQnb3DDqXJlciBsZXMgc3lzdMOobWVzIGRlIHJlbXBsaXNzYWdlIGVuIGZpb2xlIG91IGVuIGZsYWNvbi5cclxuICAgICAgICAgICAgICAgICAgICBKZSBjb250cmlidWFpcyBhdXNzaSBhY3RpdmVtZW50IMOgIGxhIGZvcm1hdGlvbiBkZXMgbm91dmVhdXggZW1wbG95w6lzLmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQkQgRGlhZ25vc3RpY3MsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGF1IGNvbnRyw7RsZSBkZSBsYSBxdWFsaXTDqScsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdqYW52LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVGaW46ICdvY3QuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVmZmVjdHVlciBsZXMgYW5hbHlzZXMgZGUgbGFib3JhdG9pcmUgcGVybWV0dGFudCBkZSB2YWxpZGVyIGxhIHF1YWxpdMOpIGR1IHByb2R1aXQgw6AgdG91dGVzIGxlcyDDqXRhcGVzIGRlIHNhIHByw6lwYXJhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICBDZXMgZG9ubsOpZXMgw6l0YWllbnQgZW5zdWl0ZSBjb21waWzDqWVzIGV0IHByw6lzZW50w6llcyDDoCBsJ2Fzc3VyYW5jZSBxdWFsaXTDqSBzb3VzIGZvcm1lIGRlIHJhcHBvcnQuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdGZWxkYW4sIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIGxhYm9yYXRvaXJlJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ21haSAyMDEyJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVGaW46ICdqYW52LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTInLFxyXG4gICAgICAgICAgICAgICAgZGF0ZUZpbjogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBNb24gcsO0bGUgZGFucyBjZXR0ZSBlbnRyZXByaXNlIMOpdGFpdCBwbHV0w7R0IGRpdmVyc2lmacOpLiBQcmluY2lwYWxlbWVudCwgamUgcGFydGljaXBhaXMgYXV4IGFjdGl2aXTDqXMgZGUgcHJvZHVjdGlvbiBldCBhdXggcHJvamV0cyBkZSBSJkQuIFxyXG4gICAgICAgICAgICAgICAgICAgIE1haXMgaidhc3N1cmFpcyBhdXNzaSBsJ2FwcHJvdmlzaW9ubmVtZW50IGRlcyBtYXRpw6hyZXMgcHJlbWnDqHJlcyBhaW5zaSBxdWUgbGEgbGl2cmFpc29uIGRlcyBjb21tYW5kZXMgYXV4IGNsaWVudHMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZHVjYXRpb25fdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5lZHVjYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuZWR1Y2F0aW9uLm5hbWUsXHJcbiAgICBkaXBsb21hczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBkZSBTYWludGUtRm95LCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NlcnRpZmljYXQgZW4gYmlvdGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnVW5pdmVyc2l0w6kgTGF2YWwsIFF1w6liZWMgJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RFQyBlbiB0ZWNobmlxdWUgZGUgYmlvw6ljb2xvZ2llJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBTYWludC1MYXVyZW50LCBNb250csOpYWwnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wcm9qZWN0cy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcm9qZWN0cy5uYW1lLFxyXG4gICAgcHJvamVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWEgcGFnZSB3ZWInLFxyXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJy9waG90b1BlcnNvLnBuZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTWEgcGFnZSB3ZWIgcGVyc29ubmVsbGUsIHN1ciBsYXF1ZWxsZSB2b3VzIMOqdGVzIGVuIGNlIG1vbWVudCwgbWUgcGVybWV0IGRlIG1lIHByw6lzZW50ZXJcclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgY29kZVNvdXJjZUxpbms6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkL2Nob3VpbmFyZGRhdmlkLmdpdGh1Yi5pbycsXHJcbiAgICAgICAgICAgIGNoaXBzOiBbJ1JlYWN0JywgJ05leHQuanMnLCAnTWF0ZXJpYWwtVUknXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjZXJ0ZmljYXRpb25zX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLm5hbWUsXHJcbiAgICBjZXJ0aWZpY2F0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaWNyb3NvZnQgQ2VydGlmaWVkOiBBenVyZSBGdW5kYW1lbnRhbHMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAyMDIxLFxyXG4gICAgICAgICAgICBpbWFnZTogJy9henVyZS1mdW5kYW1lbnRhbHMucG5nJyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2xlYXJuL2NlcnRpZmljYXRpb25zL2F6dXJlLWZ1bmRhbWVudGFscycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJlc3RzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuaW50ZXJlc3QuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuaW50ZXJlc3QubmFtZSxcclxuICAgIGludGVyZXN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQbGVpbiBhaXInLFxyXG4gICAgICAgICAgICBpY29uOiBmYUxlYWYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UnLFxyXG4gICAgICAgICAgICBpY29uOiBmYU1pY3Jvc2NvcGUsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzM5NjNlMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR29sZicsXHJcbiAgICAgICAgICAgIGljb246IGZhR29sZkJhbGwsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2M1YzhjOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2luw6ltYScsXHJcbiAgICAgICAgICAgIGljb246IGZhVHYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvY2tleScsXHJcbiAgICAgICAgICAgIGljb246IGZhSG9ja2V5UHVjayxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnJhc3NhZ2UgZGUgYmnDqHJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFGbGFzayxcclxuICAgICAgICAgICAgY29sb3I6ICcjYjNiOGM3JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMZWN0dXJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFCb29rLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiZjUwMzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgaWNvbjogZmFSb2JvdCxcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UgZmljdGlvbicsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFuZFNwb2NrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2xpZ2h0R3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pldXggZGUgc29jacOpdMOpJyxcclxuICAgICAgICAgICAgaWNvbjogZmFDaGVzc0tuaWdodCxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ3Vpc2luZScsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFtYnVyZ2VyLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhNjhhNmQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ03DqWRpdGF0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFZaW5ZYW5nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==