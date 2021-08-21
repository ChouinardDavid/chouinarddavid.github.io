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
  email: 'chouinard.dc@gmail.com',
  image: '/photoPerso3.jpg',
  socialLinks: ['https://www.linkedin.com/in/david-chouinard/', 'https://github.com/ChouinardDavid']
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
          lineNumber: 154,
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
          lineNumber: 176,
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
          lineNumber: 199,
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
          lineNumber: 210,
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
          lineNumber: 226,
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
          lineNumber: 241,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNWQyxNQUFFLEVBQUUsY0FETTtBQUVWQyxRQUFJLEVBQUU7QUFGSSxHQUREO0FBS2JDLGFBQVcsRUFBRTtBQUNURixNQUFFLEVBQUUsYUFESztBQUVUQyxRQUFJLEVBQUU7QUFGRyxHQUxBO0FBU2JFLFVBQVEsRUFBRTtBQUNOSCxNQUFFLEVBQUUsVUFERTtBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQVRHO0FBYWJHLFdBQVMsRUFBRTtBQUNQSixNQUFFLEVBQUUsV0FERztBQUVQQyxRQUFJLEVBQUU7QUFGQyxHQWJFO0FBaUJiSSxlQUFhLEVBQUU7QUFDWEwsTUFBRSxFQUFFLGVBRE87QUFFWEMsUUFBSSxFQUFFO0FBRkssR0FqQkY7QUFxQmJLLFVBQVEsRUFBRTtBQUNOTixNQUFFLEVBQUUsVUFERTtBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQXJCRztBQXlCYk0sVUFBUSxFQUFFO0FBQ05QLE1BQUUsRUFBRSxVQURFO0FBRU5DLFFBQUksRUFBRTtBQUZBO0FBekJHLENBQWpCO0FBK0JPLElBQU1PLFdBQVcsR0FBRztBQUN2QlIsSUFBRSxFQUFFO0FBRG1CLENBQXBCO0FBSUEsSUFBTVMsV0FBVyxHQUFHO0FBQ3ZCVCxJQUFFLEVBQUUsUUFEbUI7QUFFdkJGLFVBQVEsRUFBRUEsUUFGYTtBQUd2QlksT0FBSyxFQUFFLHdCQUhnQjtBQUl2QkMsT0FBSyxFQUFFLGtCQUpnQjtBQUt2QkMsYUFBVyxFQUFFLENBQ1QsOENBRFMsRUFFVCxtQ0FGUztBQUxVLENBQXBCO0FBV0EsSUFBTUMsaUJBQWlCLEdBQUc7QUFDN0JiLElBQUUsRUFBRUYsUUFBUSxDQUFDQyxZQUFULENBQXNCQyxFQURHO0FBRTdCYyxPQUFLLEVBQUVoQixRQUFRLENBQUNDLFlBQVQsQ0FBc0JFLElBRkE7QUFHN0JjLGFBQVc7QUFIa0IsQ0FBMUI7QUFRQSxJQUFNQyxXQUFXLEdBQUc7QUFDdkJoQixJQUFFLEVBQUVGLFFBQVEsQ0FBQ0ksV0FBVCxDQUFxQkYsRUFERjtBQUV2QmMsT0FBSyxFQUFFaEIsUUFBUSxDQUFDSSxXQUFULENBQXFCRCxJQUZMO0FBR3ZCSCxVQUFRLEVBQUUsQ0FDTjtBQUNJRSxNQUFFLEVBQUUsUUFEUjtBQUVJYyxTQUFLLEVBQUUsY0FGWDtBQUdJRyxVQUFNLEVBQUUsQ0FDSixNQURJLEVBRUoscUJBRkksRUFHSixjQUhJLEVBSUosV0FKSSxFQUtKLGFBTEksRUFNSixRQU5JO0FBSFosR0FETSxFQWFOO0FBQ0lqQixNQUFFLEVBQUUsVUFEUjtBQUVJYyxTQUFLLEVBQUUsVUFGWDtBQUdJRyxVQUFNLEVBQUUsQ0FDSixJQURJLEVBRUosUUFGSSxFQUdKLFlBSEksRUFJSixRQUpJLEVBS0osVUFMSSxFQU1KLE9BTkk7QUFIWixHQWJNLEVBeUJOO0FBQ0lqQixNQUFFLEVBQUUsUUFEUjtBQUVJYyxTQUFLLEVBQUUsUUFGWDtBQUdJRyxVQUFNLEVBQUUsQ0FDSixlQURJLEVBRUosOEJBRkksRUFHSixjQUhJLEVBSUosS0FKSSxFQUtKLG9CQUxJLEVBTUosU0FOSTtBQUhaLEdBekJNLEVBcUNOO0FBQ0lqQixNQUFFLEVBQUUsU0FEUjtBQUVJYyxTQUFLLEVBQUUscUJBRlg7QUFHSUcsVUFBTSxFQUFFLENBQ0osS0FESSxFQUNHO0FBQ1AsVUFGSSxFQUdKLFNBSEksRUFJSixZQUpJLEVBS0osY0FMSTtBQUhaLEdBckNNLEVBZ0ROO0FBQ0lqQixNQUFFLEVBQUUsaUJBRFI7QUFFSWMsU0FBSyxFQUFFLGlCQUZYO0FBR0lHLFVBQU0sRUFBRSxDQUNKLGlCQURJLEVBRUosZUFGSSxFQUdKLE9BSEksRUFJSixRQUpJLEVBS0osb0JBTEk7QUFIWixHQWhETSxFQTJETjtBQUNJakIsTUFBRSxFQUFFLE9BRFI7QUFFSWMsU0FBSyxFQUFFLGNBRlg7QUFHSUcsVUFBTSxFQUFFLENBQ0osc0JBREksRUFDb0I7QUFDeEIsZUFGSSxFQUdKLFlBSEk7QUFIWixHQTNETTtBQUhhLENBQXBCO0FBMEVBLElBQU1DLFdBQVcsR0FBRztBQUN2QmxCLElBQUUsRUFBRUYsUUFBUSxDQUFDSyxRQUFULENBQWtCSCxFQURDO0FBRXZCYyxPQUFLLEVBQUVoQixRQUFRLENBQUNLLFFBQVQsQ0FBa0JGLElBRkY7QUFHdkJrQixTQUFPLEVBQUUsQ0FDTDtBQUNJQyxVQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBYTtBQUNqQixhQUFPLE1BQUMsK0VBQUQ7QUFBSyxlQUFPLEVBQUVBLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0gsS0FITDtBQUlJQyxXQUFPLEVBQUVDLGtEQUFRLENBQUNDLFlBSnRCO0FBS0lILFdBQU8sRUFBRTtBQUNMSSxlQUFTLEVBQUUsdUJBRE47QUFFTEMsV0FBSyxFQUFFLHVDQUZGO0FBR0w7QUFDQUMsZUFBUyxFQUFFLE1BSk47QUFLTEMsYUFBTyxFQUFFLE1BTEo7QUFNTGIsaUJBQVcsOFZBTk47QUFRTGMsV0FBSyxFQUFFLENBQ0gsTUFERyxFQUNLO0FBQ1Isa0JBRkcsRUFHSCxLQUhHLEVBSUgsUUFKRyxFQUtILGNBTEc7QUFSRjtBQUxiLEdBREssRUF1Qkw7QUFDSVQsVUFBTSxFQUFFLGdCQUFDQyxPQUFELEVBQWE7QUFDakIsYUFBTyxNQUFDLCtFQUFEO0FBQUssZUFBTyxFQUFFQSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNILEtBSEw7QUFJSUMsV0FBTyxFQUFFQyxrREFBUSxDQUFDQyxZQUp0QjtBQUtJSCxXQUFPLEVBQUU7QUFDTEksZUFBUyxFQUFFLCtCQUROO0FBRUxDLFdBQUssRUFBRSxhQUZGO0FBR0w7QUFDQTtBQUNBQyxlQUFTLEVBQUUsTUFMTjtBQU1MQyxhQUFPLEVBQUUsTUFOSjtBQU9MYixpQkFBVyxnUkFQTjtBQVNMYyxXQUFLLEVBQUUsQ0FDSCxNQURHLEVBRUgsWUFGRyxFQUdILEtBSEcsRUFJSCxRQUpHLEVBS0gsaUJBTEc7QUFURjtBQUxiLEdBdkJLLEVBOENMO0FBQ0lULFVBQU0sRUFBRSxnQkFBQ0MsT0FBRCxFQUFhO0FBQ2pCLGFBQU8sTUFBQyx3RkFBRDtBQUFjLGVBQU8sRUFBRUEsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0gsS0FITDtBQUlJQyxXQUFPLEVBQUVDLGtEQUFRLENBQUNPLFlBSnRCO0FBS0lULFdBQU8sRUFBRTtBQUNMUCxXQUFLLEVBQUUsZ0RBREY7QUFFTDtBQUNBaUIsV0FBSyxFQUFFO0FBSEY7QUFMYixHQTlDSyxFQXlETDtBQUNJWCxVQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBYTtBQUNqQixhQUFPLE1BQUMsK0VBQUQ7QUFBSyxlQUFPLEVBQUVBLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0gsS0FITDtBQUlJQyxXQUFPLEVBQUVDLGtEQUFRLENBQUNTLFFBSnRCO0FBS0lYLFdBQU8sRUFBRTtBQUNMSSxlQUFTLEVBQUUsYUFETjtBQUVMQyxXQUFLLEVBQUUsMEJBRkY7QUFHTDtBQUNBO0FBQ0FDLGVBQVMsRUFBRSxNQUxOO0FBTUxDLGFBQU8sRUFBRSxNQU5KO0FBT0xiLGlCQUFXO0FBUE47QUFMYixHQXpESyxFQXlFTDtBQUNJSyxVQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBYTtBQUNqQixhQUFPLE1BQUMsK0VBQUQ7QUFBSyxlQUFPLEVBQUVBLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0gsS0FITDtBQUlJQyxXQUFPLEVBQUVDLGtEQUFRLENBQUNTLFFBSnRCO0FBS0lYLFdBQU8sRUFBRTtBQUNMSSxlQUFTLEVBQUUsd0JBRE47QUFFTEMsV0FBSyxFQUFFLHNDQUZGO0FBR0w7QUFDQTtBQUNBQyxlQUFTLEVBQUUsTUFMTjtBQU1MWixpQkFBVztBQU5OO0FBTGIsR0F6RUssRUF3Rkw7QUFDSUssVUFBTSxFQUFFLGdCQUFDQyxPQUFELEVBQWE7QUFDakIsYUFBTyxNQUFDLCtFQUFEO0FBQUssZUFBTyxFQUFFQSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNILEtBSEw7QUFJSUMsV0FBTyxFQUFFQyxrREFBUSxDQUFDUyxRQUp0QjtBQUtJWCxXQUFPLEVBQUU7QUFDTEksZUFBUyxFQUFFLGdCQUROO0FBRUxDLFdBQUssRUFBRSwyQkFGRjtBQUdMO0FBQ0E7QUFDQUMsZUFBUyxFQUFFLE1BTE47QUFNTEMsYUFBTyxFQUFFLE1BTko7QUFPTGIsaUJBQVc7QUFQTjtBQUxiLEdBeEZLO0FBSGMsQ0FBcEI7QUE4R0EsSUFBTWtCLGNBQWMsR0FBRztBQUMxQmpDLElBQUUsRUFBRUYsUUFBUSxDQUFDTSxTQUFULENBQW1CSixFQURHO0FBRTFCYyxPQUFLLEVBQUVoQixRQUFRLENBQUNNLFNBQVQsQ0FBbUJILElBRkE7QUFHMUJpQyxVQUFRLEVBQUUsQ0FDTjtBQUNJcEIsU0FBSyxFQUFFLG9DQURYO0FBRUlRLFdBQU8sRUFBRUMsa0RBQVEsQ0FBQ0MsWUFGdEI7QUFHSVcsVUFBTSxFQUFFLDZCQUhaO0FBSUlDLFFBQUksRUFBRTtBQUpWLEdBRE0sRUFPTjtBQUNJdEIsU0FBSyxFQUFFLDhCQURYO0FBRUlRLFdBQU8sRUFBRUMsa0RBQVEsQ0FBQ1MsUUFGdEI7QUFHSUcsVUFBTSxFQUFFLDJCQUhaO0FBSUlDLFFBQUksRUFBRTtBQUpWLEdBUE0sRUFhTjtBQUNJdEIsU0FBSyxFQUFFLGlDQURYO0FBRUlRLFdBQU8sRUFBRUMsa0RBQVEsQ0FBQ1MsUUFGdEI7QUFHSUcsVUFBTSxFQUFFLCtCQUhaO0FBSUlDLFFBQUksRUFBRTtBQUpWLEdBYk07QUFIZ0IsQ0FBdkI7QUF5QkEsSUFBTUMsYUFBYSxHQUFHO0FBQ3pCckMsSUFBRSxFQUFFRixRQUFRLENBQUNRLFFBQVQsQ0FBa0JOLEVBREc7QUFFekJjLE9BQUssRUFBRWhCLFFBQVEsQ0FBQ1EsUUFBVCxDQUFrQkwsSUFGQTtBQUd6QkssVUFBUSxFQUFFLENBQ047QUFDSVEsU0FBSyxFQUFFLGFBRFg7QUFFSXdCLGVBQVcsRUFBRSxpQkFGakI7QUFHSXZCLGVBQVcsK0dBSGY7QUFLSXdCLGtCQUFjLEVBQ1YsNERBTlI7QUFPSVYsU0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsYUFBckI7QUFQWCxHQURNO0FBSGUsQ0FBdEI7QUFnQkEsSUFBTVcsa0JBQWtCLEdBQUc7QUFDOUJ4QyxJQUFFLEVBQUVGLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QkwsRUFERztBQUU5QmMsT0FBSyxFQUFFaEIsUUFBUSxDQUFDTyxhQUFULENBQXVCSixJQUZBO0FBRzlCd0MsZ0JBQWMsRUFBRSxDQUNaO0FBQ0kzQixTQUFLLEVBQUUseUNBRFg7QUFFSXNCLFFBQUksRUFBRSxJQUZWO0FBR0l6QixTQUFLLEVBQUUseUJBSFg7QUFJSStCLFFBQUksRUFBRTtBQUpWLEdBRFk7QUFIYyxDQUEzQjtBQWFBLElBQU1DLGNBQWMsR0FBRztBQUMxQjNDLElBQUUsRUFBRUYsUUFBUSxDQUFDUyxRQUFULENBQWtCUCxFQURJO0FBRTFCYyxPQUFLLEVBQUVoQixRQUFRLENBQUNTLFFBQVQsQ0FBa0JOLElBRkM7QUFHMUIyQyxXQUFTLEVBQUUsQ0FDUDtBQUNJOUIsU0FBSyxFQUFFLFdBRFg7QUFFSStCLFFBQUksRUFBRUMsd0VBRlY7QUFHSUMsU0FBSyxFQUFFO0FBSFgsR0FETyxFQU1QO0FBQ0lqQyxTQUFLLEVBQUUsU0FEWDtBQUVJK0IsUUFBSSxFQUFFRyw4RUFGVjtBQUdJRCxTQUFLLEVBQUU7QUFIWCxHQU5PLEVBV1A7QUFDSWpDLFNBQUssRUFBRSxNQURYO0FBRUkrQixRQUFJLEVBQUVJLDRFQUZWO0FBR0lGLFNBQUssRUFBRTtBQUhYLEdBWE8sRUFnQlA7QUFDSWpDLFNBQUssRUFBRSxRQURYO0FBRUkrQixRQUFJLEVBQUVLLHNFQUZWO0FBR0lILFNBQUssRUFBRTtBQUhYLEdBaEJPLEVBcUJQO0FBQ0lqQyxTQUFLLEVBQUUsUUFEWDtBQUVJK0IsUUFBSSxFQUFFTSw4RUFGVjtBQUdJSixTQUFLLEVBQUU7QUFIWCxHQXJCTyxFQTBCUDtBQUNJakMsU0FBSyxFQUFFLG1CQURYO0FBRUkrQixRQUFJLEVBQUVPLHlFQUZWO0FBR0lMLFNBQUssRUFBRTtBQUhYLEdBMUJPLEVBK0JQO0FBQ0lqQyxTQUFLLEVBQUUsU0FEWDtBQUVJK0IsUUFBSSxFQUFFUSx3RUFGVjtBQUdJTixTQUFLLEVBQUU7QUFIWCxHQS9CTyxFQW9DUDtBQUNJakMsU0FBSyxFQUFFLGFBRFg7QUFFSStCLFFBQUksRUFBRVMseUVBRlY7QUFHSVAsU0FBSyxFQUFFO0FBSFgsR0FwQ08sRUF5Q1A7QUFDSWpDLFNBQUssRUFBRSxpQkFEWDtBQUVJK0IsUUFBSSxFQUFFVSw2RUFGVjtBQUdJUixTQUFLLEVBQUU7QUFIWCxHQXpDTyxFQThDUDtBQUNJakMsU0FBSyxFQUFFLGlCQURYO0FBRUkrQixRQUFJLEVBQUVXLCtFQUZWO0FBR0lULFNBQUssRUFBRTtBQUhYLEdBOUNPLEVBbURQO0FBQ0lqQyxTQUFLLEVBQUUsU0FEWDtBQUVJK0IsUUFBSSxFQUFFWSw2RUFGVjtBQUdJVixTQUFLLEVBQUU7QUFIWCxHQW5ETyxFQXdEUDtBQUNJakMsU0FBSyxFQUFFLFlBRFg7QUFFSStCLFFBQUksRUFBRWEsMkVBRlY7QUFHSVgsU0FBSyxFQUFFO0FBSFgsR0F4RE87QUFIZSxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjg5ZjE1ZDhlZWFmZWY3MTAyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXHJcbmltcG9ydCB7XHJcbiAgICBmYUxlYWYsXHJcbiAgICBmYU1pY3Jvc2NvcGUsXHJcbiAgICBmYUdvbGZCYWxsLFxyXG4gICAgZmFUdixcclxuICAgIGZhQm9vayxcclxuICAgIGZhSGFuZFNwb2NrLFxyXG4gICAgZmFDaGVzc0tuaWdodCxcclxuICAgIGZhSGFtYnVyZ2VyLFxyXG4gICAgZmFGbGFzayxcclxuICAgIGZhSG9ja2V5UHVjayxcclxuICAgIGZhUm9ib3QsXHJcbiAgICBmYVlpbllhbmcsXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IEJhY2tUb1NjaG9vbCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2JhY2tUb1NjaG9vbCc7XHJcbmltcG9ydCBKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9qb2InO1xyXG5pbXBvcnQgeyBkb21haW5lcyB9IGZyb20gJy4vZG9tYWluZXMnO1xyXG5cclxuY29uc3Qgc2VjdGlvbnMgPSB7XHJcbiAgICBwcmVzZW50YXRpb246IHtcclxuICAgICAgICBpZDogJ3ByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ1Byw6lzZW50YXRpb24nLFxyXG4gICAgfSxcclxuICAgIGNvbXBldGVuY2VzOiB7XHJcbiAgICAgICAgaWQ6ICdjb21wZXRlbmNlcycsXHJcbiAgICAgICAgbmFtZTogJ0NvbXDDqXRlbmNlcycsXHJcbiAgICB9LFxyXG4gICAgcGFyY291cnM6IHtcclxuICAgICAgICBpZDogJ3BhcmNvdXJzJyxcclxuICAgICAgICBuYW1lOiAnQ2FycmnDqHJlJyxcclxuICAgIH0sXHJcbiAgICBlZHVjYXRpb246IHtcclxuICAgICAgICBpZDogJ2VkdWNhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ8OJZHVjYXRpb24nLFxyXG4gICAgfSxcclxuICAgIGNlcnRpZmljYXRpb246IHtcclxuICAgICAgICBpZDogJ2NlcnRpZmljYXRpb24nLFxyXG4gICAgICAgIG5hbWU6ICdDZXJ0aWZpY2F0aW9ucycsXHJcbiAgICB9LFxyXG4gICAgcHJvamVjdHM6IHtcclxuICAgICAgICBpZDogJ3Byb2plY3RzJyxcclxuICAgICAgICBuYW1lOiAnUHJvamV0cycsXHJcbiAgICB9LFxyXG4gICAgaW50ZXJlc3Q6IHtcclxuICAgICAgICBpZDogJ2ludGVyZXN0JyxcclxuICAgICAgICBuYW1lOiAnSW50w6lyw6p0cycsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdoZWFkZXInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdmb290ZXInLFxyXG4gICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxyXG4gICAgZW1haWw6ICdjaG91aW5hcmQuZGNAZ21haWwuY29tJyxcclxuICAgIGltYWdlOiAnL3Bob3RvUGVyc28zLmpwZycsXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICAgICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWQtY2hvdWluYXJkLycsXHJcbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaG91aW5hcmREYXZpZCcsXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXNlbnRhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcmVzZW50YXRpb24ubmFtZSxcclxuICAgIGRlc2NyaXB0aW9uOiBgRMOpdmVsb3BwZXVyIHdlYiBmdWxsLXN0YWNrLCBqZSBtYWl0cmlzZSBwbHVzIHBhcnRpY3VsacOocmVtZW50IGwnZW52aXJvbm5lbWVudCAuTkVULCB0YW50IGF1IG5pdmVhdSBiYXNlIGRlIGRvbm7DqWVzIHF1J2F1IG5pdmVhdSBkdSBjb2RlLiBcclxuICAgICAgICAuLi4uLi4uLi4uLi4uLlxyXG4gICAgICAgIFBhc3Npb25uw6kgcGFyIGxlcyB0ZWNobm9sb2dpZXMsIGplIHN1aXMgY29uc3RhbW1lbnQgw6AgbGEgcmVjaGVyY2hlIGQnYXBwcmVudGlzc2FnZSBwb3VyIHBhcmZhaXJlIG1lcyBjb25uYWlzc2FuY2UgZGFucyBjZSBkb21haW5lLmAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuY29tcGV0ZW5jZXMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY29tcGV0ZW5jZXMubmFtZSxcclxuICAgIHNlY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ1RlY2hubycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnLk5FVCcsXHJcbiAgICAgICAgICAgICAgICAnQmFzZSBkZSBkb25uw6llcyBTUUwnLFxyXG4gICAgICAgICAgICAgICAgJ1JhcHBvcnQgU1NSUycsXHJcbiAgICAgICAgICAgICAgICAnLk5FVCBDb3JlJyxcclxuICAgICAgICAgICAgICAgICdDbG91ZCBBenVyZScsXHJcbiAgICAgICAgICAgICAgICAnTmV4dEpzJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdsYW5nYWdlcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGFuZ2FnZXMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdDIycsXHJcbiAgICAgICAgICAgICAgICAndmIubmV0JyxcclxuICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICdKUXVlcnknLFxyXG4gICAgICAgICAgICAgICAgJ0hUTUwvQ1NTJyxcclxuICAgICAgICAgICAgICAgICdSZWFjdCcsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnb3V0aWxzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdPdXRpbHMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvJyxcclxuICAgICAgICAgICAgICAgICdTUUwgU2VydmVyIE1hbmFnZW1lbnQgU3R1ZGlvJyxcclxuICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgJ0dpdCcsXHJcbiAgICAgICAgICAgICAgICAnVmlzdWFsIFN0dWRpbyBDb2RlJyxcclxuICAgICAgICAgICAgICAgICdQb3N0bWFuJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdkZXNpZ25zJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXNpZ25zIGV0IGNvbmNlcHRzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTVZDJywgLy9cclxuICAgICAgICAgICAgICAgICdNVlZNJyxcclxuICAgICAgICAgICAgICAgICdXZWIgQVBJJyxcclxuICAgICAgICAgICAgICAgICdTLk8uTC5JLkQuJyxcclxuICAgICAgICAgICAgICAgICdSLkUuUy5ULiBBUEknLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2NvbXBsZW1lbnRhaXJlcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ29tcGzDqW1lbnRhaXJlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ1Rlc3RzIHVuaXRhaXJlcycsXHJcbiAgICAgICAgICAgICAgICAnTcOpdGhvZGUgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ0tlbmRvJyxcclxuICAgICAgICAgICAgICAgICdEQUNQQUMnLFxyXG4gICAgICAgICAgICAgICAgXCJQcm9qZXQgZCdlbnZlcmd1cmVcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdwZXJzbycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGVyc29ubmVsbGVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQ29tbXVuaWNhdGlvbiBhY3RpdmUnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ0F1dG9ub21pZScsXHJcbiAgICAgICAgICAgICAgICAnSW5pdGlhdGl2ZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZWVyX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucGFyY291cnMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucGFyY291cnMubmFtZSxcclxuICAgIGVtcGxvaXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0NIVSBkZSBRdcOpYmVjLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBpbmZvcm1hdGlxdWUgKGTDqXZlbG9wcGV1ciknLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIGZ1bGxzdGFjaywgamUgcGFydGljaXBlIGF1IGTDqXZlbG9wcGVtZW50IGRlIGwnYXBwbGljYXRpb24gPGEgY2xhc3M9XCJzcGVjaWFsTGlua0VmZmVjdDJcIiBocmVmPVwiaHR0cHM6Ly93d3cuZGNpY3Jpc3RhbG5ldC5jb20vXCI+Q3Jpc3RhbC1OZXQ8L2E+IGF1IHNlaW4gZCd1bmUgw6lxdWlwZSBhZ2lsZS4gXHJcbiAgICAgICAgICAgICAgICAgICAgQ2VsbGUtY2kgcGVybWV0IGF1IHBlcnNvbm5lbCBzb2lnYW50IGRlIGfDqXJlciBsZXMgZG9ubsOpZXMgcmVsYXRpdmVzIGF1eCB2aXNpdGVzIGRlcyBwYXRpZW50cyBkYW5zIGxlcyBob3BpdGF1eC5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCcsIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTY3J1bSBtYXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnSW5kdXN0cmllbGxlIEFsbGlhbmNlLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnRMOpdmVsb3BwZXVyJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ3NlcHQuIDIwMTgnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ2Fvw7t0IDIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEFzc3VyZXIgdW4gc3VwcG9ydCBhdXggdXRpbGlzYXRldXJzIGRlcyBhcHBsaWNhdGlvbnMgY29ycG9yYXRpdmVzIGRhbnMgbGUgZMOpcGFydGVtZW50IGRlIGxhIGNvbXB0YWJpbGl0w6kgZXQgZmlzY2FsaXTDqS4gXHJcbiAgICAgICAgICAgICAgICAgICAgQ2VsYSBjb25zaXN0YWl0IMOgIGNvcnJpZ2VyIGxlcyBhbm9tYWxpZXMsIG1haXMgYXVzc2kgw6AgcGFydGljaXBlciBhdXggw6l2b2x1dGlvbnMgZGVzIHN5c3TDqG1lcyB1dGlsaXPDqXMuYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZSBtYW5hZ2VyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QmFja1RvU2Nob29sIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iYWNrVG9TY2hvb2wsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJldG91ciDDoCBsJ8OpY29sZSAoVGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWUpXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlczogJ2bDqXZyLiAyMDE2IC0gZMOpYy4gMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlczogJzIwMTYgLSAyMDE4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdHU0ssIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIHByb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnbm92LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVGaW46ICdmw6l2ci4gMjAxNycsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE3JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgUGFydGljaXBlciDDoCBsYSBwcm9kdWN0aW9uIGR1IHZhY2NpbiAqYW50aS1ncmlwcGFsKiwgbW9uIHLDtGxlIMOpdGFpdCBkJ29ww6lyZXIgbGVzIHN5c3TDqG1lcyBkZSByZW1wbGlzc2FnZSBlbiBmaW9sZSBvdSBlbiBmbGFjb24uXHJcbiAgICAgICAgICAgICAgICAgICAgSmUgY29udHJpYnVhaXMgYXVzc2kgYWN0aXZlbWVudCDDoCBsYSBmb3JtYXRpb24gZGVzIG5vdXZlYXV4IGVtcGxvecOpcy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0JEIERpYWdub3N0aWNzLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBhdSBjb250csO0bGUgZGUgbGEgcXVhbGl0w6knLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnamFudi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnb2N0LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJzIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFZmZlY3R1ZXIgbGVzIGFuYWx5c2VzIGRlIGxhYm9yYXRvaXJlIHBlcm1ldHRhbnQgZGUgdmFsaWRlciBsYSBxdWFsaXTDqSBkdSBwcm9kdWl0IMOgIHRvdXRlcyBsZXMgw6l0YXBlcyBkZSBzYSBwcsOpcGFyYXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgQ2VzIGRvbm7DqWVzIMOpdGFpZW50IGVuc3VpdGUgY29tcGlsw6llcyBldCBwcsOpc2VudMOpZXMgw6AgbCdhc3N1cmFuY2UgcXVhbGl0w6kgc291cyBmb3JtZSBkZSByYXBwb3J0LmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnRmVsZGFuLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBkZSBsYWJvcmF0b2lyZScsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRGVidXQ6ICdtYWkgMjAxMicsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnamFudi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDEyJyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTW9uIHLDtGxlIGRhbnMgY2V0dGUgZW50cmVwcmlzZSDDqXRhaXQgcGx1dMO0dCBkaXZlcnNpZmnDqS4gUHJpbmNpcGFsZW1lbnQsIGplIHBhcnRpY2lwYWlzIGF1eCBhY3Rpdml0w6lzIGRlIHByb2R1Y3Rpb24gZXQgYXV4IHByb2pldHMgZGUgUiZELiBcclxuICAgICAgICAgICAgICAgICAgICBNYWlzIGonYXNzdXJhaXMgYXVzc2kgbCdhcHByb3Zpc2lvbm5lbWVudCBkZXMgbWF0acOocmVzIHByZW1pw6hyZXMgYWluc2kgcXVlIGxhIGxpdnJhaXNvbiBkZXMgY29tbWFuZGVzIGF1eCBjbGllbnRzLmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWR1Y2F0aW9uX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuZWR1Y2F0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmVkdWNhdGlvbi5uYW1lLFxyXG4gICAgZGlwbG9tYXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuaW5mb3JtYXRpcXVlLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdDw6lnZXAgZGUgU2FpbnRlLUZveSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDE4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDZXJ0aWZpY2F0IGVuIGJpb3RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ1VuaXZlcnNpdMOpIExhdmFsLCBRdcOpYmVjICcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGJpb8OpY29sb2dpZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdDw6lnZXAgU2FpbnQtTGF1cmVudCwgTW9udHLDqWFsJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucHJvamVjdHMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucHJvamVjdHMubmFtZSxcclxuICAgIHByb2plY3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hIHBhZ2Ugd2ViJyxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICcvcGhvdG9QZXJzby5wbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYE1hIHBhZ2Ugd2ViIHBlcnNvbm5lbGxlLCBzdXIgbGFxdWVsbGUgdm91cyDDqnRlcyBlbiBjZSBtb21lbnQsIG1lIHBlcm1ldCBkZSBtZSBwcsOpc2VudGVyXHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIGNvZGVTb3VyY2VMaW5rOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaG91aW5hcmREYXZpZC9jaG91aW5hcmRkYXZpZC5naXRodWIuaW8nLFxyXG4gICAgICAgICAgICBjaGlwczogWydSZWFjdCcsICdOZXh0LmpzJywgJ01hdGVyaWFsLVVJJ10sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2VydGZpY2F0aW9uc190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5uYW1lLFxyXG4gICAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWljcm9zb2Z0IENlcnRpZmllZDogQXp1cmUgRnVuZGFtZW50YWxzJyxcclxuICAgICAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICAgICAgaW1hZ2U6ICcvYXp1cmUtZnVuZGFtZW50YWxzLnBuZycsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9sZWFybi9jZXJ0aWZpY2F0aW9ucy9henVyZS1mdW5kYW1lbnRhbHMnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGVyZXN0c190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmludGVyZXN0LmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmludGVyZXN0Lm5hbWUsXHJcbiAgICBpbnRlcmVzdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGxlaW4gYWlyJyxcclxuICAgICAgICAgICAgaWNvbjogZmFMZWFmLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFNaWNyb3Njb3BlLFxyXG4gICAgICAgICAgICBjb2xvcjogJyMzOTYzZTMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dvbGYnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUdvbGZCYWxsLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNjNWM4YzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NpbsOpbWEnLFxyXG4gICAgICAgICAgICBpY29uOiBmYVR2LFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIb2NrZXknLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhvY2tleVB1Y2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JyYXNzYWdlIGRlIGJpw6hyZScsXHJcbiAgICAgICAgICAgIGljb246IGZhRmxhc2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2IzYjhjNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTGVjdHVyZScsXHJcbiAgICAgICAgICAgIGljb246IGZhQm9vayxcclxuICAgICAgICAgICAgY29sb3I6ICcjYmY1MDM5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIGljb246IGZhUm9ib3QsXHJcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlIGZpY3Rpb24nLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhhbmRTcG9jayxcclxuICAgICAgICAgICAgY29sb3I6ICdsaWdodEdyZWVuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKZXV4IGRlIHNvY2nDqXTDqScsXHJcbiAgICAgICAgICAgIGljb246IGZhQ2hlc3NLbmlnaHQsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0N1aXNpbmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUhhbWJ1cmdlcixcclxuICAgICAgICAgICAgY29sb3I6ICcjYTY4YTZkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNw6lkaXRhdGlvbicsXHJcbiAgICAgICAgICAgIGljb246IGZhWWluWWFuZyxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=