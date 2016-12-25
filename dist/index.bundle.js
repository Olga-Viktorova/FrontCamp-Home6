/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function Result(data, success, message, code) {
  (0, _classCallCheck3.default)(this, Result);

  this.data = data;
  this.success = success;
  this.Message = message;
  this.code = code;
};

exports.default = Result;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultCodes = function () {
    function ResultCodes() {
        (0, _classCallCheck3.default)(this, ResultCodes);
    }

    (0, _createClass3.default)(ResultCodes, null, [{
        key: 'Error',
        value: function Error() {
            return -1;
        }
    }, {
        key: 'Success',
        value: function Success() {
            return 0;
        }
    }, {
        key: 'InvalidObject',
        value: function InvalidObject() {
            return 1;
        }
    }]);
    return ResultCodes;
}();

exports.default = ResultCodes;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRepository = exports.tagRepository = exports.articleRepository = undefined;

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _articleRepository = __webpack_require__(22);

var _articleRepository2 = _interopRequireDefault(_articleRepository);

var _tagRepository = __webpack_require__(23);

var _tagRepository2 = _interopRequireDefault(_tagRepository);

var _userRepository = __webpack_require__(24);

var _userRepository2 = _interopRequireDefault(_userRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect() {
  _mongoose2.default.Promise = global.Promise;
  _mongoose2.default.connect("mongodb://zlov:0429935@ds019488.mlab.com:19488/heroku_n0v8cmmh");
  return _mongoose2.default.connection;
};
connect();

var articleRepository = new _articleRepository2.default();
var tagRepository = new _tagRepository2.default();
var userRepository = new _userRepository2.default();

exports.articleRepository = articleRepository;
exports.tagRepository = tagRepository;
exports.userRepository = userRepository;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleModel = function ArticleModel(id, title, text, tags, createDateTime, updateDateTime, user) {
  (0, _classCallCheck3.default)(this, ArticleModel);

  this.id = id;
  this.title = title;
  this.text = text;
  this.tags = tags;
  this.createDateTime = createDateTime;
  this.updateDateTime = updateDateTime;
  this.user = user;
};

exports.default = ArticleModel;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagModel = function TagModel(id, value, article_ids) {
  (0, _classCallCheck3.default)(this, TagModel);

  this.id = id;
  this.value = value;
  this.article_ids = article_ids;
};

exports.default = TagModel;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userService = exports.tagService = exports.articleService = undefined;

var _articleService = __webpack_require__(25);

var _articleService2 = _interopRequireDefault(_articleService);

var _tagService = __webpack_require__(26);

var _tagService2 = _interopRequireDefault(_tagService);

var _userService = __webpack_require__(27);

var _userService2 = _interopRequireDefault(_userService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleService = new _articleService2.default();
var tagService = new _tagService2.default();
var userService = new _userService2.default();

exports.articleService = articleService;
exports.tagService = tagService;
exports.userService = userService;

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = {
	"port": 8080,
	"bodyLimit": "100kb",
	"corsHeaders": [
		"Link"
	]
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _articleRoutes = __webpack_require__(15);

var _articleRoutes2 = _interopRequireDefault(_articleRoutes);

var _tagsRoutes = __webpack_require__(16);

var _tagsRoutes2 = _interopRequireDefault(_tagsRoutes);

var _userRoutes = __webpack_require__(30);

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/articles', _articleRoutes2.default);

router.use('/tags', _tagsRoutes2.default);

router.use('/users', _userRoutes2.default);

exports.default = router;

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _bloglog = __webpack_require__(10);

var _articleModel = __webpack_require__(8);

var _articleModel2 = _interopRequireDefault(_articleModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
  _bloglog.articleService.getRecent().then(function (result) {
    res.json(result);
  }).catch(function (errorResult) {
    res.json(errorResult);
  });
});

router.post('/', function (req, res, next) {

  _bloglog.articleService.add(new _articleModel2.default(null, req.body.title, req.body.text, req.body.tags, Date.now(), Date.now(), req.body.user)).then(function () {
    return res.sendStatus(200);
  }).catch(function (result) {
    return res.json(result);
  });
});

exports.default = router;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _bloglog = __webpack_require__(10);

var _tagModel = __webpack_require__(9);

var _tagModel2 = _interopRequireDefault(_tagModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {

  _bloglog.tagService.getTags().then(function (result) {
    res.json(result);
  }).catch(function (errorResult) {
    res.json(errorResult);
  });
});

router.post('/', function (req, res, next) {

  _bloglog.tagService.add(new _tagModel2.default(null, req.body.value, [])).then(function () {
    return res.sendStatus(200);
  }).catch(function (result) {
    return res.json(result);
  });
});

exports.default = router;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageResult = function PageResult(data, count) {
  (0, _classCallCheck3.default)(this, PageResult);

  this.data = data;
  this.count = count;
};

exports.default = PageResult;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserModel = function UserModel(id, name, email, password) {
  (0, _classCallCheck3.default)(this, UserModel);

  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
};

exports.default = UserModel;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleSchema = new _mongoose2.default.Schema({
    'title': {
        type: String,
        required: true
    },
    'text': {
        type: String,
        required: true
    },
    'tags': {
        type: String,
        default: []
    },
    'createDateTime': {
        type: Date,
        default: Date.now()
    },
    'updateDateTime': {
        type: Date,
        default: Date.now()
    },
    'user': {
        'user_id': {
            type: _mongoose2.default.Schema.Types.ObjectId,
            required: true
        },
        'name': {
            type: String,
            required: true
        }
    }
});

exports.default = _mongoose2.default.model('articles', articleSchema);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tagSchema = new _mongoose2.default.Schema({
	'value': {
		type: String,
		required: true,
		unique: true
	},
	'articles': {
		type: Array
	}
});

exports.default = _mongoose2.default.model('tags', tagSchema);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
	'name': {
		type: String,
		required: true,
		unique: true
	},
	'email': {
		type: String,
		required: true,
		unique: true
	},
	'password': {
		type: String,
		required: true
	}
});

