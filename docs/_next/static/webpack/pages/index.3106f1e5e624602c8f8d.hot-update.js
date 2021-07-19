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





var labels2 = function labels2() {
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

_s(labels2, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"]];
});

/* harmony default export */ __webpack_exports__["default"] = (labels2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyMi5qcyJdLCJuYW1lcyI6WyJsYWJlbHMyIiwidGhlbWUiLCJ1c2VUaGVtZSIsInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwicHJlc2VudGF0aW9uX3RleHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2tpbGxzX3RleHQiLCJjaGlsZHJlbiIsInBhcmNvdXJzX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImljb24iLCJmYUxhcHRvcENvZGUiLCJjb2xvciIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiZmFHcmFkdWF0aW9uQ2FwIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsInN1Y2Nlc3MiLCJtYWluIiwiZGF0ZXMiLCJmYURuYSIsImVkdWNhdGlvbl90ZXh0IiwiY291cnNlcyIsInNjaG9vbCIsInllYXIiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsInRpdHJlIiwiaW1hZ2UiLCJsaW5rIiwicHJvamVjdHNfdGV4dCIsImltYWdlTGluayIsImNvZGVTb3VyY2VMaW5rIiwiaW50ZXJlc3RzX3RleHQiLCJpbnRlcmVzdHMiLCJmYUxlYWYiLCJmYU1pY3Jvc2NvcGUiLCJmYUdvbGZCYWxsIiwiZmFUdiIsImZhSG9ja2V5UHVjayIsImZhRmxhc2siLCJmYUJvb2siLCJmYVJvYm90IiwiZmFIYW5kU3BvY2siLCJmYUNoZXNzS25pZ2h0IiwiZmFIYW1idXJnZXIiLCJmYVlpbllhbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFbEIsTUFBTUMsS0FBSyxHQUFHQyx5RUFBUSxFQUF0QjtBQUVBLE1BQU1DLFFBQVEsR0FBRztBQUNiQyxnQkFBWSxFQUFFO0FBQ1ZDLFFBQUUsRUFBRSxjQURNO0FBRVZDLFVBQUksRUFBRTtBQUZJLEtBREQ7QUFLYkMsZUFBVyxFQUFFO0FBQ1RGLFFBQUUsRUFBRSxhQURLO0FBRVRDLFVBQUksRUFBRTtBQUZHLEtBTEE7QUFTYkUsWUFBUSxFQUFFO0FBQ05ILFFBQUUsRUFBRSxVQURFO0FBRU5DLFVBQUksRUFBRTtBQUZBLEtBVEc7QUFhYkcsYUFBUyxFQUFFO0FBQ1BKLFFBQUUsRUFBRSxXQURHO0FBRVBDLFVBQUksRUFBRTtBQUZDLEtBYkU7QUFpQmJJLGlCQUFhLEVBQUU7QUFDWEwsUUFBRSxFQUFFLGVBRE87QUFFWEMsVUFBSSxFQUFFO0FBRkssS0FqQkY7QUFxQmJLLFlBQVEsRUFBRTtBQUNOTixRQUFFLEVBQUUsVUFERTtBQUVOQyxVQUFJLEVBQUU7QUFGQSxLQXJCRztBQXlCYk0sWUFBUSxFQUFFO0FBQ05QLFFBQUUsRUFBRSxVQURFO0FBRU5DLFVBQUksRUFBRTtBQUZBO0FBekJHLEdBQWpCO0FBaUNBLE1BQU1PLFdBQVcsR0FBRztBQUNoQlIsTUFBRSxFQUFFO0FBRFksR0FBcEI7QUFJQSxNQUFNUyxXQUFXLEdBQUc7QUFDaEJULE1BQUUsRUFBRSxRQURZO0FBRWhCRixZQUFRLEVBQUVBLFFBRk07QUFHaEJZLFNBQUssRUFBRTtBQUhTLEdBQXBCO0FBTUEsTUFBTUMsaUJBQWlCLEdBQUc7QUFDdEJYLE1BQUUsRUFBRUYsUUFBUSxDQUFDQyxZQUFULENBQXNCQyxFQURKO0FBRXRCWSxTQUFLLEVBQUVkLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQkUsSUFGUDtBQUd0QlksZUFBVztBQUhXLEdBQTFCO0FBU0EsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCZCxNQUFFLEVBQUVGLFFBQVEsQ0FBQ0ksV0FBVCxDQUFxQkYsRUFEVDtBQUVoQlksU0FBSyxFQUFFZCxRQUFRLENBQUNJLFdBQVQsQ0FBcUJELElBRlo7QUFHaEJILFlBQVEsRUFDSixDQUNJO0FBQ0lFLFFBQUUsRUFBRSxRQURSO0FBRUlZLFdBQUssRUFBRSxjQUZYO0FBR0lHLGNBQVEsRUFDSixDQUNJLE1BREosRUFFSSxxQkFGSixFQUdJLGNBSEosRUFJSSxXQUpKLEVBS0ksYUFMSixFQU1JLFFBTko7QUFKUixLQURKLEVBY0k7QUFDSWYsUUFBRSxFQUFFLFVBRFI7QUFFSVksV0FBSyxFQUFFLFVBRlg7QUFHSUcsY0FBUSxFQUNKLENBQ0ksSUFESixFQUVJLFFBRkosRUFHSSxZQUhKLEVBSUksUUFKSixFQUtJLFVBTEosRUFNSSxPQU5KO0FBSlIsS0FkSixFQTJCSTtBQUNJZixRQUFFLEVBQUUsUUFEUjtBQUVJWSxXQUFLLEVBQUUsUUFGWDtBQUdJRyxjQUFRLEVBQ0osQ0FDSSxlQURKLEVBRUksOEJBRkosRUFHSSxjQUhKLEVBSUksS0FKSixFQUtJLG9CQUxKLEVBTUksU0FOSjtBQUpSLEtBM0JKLEVBd0NJO0FBQ0lmLFFBQUUsRUFBRSxTQURSO0FBRUlZLFdBQUssRUFBRSxxQkFGWDtBQUdJRyxjQUFRLEVBQ0osQ0FDSSxLQURKLEVBRUksTUFGSixFQUdJLFNBSEosRUFJSSxZQUpKLEVBS0ksY0FMSjtBQUpSLEtBeENKLEVBb0RJO0FBQ0lmLFFBQUUsRUFBRSxpQkFEUjtBQUVJWSxXQUFLLEVBQUUsaUJBRlg7QUFHSUcsY0FBUSxFQUNKLENBQ0ksaUJBREosRUFFSSxlQUZKLEVBR0ksT0FISixFQUlJLFFBSkosRUFLSSxxQkFMSjtBQUpSLEtBcERKLEVBZ0VJO0FBQ0lmLFFBQUUsRUFBRSxPQURSO0FBRUlZLFdBQUssRUFBRSxjQUZYO0FBR0lHLGNBQVEsRUFDSixDQUNJLHNCQURKLEVBRUksV0FGSixFQUdJLFlBSEo7QUFKUixLQWhFSjtBQUpZLEdBQXBCO0FBa0ZBLE1BQU1DLGFBQWEsR0FBRztBQUNsQmhCLE1BQUUsRUFBRUYsUUFBUSxDQUFDSyxRQUFULENBQWtCSCxFQURKO0FBRWxCWSxTQUFLLEVBQUVkLFFBQVEsQ0FBQ0ssUUFBVCxDQUFrQkYsSUFGUDtBQUdsQmdCLFdBQU8sRUFDSCxDQUNJO0FBQ0lDLFlBQU0sRUFBRSxnQkFBQ0MsT0FBRCxFQUFhO0FBQUUsZUFBUSxNQUFDLCtFQUFEO0FBQUssaUJBQU8sRUFBRUEsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFBb0MsT0FEL0Q7QUFFSUMsVUFBSSxFQUFFQyw4RUFGVjtBQUdJQyxXQUFLLEVBQUUsU0FIWDtBQUlJSCxhQUFPLEVBQUU7QUFDTEksaUJBQVMsRUFBRSx1QkFETjtBQUVMQyxhQUFLLEVBQUUsMENBRkY7QUFHTEMsaUJBQVMsRUFBRSxXQUhOO0FBSUxDLGVBQU8sRUFBRSxNQUpKO0FBS0xiLG1CQUFXLDBVQUxOO0FBUUxjLGFBQUssRUFDRCxDQUNJLGtCQURKLEVBRUksWUFGSixFQUdJLEtBSEosRUFJSSxRQUpKLEVBS0ksT0FMSixFQU1JLGNBTko7QUFUQztBQUpiLEtBREosRUF3Qkk7QUFDSVQsWUFBTSxFQUFFLGdCQUFDQyxPQUFELEVBQWE7QUFBRSxlQUFRLE1BQUMsK0VBQUQ7QUFBSyxpQkFBTyxFQUFFQSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQUFvQyxPQUQvRDtBQUVJQyxVQUFJLEVBQUVDLDhFQUZWO0FBR0lDLFdBQUssRUFBRSxTQUhYO0FBSUlILGFBQU8sRUFBRTtBQUNMSSxpQkFBUyxFQUFFLCtCQUROO0FBRUxDLGFBQUssRUFBRSxhQUZGO0FBR0xDLGlCQUFTLEVBQUUsYUFITjtBQUlMQyxlQUFPLEVBQUUsWUFKSjtBQUtMYixtQkFBVyx5UkFMTjtBQVFMYyxhQUFLLEVBQ0QsQ0FDSSxXQURKLEVBRUksWUFGSixFQUdJLEtBSEosRUFJSSxnQ0FKSjtBQVRDO0FBSmIsS0F4QkosRUE2Q0k7QUFDSVQsWUFBTSxFQUFFLGdCQUFDQyxPQUFELEVBQWE7QUFBRSxlQUFRLE1BQUMsd0ZBQUQ7QUFBYyxpQkFBTyxFQUFFQSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFBNkMsT0FEeEU7QUFFSUMsVUFBSSxFQUFFUSxpRkFGVjtBQUdJQyxXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRWxDLEtBQUssQ0FBQ21DLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkM7QUFBcEMsT0FIWDtBQUlJZCxhQUFPLEVBQUU7QUFDTFAsYUFBSyxFQUFFLG1CQURGO0FBRUxzQixhQUFLLEVBQUU7QUFGRjtBQUpiLEtBN0NKLEVBc0RJO0FBQ0loQixZQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBYTtBQUFFLGVBQVEsTUFBQywrRUFBRDtBQUFLLGlCQUFPLEVBQUVBLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBQW9DLE9BRC9EO0FBRUlDLFVBQUksRUFBRWUsdUVBRlY7QUFHSWIsV0FBSyxFQUFFLFdBSFg7QUFJSUgsYUFBTyxFQUFFO0FBQ0xJLGlCQUFTLEVBQUUsYUFETjtBQUVMQyxhQUFLLEVBQUUsMEJBRkY7QUFHTEMsaUJBQVMsRUFBRSxXQUhOO0FBSUxDLGVBQU8sRUFBRSxZQUpKO0FBS0xiLG1CQUFXO0FBTE47QUFKYixLQXRESixFQW9FSTtBQUNJSyxZQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBYTtBQUFFLGVBQVEsTUFBQywrRUFBRDtBQUFLLGlCQUFPLEVBQUVBLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBQW9DLE9BRC9EO0FBRUlDLFVBQUksRUFBRWUsdUVBRlY7QUFHSWIsV0FBSyxFQUFFLFdBSFg7QUFJSUgsYUFBTyxFQUFFO0FBQ0xJLGlCQUFTLEVBQUUsd0JBRE47QUFFTEMsYUFBSyxFQUFFLHNDQUZGO0FBR0xDLGlCQUFTLEVBQUUsWUFITjtBQUlMQyxlQUFPLEVBQUUsV0FKSjtBQUtMYixtQkFBVztBQUxOO0FBSmIsS0FwRUosRUFrRkk7QUFDSUssWUFBTSxFQUFFLGdCQUFDQyxPQUFELEVBQWE7QUFBRSxlQUFRLE1BQUMsK0VBQUQ7QUFBSyxpQkFBTyxFQUFFQSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQUFvQyxPQUQvRDtBQUVJQyxVQUFJLEVBQUVlLHVFQUZWO0FBR0liLFdBQUssRUFBRSxXQUhYO0FBSUlILGFBQU8sRUFBRTtBQUNMSSxpQkFBUyxFQUFFLGdCQUROO0FBRUxDLGFBQUssRUFBRSwyQkFGRjtBQUdMQyxpQkFBUyxFQUFFLFVBSE47QUFJTEMsZUFBTyxFQUFFLFlBSko7QUFLTGIsbUJBQVc7QUFMTjtBQUpiLEtBbEZKO0FBSmMsR0FBdEI7QUF1R0EsTUFBTXVCLGNBQWMsR0FBRztBQUNuQnBDLE1BQUUsRUFBRUYsUUFBUSxDQUFDTSxTQUFULENBQW1CSixFQURKO0FBRW5CWSxTQUFLLEVBQUVkLFFBQVEsQ0FBQ00sU0FBVCxDQUFtQkgsSUFGUDtBQUduQm9DLFdBQU8sRUFBRSxDQUNMO0FBQ0l6QixXQUFLLEVBQUUsb0NBRFg7QUFFSTBCLFlBQU0sRUFBRSw2QkFGWjtBQUdJQyxVQUFJLEVBQUU7QUFIVixLQURLLEVBTUw7QUFDSTNCLFdBQUssRUFBRSw4QkFEWDtBQUVJMEIsWUFBTSxFQUFFLDJCQUZaO0FBR0lDLFVBQUksRUFBRTtBQUhWLEtBTkssRUFXTDtBQUNJM0IsV0FBSyxFQUFFLGlDQURYO0FBRUkwQixZQUFNLEVBQUUsK0JBRlo7QUFHSUMsVUFBSSxFQUFFO0FBSFYsS0FYSztBQUhVLEdBQXZCO0FBc0JBLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3ZCeEMsTUFBRSxFQUFFRixRQUFRLENBQUNPLGFBQVQsQ0FBdUJMLEVBREo7QUFFdkJZLFNBQUssRUFBRWQsUUFBUSxDQUFDTyxhQUFULENBQXVCSixJQUZQO0FBR3ZCd0Msa0JBQWMsRUFBRSxDQUNaO0FBQ0lDLFdBQUssRUFBRSx5Q0FEWDtBQUVJQyxXQUFLLEVBQUUseUJBRlg7QUFHSUMsVUFBSSxFQUFFO0FBSFYsS0FEWTtBQUhPLEdBQTNCO0FBWUEsTUFBTUMsYUFBYSxHQUFHO0FBQ2xCN0MsTUFBRSxFQUFFRixRQUFRLENBQUNRLFFBQVQsQ0FBa0JOLEVBREo7QUFFbEJZLFNBQUssRUFBRWQsUUFBUSxDQUFDUSxRQUFULENBQWtCTCxJQUZQO0FBR2xCSyxZQUFRLEVBQUUsQ0FDTjtBQUNJTSxXQUFLLEVBQUUsWUFEWDtBQUVJa0MsZUFBUyxFQUFFLGlCQUZmO0FBR0lqQyxpQkFBVyxrUEFIZjtBQUtJa0Msb0JBQWMsRUFBRSw0REFMcEI7QUFNSXBCLFdBQUssRUFBRSxDQUNILE9BREcsRUFFSCxTQUZHLEVBR0gsYUFIRztBQU5YLEtBRE07QUFIUSxHQUF0QjtBQW1CQSxNQUFNcUIsY0FBYyxHQUFHO0FBQ25CaEQsTUFBRSxFQUFFRixRQUFRLENBQUNTLFFBQVQsQ0FBa0JQLEVBREg7QUFFbkJZLFNBQUssRUFBRWQsUUFBUSxDQUFDUyxRQUFULENBQWtCTixJQUZOO0FBR25CZ0QsYUFBUyxFQUFFLENBQ1A7QUFDSXJDLFdBQUssRUFBRSxXQURYO0FBRUlRLFVBQUksRUFBRThCLHdFQUZWO0FBR0k1QixXQUFLLEVBQUU7QUFIWCxLQURPLEVBTVA7QUFDSVYsV0FBSyxFQUFFLFNBRFg7QUFFSVEsVUFBSSxFQUFFK0IsOEVBRlY7QUFHSTdCLFdBQUssRUFBRTtBQUhYLEtBTk8sRUFXUDtBQUNJVixXQUFLLEVBQUUsTUFEWDtBQUVJUSxVQUFJLEVBQUVnQyw0RUFGVjtBQUdJOUIsV0FBSyxFQUFFO0FBSFgsS0FYTyxFQWdCUDtBQUNJVixXQUFLLEVBQUUsUUFEWDtBQUVJUSxVQUFJLEVBQUVpQyxzRUFGVjtBQUdJL0IsV0FBSyxFQUFFO0FBSFgsS0FoQk8sRUFxQlA7QUFDSVYsV0FBSyxFQUFFLFFBRFg7QUFFSVEsVUFBSSxFQUFFa0MsOEVBRlY7QUFHSWhDLFdBQUssRUFBRTtBQUhYLEtBckJPLEVBMEJQO0FBQ0lWLFdBQUssRUFBRSxtQkFEWDtBQUVJUSxVQUFJLEVBQUVtQyx5RUFGVjtBQUdJakMsV0FBSyxFQUFFO0FBSFgsS0ExQk8sRUErQlA7QUFDSVYsV0FBSyxFQUFFLFNBRFg7QUFFSVEsVUFBSSxFQUFFb0Msd0VBRlY7QUFHSWxDLFdBQUssRUFBRTtBQUhYLEtBL0JPLEVBb0NQO0FBQ0lWLFdBQUssRUFBRSxhQURYO0FBRUlRLFVBQUksRUFBRXFDLHlFQUZWO0FBR0luQyxXQUFLLEVBQUU7QUFIWCxLQXBDTyxFQXlDUDtBQUNJVixXQUFLLEVBQUUsaUJBRFg7QUFFSVEsVUFBSSxFQUFFc0MsNkVBRlY7QUFHSXBDLFdBQUssRUFBRTtBQUhYLEtBekNPLEVBOENQO0FBQ0lWLFdBQUssRUFBRSxpQkFEWDtBQUVJUSxVQUFJLEVBQUV1QywrRUFGVjtBQUdJckMsV0FBSyxFQUFFO0FBSFgsS0E5Q08sRUFtRFA7QUFDSVYsV0FBSyxFQUFFLFNBRFg7QUFFSVEsVUFBSSxFQUFFd0MsNkVBRlY7QUFHSXRDLFdBQUssRUFBRTtBQUhYLEtBbkRPLEVBd0RQO0FBQ0lWLFdBQUssRUFBRSxZQURYO0FBRUlRLFVBQUksRUFBRXlDLDJFQUZWO0FBR0l2QyxXQUFLLEVBQUU7QUFIWCxLQXhETztBQUhRLEdBQXZCO0FBbUVBLFNBQ0k7QUFDSWQsZUFBVyxFQUFFQSxXQURqQjtBQUVJQyxlQUFXLEVBQUVBLFdBRmpCO0FBR0lFLHFCQUFpQixFQUFFQSxpQkFIdkI7QUFJSUcsZUFBVyxFQUFFQSxXQUpqQjtBQUtJRSxpQkFBYSxFQUFFQSxhQUxuQjtBQU1Jb0Isa0JBQWMsRUFBRUEsY0FOcEI7QUFPSUksc0JBQWtCLEVBQUVBLGtCQVB4QjtBQVFJSyxpQkFBYSxFQUFFQSxhQVJuQjtBQVNJRyxrQkFBYyxFQUFFQTtBQVRwQixHQURKO0FBYUgsQ0F0WEQ7O0dBQU1yRCxPO1VBRVlFLGlFOzs7QUF1WEhGLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMxMDZmMWU1ZTYyNDYwMmM4ZjhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYUxlYWYsIGZhTWljcm9zY29wZSwgZmFHb2xmQmFsbCwgZmFUdiwgZmFCb29rLCBmYUhhbmRTcG9jaywgZmFDaGVzc0tuaWdodCwgZmFIYW1idXJnZXIsIGZhRmxhc2ssIGZhSG9ja2V5UHVjaywgZmFSb2JvdCwgZmFZaW5ZYW5nLCBmYUNvZGUsIGZhRG5hLCBmYUdyYWR1YXRpb25DYXAsIGZhTGFwdG9wQ29kZSwgZmFDb2RlQnJhbmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG4vLyBpbXBvcnQgeyBkb21haW5lcywgY29udGVudFR5cGUgfSBmcm9tICcuLi9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9kb21haW5lcyc7XHJcbmltcG9ydCBKb2IgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9qb2InO1xyXG5pbXBvcnQgQmFja1RvU2Nob29sIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvYmFja1RvU2Nob29sJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgbGFiZWxzMiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSB7XHJcbiAgICAgICAgcHJlc2VudGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGlkOiAncHJlc2VudGF0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ1Byw6lzZW50YXRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wZXRlbmNlczoge1xyXG4gICAgICAgICAgICBpZDogJ2NvbXBldGVuY2VzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbXDDqXRlbmNlcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmNvdXJzOiB7XHJcbiAgICAgICAgICAgIGlkOiAncGFyY291cnMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUGFyY291cnMgZGUgQ2FycmnDqHJlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWR1Y2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGlkOiAnZWR1Y2F0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ8OJZHVjYXRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGlkOiAnY2VydGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdDZXJ0aWZpY2F0aW9ucydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2plY3RzOiB7XHJcbiAgICAgICAgICAgIGlkOiAncHJvamVjdHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnUHJvamV0cydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVyZXN0OiB7XHJcbiAgICAgICAgICAgIGlkOiAnaW50ZXJlc3QnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSW50w6lyw6p0cydcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyX3RleHQgPSB7XHJcbiAgICAgICAgaWQ6ICdoZWFkZXInLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvb3Rlcl90ZXh0ID0ge1xyXG4gICAgICAgIGlkOiAnZm9vdGVyJyxcclxuICAgICAgICBzZWN0aW9uczogc2VjdGlvbnMsXHJcbiAgICAgICAgZW1haWw6IFwiY2hvdWluYXJkLmRjQGdtYWlsLmNvbVwiLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXNlbnRhdGlvbl90ZXh0ID0ge1xyXG4gICAgICAgIGlkOiBzZWN0aW9ucy5wcmVzZW50YXRpb24uaWQsXHJcbiAgICAgICAgdGl0bGU6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICBgRMOpdmVsb3BwZXVyIHdlYiBmdWxsLXN0YWNrLCBqZSBtYWl0cmlzZSBwbHVzIHBhcnRpY3VsacOocmVtZW50IGwnZW52aXJvbm5lbWVudCAuTkVULCB0YW50IGF1IG5pdmVhdSBiYXNlIGRlIGRvbm7DqWVzIHF1J2F1IG5pdmVhdSBkdSBjb2RlLiBcclxuICAgICAgICAuLi4uLi4uLi4uLi4uLlxyXG4gICAgICAgIFBhc3Npb25uw6kgcGFyIGxlcyB0ZWNobm9sb2dpZXMsIGplIHN1aXMgY29uc3RhbW1lbnQgw6AgbGEgcmVjaGVyY2hlIGQnYXBwcmVudGlzc2FnZSBwb3VyIHBhcmZhaXJlIG1lcyBjb25uYWlzc2FuY2UgZGFucyBjZSBkb21haW5lLmBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBza2lsbHNfdGV4dCA9IHtcclxuICAgICAgICBpZDogc2VjdGlvbnMuY29tcGV0ZW5jZXMuaWQsXHJcbiAgICAgICAgdGl0bGU6IHNlY3Rpb25zLmNvbXBldGVuY2VzLm5hbWUsXHJcbiAgICAgICAgc2VjdGlvbnM6XHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ1RlY2hubycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLk5FVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQmFzZSBkZSBkb25uw6llcyBTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JhcHBvcnQgU1NSUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLk5FVCBDb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDbG91ZCBBenVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTmV4dEpzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0MjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2Yi5uZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0pRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSFRNTC9DU1MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlYWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ291dGlscycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdPdXRpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVmlzdWFsIFN0dWRpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU1FMIFNlcnZlciBNYW5hZ2VtZW50IFN0dWRpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXp1cmUgRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdHaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1Zpc3VhbCBTdHVkaW8gQ29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUG9zdG1hbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2Rlc2lnbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVzaWducyBldCBjb25jZXB0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNVkMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01WVk0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1dlYiBBUEknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1MuTy5MLkkuRC4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1IuRS5TLlQuIEFQSScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdjb21wbGVtZW50YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGzDqW1lbnRhaXJlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUZXN0cyB1bml0YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ03DqXRob2RlIGFnaWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdLZW5kbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnREFDUEFDJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcm9qZXQgZFxcJ2VudmVyZ3VyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdwZXJzbycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQZXJzb25uZWxsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29tbXVuaWNhdGlvbiBhY3RpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dG9ub21pZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW5pdGlhdGl2ZScsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFyY291cnNfdGV4dCA9IHtcclxuICAgICAgICBpZDogc2VjdGlvbnMucGFyY291cnMuaWQsXHJcbiAgICAgICAgdGl0bGU6IHNlY3Rpb25zLnBhcmNvdXJzLm5hbWUsXHJcbiAgICAgICAgZW1wbG9pczpcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHsgcmV0dXJuICg8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+KSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IGZhTGFwdG9wQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQ0hVIGRlIFF1w6liZWMsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZW4gaW5mb3JtYXRpcXVlIChkw6l2ZWxvcHBldXIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIGZ1bGxzdGFjaywgamUgcGFydGljaXBlIGF1IGTDqXZlbG9wcGVtZW50IGRlIGwnYXBwbGljYXRpb24gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmRjaWNyaXN0YWxuZXQuY29tL1wiPkNyaXN0YWwtTmV0PC9hPiBhdSBzZWluIGQndW5lIMOpcXVpcGUgYWdpbGUuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbGxlLWNpIHBlcm1ldCBhdSBwZXJzb25uZWwgc29pZ2FudCBkZSBnw6lyZXIgbGVzIGRvbm7DqWVzIHJlbGF0aXZlcyBhdXggdmlzaXRlcyBkZXMgcGF0aWVudHMgZGFucyBsZXMgaG9waXRhdXguYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5ORVQgKEMjL3ZiLm5ldCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSlF1ZXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnS2VuZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4geyByZXR1cm4gKDxKb2IgY29udGVudD17Y29udGVudH0gLz4pIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogZmFMYXB0b3BDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdJbmR1c3RyaWVsbGUgQWxsaWFuY2UsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZTogJ0TDqXZlbG9wcGV1cicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEZWJ1dDogJyBzZXB0LiAyMDE4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZpbjogJyBhb8O7dCAyMDE5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXNzdXJlciB1biBzdXBwb3J0IGF1eCB1dGlsaXNhdGV1cnMgZGVzIGFwcGxpY2F0aW9ucyBjb3Jwb3JhdGl2ZXMgZGFucyBsZSBkw6lwYXJ0ZW1lbnQgZGUgbGEgY29tcHRhYmlsaXTDqSBldCBmaXNjYWxpdMOpLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZWxhIGNvbnNpc3RhaXQgw6AgY29ycmlnZXIgbGVzIGFub21hbGllcywgbWFpcyBhdXNzaSDDoCBwYXJ0aWNpcGVyIGF1eCDDqXZvbHV0aW9ucyBkZXMgc3lzdMOobWVzIHV0aWxpc8Opcy5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlwczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLk5FVCAoQyMpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F6dXJlIERldk9wcyAoUmVsZWFzZSBtYW5hZ2VyKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7IHJldHVybiAoPEJhY2tUb1NjaG9vbCBjb250ZW50PXtjb250ZW50fSAvPikgfSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBmYUdyYWR1YXRpb25DYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4gfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmV0b3VyIMOgIGxcXCfDqWNvbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlczogJ2bDqXZyLiAyMDE2IC0gZMOpYy4gMjAxOCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHsgcmV0dXJuICg8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+KSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IGZhRG5hLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0dTSywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBkZSBwcm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnbm92LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZpbjogJ2bDqXZyLiAyMDE3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUGFydGljaXBlciDDoCBsYSBwcm9kdWN0aW9uIGR1IHZhY2NpbiAqYW50aS1ncmlwcGFsKiwgbW9uIHLDtGxlIMOpdGFpdCBkJ29ww6lyZXIgbGVzIHN5c3TDqG1lcyBkZSByZW1wbGlzc2FnZSBlbiBmaW9sZSBvdSBlbiBmbGFjb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmUgY29udHJpYnVhaXMgYXVzc2kgYWN0aXZlbWVudCDDoCBsYSBmb3JtYXRpb24gZGVzIG5vdXZlYXV4IGVtcGxvecOpcy5gLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4geyByZXR1cm4gKDxKb2IgY29udGVudD17Y29udGVudH0gLz4pIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogZmFEbmEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQkQgRGlhZ25vc3RpY3MsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gYXUgY29udHLDtGxlIGRlIGxhIHF1YWxpdMOpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnamFudi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGaW46ICdvY3QuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFZmZlY3R1ZXIgbGVzIGFuYWx5c2VzIGRlIGxhYm9yYXRvaXJlIHBlcm1ldHRhbnQgZGUgdmFsaWRlciBsYSBxdWFsaXTDqSBkdSBwcm9kdWl0IMOgIHRvdXRlcyBsZXMgw6l0YXBlcyBkZSBzYSBwcsOpcGFyYXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzIGRvbm7DqWVzIMOpdGFpZW50IGVuc3VpdGUgY29tcGlsw6llcyBldCBwcsOpc2VudMOpZXMgw6AgbCdhc3N1cmFuY2UgcXVhbGl0w6kgc291cyBmb3JtZSBkZSByYXBwb3J0LmAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7IHJldHVybiAoPEpvYiBjb250ZW50PXtjb250ZW50fSAvPikgfSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBmYURuYSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdGZWxkYW4sIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgbGFib3JhdG9pcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICdtYWkgMjAxMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGaW46ICdqYW52LiAyMDE0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTW9uIHLDtGxlIGRhbnMgY2V0dGUgZW50cmVwcmlzZSDDqXRhaXQgcGx1dMO0dCBkaXZlcnNpZmnDqS4gUHJpbmNpcGFsZW1lbnQsIGplIHBhcnRpY2lwYWlzIGF1eCBhY3Rpdml0w6lzIGRlIHByb2R1Y3Rpb24gZXQgYXV4IHByb2pldHMgZGUgUiZELiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWlzIGonYXNzdXJhaXMgYXVzc2kgbCdhcHByb3Zpc2lvbm5lbWVudCBkZXMgbWF0acOocmVzIHByZW1pw6hyZXMgYWluc2kgcXVlIGxhIGxpdnJhaXNvbiBkZXMgY29tbWFuZGVzIGF1eCBjbGllbnRzLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkdWNhdGlvbl90ZXh0ID0ge1xyXG4gICAgICAgIGlkOiBzZWN0aW9ucy5lZHVjYXRpb24uaWQsXHJcbiAgICAgICAgdGl0bGU6IHNlY3Rpb25zLmVkdWNhdGlvbi5uYW1lLFxyXG4gICAgICAgIGNvdXJzZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWUnLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAnQ8OpZ2VwIGRlIFNhaW50ZS1Gb3ksIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJzIwMTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NlcnRpZmljYXQgZW4gYmlvdGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICAgICAgc2Nob29sOiAnVW5pdmVyc2l0w6kgTGF2YWwsIFF1w6liZWMgJyxcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDEyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGJpb8OpY29sb2dpZScsXHJcbiAgICAgICAgICAgICAgICBzY2hvb2w6ICdDw6lnZXAgU2FpbnQtTGF1cmVudCwgTW9udHLDqWFsJyxcclxuICAgICAgICAgICAgICAgIHllYXI6ICcyMDEwJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZXJ0ZmljYXRpb25zX3RleHQgPSB7XHJcbiAgICAgICAgaWQ6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24uaWQsXHJcbiAgICAgICAgdGl0bGU6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24ubmFtZSxcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRyZTogJ01pY3Jvc29mdCBDZXJ0aWZpZWQ6IEF6dXJlIEZ1bmRhbWVudGFscycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJy9henVyZS1mdW5kYW1lbnRhbHMucG5nJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9sZWFybi9jZXJ0aWZpY2F0aW9ucy9henVyZS1mdW5kYW1lbnRhbHMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNfdGV4dCA9IHtcclxuICAgICAgICBpZDogc2VjdGlvbnMucHJvamVjdHMuaWQsXHJcbiAgICAgICAgdGl0bGU6IHNlY3Rpb25zLnByb2plY3RzLm5hbWUsXHJcbiAgICAgICAgcHJvamVjdHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9uIENWIHdlYlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VMaW5rOiBcIi9waG90b1BlcnNvLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBNb24gcHJlbWllciBwcm9qZXQgcGVyc29ubmVsISBJbCBtJ2EgcGVybWlzIGRlIG1ldHRyZSBlbiBwcmF0aXF1ZSBSZWFjdCBldCBkJ2FjcXXDqXJpciBwbHVzaWV1cnMgY29tcMOpdGVuY2VzIGVuIHByb2dyYW1tYXRpb24gZnJvbnQtZW5kLlxyXG4gICAgICAgICAgICBMZSBkZXNpZ24gcmVzdGUgc2ltcGxpc3RlLCBwZXV0LcOqdHJlIHF1ZSBjZSBzZXJhIHVuZSBhbcOpbGlvcmF0aW9uIMOgIHZlbmlyIWAsXHJcbiAgICAgICAgICAgICAgICBjb2RlU291cmNlTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vQ2hvdWluYXJkRGF2aWQvY2hvdWluYXJkZGF2aWQuZ2l0aHViLmlvXCIsXHJcbiAgICAgICAgICAgICAgICBjaGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk5leHQuanNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk1hdGVyaWFsLVVJXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW50ZXJlc3RzX3RleHQgPSB7XHJcbiAgICAgICAgaWQ6IHNlY3Rpb25zLmludGVyZXN0LmlkLFxyXG4gICAgICAgIHRpdGxlOiBzZWN0aW9ucy5pbnRlcmVzdC5uYW1lLFxyXG4gICAgICAgIGludGVyZXN0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWluIGFpcicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYUxlYWYsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTY2llbmNlJyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhTWljcm9zY29wZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzM5NjNlMycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnR29sZicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYUdvbGZCYWxsLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjYzVjOGM5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDaW7DqW1hJyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhVHYsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIb2NrZXknLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFIb2NrZXlQdWNrLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQnJhc3NhZ2UgZGUgYmnDqHJlJyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhRmxhc2ssXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNiM2I4YzcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xlY3R1cmUnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFCb29rLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjYmY1MDM5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUZWNobm9sb2dpZScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYVJvYm90LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UgZmljdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYUhhbmRTcG9jayxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRHcmVlbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSmV1eCBkZSBzb2Npw6l0w6knLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFDaGVzc0tuaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0N1aXNpbmUnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFIYW1idXJnZXIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNhNjhhNmQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ03DqWRpdGF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGljb246IGZhWWluWWFuZyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyX3RleHQ6IGhlYWRlcl90ZXh0LFxyXG4gICAgICAgICAgICBmb290ZXJfdGV4dDogZm9vdGVyX3RleHQsXHJcbiAgICAgICAgICAgIHByZXNlbnRhdGlvbl90ZXh0OiBwcmVzZW50YXRpb25fdGV4dCxcclxuICAgICAgICAgICAgc2tpbGxzX3RleHQ6IHNraWxsc190ZXh0LFxyXG4gICAgICAgICAgICBwYXJjb3Vyc190ZXh0OiBwYXJjb3Vyc190ZXh0LFxyXG4gICAgICAgICAgICBlZHVjYXRpb25fdGV4dDogZWR1Y2F0aW9uX3RleHQsXHJcbiAgICAgICAgICAgIGNlcnRmaWNhdGlvbnNfdGV4dDogY2VydGZpY2F0aW9uc190ZXh0LFxyXG4gICAgICAgICAgICBwcm9qZWN0c190ZXh0OiBwcm9qZWN0c190ZXh0LFxyXG4gICAgICAgICAgICBpbnRlcmVzdHNfdGV4dDogaW50ZXJlc3RzX3RleHQsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGFiZWxzMiJdLCJzb3VyY2VSb290IjoiIn0=