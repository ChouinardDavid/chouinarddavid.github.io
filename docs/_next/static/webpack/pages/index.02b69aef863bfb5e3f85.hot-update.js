webpackHotUpdate_N_E("pages/index",{

/***/ "./labels/fr.js":
/*!**********************!*\
  !*** ./labels/fr.js ***!
  \**********************/
/*! exports provided: header_text, footer_text, presentation_text, skills_text, parcours_text, education_text, certfications_text, projects_text, interests_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header_text", function() { return header_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_text", function() { return footer_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presentation_text", function() { return presentation_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills_text", function() { return skills_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parcours_text", function() { return parcours_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "education_text", function() { return education_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "certfications_text", function() { return certfications_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects_text", function() { return projects_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interests_text", function() { return interests_text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/career/content/job */ "./components/sections/career/content/job.js");
/* harmony import */ var _components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections/career/content/backToSchool */ "./components/sections/career/content/backToSchool.js");
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\labels\\fr.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { domaines, contentType } from '../sections/career/content/domaines';



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
  email: "chouinard.dc@gmail.com"
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
    children: ['.NET', 'Base de données SQL', 'Rapport SSRS', '.NET Core', 'Cloud Azure', 'NextJs']
  }, {
    id: 'langages',
    title: 'Langages',
    children: ['C#', 'vb.net', 'Javascript', 'JQuery', 'HTML/CSS', 'React']
  }, {
    id: 'outils',
    title: 'Outils',
    children: ['Visual Studio', 'SQL Server Management Studio', 'Azure DevOps', 'Git', 'Visual Studio Code', 'Postman']
  }, {
    id: 'designs',
    title: 'Designs et concepts',
    children: ['MVC', 'MVVM', 'Web API', 'S.O.L.I.D.', 'R.E.S.T. API']
  }, {
    id: 'complementaires',
    title: 'Complémentaires',
    children: ['Tests unitaires', 'Méthode agile', 'Kendo', 'DACPAC', 'Projet d\'envergure']
  }, {
    id: 'perso',
    title: 'Personnelles',
    children: ['Communication active', 'Autonomie', 'Initiative']
  }]
};
var parcours_text = {
  id: sections.parcours.id,
  title: sections.parcours.name,
  emplois: [{
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 48
        }
      });
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopCode"],
    color: 'primary',
    content: {
      employeur: 'CHU de Québec, Québec',
      poste: 'Technicien en informatique (développeur)',
      dateDebut: 'août 2019',
      dateFin: 'auj.',
      description: "En tant que d\xE9veloppeur fullstack, je participe au d\xE9veloppement de l'application <a href=\"https://www.dcicristalnet.com/\">Cristal-Net</a> au sein d'une \xE9quipe agile. \n                    Celle-ci permet au personnel soigant de g\xE9rer les donn\xE9es relatives aux visites des patients dans les hopitaux.",
      chips: ['.NET (C#/vb.net)', 'Javascript', 'SQL', 'JQuery', 'Kendo', 'Azure DevOps']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 48
        }
      });
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopCode"],
    color: 'primary',
    content: {
      employeur: 'Industrielle Alliance, Québec',
      poste: 'Développeur',
      dateDebut: ' sept. 2018',
      dateFin: ' août 2019',
      description: "Assurer un support aux utilisateurs des applications corporatives dans le d\xE9partement de la comptabilit\xE9 et fiscalit\xE9. \n                    Cela consistait \xE0 corriger les anomalies, mais aussi \xE0 participer aux \xE9volutions des syst\xE8mes utilis\xE9s.",
      chips: ['.NET (C#)', 'Javascript', 'SQL', 'Azure DevOps (Release manager)']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 48
        }
      });
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"],
    content: {
      title: 'Retour à l\'école',
      dates: 'févr. 2016 - déc. 2018'
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 48
        }
      });
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDna"],
    color: 'secondary',
    content: {
      employeur: 'GSK, Québec',
      poste: 'Technicien de production',
      dateDebut: 'nov. 2014',
      dateFin: 'févr. 2017',
      description: "Participer \xE0 la production du vaccin *anti-grippal*, mon r\xF4le \xE9tait d'op\xE9rer les syst\xE8mes de remplissage en fiole ou en flacon.\n                    Je contribuais aussi activement \xE0 la formation des nouveaux employ\xE9s."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 48
        }
      });
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDna"],
    color: 'secondary',
    content: {
      employeur: 'BD Diagnostics, Québec',
      poste: 'Technicien au contrôle de la qualité',
      dateDebut: 'janv. 2014',
      dateFin: 'oct. 2014',
      description: "Effectuer les analyses de laboratoire permettant de valider la qualit\xE9 du produit \xE0 toutes les \xE9tapes de sa pr\xE9paration.\n                    Ces donn\xE9es \xE9taient ensuite compil\xE9es et pr\xE9sent\xE9es \xE0 l'assurance qualit\xE9 sous forme de rapport."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 48
        }
      });
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDna"],
    color: 'secondary',
    content: {
      employeur: 'Feldan, Québec',
      poste: 'Technicien de laboratoire',
      dateDebut: 'mai 2012',
      dateFin: 'janv. 2014',
      description: "Mon r\xF4le dans cette entreprise \xE9tait plut\xF4t diversifi\xE9. Principalement, je participais aux activit\xE9s de production et aux projets de R&D. \n                    Mais j'assurais aussi l'approvisionnement des mati\xE8res premi\xE8res ainsi que la livraison des commandes aux clients."
    }
  }]
};
var education_text = {
  id: sections.education.id,
  title: sections.education.name,
  courses: [{
    title: 'DEC en technique de l’informatique',
    school: 'Cégep de Sainte-Foy, Québec',
    year: '2018'
  }, {
    title: 'Certificat en biotechnologie',
    school: 'Université Laval, Québec ',
    year: '2012'
  }, {
    title: 'DEC en technique de bioécologie',
    school: 'Cégep Saint-Laurent, Montréal',
    year: '2010'
  }]
};
var certfications_text = {
  id: sections.certification.id,
  title: sections.certification.name,
  certifications: [{
    titre: 'Microsoft Certified: Azure Fundamentals',
    image: '/azure-fundamentals.png',
    link: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals'
  }]
};
var projects_text = {
  id: sections.projects.id,
  title: sections.projects.name,
  projects: [{
    title: "Mon CV web",
    imageLink: "/photoPerso.png",
    description: "Mon premier projet personnel! Il m'a permis de mettre en pratique React et d'acqu\xE9rir plusieurs comp\xE9tences en programmation front-end.\n            Le design reste simpliste, peut-\xEAtre que ce sera une am\xE9lioration \xE0 venir!",
    codeSourceLink: "https://github.com/ChouinardDavid/chouinarddavid.github.io",
    chips: ["React", "Next.js", "Material-UI"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwicHJlc2VudGF0aW9uX3RleHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2tpbGxzX3RleHQiLCJjaGlsZHJlbiIsInBhcmNvdXJzX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImljb24iLCJmYUxhcHRvcENvZGUiLCJjb2xvciIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiZmFHcmFkdWF0aW9uQ2FwIiwiZGF0ZXMiLCJmYURuYSIsImVkdWNhdGlvbl90ZXh0IiwiY291cnNlcyIsInNjaG9vbCIsInllYXIiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsInRpdHJlIiwiaW1hZ2UiLCJsaW5rIiwicHJvamVjdHNfdGV4dCIsImltYWdlTGluayIsImNvZGVTb3VyY2VMaW5rIiwiaW50ZXJlc3RzX3RleHQiLCJpbnRlcmVzdHMiLCJmYUxlYWYiLCJmYU1pY3Jvc2NvcGUiLCJmYUdvbGZCYWxsIiwiZmFUdiIsImZhSG9ja2V5UHVjayIsImZhRmxhc2siLCJmYUJvb2siLCJmYVJvYm90IiwiZmFIYW5kU3BvY2siLCJmYUNoZXNzS25pZ2h0IiwiZmFIYW1idXJnZXIiLCJmYVlpbllhbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFJQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsY0FBWSxFQUFFO0FBQ1ZDLE1BQUUsRUFBRSxjQURNO0FBRVZDLFFBQUksRUFBRTtBQUZJ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RUlRLFFBQUksRUFBRWtDLCtFQUZWO0FBR0loQyxTQUFLLEVBQUU7QUFIWCxHQTlDTyxFQW1EUDtBQUNJVixTQUFLLEVBQUUsU0FEWDtBQUVJUSxRQUFJLEVBQUVtQyw2RUFGVjtBQUdJakMsU0FBSyxFQUFFO0FBSFgsR0FuRE8sRUF3RFA7QUFDSVYsU0FBSyxFQUFFLFlBRFg7QUFFSVEsUUFBSSxFQUFFb0MsMkVBRlY7QUFHSWxDLFNBQUssRUFBRTtBQUhYLEdBeERPO0FBSGUsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDJiNjlhZWY4NjNiZmI1ZTNmODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhTGVhZiwgZmFNaWNyb3Njb3BlLCBmYUdvbGZCYWxsLCBmYVR2LCBmYUJvb2ssIGZhSGFuZFNwb2NrLCBmYUNoZXNzS25pZ2h0LCBmYUhhbWJ1cmdlciwgZmFGbGFzaywgZmFIb2NrZXlQdWNrLCBmYVJvYm90LCBmYVlpbllhbmcsIGZhQ29kZSwgZmFEbmEsIGZhR3JhZHVhdGlvbkNhcCwgZmFMYXB0b3BDb2RlLCBmYUNvZGVCcmFuY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbi8vIGltcG9ydCB7IGRvbWFpbmVzLCBjb250ZW50VHlwZSB9IGZyb20gJy4uL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2RvbWFpbmVzJztcclxuaW1wb3J0IEpvYiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2pvYic7XHJcbmltcG9ydCBCYWNrVG9TY2hvb2wgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9iYWNrVG9TY2hvb2wnO1xyXG5cclxuXHJcblxyXG5jb25zdCBzZWN0aW9ucyA9IHtcclxuICAgIHByZXNlbnRhdGlvbjoge1xyXG4gICAgICAgIGlkOiAncHJlc2VudGF0aW9uJyxcclxuICAgICAgICBuYW1lOiAnUHLDqXNlbnRhdGlvbidcclxuICAgIH0sXHJcbiAgICBjb21wZXRlbmNlczoge1xyXG4gICAgICAgIGlkOiAnY29tcGV0ZW5jZXMnLFxyXG4gICAgICAgIG5hbWU6ICdDb21ww6l0ZW5jZXMnXHJcbiAgICB9LFxyXG4gICAgcGFyY291cnM6IHtcclxuICAgICAgICBpZDogJ3BhcmNvdXJzJyxcclxuICAgICAgICBuYW1lOiAnUGFyY291cnMgZGUgQ2FycmnDqHJlJ1xyXG4gICAgfSxcclxuICAgIGVkdWNhdGlvbjoge1xyXG4gICAgICAgIGlkOiAnZWR1Y2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnw4lkdWNhdGlvbidcclxuICAgIH0sXHJcbiAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgaWQ6ICdjZXJ0aWZpY2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnQ2VydGlmaWNhdGlvbnMnXHJcbiAgICB9LFxyXG4gICAgcHJvamVjdHM6IHtcclxuICAgICAgICBpZDogJ3Byb2plY3RzJyxcclxuICAgICAgICBuYW1lOiAnUHJvamV0cydcclxuICAgIH0sXHJcbiAgICBpbnRlcmVzdDoge1xyXG4gICAgICAgIGlkOiAnaW50ZXJlc3QnLFxyXG4gICAgICAgIG5hbWU6ICdJbnTDqXLDqnRzJ1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdoZWFkZXInLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyX3RleHQgPSB7XHJcbiAgICBpZDogJ2Zvb3RlcicsXHJcbiAgICBzZWN0aW9uczogc2VjdGlvbnMsXHJcbiAgICBlbWFpbDogXCJjaG91aW5hcmQuZGNAZ21haWwuY29tXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmVzZW50YXRpb25fdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wcmVzZW50YXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucHJlc2VudGF0aW9uLm5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBgRMOpdmVsb3BwZXVyIHdlYiBmdWxsLXN0YWNrLCBqZSBtYWl0cmlzZSBwbHVzIHBhcnRpY3VsacOocmVtZW50IGwnZW52aXJvbm5lbWVudCAuTkVULCB0YW50IGF1IG5pdmVhdSBiYXNlIGRlIGRvbm7DqWVzIHF1J2F1IG5pdmVhdSBkdSBjb2RlLiBcclxuICAgICAgICAuLi4uLi4uLi4uLi4uLlxyXG4gICAgICAgIFBhc3Npb25uw6kgcGFyIGxlcyB0ZWNobm9sb2dpZXMsIGplIHN1aXMgY29uc3RhbW1lbnQgw6AgbGEgcmVjaGVyY2hlIGQnYXBwcmVudGlzc2FnZSBwb3VyIHBhcmZhaXJlIG1lcyBjb25uYWlzc2FuY2UgZGFucyBjZSBkb21haW5lLmBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNraWxsc190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmNvbXBldGVuY2VzLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmNvbXBldGVuY2VzLm5hbWUsXHJcbiAgICBzZWN0aW9uczpcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnVGVjaG5vJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWVzJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy5ORVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQmFzZSBkZSBkb25uw6llcyBTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnUmFwcG9ydCBTU1JTJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy5ORVQgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDbG91ZCBBenVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOZXh0SnMnXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdsYW5nYWdlcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0MjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZiLm5ldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0pRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdIVE1ML0NTUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ291dGlscycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ091dGlscycsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjpcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1NRTCBTZXJ2ZXIgTWFuYWdlbWVudCBTdHVkaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXp1cmUgRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0dpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvIENvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnUG9zdG1hbidcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZGVzaWducycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Rlc2lnbnMgZXQgY29uY2VwdHMnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46XHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTVZDJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ01WVk0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnV2ViIEFQSScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdTLk8uTC5JLkQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1IuRS5TLlQuIEFQSScsXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbXBsZW1lbnRhaXJlcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbXBsw6ltZW50YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46XHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVGVzdHMgdW5pdGFpcmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ03DqXRob2RlIGFnaWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0tlbmRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0RBQ1BBQycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdQcm9qZXQgZFxcJ2VudmVyZ3VyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3BlcnNvJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGVyc29ubmVsbGVzJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbW11bmljYXRpb24gYWN0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dG9ub21pZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbml0aWF0aXZlJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhcmNvdXJzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucGFyY291cnMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucGFyY291cnMubmFtZSxcclxuICAgIGVtcGxvaXM6XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7IHJldHVybiAoPEpvYiBjb250ZW50PXtjb250ZW50fSAvPikgfSxcclxuICAgICAgICAgICAgICAgIGljb246IGZhTGFwdG9wQ29kZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQ0hVIGRlIFF1w6liZWMsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBlbiBpbmZvcm1hdGlxdWUgKGTDqXZlbG9wcGV1ciknLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJ2Fvw7t0IDIwMTknLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEVuIHRhbnQgcXVlIGTDqXZlbG9wcGV1ciBmdWxsc3RhY2ssIGplIHBhcnRpY2lwZSBhdSBkw6l2ZWxvcHBlbWVudCBkZSBsJ2FwcGxpY2F0aW9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICBDZWxsZS1jaSBwZXJtZXQgYXUgcGVyc29ubmVsIHNvaWdhbnQgZGUgZ8OpcmVyIGxlcyBkb25uw6llcyByZWxhdGl2ZXMgYXV4IHZpc2l0ZXMgZGVzIHBhdGllbnRzIGRhbnMgbGVzIGhvcGl0YXV4LmAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuTkVUIChDIy92Yi5uZXQpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0pRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnS2VuZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4geyByZXR1cm4gKDxKb2IgY29udGVudD17Y29udGVudH0gLz4pIH0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYUxhcHRvcENvZGUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0luZHVzdHJpZWxsZSBBbGxpYW5jZSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdGU6ICdEw6l2ZWxvcHBldXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJyBzZXB0LiAyMDE4JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRmluOiAnIGFvw7t0IDIwMTknLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgQXNzdXJlciB1biBzdXBwb3J0IGF1eCB1dGlsaXNhdGV1cnMgZGVzIGFwcGxpY2F0aW9ucyBjb3Jwb3JhdGl2ZXMgZGFucyBsZSBkw6lwYXJ0ZW1lbnQgZGUgbGEgY29tcHRhYmlsaXTDqSBldCBmaXNjYWxpdMOpLiBcclxuICAgICAgICAgICAgICAgICAgICBDZWxhIGNvbnNpc3RhaXQgw6AgY29ycmlnZXIgbGVzIGFub21hbGllcywgbWFpcyBhdXNzaSDDoCBwYXJ0aWNpcGVyIGF1eCDDqXZvbHV0aW9ucyBkZXMgc3lzdMOobWVzIHV0aWxpc8Opcy5gLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaXBzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLk5FVCAoQyMpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcyAoUmVsZWFzZSBtYW5hZ2VyKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4geyByZXR1cm4gKDxCYWNrVG9TY2hvb2wgY29udGVudD17Y29udGVudH0gLz4pIH0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYUdyYWR1YXRpb25DYXAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXRvdXIgw6AgbFxcJ8OpY29sZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXM6ICdmw6l2ci4gMjAxNiAtIGTDqWMuIDIwMTgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHsgcmV0dXJuICg8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+KSB9LFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFEbmEsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnR1NLLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgcHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnbm92LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRmluOiAnZsOpdnIuIDIwMTcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgUGFydGljaXBlciDDoCBsYSBwcm9kdWN0aW9uIGR1IHZhY2NpbiAqYW50aS1ncmlwcGFsKiwgbW9uIHLDtGxlIMOpdGFpdCBkJ29ww6lyZXIgbGVzIHN5c3TDqG1lcyBkZSByZW1wbGlzc2FnZSBlbiBmaW9sZSBvdSBlbiBmbGFjb24uXHJcbiAgICAgICAgICAgICAgICAgICAgSmUgY29udHJpYnVhaXMgYXVzc2kgYWN0aXZlbWVudCDDoCBsYSBmb3JtYXRpb24gZGVzIG5vdXZlYXV4IGVtcGxvecOpcy5gLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7IHJldHVybiAoPEpvYiBjb250ZW50PXtjb250ZW50fSAvPikgfSxcclxuICAgICAgICAgICAgICAgIGljb246IGZhRG5hLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0JEIERpYWdub3N0aWNzLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gYXUgY29udHLDtGxlIGRlIGxhIHF1YWxpdMOpJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICdqYW52LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRmluOiAnb2N0LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEVmZmVjdHVlciBsZXMgYW5hbHlzZXMgZGUgbGFib3JhdG9pcmUgcGVybWV0dGFudCBkZSB2YWxpZGVyIGxhIHF1YWxpdMOpIGR1IHByb2R1aXQgw6AgdG91dGVzIGxlcyDDqXRhcGVzIGRlIHNhIHByw6lwYXJhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICBDZXMgZG9ubsOpZXMgw6l0YWllbnQgZW5zdWl0ZSBjb21waWzDqWVzIGV0IHByw6lzZW50w6llcyDDoCBsJ2Fzc3VyYW5jZSBxdWFsaXTDqSBzb3VzIGZvcm1lIGRlIHJhcHBvcnQuYCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4geyByZXR1cm4gKDxKb2IgY29udGVudD17Y29udGVudH0gLz4pIH0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYURuYSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdGZWxkYW4sIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBkZSBsYWJvcmF0b2lyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnbWFpIDIwMTInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVGaW46ICdqYW52LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYE1vbiByw7RsZSBkYW5zIGNldHRlIGVudHJlcHJpc2Ugw6l0YWl0IHBsdXTDtHQgZGl2ZXJzaWZpw6kuIFByaW5jaXBhbGVtZW50LCBqZSBwYXJ0aWNpcGFpcyBhdXggYWN0aXZpdMOpcyBkZSBwcm9kdWN0aW9uIGV0IGF1eCBwcm9qZXRzIGRlIFImRC4gXHJcbiAgICAgICAgICAgICAgICAgICAgTWFpcyBqJ2Fzc3VyYWlzIGF1c3NpIGwnYXBwcm92aXNpb25uZW1lbnQgZGVzIG1hdGnDqHJlcyBwcmVtacOocmVzIGFpbnNpIHF1ZSBsYSBsaXZyYWlzb24gZGVzIGNvbW1hbmRlcyBhdXggY2xpZW50cy5gLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVkdWNhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmVkdWNhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5lZHVjYXRpb24ubmFtZSxcclxuICAgIGNvdXJzZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlJyxcclxuICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIGRlIFNhaW50ZS1Gb3ksIFF1w6liZWMnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2VydGlmaWNhdCBlbiBiaW90ZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ1VuaXZlcnNpdMOpIExhdmFsLCBRdcOpYmVjICcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGJpb8OpY29sb2dpZScsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBTYWludC1MYXVyZW50LCBNb250csOpYWwnLFxyXG4gICAgICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2VydGZpY2F0aW9uc190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5uYW1lLFxyXG4gICAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdHJlOiAnTWljcm9zb2Z0IENlcnRpZmllZDogQXp1cmUgRnVuZGFtZW50YWxzJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcvYXp1cmUtZnVuZGFtZW50YWxzLnBuZycsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9sZWFybi9jZXJ0aWZpY2F0aW9ucy9henVyZS1mdW5kYW1lbnRhbHMnXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wcm9qZWN0cy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcm9qZWN0cy5uYW1lLFxyXG4gICAgcHJvamVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1vbiBDViB3ZWJcIixcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcIi9waG90b1BlcnNvLnBuZ1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYE1vbiBwcmVtaWVyIHByb2pldCBwZXJzb25uZWwhIElsIG0nYSBwZXJtaXMgZGUgbWV0dHJlIGVuIHByYXRpcXVlIFJlYWN0IGV0IGQnYWNxdcOpcmlyIHBsdXNpZXVycyBjb21ww6l0ZW5jZXMgZW4gcHJvZ3JhbW1hdGlvbiBmcm9udC1lbmQuXHJcbiAgICAgICAgICAgIExlIGRlc2lnbiByZXN0ZSBzaW1wbGlzdGUsIHBldXQtw6p0cmUgcXVlIGNlIHNlcmEgdW5lIGFtw6lsaW9yYXRpb24gw6AgdmVuaXIhYCxcclxuICAgICAgICAgICAgY29kZVNvdXJjZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkL2Nob3VpbmFyZGRhdmlkLmdpdGh1Yi5pb1wiLFxyXG4gICAgICAgICAgICBjaGlwczogW1xyXG4gICAgICAgICAgICAgICAgXCJSZWFjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJOZXh0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICBcIk1hdGVyaWFsLVVJXCJcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcmVzdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5pbnRlcmVzdC5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5pbnRlcmVzdC5uYW1lLFxyXG4gICAgaW50ZXJlc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BsZWluIGFpcicsXHJcbiAgICAgICAgICAgIGljb246IGZhTGVhZixcclxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZScsXHJcbiAgICAgICAgICAgIGljb246IGZhTWljcm9zY29wZSxcclxuICAgICAgICAgICAgY29sb3I6ICcjMzk2M2UzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHb2xmJyxcclxuICAgICAgICAgICAgaWNvbjogZmFHb2xmQmFsbCxcclxuICAgICAgICAgICAgY29sb3I6ICcjYzVjOGM5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaW7DqW1hJyxcclxuICAgICAgICAgICAgaWNvbjogZmFUdixcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSG9ja2V5JyxcclxuICAgICAgICAgICAgaWNvbjogZmFIb2NrZXlQdWNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCcmFzc2FnZSBkZSBiacOocmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUZsYXNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiM2I4YzcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xlY3R1cmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUJvb2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2JmNTAzOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYVJvYm90LFxyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZSBmaWN0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW5kU3BvY2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRHcmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSmV1eCBkZSBzb2Npw6l0w6knLFxyXG4gICAgICAgICAgICBpY29uOiBmYUNoZXNzS25pZ2h0LFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDdWlzaW5lJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW1idXJnZXIsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2E2OGE2ZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTcOpZGl0YXRpb24nLFxyXG4gICAgICAgICAgICBpY29uOiBmYVlpbllhbmcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==