exports.default = _mongoose2.default.model('users', userSchema);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articlesDataModel = __webpack_require__(19);

var _articlesDataModel2 = _interopRequireDefault(_articlesDataModel);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(17);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleRepository = function () {
    function ArticleRepository() {
        (0, _classCallCheck3.default)(this, ArticleRepository);
    }

    (0, _createClass3.default)(ArticleRepository, [{
        key: 'get',
        value: function get(skip, count) {
            var promise = new _promise2.default(function (resolve, reject) {
                _articlesDataModel2.default.find({}).sort('-createDateTime').skip(skip).limit(count).exec(function (err, articles) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    }

                    _articlesDataModel2.default.count(function (err, count) {
                        if (err) {
                            reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                        }

                        resolve(new _result2.default(new _pageResult2.default(articles, count), true, "", _resultCodes2.default.Success()));
                    });
                });
            });

            return promise;
        }
    }, {
        key: 'add',
        value: function add(article) {
            return _articlesDataModel2.default.create(article);
        }
    }]);
    return ArticleRepository;
}();

exports.default = ArticleRepository;
;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagDataModel = __webpack_require__(20);

var _tagDataModel2 = _interopRequireDefault(_tagDataModel);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagRepository = function () {
  function TagRepository() {
    (0, _classCallCheck3.default)(this, TagRepository);
  }

  (0, _createClass3.default)(TagRepository, [{
    key: 'get',
    value: function get() {

      return new _promise2.default(function (resolve, reject) {
        _tagDataModel2.default.find({}).exec(function (err, tags) {
          if (err) {
            reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
          }

          resolve(new _result2.default(tags, true, "", _resultCodes2.default.Success()));
        });
      });
    }
  }, {
    key: 'add',
    value: function add(tag) {
      return _tagDataModel2.default.create(tag);
    }
  }]);
  return TagRepository;
}();

exports.default = TagRepository;
;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _userDataModel = __webpack_require__(21);

