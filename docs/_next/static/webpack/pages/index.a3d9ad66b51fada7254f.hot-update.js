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
    'SQL', 'EF Core / NHibernate', '.NET Core', 'Cloud Azure', 'Next.js']
  }, {
    id: 'langages',
    title: 'Langages',
    skills: ['C#', //
    ' vb.net', 'Javascript', 'JQuery', 'HTML/CSS', 'React']
  }, {
    id: 'outils',
    title: 'Outils',
    skills: ['Visual Studio', 'Visual Studio Code', 'SSMS (SQL)', 'Azure DevOps', 'Git', 'Postman']
  }, {
    id: 'designs',
    title: 'Designs et concepts',
    skills: ['MVC', //
    'API', 'S.O.L.I.D.', 'R.E.S.T.', 'Design patterns']
  }, {
    id: 'complementaires',
    title: 'Complémentaires',
    skills: ['Méthode agile', 'Scrum Master', 'Tests unitaires', 'Kendo', 'Rapport SSRS']
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
          lineNumber: 165,
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
          lineNumber: 187,
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
          lineNumber: 210,
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
          lineNumber: 221,
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
          lineNumber: 237,
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
          lineNumber: 252,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNW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RUFBRSxTQURYO0FBRUkrQixRQUFJLEVBQUVRLHdFQUZWO0FBR0lOLFNBQUssRUFBRTtBQUhYLEdBL0JPLEVBb0NQO0FBQ0lqQyxTQUFLLEVBQUUsYUFEWDtBQUVJK0IsUUFBSSxFQUFFUyx5RUFGVjtBQUdJUCxTQUFLLEVBQUU7QUFIWCxHQXBDTyxFQXlDUDtBQUNJakMsU0FBSyxFQUFFLGlCQURYO0FBRUkrQixRQUFJLEVBQUVVLDZFQUZWO0FBR0lSLFNBQUssRUFBRTtBQUhYLEdBekNPLEVBOENQO0FBQ0lqQyxTQUFLLEVBQUUsaUJBRFg7QUFFSStCLFFBQUksRUFBRVcsK0VBRlY7QUFHSVQsU0FBSyxFQUFFO0FBSFgsR0E5Q08sRUFtRFA7QUFDSWpDLFNBQUssRUFBRSxTQURYO0FBRUkrQixRQUFJLEVBQUVZLDZFQUZWO0FBR0lWLFNBQUssRUFBRTtBQUhYLEdBbkRPLEVBd0RQO0FBQ0lqQyxTQUFLLEVBQUUsWUFEWDtBQUVJK0IsUUFBSSxFQUFFYSwyRUFGVjtBQUdJWCxTQUFLLEVBQUU7QUFIWCxHQXhETztBQUhlLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzZDlhZDY2YjUxZmFkYTcyNTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cclxuaW1wb3J0IHtcclxuICAgIGZhTGVhZixcclxuICAgIGZhTWljcm9zY29wZSxcclxuICAgIGZhR29sZkJhbGwsXHJcbiAgICBmYVR2LFxyXG4gICAgZmFCb29rLFxyXG4gICAgZmFIYW5kU3BvY2ssXHJcbiAgICBmYUNoZXNzS25pZ2h0LFxyXG4gICAgZmFIYW1idXJnZXIsXHJcbiAgICBmYUZsYXNrLFxyXG4gICAgZmFIb2NrZXlQdWNrLFxyXG4gICAgZmFSb2JvdCxcclxuICAgIGZhWWluWWFuZyxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgQmFja1RvU2Nob29sIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvYmFja1RvU2Nob29sJztcclxuaW1wb3J0IEpvYiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2pvYic7XHJcbmltcG9ydCB7IGRvbWFpbmVzIH0gZnJvbSAnLi9kb21haW5lcyc7XHJcblxyXG5jb25zdCBzZWN0aW9ucyA9IHtcclxuICAgIHByZXNlbnRhdGlvbjoge1xyXG4gICAgICAgIGlkOiAncHJlc2VudGF0aW9uJyxcclxuICAgICAgICBuYW1lOiAnUHLDqXNlbnRhdGlvbicsXHJcbiAgICB9LFxyXG4gICAgY29tcGV0ZW5jZXM6IHtcclxuICAgICAgICBpZDogJ2NvbXBldGVuY2VzJyxcclxuICAgICAgICBuYW1lOiAnQ29tcMOpdGVuY2VzJyxcclxuICAgIH0sXHJcbiAgICBwYXJjb3Vyczoge1xyXG4gICAgICAgIGlkOiAnY2FycmllcmUnLFxyXG4gICAgICAgIG5hbWU6ICdDYXJyacOocmUnLFxyXG4gICAgfSxcclxuICAgIGVkdWNhdGlvbjoge1xyXG4gICAgICAgIGlkOiAnZWR1Y2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnw4lkdWNhdGlvbicsXHJcbiAgICB9LFxyXG4gICAgY2VydGlmaWNhdGlvbjoge1xyXG4gICAgICAgIGlkOiAnY2VydGlmaWNhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ0NlcnRpZmljYXRpb25zJyxcclxuICAgIH0sXHJcbiAgICBwcm9qZWN0czoge1xyXG4gICAgICAgIGlkOiAncmVhbGlzYXRpb25zJyxcclxuICAgICAgICBuYW1lOiAnUsOpYWxpc2F0aW9ucycsXHJcbiAgICB9LFxyXG4gICAgaW50ZXJlc3Q6IHtcclxuICAgICAgICBpZDogJ2ludGVyZXN0JyxcclxuICAgICAgICBuYW1lOiAnSW50w6lyw6p0cycsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdoZWFkZXInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3Rlcl90ZXh0ID0ge1xyXG4gICAgaWQ6ICdmb290ZXInLFxyXG4gICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxyXG4gICAgZW1haWw6ICdjaG91aW5hcmQuZGNAZ21haWwuY29tJyxcclxuICAgIGltYWdlOiAnL3Bob3RvUGVyc28zLmpwZycsXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICAgICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGF2aWQtY2hvdWluYXJkLycsXHJcbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaG91aW5hcmREYXZpZCcsXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXNlbnRhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcmVzZW50YXRpb24ubmFtZSxcclxuICAgIGRlc2NyaXB0aW9uOiBgQXByw6hzIDUgYW5zIGRlIGNhcnJpw6hyZSBkYW5zIGxlIGRvbWFpbmUgZGUgbGEgPHNwYW4gY2xhc3M9XCJiaW90ZWNoXCI+YmlvdGVjaG5vbG9naWU8L3NwYW4+LCBqJ2FpIGTDqWNpZMOpIGRlIHJldG91cm5lciDDoCBsJ8OpY29sZSBwb3VyXHJcbiAgICAgcsOpb3JpZW50ZXIgbWEgY2FycmnDqHJlIGVuIHRhbnQgcXVlIDxzcGFuIGNsYXNzPVwiaW5mb1wiPmTDqXZlbG9wcGV1ciB3ZWIgZnVsbC1zdGFjazwvc3Bhbj4uXHJcbiAgICAgTCdpbmZvcm1hdGlxdWUgYSB0b3Vqb3VycyBmYWl0IHBhcnRpZSBkZSBtZXMgaW50w6lyw6p0cywgbWFpbnRlbmFudCwgaidlbiBmYWl0IG1vbiBtw6l0aWVyIGV0IGplIG1lIHN1aXMgamFtYWlzIGF1dGFudCBzZW50aSDDoCBtYSBwbGFjZSAhXHJcbiAgICAgPGJyLz5cclxuICAgICA8YnIvPlxyXG4gICAgIEplIG1hw650cmlzZSBsYSBwbGF0ZWZvcm1lIC5ORVQsIGxlcyBiYXNlcyBkZSBkb25uw6llcyBTUUwgYWluc2kgcXVlIGxlIGxhbmdhZ3VlIEphdmFzY3JpcHQuIEonYWltZSBwYXJ0aWN1bGnDqHJlbWVudFxyXG4gICAgIGV4cGxvcmVyIGRlcyBub3V2ZWxsZXMgdGVjaG5vbG9naWVzIGV0IG1haW50ZW5pciDDoCBqb3VyIG1lcyBjb25uYWlzc2FuY2VzIMOgIGwnYWlkZSBkZSBmb3JtYXRpb25zIGV0IGRlIHByb2pldHMgcGVyc29ubmVscy4gXHJcbiAgICAgRGUgY2V0dGUgZmHDp29uLCBqJ2FpIGFxdWlzIGRlcyBjb21ww6l0ZW5jZXMgcG91ciBkw6l2ZWxvcHBlciBkZXMgaW50ZXJmYWNlcyB3ZWIgYXZlYyBSZWFjdCBldCBkZSBzZXJ2aWNlIHdlYiAoQVBJKSBhdmVjIC5ORVQgQ29yZS5cclxuICAgICA8YnIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgTWVyY2kgZGUgcHJlbmRyZSBsZSB0ZW1wcyBkZSBjb25zdWx0ZXIgbWEgcGFnZSB3ZWIgIVxyXG4gICAgIDxici8+XHJcbiAgICAgQm9ubmUgbmF2aWdhdGlvbiA7KVxyXG4gICAgIGAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuY29tcGV0ZW5jZXMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY29tcGV0ZW5jZXMubmFtZSxcclxuICAgIHNlY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ1RlY2hubycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnLk5FVCcsIC8vXHJcbiAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICdFRiBDb3JlIC8gTkhpYmVybmF0ZScsXHJcbiAgICAgICAgICAgICAgICAnLk5FVCBDb3JlJyxcclxuICAgICAgICAgICAgICAgICdDbG91ZCBBenVyZScsXHJcbiAgICAgICAgICAgICAgICAnTmV4dC5qcycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnbGFuZ2FnZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQyMnLCAvL1xyXG4gICAgICAgICAgICAgICAgJyB2Yi5uZXQnLFxyXG4gICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgJ0pRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAnSFRNTC9DU1MnLFxyXG4gICAgICAgICAgICAgICAgJ1JlYWN0JyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdvdXRpbHMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ091dGlscycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ1Zpc3VhbCBTdHVkaW8nLFxyXG4gICAgICAgICAgICAgICAgJ1Zpc3VhbCBTdHVkaW8gQ29kZScsXHJcbiAgICAgICAgICAgICAgICAnU1NNUyAoU1FMKScsXHJcbiAgICAgICAgICAgICAgICAnQXp1cmUgRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICdHaXQnLFxyXG4gICAgICAgICAgICAgICAgJ1Bvc3RtYW4nLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2Rlc2lnbnMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0Rlc2lnbnMgZXQgY29uY2VwdHMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdNVkMnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ0FQSScsXHJcbiAgICAgICAgICAgICAgICAnUy5PLkwuSS5ELicsXHJcbiAgICAgICAgICAgICAgICAnUi5FLlMuVC4nLFxyXG4gICAgICAgICAgICAgICAgJ0Rlc2lnbiBwYXR0ZXJucycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnY29tcGxlbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbMOpbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTcOpdGhvZGUgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NjcnVtIE1hc3RlcicsXHJcbiAgICAgICAgICAgICAgICAnVGVzdHMgdW5pdGFpcmVzJyxcclxuICAgICAgICAgICAgICAgICdLZW5kbycsXHJcbiAgICAgICAgICAgICAgICAnUmFwcG9ydCBTU1JTJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdwZXJzbycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGVyc29ubmVsbGVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQ29tbXVuaWNhdGlvbiBhY3RpdmUnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ0F1dG9ub21pZScsXHJcbiAgICAgICAgICAgICAgICAnSW5pdGlhdGl2ZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZWVyX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucGFyY291cnMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucGFyY291cnMubmFtZSxcclxuICAgIGVtcGxvaXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0NIVSBkZSBRdcOpYmVjLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBpbmZvcm1hdGlxdWUgKGTDqXZlbG9wcGV1ciknLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnYW/Du3QgMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIHdlYiBmdWxsc3RhY2ssIFxyXG4gICAgICAgICAgICAgICAgICAgIGplIHBhcnRpY2lwZSBhdSBkw6l2ZWxvcHBlbWVudCBkZSA8YSBjbGFzcz1cInNwZWNpYWxMaW5rRWZmZWN0MlwiIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICBJbCBzJ2FnaXQgZCd1biBzeXN0w6htZSBkJ2VudmVyZ3VyZSB1dGlsaXPDqXMgZGFucyBsZXMgw6l0YWJsaXNzZW1lbnRzIGRlIHNhbnTDqSBkdSBRdcOpYmVjLiBKJ2FpIGF1c3NpIGxlIHLDtGxlIGRlIFNjcnVtIE1hc3RlciBwb3VyIHN1cHBvcnRlciBsJ8OpcXVpcGUgZGFucyBsYSBtw6l0aG9kZSBhZ2lsZS5gLFxyXG4gICAgICAgICAgICAgICAgY2hpcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLk5FVCcsIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTUUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTY3J1bSBtYXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnSW5kdXN0cmllbGxlIEFsbGlhbmNlLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnRMOpdmVsb3BwZXVyJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ3NlcHQuIDIwMTgnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ2Fvw7t0IDIwMTknLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxOCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxOScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEF1IHNlaW4gZCd1bmUgw6lxdWlwZSBEZXZPcHMsIHByZW5kcmUgcGFydCBhdSBzdXBwb3J0IGV0IGF1IGTDqXZlbG9wcGVtZW50IGRlcyBzeXN0w6htZXMgZHUgZMOpcGFydGVtZW50IGRlIGxhIGNvbXB0YWJpbGl0w6kuXHJcbiAgICAgICAgICAgICAgICBDZWxhIGNvbnNpc3RhaXQgw6AgcsOpcG9uZHJlIGF1eCB1dGlsaXNhdGV1cnMgbG9ycyBkZSBzaXR1YXRpb24gcGFydGljdWxpw6hyZSwgbWFpcyBhdXNzaSBkZSBwYXJ0aWNpcGVyIGF1eCDDqXZvbHV0aW9ucyBkZXMgYXBwbGljYXRpb25zLmAsXHJcbiAgICAgICAgICAgICAgICBjaGlwczogW1xyXG4gICAgICAgICAgICAgICAgICAgICcuTkVUJyxcclxuICAgICAgICAgICAgICAgICAgICAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rldk9wcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2UgbWFuYWdlcicsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJhY2tUb1NjaG9vbCBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmFja1RvU2Nob29sLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZXRvdXIgw6AgbCfDqWNvbGUgKFRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlKVwiLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZXM6ICdmw6l2ci4gMjAxNiAtIGTDqWMuIDIwMTgnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZXM6ICcyMDE2IC0gMjAxOCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iaW9sb2dpZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnR1NLLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBkZSBwcm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ25vdi4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRlRmluOiAnZsOpdnIuIDIwMTcnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxNycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVuIHRhbnQgcXVlIHRlY2huaWNpZW4gZGFucyB1bmUgdXNpbmUgZGUgcHJvZHVjdGlvbiBkdSB2YWNjaW4gYW50aS1ncmlwYWwsIG1vbiByw7RsZSDDqXRhaXQgZCdvcMOpcmVyIGxlcyBzeXN0w6htZXMgZGUgcmVtcGxpc3NhZ2UgZW4gZmxhY29uLlxyXG4gICAgICAgICAgICAgICAgICAgIEplIGNvbnRyaWJ1YWlzIGF1c3NpIGFjdGl2ZW1lbnQgw6AgbGEgZm9ybWF0aW9uIGRlcyBub3V2ZWF1eCBlbXBsb3nDqXMuYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3lldXI6ICdCRCBEaWFnbm9zdGljcywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gYXUgY29udHLDtGxlIGRlIGxhIHF1YWxpdMOpJyxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGVEZWJ1dDogJ2phbnYuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ29jdC4gMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRWZmZWN0dWVyIGxlcyBhbmFseXNlcyBkZSBsYWJvcmF0b2lyZSBwZXJtZXR0YW50IGRlIHZhbGlkZXIgbGEgcXVhbGl0w6kgZHUgcHJvZHVpdC4gXHJcbiAgICAgICAgICAgICAgICBDb21waWxlciBldCBjb25zdHJ1aXJlIHVuIHJhcHBvcnQgZGVzIHLDqXN1bHRhdHMgb2J0ZW51cy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0ZlbGRhbiwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgbGFib3JhdG9pcmUnLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZURlYnV0OiAnbWFpIDIwMTInLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZUZpbjogJ2phbnYuIDIwMTQnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxMicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYENvbnRyaWJ1ZXIgYXV4IGFjdGl2aXTDqXMgZGUgcHJvZHVjdGlvbiBldCBhdXggcHJvamV0cyBkZSBSJkQuIFxyXG4gICAgICAgICAgICAgICAgICAgIGonYXNzdXJhaXMgYXVzc2kgbCdhcHByb3Zpc2lvbm5lbWVudCBkZXMgbWF0acOocmVzIHByZW1pw6hyZXMgYWluc2kgcXVlIGxhIGxpdnJhaXNvbiBkZXMgY29tbWFuZGVzIGF1eCBjbGllbnRzLmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWR1Y2F0aW9uX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuZWR1Y2F0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmVkdWNhdGlvbi5uYW1lLFxyXG4gICAgZGlwbG9tYXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuaW5mb3JtYXRpcXVlLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdDw6lnZXAgZGUgU2FpbnRlLUZveSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDE4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDZXJ0aWZpY2F0IGVuIGJpb3RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ1VuaXZlcnNpdMOpIExhdmFsLCBRdcOpYmVjICcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGJpb8OpY29sb2dpZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdDw6lnZXAgU2FpbnQtTGF1cmVudCwgTW9udHLDqWFsJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucHJvamVjdHMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucHJvamVjdHMubmFtZSxcclxuICAgIHByb2plY3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01hIHBhZ2Ugd2ViJyxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICcvdG9vblBlcnNvLmpwZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTWEgcGFnZSB3ZWIgcGVyc29ubmVsbGUsIHByZW1pZXIgcHJvamV0IHLDqWFsaXPDqSBkZSBBIMOgIFogIWAsXHJcbiAgICAgICAgICAgIGNvZGVTb3VyY2VMaW5rOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaG91aW5hcmREYXZpZC9jaG91aW5hcmRkYXZpZC5naXRodWIuaW8nLFxyXG4gICAgICAgICAgICBjaGlwczogWydSZWFjdCcsICdOZXh0LmpzJywgJ01hdGVyaWFsLVVJJ10sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2VydGZpY2F0aW9uc190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5uYW1lLFxyXG4gICAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWljcm9zb2Z0IEF6dXJlIEZ1bmRhbWVudGFscycsXHJcbiAgICAgICAgICAgIHllYXI6IDIwMjEsXHJcbiAgICAgICAgICAgIGltYWdlOiAnL2F6dXJlLWZ1bmRhbWVudGFscy5wbmcnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvbGVhcm4vY2VydGlmaWNhdGlvbnMvYXp1cmUtZnVuZGFtZW50YWxzJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcmVzdHNfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5pbnRlcmVzdC5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5pbnRlcmVzdC5uYW1lLFxyXG4gICAgaW50ZXJlc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BsZWluIGFpcicsXHJcbiAgICAgICAgICAgIGljb246IGZhTGVhZixcclxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZScsXHJcbiAgICAgICAgICAgIGljb246IGZhTWljcm9zY29wZSxcclxuICAgICAgICAgICAgY29sb3I6ICcjMzk2M2UzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHb2xmJyxcclxuICAgICAgICAgICAgaWNvbjogZmFHb2xmQmFsbCxcclxuICAgICAgICAgICAgY29sb3I6ICcjYzVjOGM5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDaW7DqW1hJyxcclxuICAgICAgICAgICAgaWNvbjogZmFUdixcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSG9ja2V5JyxcclxuICAgICAgICAgICAgaWNvbjogZmFIb2NrZXlQdWNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCcmFzc2FnZSBkZSBiacOocmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUZsYXNrLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiM2I4YzcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0xlY3R1cmUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYUJvb2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2JmNTAzOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWUnLFxyXG4gICAgICAgICAgICBpY29uOiBmYVJvYm90LFxyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2NpZW5jZSBmaWN0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW5kU3BvY2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRHcmVlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSmV1eCBkZSBzb2Npw6l0w6knLFxyXG4gICAgICAgICAgICBpY29uOiBmYUNoZXNzS25pZ2h0LFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDdWlzaW5lJyxcclxuICAgICAgICAgICAgaWNvbjogZmFIYW1idXJnZXIsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2E2OGE2ZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTcOpZGl0YXRpb24nLFxyXG4gICAgICAgICAgICBpY29uOiBmYVlpbllhbmcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9