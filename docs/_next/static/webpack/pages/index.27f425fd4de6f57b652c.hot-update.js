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
      chips: ['.NET (C#/vb.net)', 'Javascript', 'SQL', 'JQuery', 'Kendo', 'Azure DevOps']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
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
      chips: ['.NET (C#)', 'Javascript', 'SQL', 'Azure DevOps (Release manager)']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwicHJlc2VudGF0aW9uX3RleHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2tpbGxzX3RleHQiLCJza2lsbHMiLCJjYXJlZXJfdGV4dCIsImVtcGxvaXMiLCJyZW5kZXIiLCJjb250ZW50IiwiZG9tYWluZSIsImRvbWFpbmVzIiwiaW5mb3JtYXRpcXVlIiwiZW1wbG95ZXVyIiwicG9zdGUiLCJkYXRlRGVidXQiLCJkYXRlRmluIiwiY2hpcHMiLCJiYWNrVG9TY2hvb2wiLCJkYXRlcyIsImJpb2xvZ2llIiwiZWR1Y2F0aW9uX3RleHQiLCJkaXBsb21hcyIsInNjaG9vbCIsInllYXIiLCJwcm9qZWN0c190ZXh0IiwiaW1hZ2VTb3VyY2UiLCJjb2RlU291cmNlTGluayIsImNlcnRmaWNhdGlvbnNfdGV4dCIsImNlcnRpZmljYXRpb25zIiwiaW1hZ2UiLCJsaW5rIiwiaW50ZXJlc3RzX3RleHQiLCJpbnRlcmVzdHMiLCJpY29uIiwiZmFMZWFmIiwiY29sb3IiLCJmYU1pY3Jvc2NvcGUiLCJmYUdvbGZCYWxsIiwiZmFUdiIsImZhSG9ja2V5UHVjayIsImZhRmxhc2siLCJmYUJvb2siLCJmYVJvYm90IiwiZmFIYW5kU3BvY2siLCJmYUNoZXNzS25pZ2h0IiwiZmFIYW1idXJnZXIiLCJmYVlpbllhbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNiQyxjQUFZLEVBQUU7QUFDVkMsTUFBRSxFQUFFLGNB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QUFFUyx5RUFGVjtBQUdJUCxTQUFLLEVBQUU7QUFIWCxHQXBDTyxFQXlDUDtBQUNJbEMsU0FBSyxFQUFFLGlCQURYO0FBRUlnQyxRQUFJLEVBQUVVLDZFQUZWO0FBR0lSLFNBQUssRUFBRTtBQUhYLEdBekNPLEVBOENQO0FBQ0lsQyxTQUFLLEVBQUUsaUJBRFg7QUFFSWdDLFFBQUksRUFBRVcsK0VBRlY7QUFHSVQsU0FBSyxFQUFFO0FBSFgsR0E5Q08sRUFtRFA7QUFDSWxDLFNBQUssRUFBRSxTQURYO0FBRUlnQyxRQUFJLEVBQUVZLDZFQUZWO0FBR0lWLFNBQUssRUFBRTtBQUhYLEdBbkRPLEVBd0RQO0FBQ0lsQyxTQUFLLEVBQUUsWUFEWDtBQUVJZ0MsUUFBSSxFQUFFYSwyRUFGVjtBQUdJWCxTQUFLLEVBQUU7QUFIWCxHQXhETztBQUhlLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3ZjQyNWZkNGRlNmY1N2I2NTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cclxuaW1wb3J0IHtcclxuICAgIGZhTGVhZixcclxuICAgIGZhTWljcm9zY29wZSxcclxuICAgIGZhR29sZkJhbGwsXHJcbiAgICBmYVR2LFxyXG4gICAgZmFCb29rLFxyXG4gICAgZmFIYW5kU3BvY2ssXHJcbiAgICBmYUNoZXNzS25pZ2h0LFxyXG4gICAgZmFIYW1idXJnZXIsXHJcbiAgICBmYUZsYXNrLFxyXG4gICAgZmFIb2NrZXlQdWNrLFxyXG4gICAgZmFSb2JvdCxcclxuICAgIGZhWWluWWFuZyxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgQmFja1RvU2Nob29sIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvYmFja1RvU2Nob29sJztcclxuaW1wb3J0IEpvYiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2pvYic7XHJcbmltcG9ydCB7IGRvbWFpbmVzIH0gZnJvbSAnLi9kb21haW5lcyc7XHJcblxyXG5jb25zdCBzZWN0aW9ucyA9IHtcclxuICAgIHByZXNlbnRhdGlvbjoge1xyXG4gICAgICAgIGlkOiAncHJlc2VudGF0aW9uJyxcclxuICAgICAgICBuYW1lOiAnUHLDqXNlbnRhdGlvbicsXHJcbiAgICB9LFxyXG4gICAgY29tcGV0ZW5jZXM6IHtcclxuICAgICAgICBpZDogJ2NvbXBldGVuY2VzJyxcclxuICAgICAgICBuYW1lOiAnQ29tcMOpdGVuY2VzJyxcclxuICAgIH0sXHJcbiAgICBwYXJjb3Vyczoge1xyXG4gICAgICAgIGlkOiAncGFyY291cnMnLFxyXG4gICAgICAgIG5hbWU6ICdQYXJjb3VycyBkZSBDYXJyacOocmUnLFxyXG4gICAgfSxcclxuICAgIGVkdWNhdGlvbjoge1xyXG4gICAgICAgIGlkOiAnZWR1Y2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnw4lkdWNhdGlvbicsXHJcbiAgICB9LFxyXG4gICAgY2VydGlmaWNhdGlvbjoge1xyXG4gICAgICAgIGlkOiAnY2VydGlmaWNhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ0NlcnRpZmljYXRpb25zJyxcclxuICAgIH0sXHJcbiAgICBwcm9qZWN0czoge1xyXG4gICAgICAgIGlkOiAncHJvamVjdHMnLFxyXG4gICAgICAgIG5hbWU6ICdQcm9qZXRzJyxcclxuICAgIH0sXHJcbiAgICBpbnRlcmVzdDoge1xyXG4gICAgICAgIGlkOiAnaW50ZXJlc3QnLFxyXG4gICAgICAgIG5hbWU6ICdJbnTDqXLDqnRzJyxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyX3RleHQgPSB7XHJcbiAgICBpZDogJ2hlYWRlcicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyX3RleHQgPSB7XHJcbiAgICBpZDogJ2Zvb3RlcicsXHJcbiAgICBzZWN0aW9uczogc2VjdGlvbnMsXHJcbiAgICBlbWFpbDogJ2Nob3VpbmFyZC5kY0BnbWFpbC5jb20nLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXNlbnRhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcmVzZW50YXRpb24ubmFtZSxcclxuICAgIGRlc2NyaXB0aW9uOiBgRMOpdmVsb3BwZXVyIHdlYiBmdWxsLXN0YWNrLCBqZSBtYWl0cmlzZSBwbHVzIHBhcnRpY3VsacOocmVtZW50IGwnZW52aXJvbm5lbWVudCAuTkVULCB0YW50IGF1IG5pdmVhdSBiYXNlIGRlIGRvbm7DqWVzIHF1J2F1IG5pdmVhdSBkdSBjb2RlLiBcclxuICAgICAgICAuLi4uLi4uLi4uLi4uLlxyXG4gICAgICAgIFBhc3Npb25uw6kgcGFyIGxlcyB0ZWNobm9sb2dpZXMsIGplIHN1aXMgY29uc3RhbW1lbnQgw6AgbGEgcmVjaGVyY2hlIGQnYXBwcmVudGlzc2FnZSBwb3VyIHBhcmZhaXJlIG1lcyBjb25uYWlzc2FuY2UgZGFucyBjZSBkb21haW5lLmAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuY29tcGV0ZW5jZXMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY29tcGV0ZW5jZXMubmFtZSxcclxuICAgIHNlY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ1RlY2hubycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnLk5FVCcsXHJcbiAgICAgICAgICAgICAgICAnQmFzZSBkZSBkb25uw6llcyBTUUwnLFxyXG4gICAgICAgICAgICAgICAgJ1JhcHBvcnQgU1NSUycsXHJcbiAgICAgICAgICAgICAgICAnLk5FVCBDb3JlJyxcclxuICAgICAgICAgICAgICAgICdDbG91ZCBBenVyZScsXHJcbiAgICAgICAgICAgICAgICAnTmV4dEpzJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdsYW5nYWdlcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGFuZ2FnZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdDIycsXHJcbiAgICAgICAgICAgICAgICAndmIubmV0JyxcclxuICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICdKUXVlcnknLFxyXG4gICAgICAgICAgICAgICAgJ0hUTUwvQ1NTJyxcclxuICAgICAgICAgICAgICAgICdSZWFjdCcsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnb3V0aWxzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdPdXRpbHMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvJyxcclxuICAgICAgICAgICAgICAgICdTUUwgU2VydmVyIE1hbmFnZW1lbnQgU3R1ZGlvJyxcclxuICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgJ0dpdCcsXHJcbiAgICAgICAgICAgICAgICAnVmlzdWFsIFN0dWRpbyBDb2RlJyxcclxuICAgICAgICAgICAgICAgICdQb3N0bWFuJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdkZXNpZ25zJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXNpZ25zIGV0IGNvbmNlcHRzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTVZDJywgLy9cclxuICAgICAgICAgICAgICAgICdNVlZNJyxcclxuICAgICAgICAgICAgICAgICdXZWIgQVBJJyxcclxuICAgICAgICAgICAgICAgICdTLk8uTC5JLkQuJyxcclxuICAgICAgICAgICAgICAgICdSLkUuUy5ULiBBUEknLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2NvbXBsZW1lbnRhaXJlcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ29tcGzDqW1lbnRhaXJlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ1Rlc3RzIHVuaXRhaXJlcycsXHJcbiAgICAgICAgICAgICAgICAnTcOpdGhvZGUgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ0tlbmRvJyxcclxuICAgICAgICAgICAgICAgICdEQUNQQUMnLFxyXG4gICAgICAgICAgICAgICAgXCJQcm9qZXQgZCdlbnZlcmd1cmVcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdwZXJzbycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGVyc29ubmVsbGVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQ29tbXVuaWNhdGlvbiBhY3RpdmUnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ0F1dG9ub21pZScsXHJcbiAgICAgICAgICAgICAgICAnSW5pdGlhdGl2ZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZWVyX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucGFyY291cnMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucGFyY291cnMubmFtZSxcclxuICAgIGVtcGxvaXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0NIVSBkZSBRdcOpYmVjLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBpbmZvcm1hdGlxdWUgKGTDqXZlbG9wcGV1ciknLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIGZ1bGxzdGFjaywgamUgcGFydGljaXBlIGF1IGTDqXZlbG9wcGVtZW50IGRlIGwnYXBwbGljYXRpb24gPGEgY2xhc3M9XCJzcGVjaWFsTGlua0VmZmVjdDJcIiBocmVmPVwiaHR0cHM6Ly93d3cuZGNpY3Jpc3RhbG5ldC5jb20vXCI+Q3Jpc3RhbC1OZXQ8L2E+IGF1IHNlaW4gZCd1bmUgw6lxdWlwZSBhZ2lsZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgQ2VsbGUtY2kgcGVybWV0IGF1IHBlcnNvbm5lbCBzb2lnYW50IGRlIGfDqXJlciBsZXMgZG9ubsOpZXMgcmVsYXRpdmVzIGF1eCB2aXNpdGVzIGRlcyBwYXRpZW50cyBkYW5zIGxlcyBob3BpdGF1eC5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCAoQyMvdmIubmV0KScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdKUXVlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdLZW5kbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcycsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuaW5mb3JtYXRpcXVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdJbmR1c3RyaWVsbGUgQWxsaWFuY2UsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdEw6l2ZWxvcHBldXInLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnc2VwdC4gMjAxOCcsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE4JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQXNzdXJlciB1biBzdXBwb3J0IGF1eCB1dGlsaXNhdGV1cnMgZGVzIGFwcGxpY2F0aW9ucyBjb3Jwb3JhdGl2ZXMgZGFucyBsZSBkw6lwYXJ0ZW1lbnQgZGUgbGEgY29tcHRhYmlsaXTDqSBldCBmaXNjYWxpdMOpLiBcclxuICAgICAgICAgICAgICAgICAgICBDZWxhIGNvbnNpc3RhaXQgw6AgY29ycmlnZXIgbGVzIGFub21hbGllcywgbWFpcyBhdXNzaSDDoCBwYXJ0aWNpcGVyIGF1eCDDqXZvbHV0aW9ucyBkZXMgc3lzdMOobWVzIHV0aWxpc8Opcy5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCAoQyMpJyxcclxuICAgICAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcyAoUmVsZWFzZSBtYW5hZ2VyKScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJhY2tUb1NjaG9vbCBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmFja1RvU2Nob29sLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZXRvdXIgw6AgbCfDqWNvbGUgKFRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlKVwiLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZXM6ICdmw6l2ci4gMjAxNiAtIGTDqWMuIDIwMTgnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZXM6ICcyMDE2IC0gMjAxOCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnR1NLLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBkZSBwcm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ25vdi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnZsOpdnIuIDIwMTcnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxNycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYFBhcnRpY2lwZXIgw6AgbGEgcHJvZHVjdGlvbiBkdSB2YWNjaW4gKmFudGktZ3JpcHBhbCosIG1vbiByw7RsZSDDqXRhaXQgZCdvcMOpcmVyIGxlcyBzeXN0w6htZXMgZGUgcmVtcGxpc3NhZ2UgZW4gZmlvbGUgb3UgZW4gZmxhY29uLlxyXG4gICAgICAgICAgICAgICAgICAgIEplIGNvbnRyaWJ1YWlzIGF1c3NpIGFjdGl2ZW1lbnQgw6AgbGEgZm9ybWF0aW9uIGRlcyBub3V2ZWF1eCBlbXBsb3nDqXMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdCRCBEaWFnbm9zdGljcywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gYXUgY29udHLDtGxlIGRlIGxhIHF1YWxpdMOpJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ2phbnYuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ29jdC4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRWZmZWN0dWVyIGxlcyBhbmFseXNlcyBkZSBsYWJvcmF0b2lyZSBwZXJtZXR0YW50IGRlIHZhbGlkZXIgbGEgcXVhbGl0w6kgZHUgcHJvZHVpdCDDoCB0b3V0ZXMgbGVzIMOpdGFwZXMgZGUgc2EgcHLDqXBhcmF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIENlcyBkb25uw6llcyDDqXRhaWVudCBlbnN1aXRlIGNvbXBpbMOpZXMgZXQgcHLDqXNlbnTDqWVzIMOgIGwnYXNzdXJhbmNlIHF1YWxpdMOpIHNvdXMgZm9ybWUgZGUgcmFwcG9ydC5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0ZlbGRhbiwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgbGFib3JhdG9pcmUnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnbWFpIDIwMTInLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ2phbnYuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxMicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYE1vbiByw7RsZSBkYW5zIGNldHRlIGVudHJlcHJpc2Ugw6l0YWl0IHBsdXTDtHQgZGl2ZXJzaWZpw6kuIFByaW5jaXBhbGVtZW50LCBqZSBwYXJ0aWNpcGFpcyBhdXggYWN0aXZpdMOpcyBkZSBwcm9kdWN0aW9uIGV0IGF1eCBwcm9qZXRzIGRlIFImRC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTWFpcyBqJ2Fzc3VyYWlzIGF1c3NpIGwnYXBwcm92aXNpb25uZW1lbnQgZGVzIG1hdGnDqHJlcyBwcmVtacOocmVzIGFpbnNpIHF1ZSBsYSBsaXZyYWlzb24gZGVzIGNvbW1hbmRlcyBhdXggY2xpZW50cy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmVkdWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5lZHVjYXRpb24ubmFtZSxcclxuICAgIGRpcGxvbWFzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RFQyBlbiB0ZWNobmlxdWUgZGUgbOKAmWluZm9ybWF0aXF1ZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIGRlIFNhaW50ZS1Gb3ksIFF1w6liZWMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2VydGlmaWNhdCBlbiBiaW90ZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdVbml2ZXJzaXTDqSBMYXZhbCwgUXXDqWJlYyAnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBiaW/DqWNvbG9naWUnLFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIFNhaW50LUxhdXJlbnQsIE1vbnRyw6lhbCcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByb2plY3RzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLnByb2plY3RzLm5hbWUsXHJcbiAgICBwcm9qZWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNYSBwYWdlIHdlYicsXHJcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnL3Bob3RvUGVyc28ucG5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBNYSBwYWdlIHdlYiBwZXJzb25uZWxsZSwgc3VyIGxhcXVlbGxlIHZvdXMgw6p0ZXMgZW4gY2UgbW9tZW50LCBtZSBwZXJtZXQgZGUgbWUgcHLDqXNlbnRlclxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICBjb2RlU291cmNlTGluazpcclxuICAgICAgICAgICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vQ2hvdWluYXJkRGF2aWQvY2hvdWluYXJkZGF2aWQuZ2l0aHViLmlvJyxcclxuICAgICAgICAgICAgY2hpcHM6IFsnUmVhY3QnLCAnTmV4dC5qcycsICdNYXRlcmlhbC1VSSddLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNlcnRmaWNhdGlvbnNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24ubmFtZSxcclxuICAgIGNlcnRpZmljYXRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01pY3Jvc29mdCBDZXJ0aWZpZWQ6IEF6dXJlIEZ1bmRhbWVudGFscycsXHJcbiAgICAgICAgICAgIHllYXI6IDIwMjEsXHJcbiAgICAgICAgICAgIGltYWdlOiAnL2F6dXJlLWZ1bmRhbWVudGFscy5wbmcnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvbGVhcm4vY2VydGlmaWNhdGlvbnMvYXp1cmUtZnVuZGFtZW50YWxzJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcmVzdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5pbnRlcmVzdC5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5pbnRlcmVzdC5uYW1lLFxyXG4gICAgaW50ZXJlc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BsZWluIGFpcicsXHJcbiAgICAgICAgICAgIGljb246IGZhTGVhZixcclxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZScsXHJcbiAgICAgICAgICAgIGljb246IGZhTWljcm9zY29wZSxcclxuICAgICAgICAgICAgY29sb3I6ICcjMzk2M2UzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHb2xmJyxcclxuICAgICAgICAgICAgaWNvbjogZmFHb2xmQmFsbCxcclxuICAgICAgICAgICAgY29sb3I6ICcjYzVjOGM5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaW7DqW1hJyxcclxuICAgICAgICAgICAgaWNvbjogZmFUdixcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSG9ja2V5JyxcclxuICAgICAgICAgICAgaWNvbjogZmFIb2NrZXlQdWNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCcmFzc2FnZSBkZSBiacOocmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUZsYXNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiM2I4YzcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xlY3R1cmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUJvb2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2JmNTAzOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYVJvYm90LFxyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZSBmaWN0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW5kU3BvY2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRHcmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSmV1eCBkZSBzb2Npw6l0w6knLFxyXG4gICAgICAgICAgICBpY29uOiBmYUNoZXNzS25pZ2h0LFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDdWlzaW5lJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW1idXJnZXIsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2E2OGE2ZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTcOpZGl0YXRpb24nLFxyXG4gICAgICAgICAgICBpY29uOiBmYVlpbllhbmcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9