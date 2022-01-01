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
    'EF Core / NHibernate', 'SQL', 'Node.js', 'Next.js']
  }, {
    id: 'langages',
    title: 'Langages',
    skills: ['C# / vb.net', //
    'Javascript', 'JQuery', 'React', 'HTML/CSS']
  }, {
    id: 'designs',
    title: 'Designs et concepts',
    skills: ['MVC', //
    'REST API', 'S.O.L.I.D.', 'Design patterns', 'Cloud Azure']
  }, {
    id: 'outils',
    title: 'Outils',
    skills: ['Visual Studio', 'SSMS (SQL)', 'Azure DevOps', 'Git', 'Postman']
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
          lineNumber: 164,
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
          lineNumber: 185,
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
      description: "Participer au d\xE9veloppement des \xE9volutions demand\xE9es et assurer le support technique des syst\xE8mes utlis\xE9s dans le d\xE9partement de la comptabilit\xE9.\n                Cela impliquait de communiquer directement avec les utilisateurs pour clarifier les besoins.",
      chips: ['.NET', 'Javascript', 'SQL', 'DevOps', 'Release manager']
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_backToSchool__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
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
          lineNumber: 216,
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
          lineNumber: 230,
          columnNumber: 24
        }
      });
    },
    domaine: _domaines__WEBPACK_IMPORTED_MODULE_4__["domaines"].biologie,
    content: {
      employeur: 'BD Diagnostics, Québec',
      poste: 'Technicien au contrôle de la qualité',
      dateDebut: '2014',
      description: "Effectuer les analyses de laboratoire permettant de valider la qualit\xE9 du produit. \n                Compiler les donn\xE9es et construire un rapport pour pr\xE9senter les r\xE9sultats obtenus \xE0 l'assurance qualit\xE9."
    }
  }, {
    render: function render(content) {
      return __jsx(_components_sections_career_content_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
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
      description: "Contribuer aux activit\xE9s de production et aux projets de R&D, \n                    j'assurais aussi l'approvisionnement des mati\xE8res premi\xE8res ainsi que la livraison des commandes aux clients."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGFiZWxzL2ZyLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwicHJlc2VudGF0aW9uIiwiaWQiLCJuYW1lIiwiY29tcGV0ZW5jZXMiLCJwYXJjb3VycyIsImVkdWNhdGlvbiIsImNlcnRpZmljYXRpb24iLCJwcm9qZWN0cyIsImludGVyZXN0IiwiaGVhZGVyX3RleHQiLCJmb290ZXJfdGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJzb2NpYWxMaW5rcyIsInByZXNlbnRhdGlvbl90ZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNraWxsc190ZXh0Iiwic2tpbGxzIiwiY2FyZWVyX3RleHQiLCJlbXBsb2lzIiwicmVuZGVyIiwiY29udGVudCIsImRvbWFpbmUiLCJkb21haW5lcyIsImluZm9ybWF0aXF1ZSIsImVtcGxveWV1ciIsInBvc3RlIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImNoaXBzIiwiYmFja1RvU2Nob29sIiwiZGF0ZXMiLCJiaW9sb2dpZSIsImVkdWNhdGlvbl90ZXh0IiwiZGlwbG9tYXMiLCJzY2hvb2wiLCJ5ZWFyIiwicHJvamVjdHNfdGV4dCIsImltYWdlU291cmNlIiwiY29kZVNvdXJjZUxpbmsiLCJjZXJ0ZmljYXRpb25zX3RleHQiLCJjZXJ0aWZpY2F0aW9ucyIsImxpbmsiLCJpbnRlcmVzdHNfdGV4dCIsImludGVyZXN0cyIsImljb24iLCJmYUxlYWYiLCJjb2xvciIsImZhTWljcm9zY29wZSIsImZhR29sZkJhbGwiLCJmYVR2IiwiZmFIb2NrZXlQdWNrIiwiZmFGbGFzayIsImZhQm9vayIsImZhUm9ib3QiLCJmYUhhbmRTcG9jayIsImZhQ2hlc3NLbmlnaHQiLCJmYUhhbWJ1cmdlciIsImZhWWluWWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNW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LEdBL0JPLEVBb0NQO0FBQ0lqQyxTQUFLLEVBQUUsYUFEWDtBQUVJK0IsUUFBSSxFQUFFUyx5RUFGVjtBQUdJUCxTQUFLLEVBQUU7QUFIWCxHQXBDTyxFQXlDUDtBQUNJakMsU0FBSyxFQUFFLGlCQURYO0FBRUkrQixRQUFJLEVBQUVVLDZFQUZWO0FBR0lSLFNBQUssRUFBRTtBQUhYLEdBekNPLEVBOENQO0FBQ0lqQyxTQUFLLEVBQUUsaUJBRFg7QUFFSStCLFFBQUksRUFBRVcsK0VBRlY7QUFHSVQsU0FBSyxFQUFFO0FBSFgsR0E5Q08sRUFtRFA7QUFDSWpDLFNBQUssRUFBRSxTQURYO0FBRUkrQixRQUFJLEVBQUVZLDZFQUZWO0FBR0lWLFNBQUssRUFBRTtBQUhYLEdBbkRPLEVBd0RQO0FBQ0lqQyxTQUFLLEVBQUUsWUFEWDtBQUVJK0IsUUFBSSxFQUFFYSwyRUFGVjtBQUdJWCxTQUFLLEVBQUU7QUFIWCxHQXhETztBQUhlLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhNWIyZjAwNzIyNjFhMmVjM2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cclxuaW1wb3J0IHtcclxuICAgIGZhTGVhZixcclxuICAgIGZhTWljcm9zY29wZSxcclxuICAgIGZhR29sZkJhbGwsXHJcbiAgICBmYVR2LFxyXG4gICAgZmFCb29rLFxyXG4gICAgZmFIYW5kU3BvY2ssXHJcbiAgICBmYUNoZXNzS25pZ2h0LFxyXG4gICAgZmFIYW1idXJnZXIsXHJcbiAgICBmYUZsYXNrLFxyXG4gICAgZmFIb2NrZXlQdWNrLFxyXG4gICAgZmFSb2JvdCxcclxuICAgIGZhWWluWWFuZyxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgQmFja1RvU2Nob29sIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FyZWVyL2NvbnRlbnQvYmFja1RvU2Nob29sJztcclxuaW1wb3J0IEpvYiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcmVlci9jb250ZW50L2pvYic7XHJcbmltcG9ydCB7IGRvbWFpbmVzIH0gZnJvbSAnLi9kb21haW5lcyc7XHJcblxyXG5jb25zdCBzZWN0aW9ucyA9IHtcclxuICAgIHByZXNlbnRhdGlvbjoge1xyXG4gICAgICAgIGlkOiAncHJlc2VudGF0aW9uJyxcclxuICAgICAgICBuYW1lOiAnUHLDqXNlbnRhdGlvbicsXHJcbiAgICB9LFxyXG4gICAgY29tcGV0ZW5jZXM6IHtcclxuICAgICAgICBpZDogJ2NvbXBldGVuY2VzJyxcclxuICAgICAgICBuYW1lOiAnQ29tcMOpdGVuY2VzJyxcclxuICAgIH0sXHJcbiAgICBwYXJjb3Vyczoge1xyXG4gICAgICAgIGlkOiAnY2FycmllcmUnLFxyXG4gICAgICAgIG5hbWU6ICdDYXJyacOocmUnLFxyXG4gICAgfSxcclxuICAgIGVkdWNhdGlvbjoge1xyXG4gICAgICAgIGlkOiAnZWR1Y2F0aW9uJyxcclxuICAgICAgICBuYW1lOiAnw4lkdWNhdGlvbicsXHJcbiAgICB9LFxyXG4gICAgY2VydGlmaWNhdGlvbjoge1xyXG4gICAgICAgIGlkOiAnY2VydGlmaWNhdGlvbicsXHJcbiAgICAgICAgbmFtZTogJ0NlcnRpZmljYXRpb25zJyxcclxuICAgIH0sXHJcbiAgICBwcm9qZWN0czoge1xyXG4gICAgICAgIGlkOiAncHJvamV0cycsXHJcbiAgICAgICAgbmFtZTogJ1LDqWFsaXNhdGlvbnMnLFxyXG4gICAgfSxcclxuICAgIGludGVyZXN0OiB7XHJcbiAgICAgICAgaWQ6ICdpbnRlcmVzdCcsXHJcbiAgICAgICAgbmFtZTogJ0ludMOpcsOqdHMnLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJfdGV4dCA9IHtcclxuICAgIGlkOiAnaGVhZGVyJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJfdGV4dCA9IHtcclxuICAgIGlkOiAnZm9vdGVyJyxcclxuICAgIHNlY3Rpb25zOiBzZWN0aW9ucyxcclxuICAgIGVtYWlsOiAnY2hvdWluYXJkLmRjQGdtYWlsLmNvbScsXHJcbiAgICBpbWFnZTogJy9waG90b1BlcnNvMy5qcGcnLFxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgICAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhdmlkY2hvdWluYXJkbGF2b2llLycsXHJcbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaG91aW5hcmREYXZpZCcsXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXNlbnRhdGlvbl90ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLnByZXNlbnRhdGlvbi5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wcmVzZW50YXRpb24ubmFtZSxcclxuICAgIGRlc2NyaXB0aW9uOiBgQXByw6hzIDUgYW5zIGRlIGNhcnJpw6hyZSBkYW5zIGxlIGRvbWFpbmUgZGVzIDxzcGFuIGNsYXNzPVwiYmlvdGVjaFwiPmJpb3RlY2hub2xvZ2llczwvc3Bhbj4sIGonYWkgZMOpY2lkw6kgZGUgcmV0b3VybmVyIMOgIGwnw6ljb2xlIHBvdXJcclxuICAgICByw6lvcmllbnRlciBtYSBjYXJyacOocmUgZW4gdGFudCBxdWUgPHNwYW4gY2xhc3M9XCJpbmZvXCI+ZMOpdmVsb3BwZXVyIHdlYiBmdWxsLXN0YWNrPC9zcGFuPi5cclxuICAgICBMJ2luZm9ybWF0aXF1ZSBhIHRvdWpvdXJzIGZhaXQgcGFydGllIGRlIG1lcyBpbnTDqXLDqnRzLCBtYWludGVuYW50LCBqJ2VuIGZhaXQgbW9uIG3DqXRpZXIgZXQgamUgbWUgc3VpcyBqYW1haXMgYXV0YW50IHNlbnRpIMOgIG1hIHBsYWNlICFcclxuICAgICA8YnIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgSmUgbWHDrnRyaXNlIGxhIHBsYXRlZm9ybWUgLk5FVCwgbGVzIGJhc2VzIGRlIGRvbm7DqWVzIFNRTCBhaW5zaSBxdWUgbGUgbGFuZ2FndWUgSmF2YXNjcmlwdC4gSidhaW1lIHBhcnRpY3VsacOocmVtZW50XHJcbiAgICAgZXhwbG9yZXIgZGVzIG5vdXZlbGxlcyB0ZWNobm9sb2dpZXMgZXQgbWFpbnRlbmlyIMOgIGpvdXIgbWVzIGNvbm5haXNzYW5jZXMgw6AgbCdhaWRlIGRlIGZvcm1hdGlvbnMgZXQgZGUgcHJvamV0cyBwZXJzb25uZWxzLiBcclxuICAgICBEZSBjZXR0ZSBmYcOnb24sIGonYWkgYXF1aXMgZGVzIGNvbXDDqXRlbmNlcyBlbiBkw6l2ZWxvcHBlbWVudCBkZSBwYWdlIHdlYiBhdmVjIFJlYWN0LCBhaW5zaSBxdWUgZGUgc2VydmljZSB3ZWIgKEFQSSkgYXZlYyAuTkVUIENvcmUuXHJcbiAgICAgPGJyLz5cclxuICAgICA8YnIvPlxyXG4gICAgIE1lcmNpIGRlIHByZW5kcmUgbGUgdGVtcHMgZGUgY29uc3VsdGVyIG1hIHBhZ2Ugd2ViIVxyXG4gICAgIDxici8+XHJcbiAgICAgQm9ubmUgbmF2aWdhdGlvblxyXG4gICAgIGAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuY29tcGV0ZW5jZXMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY29tcGV0ZW5jZXMubmFtZSxcclxuICAgIHNlY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ1RlY2hubycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGVjaG5vbG9naWVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnLk5FVCAvIC5ORVQgQ29yZScsIC8vXHJcbiAgICAgICAgICAgICAgICAnRUYgQ29yZSAvIE5IaWJlcm5hdGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NRTCcsXHJcbiAgICAgICAgICAgICAgICAnTm9kZS5qcycsXHJcbiAgICAgICAgICAgICAgICAnTmV4dC5qcycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnbGFuZ2FnZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0xhbmdhZ2VzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnQyMgLyB2Yi5uZXQnLCAvL1xyXG4gICAgICAgICAgICAgICAgJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgJ0pRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAnUmVhY3QnLFxyXG4gICAgICAgICAgICAgICAgJ0hUTUwvQ1NTJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdkZXNpZ25zJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXNpZ25zIGV0IGNvbmNlcHRzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTVZDJywgLy9cclxuICAgICAgICAgICAgICAgICdSRVNUIEFQSScsXHJcbiAgICAgICAgICAgICAgICAnUy5PLkwuSS5ELicsXHJcbiAgICAgICAgICAgICAgICAnRGVzaWduIHBhdHRlcm5zJyxcclxuICAgICAgICAgICAgICAgICdDbG91ZCBBenVyZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnb3V0aWxzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdPdXRpbHMnLFxyXG4gICAgICAgICAgICBza2lsbHM6IFtcclxuICAgICAgICAgICAgICAgICdWaXN1YWwgU3R1ZGlvJyxcclxuICAgICAgICAgICAgICAgICdTU01TIChTUUwpJyxcclxuICAgICAgICAgICAgICAgICdBenVyZSBEZXZPcHMnLFxyXG4gICAgICAgICAgICAgICAgJ0dpdCcsXHJcbiAgICAgICAgICAgICAgICAnUG9zdG1hbicsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnY29tcGxlbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbMOpbWVudGFpcmVzJyxcclxuICAgICAgICAgICAgc2tpbGxzOiBbXHJcbiAgICAgICAgICAgICAgICAnTcOpdGhvZGUgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgJ1NjcnVtIE1hc3RlcicsXHJcbiAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICdUZXN0cyB1bml0YWlyZXMnLFxyXG4gICAgICAgICAgICAgICAgJ1JhcHBvcnQgU1NSUycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAncGVyc28nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BlcnNvbm5lbGxlcycsXHJcbiAgICAgICAgICAgIHNraWxsczogW1xyXG4gICAgICAgICAgICAgICAgJ0NvbW11bmljYXRpb24gYWN0aXZlJywgLy9cclxuICAgICAgICAgICAgICAgICdDYXBhY2l0w6kgZOKAmWFkYXB0YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F0dGl0dWRlIHBvc2l0aXZlJyxcclxuICAgICAgICAgICAgICAgICdBdXRvbm9tZScsXHJcbiAgICAgICAgICAgICAgICAnT3JnYW5pc8OpJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJlZXJfdGV4dCA9IHtcclxuICAgIGlkOiBzZWN0aW9ucy5wYXJjb3Vycy5pZCxcclxuICAgIHRpdGxlOiBzZWN0aW9ucy5wYXJjb3Vycy5uYW1lLFxyXG4gICAgZW1wbG9pczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyOiAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2IgY29udGVudD17Y29udGVudH0gLz47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmluZm9ybWF0aXF1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXVyOiAnQ0hVIGRlIFF1w6liZWMsIFF1w6liZWMnLFxyXG4gICAgICAgICAgICAgICAgcG9zdGU6ICdUZWNobmljaWVuIGluZm9ybWF0aXF1ZSAoZMOpdmVsb3BwZXVyKScsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICdhdWouJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgZMOpdmVsb3BwZXVyIHdlYiBmdWxsc3RhY2ssIFxyXG4gICAgICAgICAgICAgICAgICAgIGplIHBhcnRpY2lwZSBhdSBkw6l2ZWxvcHBlbWVudCBkZSA8YSBjbGFzcz1cInNwZWNpYWxMaW5rRWZmZWN0MlwiIGhyZWY9XCJodHRwczovL3d3dy5kY2ljcmlzdGFsbmV0LmNvbS9cIj5DcmlzdGFsLU5ldDwvYT4gYXUgc2VpbiBkJ3VuZSDDqXF1aXBlIGFnaWxlLiBcclxuICAgICAgICAgICAgICAgICAgICBJbCBzJ2FnaXQgZCd1biBzeXN0w6htZSBkJ2VudmVyZ3VyZSB1dGlsaXPDqSBkYW5zIGxlcyDDqXRhYmxpc3NlbWVudHMgZGUgc2FudMOpIGR1IFF1w6liZWMuIEonYXNzdW1lIGF1c3NpIGxlIHLDtGxlIGRlIFNjcnVtIE1hc3RlciBkYW5zIGNldHRlIMOpcXVpcGUuYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLCAvL1xyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2NydW0gbWFzdGVyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5pbmZvcm1hdGlxdWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0luZHVzdHJpZWxsZSBBbGxpYW5jZSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ0TDqXZlbG9wcGV1cicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE4JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE5JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgUGFydGljaXBlciBhdSBkw6l2ZWxvcHBlbWVudCBkZXMgw6l2b2x1dGlvbnMgZGVtYW5kw6llcyBldCBhc3N1cmVyIGxlIHN1cHBvcnQgdGVjaG5pcXVlIGRlcyBzeXN0w6htZXMgdXRsaXPDqXMgZGFucyBsZSBkw6lwYXJ0ZW1lbnQgZGUgbGEgY29tcHRhYmlsaXTDqS5cclxuICAgICAgICAgICAgICAgIENlbGEgaW1wbGlxdWFpdCBkZSBjb21tdW5pcXVlciBkaXJlY3RlbWVudCBhdmVjIGxlcyB1dGlsaXNhdGV1cnMgcG91ciBjbGFyaWZpZXIgbGVzIGJlc29pbnMuYCxcclxuICAgICAgICAgICAgICAgIGNoaXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJy5ORVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdKYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAnU1FMJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZSBtYW5hZ2VyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcjogKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QmFja1RvU2Nob29sIGNvbnRlbnQ9e2NvbnRlbnR9IC8+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb21haW5lOiBkb21haW5lcy5iYWNrVG9TY2hvb2wsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJldG91ciDDoCBsJ8OpY29sZSDigJQgVGVjaG5pcXVlIGRlIGzigJlpbmZvcm1hdGlxdWVcIixcclxuICAgICAgICAgICAgICAgIGRhdGVzOiAnMjAxNiAtIDIwMTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0dTSywgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgcHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRGVidXQ6ICcyMDE0JyxcclxuICAgICAgICAgICAgICAgIGRhdGVGaW46ICcyMDE3JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRW4gdGFudCBxdWUgdGVjaG5pY2llbiBkYW5zIHVuZSB1c2luZSBkZSBwcm9kdWN0aW9uIGR1IHZhY2NpbiBhbnRpZ3JpcHBhbCwgbW9uIHLDtGxlIMOpdGFpdCBkJ29ww6lyZXIgbGVzIHN5c3TDqG1lcyBkZSByZW1wbGlzc2FnZSBlbiBmbGFjb24uXHJcbiAgICAgICAgICAgICAgICAgICAgSmUgY29udHJpYnVhaXMgYXVzc2kgYWN0aXZlbWVudCDDoCBsYSBmb3JtYXRpb24gZGVzIG5vdXZlYXV4IGVtcGxvecOpcy5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0JEIERpYWdub3N0aWNzLCBRdcOpYmVjJyxcclxuICAgICAgICAgICAgICAgIHBvc3RlOiAnVGVjaG5pY2llbiBhdSBjb250csO0bGUgZGUgbGEgcXVhbGl0w6knLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEVmZmVjdHVlciBsZXMgYW5hbHlzZXMgZGUgbGFib3JhdG9pcmUgcGVybWV0dGFudCBkZSB2YWxpZGVyIGxhIHF1YWxpdMOpIGR1IHByb2R1aXQuIFxyXG4gICAgICAgICAgICAgICAgQ29tcGlsZXIgbGVzIGRvbm7DqWVzIGV0IGNvbnN0cnVpcmUgdW4gcmFwcG9ydCBwb3VyIHByw6lzZW50ZXIgbGVzIHLDqXN1bHRhdHMgb2J0ZW51cyDDoCBsJ2Fzc3VyYW5jZSBxdWFsaXTDqS5gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXI6IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYiBjb250ZW50PXtjb250ZW50fSAvPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGVtcGxveWV1cjogJ0ZlbGRhbiwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgICAgICBwb3N0ZTogJ1RlY2huaWNpZW4gZGUgbGFib3JhdG9pcmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0ZURlYnV0OiAnMjAxMicsXHJcbiAgICAgICAgICAgICAgICBkYXRlRmluOiAnMjAxNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYENvbnRyaWJ1ZXIgYXV4IGFjdGl2aXTDqXMgZGUgcHJvZHVjdGlvbiBldCBhdXggcHJvamV0cyBkZSBSJkQsIFxyXG4gICAgICAgICAgICAgICAgICAgIGonYXNzdXJhaXMgYXVzc2kgbCdhcHByb3Zpc2lvbm5lbWVudCBkZXMgbWF0acOocmVzIHByZW1pw6hyZXMgYWluc2kgcXVlIGxhIGxpdnJhaXNvbiBkZXMgY29tbWFuZGVzIGF1eCBjbGllbnRzLmAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWR1Y2F0aW9uX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuZWR1Y2F0aW9uLmlkLFxyXG4gICAgdGl0bGU6IHNlY3Rpb25zLmVkdWNhdGlvbi5uYW1lLFxyXG4gICAgZGlwbG9tYXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnREVDIGVuIHRlY2huaXF1ZSBkZSBs4oCZaW5mb3JtYXRpcXVlJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuaW5mb3JtYXRpcXVlLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdDw6lnZXAgZGUgU2FpbnRlLUZveSwgUXXDqWJlYycsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDE4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDZXJ0aWZpY2F0IGVuIGJpb3RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgZG9tYWluZTogZG9tYWluZXMuYmlvbG9naWUsXHJcbiAgICAgICAgICAgIHNjaG9vbDogJ1VuaXZlcnNpdMOpIExhdmFsLCBRdcOpYmVjICcsXHJcbiAgICAgICAgICAgIHllYXI6ICcyMDEyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdERUMgZW4gdGVjaG5pcXVlIGRlIGJpb8OpY29sb2dpZScsXHJcbiAgICAgICAgICAgIGRvbWFpbmU6IGRvbWFpbmVzLmJpb2xvZ2llLFxyXG4gICAgICAgICAgICBzY2hvb2w6ICdDw6lnZXAgU2FpbnQtTGF1cmVudCwgTW9udHLDqWFsJyxcclxuICAgICAgICAgICAgeWVhcjogJzIwMTAnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMucHJvamVjdHMuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMucHJvamVjdHMubmFtZSxcclxuICAgIHByb2plY3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Byw6lzZW50YXRpb24gZGUgbW9uIHByb2ZpbCBlbiBmb3JtYXQgd2ViJyxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICcvdG9vblBlcnNvLmpwZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTOKAmW9iamVjdGlmIGVzdCBkZSBwcsOpc2VudGVyIG1vbiBwYXJjb3VycyBwcm9mZXNzaW9ubmVsIHRvdXQgZW4gZMOpdmVsb3BwYW50IG1lcyBjb21ww6l0ZW5jZXMgZGUgZMOpdmVsb3BwZXVyIHdlYiBhdmVjIGRlcyBub3V2ZWxsZXMgdGVjaG5vbG9naWVzLmAsXHJcbiAgICAgICAgICAgIGNvZGVTb3VyY2VMaW5rOlxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9DaG91aW5hcmREYXZpZC9jaG91aW5hcmRkYXZpZC5naXRodWIuaW8nLFxyXG4gICAgICAgICAgICBjaGlwczogWydSZWFjdCcsICdOZXh0LmpzJywgJ01hdGVyaWFsLVVJJ10sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2VydGZpY2F0aW9uc190ZXh0ID0ge1xyXG4gICAgaWQ6IHNlY3Rpb25zLmNlcnRpZmljYXRpb24uaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuY2VydGlmaWNhdGlvbi5uYW1lLFxyXG4gICAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWljcm9zb2Z0IEF6dXJlIEZ1bmRhbWVudGFscycsXHJcbiAgICAgICAgICAgIHllYXI6IDIwMjEsXHJcbiAgICAgICAgICAgIGltYWdlOiAnL2F6dXJlLWZ1bmRhbWVudGFscy5wbmcnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZnItY2EvbGVhcm4vY2VydGlmaWNhdGlvbnMvYXp1cmUtZnVuZGFtZW50YWxzLycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJlc3RzX3RleHQgPSB7XHJcbiAgICBpZDogc2VjdGlvbnMuaW50ZXJlc3QuaWQsXHJcbiAgICB0aXRsZTogc2VjdGlvbnMuaW50ZXJlc3QubmFtZSxcclxuICAgIGludGVyZXN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQbGVpbiBhaXInLFxyXG4gICAgICAgICAgICBpY29uOiBmYUxlYWYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UnLFxyXG4gICAgICAgICAgICBpY29uOiBmYU1pY3Jvc2NvcGUsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzM5NjNlMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR29sZicsXHJcbiAgICAgICAgICAgIGljb246IGZhR29sZkJhbGwsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2M1YzhjOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2luw6ltYScsXHJcbiAgICAgICAgICAgIGljb246IGZhVHYsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvY2tleScsXHJcbiAgICAgICAgICAgIGljb246IGZhSG9ja2V5UHVjayxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnJhc3NhZ2UgZGUgYmnDqHJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFGbGFzayxcclxuICAgICAgICAgICAgY29sb3I6ICcjYjNiOGM3JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMZWN0dXJlJyxcclxuICAgICAgICAgICAgaWNvbjogZmFCb29rLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNiZjUwMzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RlY2hub2xvZ2llJyxcclxuICAgICAgICAgICAgaWNvbjogZmFSb2JvdCxcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NjaWVuY2UgZmljdGlvbicsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFuZFNwb2NrLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2xpZ2h0R3JlZW4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0pldXggZGUgc29jacOpdMOpJyxcclxuICAgICAgICAgICAgaWNvbjogZmFDaGVzc0tuaWdodCxcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ3Vpc2luZScsXHJcbiAgICAgICAgICAgIGljb246IGZhSGFtYnVyZ2VyLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNhNjhhNmQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ03DqWRpdGF0aW9uJyxcclxuICAgICAgICAgICAgaWNvbjogZmFZaW5ZYW5nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==