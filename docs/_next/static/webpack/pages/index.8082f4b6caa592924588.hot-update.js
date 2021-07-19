webpackHotUpdate_N_E("pages/index",{

/***/ "./labels/fr2.js":
/*!***********************!*\
  !*** ./labels/fr2.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/career/content/job */ "./components/sections/career/content/job.js");
/* harmony import */ var _components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections/career/content/backToSchool */ "./components/sections/career/content/backToSchool.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\labels\\fr2.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { domaines, contentType } from '../sections/career/content/domaines';





var labels = function labels() {
  _s();

  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
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
            lineNumber: 151,
            columnNumber: 52
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
        description: "En tant que d\xE9veloppeur fullstack, je participe au d\xE9veloppement de l'application <a href=\"https://www.dcicristalnet.com/\">Cristal-Net</a> au sein d'une \xE9quipe agile. \n                             Celle-ci permet au personnel soigant de g\xE9rer les donn\xE9es relatives aux visites des patients dans les hopitaux.",
        chips: ['.NET (C#/vb.net)', 'Javascript', 'SQL', 'JQuery', 'Kendo', 'Azure DevOps']
      }
    }, {
      render: function render(content) {
        return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: content,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 52
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
        description: "Assurer un support aux utilisateurs des applications corporatives dans le d\xE9partement de la comptabilit\xE9 et fiscalit\xE9. \n                             Cela consistait \xE0 corriger les anomalies, mais aussi \xE0 participer aux \xE9volutions des syst\xE8mes utilis\xE9s.",
        chips: ['.NET (C#)', 'Javascript', 'SQL', 'Azure DevOps (Release manager)']
      }
    }, {
      render: function render(content) {
        return __jsx(_components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_3__["default"], {
          content: content,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 52
          }
        });
      },
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"],
      style: {
        background: theme.palette.success.main
      },
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
            lineNumber: 204,
            columnNumber: 52
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
        description: "Participer \xE0 la production du vaccin *anti-grippal*, mon r\xF4le \xE9tait d'op\xE9rer les syst\xE8mes de remplissage en fiole ou en flacon.\n                             Je contribuais aussi activement \xE0 la formation des nouveaux employ\xE9s."
      }
    }, {
      render: function render(content) {
        return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: content,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 52
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
        description: "Effectuer les analyses de laboratoire permettant de valider la qualit\xE9 du produit \xE0 toutes les \xE9tapes de sa pr\xE9paration.\n                             Ces donn\xE9es \xE9taient ensuite compil\xE9es et pr\xE9sent\xE9es \xE0 l'assurance qualit\xE9 sous forme de rapport."
      }
    }, {
      render: function render(content) {
        return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: content,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 52
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
        description: "Mon r\xF4le dans cette entreprise \xE9tait plut\xF4t diversifi\xE9. Principalement, je participais aux activit\xE9s de production et aux projets de R&D. \n                             Mais j'assurais aussi l'approvisionnement des mati\xE8res premi\xE8res ainsi que la livraison des commandes aux clients."
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
  return {
    header_text: header_text,
    footer_text: footer_text,
    presentation_text: presentation_text,
    skills_text: skills_text,
    parcours_text: parcours_text,
    education_text: education_text,
    certfications_text: certfications_text,
    projects_text: projects_text,
    interests_text: interests_text
  };
};

_s(labels, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"]];
});