var _userDataModel2 = _interopRequireDefault(_userDataModel);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRepository = function () {
  function UserRepository() {
    (0, _classCallCheck3.default)(this, UserRepository);
  }

  (0, _createClass3.default)(UserRepository, [{
    key: 'getById',
    value: function getById(id) {}
  }, {
    key: 'add',
    value: function add(user) {
      return _userDataModel2.default.create(user);
    }
  }]);
  return UserRepository;
}();

exports.default = UserRepository;
;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleModel = __webpack_require__(8);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _bloglog = __webpack_require__(7);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkArticle(article) {
  if (!article.title || article.title.length === 0 || article.title.length > 500) {
    return false;
  }

  if (!article.text || article.text.length === 0 || article.text.length > 10000) {
    return false;
  }

  return true;
}

var ArticleService = function () {
  function ArticleService() {
    (0, _classCallCheck3.default)(this, ArticleService);
  }

  (0, _createClass3.default)(ArticleService, [{
    key: 'getRecent',
    value: function getRecent() {
      return _bloglog.articleRepository.get(0, 10);
    }
  }, {
    key: 'add',
    value: function add(articleModel) {
      if (checkArticle(articleModel)) {
        return new _bloglog.articleRepository.add(articleModel);
      }

      return _promise2.default.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }]);
  return ArticleService;
}();

exports.default = ArticleService;
;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagModel = __webpack_require__(9);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _bloglog = __webpack_require__(7);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkTag(tag) {
  if (!tag.value || tag.value.length === 0 || tag.value.length > 50) {
    return false;
  }

  return true;
}

var TagService = function () {
  function TagService() {
    (0, _classCallCheck3.default)(this, TagService);
  }

  (0, _createClass3.default)(TagService, [{
    key: 'getTags',
    value: function getTags() {
      return _bloglog.tagRepository.get();
    }
  }, {
    key: 'add',
    value: function add(tagModel) {
      if (checkTag(tagModel)) {
        return new _bloglog.tagRepository.add(tagModel);
      }

      return _promise2.default.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }]);
  return TagService;
}();

exports.default = TagService;
;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _md = __webpack_require__(28);

var _userModel = __webpack_require__(18);

var _userModel2 = _interopRequireDefault(_userModel);

var _bloglog = __webpack_require__(7);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkUser(user) {
  if (!user.email || user.email.length === 0 || user.email.length > 50) {
    return false;
  }

  if (!user.name || user.name.length === 0 || user.name.length > 50) {
    return false;
  }

  if (!user.password || user.password.length === 0 || user.password.length > 50) {
    return false;
  }

  return true;
}

var TagService = function () {
  function TagService() {
    (0, _classCallCheck3.default)(this, TagService);
  }

  (0, _createClass3.default)(TagService, [{
    key: 'getTags',
    value: function getTags() {
      return tagRepository.get();
    }
  }, {
    key: 'add',
    value: function add(userModel) {
      if (checkUser(userModel)) {
        userModel.password = _md.Md5.hashStr(userModel.password);
        return new _bloglog.userRepository.add(userModel);
      }

      return _promise2.default.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }]);
  return TagService;
}();

exports.default = TagService;
;

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("ts-md5/dist/md5");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(14);

var _http2 = _interopRequireDefault(_http);

var _bodyParser = __webpack_require__(13);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = __webpack_require__(11);

var _config2 = _interopRequireDefault(_config);

var _bloglog = __webpack_require__(12);

var _bloglog2 = _interopRequireDefault(_bloglog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use(_bodyParser2.default.json());

app.use('/api', _bloglog2.default);

app.server.listen(process.env.PORT || _config2.default.port);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _bloglog = __webpack_require__(10);

var _userModel = __webpack_require__(18);

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/:id', function (req, res, next) {
  res.end("not yet implemented");
});

router.post('/', function (req, res, next) {

  _bloglog.userService.add(new _userModel2.default(null, req.body.name, req.body.email, req.body.password)).then(function () {
    return res.sendStatus(200);
  }).catch(function (result) {
    return res.json(result);
  });
});

exports.default = router;

/***/ }
/******/ ]);