/* harmony default export */ __webpack_exports__["default"] = (labels);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyMi5qcyJdLCJuYW1lcyI6WyJsYWJlbHMiLCJ0aGVtZSIsInVzZVRoZW1lIiwic2VjdGlvbnMiLCJwcmVzZW50YXRpb24iLCJpZCIsIm5hbWUiLCJjb21wZXRlbmNlcyIsInBhcmNvdXJzIiwiZWR1Y2F0aW9uIiwiY2VydGlmaWNhdGlvbiIsInByb2plY3RzIiwiaW50ZXJlc3QiLCJoZWFkZXJfdGV4dCIsImZvb3Rlcl90ZXh0IiwiZW1haWwiLCJwcmVzZW50YXRpb25fdGV4dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJza2lsbHNfdGV4dCIsImNoaWxkcmVuIiwicGFyY291cnNfdGV4dCIsImVtcGxvaXMiLCJyZW5kZXIiLCJjb250ZW50IiwiaWNvbiIsImZhTGFwdG9wQ29kZSIsImNvbG9yIiwiZW1wbG95ZXVyIiwicG9zdGUiLCJkYXRlRGVidXQiLCJkYXRlRmluIiwiY2hpcHMiLCJmYUdyYWR1YXRpb25DYXAiLCJzdHlsZSIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic3VjY2VzcyIsIm1haW4iLCJkYXRlcyIsImZhRG5hIiwiZWR1Y2F0aW9uX3RleHQiLCJjb3Vyc2VzIiwic2Nob29sIiwieWVhciIsImNlcnRmaWNhdGlvbnNfdGV4dCIsImNlcnRpZmljYXRpb25zIiwidGl0cmUiLCJpbWFnZSIsImxpbmsiLCJwcm9qZWN0c190ZXh0IiwiaW1hZ2VMaW5rIiwiY29kZVNvdXJjZUxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImZhTGVhZiIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7O0FB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QUUsU0FEWDtBQUVJUSxVQUFJLEVBQUVvQyx3RUFGVjtBQUdJbEMsV0FBSyxFQUFFO0FBSFgsS0EvQk8sRUFvQ1A7QUFDSVYsV0FBSyxFQUFFLGFBRFg7QUFFSVEsVUFBSSxFQUFFcUMseUVBRlY7QUFHSW5DLFdBQUssRUFBRTtBQUhYLEtBcENPLEVBeUNQO0FBQ0lWLFdBQUssRUFBRSxpQkFEWDtBQUVJUSxVQUFJLEVBQUVzQyw2RUFGVjtBQUdJcEMsV0FBSyxFQUFFO0FBSFgsS0F6Q08sRUE4Q1A7QUFDSVYsV0FBSyxFQUFFLGlCQURYO0FBRUlRLFVBQUksRUFBRXVDLCtFQUZWO0FBR0lyQyxXQUFLLEVBQUU7QUFIWCxLQTlDTyxFQW1EUDtBQUNJVixXQUFLLEVBQUUsU0FEWDtBQUVJUSxVQUFJLEVBQUV3Qyw2RUFGVjtBQUdJdEMsV0FBSyxFQUFFO0FBSFgsS0FuRE8sRUF3RFA7QUFDSVYsV0FBSyxFQUFFLFlBRFg7QUFFSVEsVUFBSSxFQUFFeUMsMkVBRlY7QUFHSXZDLFdBQUssRUFBRTtBQUhYLEtBeERPO0FBSFEsR0FBdkI7QUFtRUEsU0FDSTtBQUNJZCxlQUFXLEVBQUVBLFdBRGpCO0FBRUlDLGVBQVcsRUFBRUEsV0FGakI7QUFHSUUscUJBQWlCLEVBQUVBLGlCQUh2QjtBQUlJRyxlQUFXLEVBQUVBLFdBSmpCO0FBS0lFLGlCQUFhLEVBQUVBLGFBTG5CO0FBTUlvQixrQkFBYyxFQUFFQSxjQU5wQjtBQU9JSSxzQkFBa0IsRUFBRUEsa0JBUHhCO0FBUUlLLGlCQUFhLEVBQUVBLGFBUm5CO0FBU0lHLGtCQUFjLEVBQUVBO0FBVHBCLEdBREo7QUFhSCxDQXRYRDs7R0FBTXJELE07VUFFWUUsaUU7OztBQXVYSEYscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA4MmY0YjZjYWE1OTI5MjQ1ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhTGVhZiwgZmFNaWNyb3Njb3BlLCBmYUdvbGZCYWxsLCBmYVR2LCBmYUJvb2ssIGZhSGFuZFNwb2NrLCBmYUNoZXNzS25pZ2h0LCBmYUhhbWJ1cmdlciwgZmFGbGFzaywgZmFIb2NrZXlQdWNrLCBmYVJvYm90LCBmYVlpbllhbmcsIGZhQ29kZSwgZmFEbmEsIGZhR3JhZHVhdGlvbkNhcCwgZmFMYXB0b3BDb2RlLCBmYUNvZGVCcmFuY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbi8vIGltcG9ydCB7IGRvbWFpbmVzLCBjb250ZW50VHlwZSB9IGZyb20gJy4uL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2RvbWFpbmVzJztcclxuaW1wb3J0IEpvYiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2pvYic7XHJcbmltcG9ydCBCYWNrVG9TY2hvb2wgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9iYWNrVG9TY2hvb2wnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBsYWJlbHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIGNvbnN0IHNlY3Rpb25zID0ge1xyXG4gICAgICAgIHByZXNlbnRhdGlvbjoge1xyXG4gICAgICAgICAgICBpZDogJ3ByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdQcsOpc2VudGF0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGV0ZW5jZXM6IHtcclxuICAgICAgICAgICAgaWQ6ICdjb21wZXRlbmNlcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21ww6l0ZW5jZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJjb3Vyczoge1xyXG4gICAgICAgICAgICBpZDogJ3BhcmNvdXJzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1BhcmNvdXJzIGRlIENhcnJpw6hyZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVkdWNhdGlvbjoge1xyXG4gICAgICAgICAgICBpZDogJ2VkdWNhdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICfDiWR1Y2F0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2VydGlmaWNhdGlvbjoge1xyXG4gICAgICAgICAgICBpZDogJ2NlcnRpZmljYXRpb24nLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ2VydGlmaWNhdGlvbnMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9qZWN0czoge1xyXG4gICAgICAgICAgICBpZDogJ3Byb2plY3RzJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Byb2pldHMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcmVzdDoge1xyXG4gICAgICAgICAgICBpZDogJ2ludGVyZXN0JyxcclxuICAgICAgICAgICAgbmFtZTogJ0ludMOpcsOqdHMnXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlcl90ZXh0ID0ge1xyXG4gICAgICAgIGlkOiAnaGVhZGVyJyxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb290ZXJfdGV4dCA9IHtcclxuICAgICAgICBpZDogJ2Zvb3RlcicsXHJcbiAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxyXG4gICAgICAgIGVtYWlsOiBcImNob3VpbmFyZC5kY0BnbWFpbC5jb21cIixcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmVzZW50YXRpb25fdGV4dCA9IHtcclxuICAgICAgICBpZDogc2VjdGlvbnMucHJlc2VudGF0aW9uLmlkLFxyXG4gICAgICAgIHRpdGxlOiBzZWN0aW9ucy5wcmVzZW50YXRpb24ubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgYETDqXZlbG9wcGV1ciB3ZWIgZnVsbC1zdGFjaywgamUgbWFpdHJpc2UgcGx1cyBwYXJ0aWN1bGnDqHJlbWVudCBsJ2Vudmlyb25uZW1lbnQgLk5FVCwgdGFudCBhdSBuaXZlYXUgYmFzZSBkZSBkb25uw6llcyBxdSdhdSBuaXZlYXUgZHUgY29kZS4gXHJcbiAgICAgICAgLi4uLi4uLi4uLi4uLi5cclxuICAgICAgICBQYXNzaW9ubsOpIHBhciBsZXMgdGVjaG5vbG9naWVzLCBqZSBzdWlzIGNvbnN0YW1tZW50IMOgIGxhIHJlY2hlcmNoZSBkJ2FwcHJlbnRpc3NhZ2UgcG91ciBwYXJmYWlyZSBtZXMgY29ubmFpc3NhbmNlIGRhbnMgY2UgZG9tYWluZS5gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzX3RleHQgPSB7XHJcbiAgICAgICAgaWQ6IHNlY3Rpb25zLmNvbXBldGVuY2VzLmlkLFxyXG4gICAgICAgIHRpdGxlOiBzZWN0aW9ucy5jb21wZXRlbmNlcy5uYW1lLFxyXG4gICAgICAgIHNlY3Rpb25zOlxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdUZWNobm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWVzJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5ORVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Jhc2UgZGUgZG9ubsOpZXMgU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSYXBwb3J0IFNTUlMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5ORVQgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2xvdWQgQXp1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05leHRKcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYW5nYWdlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMYW5nYWdlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDIycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmIubmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdKUXVlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0hUTUwvQ1NTJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdvdXRpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnT3V0aWxzJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1Zpc3VhbCBTdHVkaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NRTCBTZXJ2ZXIgTWFuYWdlbWVudCBTdHVkaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnR2l0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvIENvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1Bvc3RtYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdkZXNpZ25zJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rlc2lnbnMgZXQgY29uY2VwdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTVZDJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNVlZNJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdXZWIgQVBJJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTLk8uTC5JLkQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSLkUuUy5ULiBBUEknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnY29tcGxlbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbXBsw6ltZW50YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVGVzdHMgdW5pdGFpcmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNw6l0aG9kZSBhZ2lsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnS2VuZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RBQ1BBQycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJvamV0IGRcXCdlbnZlcmd1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAncGVyc28nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGVyc29ubmVsbGVzJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbW11bmljYXRpb24gYWN0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBdXRvbm9taWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0luaXRpYXRpdmUnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhcmNvdXJzX3RleHQgPSB7XHJcbiAgICAgICAgaWQ6IHNlY3Rpb25zLnBhcmNvdXJzLmlkLFxyXG4gICAgICAgIHRpdGxlOiBzZWN0aW9ucy5wYXJjb3Vycy5uYW1lLFxyXG4gICAgICAgIGVtcGxvaXM6XHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7IHJldHVybiAoPEpvYiBjb250ZW50PXtjb250ZW50fSAvPikgfSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBmYUxhcHRvcENvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0NIVSBkZSBRdcOpYmVjLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGVuIGluZm9ybWF0aXF1ZSAoZMOpdmVsb3BwZXVyKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJ2Fvw7t0IDIwMTknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlRmluOiAnYXVqLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVuIHRhbnQgcXVlIGTDqXZlbG9wcGV1ciBmdWxsc3RhY2ssIGplIHBhcnRpY2lwZSBhdSBkw6l2ZWxvcHBlbWVudCBkZSBsJ2FwcGxpY2F0aW9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZWxsZS1jaSBwZXJtZXQgYXUgcGVyc29ubmVsIHNvaWdhbnQgZGUgZ8OpcmVyIGxlcyBkb25uw6llcyByZWxhdGl2ZXMgYXV4IHZpc2l0ZXMgZGVzIHBhdGllbnRzIGRhbnMgbGVzIGhvcGl0YXV4LmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuTkVUIChDIy92Yi5uZXQpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0pRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0tlbmRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXp1cmUgRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHsgcmV0dXJuICg8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+KSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IGZhTGFwdG9wQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnSW5kdXN0cmllbGxlIEFsbGlhbmNlLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGU6ICdEw6l2ZWxvcHBldXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcgc2VwdC4gMjAxOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGaW46ICcgYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEFzc3VyZXIgdW4gc3VwcG9ydCBhdXggdXRpbGlzYXRldXJzIGRlcyBhcHBsaWNhdGlvbnMgY29ycG9yYXRpdmVzIGRhbnMgbGUgZMOpcGFydGVtZW50IGRlIGxhIGNvbXB0YWJpbGl0w6kgZXQgZmlzY2FsaXTDqS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VsYSBjb25zaXN0YWl0IMOgIGNvcnJpZ2VyIGxlcyBhbm9tYWxpZXMsIG1haXMgYXVzc2kgw6AgcGFydGljaXBlciBhdXggw6l2b2x1dGlvbnMgZGVzIHN5c3TDqG1lcyB1dGlsaXPDqXMuYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5ORVQgKEMjKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMgKFJlbGVhc2UgbWFuYWdlciknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4geyByZXR1cm4gKDxCYWNrVG9TY2hvb2wgY29udGVudD17Y29udGVudH0gLz4pIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogZmFHcmFkdWF0aW9uQ2FwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JldG91ciDDoCBsXFwnw6ljb2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXM6ICdmw6l2ci4gMjAxNiAtIGTDqWMuIDIwMTgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7IHJldHVybiAoPEpvYiBjb250ZW50PXtjb250ZW50fSAvPikgfSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBmYURuYSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdHU0ssIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgcHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJ25vdi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGaW46ICdmw6l2ci4gMjAxNycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFBhcnRpY2lwZXIgw6AgbGEgcHJvZHVjdGlvbiBkdSB2YWNjaW4gKmFudGktZ3JpcHBhbCosIG1vbiByw7RsZSDDqXRhaXQgZCdvcMOpcmVyIGxlcyBzeXN0w6htZXMgZGUgcmVtcGxpc3NhZ2UgZW4gZmlvbGUgb3UgZW4gZmxhY29uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEplIGNvbnRyaWJ1YWlzIGF1c3NpIGFjdGl2ZW1lbnQgw6AgbGEgZm9ybWF0aW9uIGRlcyBub3V2ZWF1eCBlbXBsb3nDqXMuYCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHsgcmV0dXJuICg8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+KSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IGZhRG5hLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0JEIERpYWdub3N0aWNzLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGF1IGNvbnRyw7RsZSBkZSBsYSBxdWFsaXTDqScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJ2phbnYuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlRmluOiAnb2N0LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRWZmZWN0dWVyIGxlcyBhbmFseXNlcyBkZSBsYWJvcmF0b2lyZSBwZXJtZXR0YW50IGRlIHZhbGlkZXIgbGEgcXVhbGl0w6kgZHUgcHJvZHVpdCDDoCB0b3V0ZXMgbGVzIMOpdGFwZXMgZGUgc2EgcHLDqXBhcmF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlcyBkb25uw6llcyDDqXRhaWVudCBlbnN1aXRlIGNvbXBpbMOpZXMgZXQgcHLDqXNlbnTDqWVzIMOgIGwnYXNzdXJhbmNlIHF1YWxpdMOpIHNvdXMgZm9ybWUgZGUgcmFwcG9ydC5gLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4geyByZXR1cm4gKDxKb2IgY29udGVudD17Y29udGVudH0gLz4pIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogZmFEbmEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnRmVsZGFuLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGRlIGxhYm9yYXRvaXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnbWFpIDIwMTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlRmluOiAnamFudi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYE1vbiByw7RsZSBkYW5zIGNldHRlIGVudHJlcHJpc2Ugw6l0YWl0IHBsdXTDtHQgZGl2ZXJzaWZpw6kuIFByaW5jaXBhbGVtZW50LCBqZSBwYXJ0aWNpcGFpcyBhdXggYWN0aXZpdMOpcyBkZSBwcm9kdWN0aW9uIGV0IGF1eCBwcm9qZXRzIGRlIFImRC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFpcyBqJ2Fzc3VyYWlzIGF1c3NpIGwnYXBwcm92aXNpb25uZW1lbnQgZGVzIG1hdGnDqHJlcyBwcmVtacOocmVzIGFpbnNpIHF1ZSBsYSBsaXZyYWlzb24gZGVzIGNvbW1hbmRlcyBhdXggY2xpZW50cy5gLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZHVjYXRpb25fdGV4dCA9IHtcclxuICAgICAgICBpZDogc2VjdGlvbnMuZWR1Y2F0aW9uLmlkLFxyXG4gICAgICAgIHRpdGxlOiBzZWN0aW9ucy5lZHVjYXRpb24ubmFtZSxcclxuICAgICAgICBjb3Vyc2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ0PDqWdlcCBkZSBTYWludGUtRm95LCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDE4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDZXJ0aWZpY2F0IGVuIGJpb3RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgICAgIHNjaG9vbDogJ1VuaXZlcnNpdMOpIExhdmFsLCBRdcOpYmVjICcsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxMicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBiaW/DqWNvbG9naWUnLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIFNhaW50LUxhdXJlbnQsIE1vbnRyw6lhbCcsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2VydGZpY2F0aW9uc190ZXh0ID0ge1xyXG4gICAgICAgIGlkOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLmlkLFxyXG4gICAgICAgIHRpdGxlOiBzZWN0aW9ucy5jZXJ0aWZpY2F0aW9uLm5hbWUsXHJcbiAgICAgICAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0cmU6ICdNaWNyb3NvZnQgQ2VydGlmaWVkOiBBenVyZSBGdW5kYW1lbnRhbHMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcvYXp1cmUtZnVuZGFtZW50YWxzLnBuZycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvbGVhcm4vY2VydGlmaWNhdGlvbnMvYXp1cmUtZnVuZGFtZW50YWxzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3RzX3RleHQgPSB7XHJcbiAgICAgICAgaWQ6IHNlY3Rpb25zLnByb2plY3RzLmlkLFxyXG4gICAgICAgIHRpdGxlOiBzZWN0aW9ucy5wcm9qZWN0cy5uYW1lLFxyXG4gICAgICAgIHByb2plY3RzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1vbiBDViB3ZWJcIixcclxuICAgICAgICAgICAgICAgIGltYWdlTGluazogXCIvcGhvdG9QZXJzby5wbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTW9uIHByZW1pZXIgcHJvamV0IHBlcnNvbm5lbCEgSWwgbSdhIHBlcm1pcyBkZSBtZXR0cmUgZW4gcHJhdGlxdWUgUmVhY3QgZXQgZCdhY3F1w6lyaXIgcGx1c2lldXJzIGNvbXDDqXRlbmNlcyBlbiBwcm9ncmFtbWF0aW9uIGZyb250LWVuZC5cclxuICAgICAgICAgICAgTGUgZGVzaWduIHJlc3RlIHNpbXBsaXN0ZSwgcGV1dC3DqnRyZSBxdWUgY2Ugc2VyYSB1bmUgYW3DqWxpb3JhdGlvbiDDoCB2ZW5pciFgLFxyXG4gICAgICAgICAgICAgICAgY29kZVNvdXJjZUxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nob3VpbmFyZERhdmlkL2Nob3VpbmFyZGRhdmlkLmdpdGh1Yi5pb1wiLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIlJlYWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOZXh0LmpzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNYXRlcmlhbC1VSVwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGludGVyZXN0c190ZXh0ID0ge1xyXG4gICAgICAgIGlkOiBzZWN0aW9ucy5pbnRlcmVzdC5pZCxcclxuICAgICAgICB0aXRsZTogc2VjdGlvbnMuaW50ZXJlc3QubmFtZSxcclxuICAgICAgICBpbnRlcmVzdHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVpbiBhaXInLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFMZWFmLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYU1pY3Jvc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzOTYzZTMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dvbGYnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFHb2xmQmFsbCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2M1YzhjOScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2luw6ltYScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYVR2LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9ja2V5JyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhSG9ja2V5UHVjayxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0JyYXNzYWdlIGRlIGJpw6hyZScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYUZsYXNrLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjYjNiOGM3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMZWN0dXJlJyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhQm9vayxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2JmNTAzOScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFSb2JvdCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlIGZpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFIYW5kU3BvY2ssXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2xpZ2h0R3JlZW4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0pldXggZGUgc29jacOpdMOpJyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhQ2hlc3NLbmlnaHQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDdWlzaW5lJyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhSGFtYnVyZ2VyLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjYTY4YTZkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNw6lkaXRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYVlpbllhbmcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcl90ZXh0OiBoZWFkZXJfdGV4dCxcclxuICAgICAgICAgICAgZm9vdGVyX3RleHQ6IGZvb3Rlcl90ZXh0LFxyXG4gICAgICAgICAgICBwcmVzZW50YXRpb25fdGV4dDogcHJlc2VudGF0aW9uX3RleHQsXHJcbiAgICAgICAgICAgIHNraWxsc190ZXh0OiBza2lsbHNfdGV4dCxcclxuICAgICAgICAgICAgcGFyY291cnNfdGV4dDogcGFyY291cnNfdGV4dCxcclxuICAgICAgICAgICAgZWR1Y2F0aW9uX3RleHQ6IGVkdWNhdGlvbl90ZXh0LFxyXG4gICAgICAgICAgICBjZXJ0ZmljYXRpb25zX3RleHQ6IGNlcnRmaWNhdGlvbnNfdGV4dCxcclxuICAgICAgICAgICAgcHJvamVjdHNfdGV4dDogcHJvamVjdHNfdGV4dCxcclxuICAgICAgICAgICAgaW50ZXJlc3RzX3RleHQ6IGludGVyZXN0c190ZXh0LFxyXG4gICAgICAgIH1cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhYmVscyJdLCJzb3VyY2VSb290IjoiIn0=