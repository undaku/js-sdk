/*!
 * undaku-js-sdk v1.0.0
 * (c) undefined
 * Released under the ISC License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var UndakuSdk = /** @class */ (function () {
    function UndakuSdk(instance, token, baseUrl, appId, appSecret, username, password) {
        if (token === void 0) { token = ''; }
        if (baseUrl === void 0) { baseUrl = 'http://api/undaku.com'; }
        this.instance = instance;
        this.token = token;
        this.baseUrl = baseUrl;
        this.appId = appId;
        this.appSecret = appSecret;
        this.username = username;
        this.password = password;
    }
    UndakuSdk.prototype.fetchToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = "/api/session";
                        return [4 /*yield*/, axios__default["default"].get(url, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                                params: { appId: this.appId, appSecret: this.appSecret },
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, ((response.data &&
                                response.data.data &&
                                response.data.data.freshToken) ||
                                null)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios__default["default"].post("/api/login", {
                                username: this.username,
                                password: this.password,
                                instance: this.instance,
                            }, {
                                headers: this.getHeaders({}, true),
                                baseURL: this.baseUrl,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data.createdId];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.appId && this.appSecret)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.fetchToken()];
                    case 1:
                        _a.token = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.getToken()];
                    case 3:
                        _b.token = _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.getHeaders = function (customHeaders, skipToken, instance, token) {
        if (skipToken === void 0) { skipToken = false; }
        token = token || this.token;
        var reqSource = 'Runtime';
        var defaultHeader = { 'request-source': reqSource };
        defaultHeader['un-origin'] = instance || this.instance;
        var headers = skipToken || !token || token.length === 0
            ? __assign(__assign({}, defaultHeader), customHeaders) : __assign(__assign({}, defaultHeader), { Authorization: "bearer ".concat(token) });
        return headers;
    };
    UndakuSdk.prototype.search = function (form, query, reportId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, page, pageSize, records, url, searchId, searchPayload, recordsResponse, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        page = query.page || 1;
                        pageSize = query.pageSize || 1000;
                        records = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        url = "/api/search/".concat(form);
                        return [4 /*yield*/, axios__default["default"].post(url, query, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                            })];
                    case 2:
                        response = _a.sent();
                        searchId = response.data.createdId;
                        searchPayload = {
                            page: page,
                            pageSize: pageSize,
                            reportId: reportId,
                            form: form,
                            searchId: searchId,
                            splitColumns: true,
                        };
                        return [4 /*yield*/, axios__default["default"].get("/api/search", {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                                params: searchPayload,
                            })];
                    case 3:
                        recordsResponse = _a.sent();
                        records =
                            (recordsResponse.data &&
                                recordsResponse.data.data &&
                                recordsResponse.data.data.records) ||
                                [];
                        return [2 /*return*/, { data: records, error: null }];
                    case 4:
                        ex_1 = _a.sent();
                        return [2 /*return*/, { data: [], error: ex_1 }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.createRecord = function (form, record) {
        return __awaiter(this, void 0, void 0, function () {
            var response, url, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = "/api/record/".concat(form);
                        return [4 /*yield*/, axios__default["default"].post(url, record, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, { data: response.data.createdId, error: null }];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, { error: error_3 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.getRecord = function (form, recordId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, url, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = "/api/record/".concat(form, "/").concat(recordId);
                        return [4 /*yield*/, axios__default["default"].get(url, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, { data: response.data, error: null }];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, { error: error_4 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.deleteRecord = function (form, recordId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, url, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = "/api/record/".concat(form, "/").concat(recordId);
                        return [4 /*yield*/, axios__default["default"].delete(url, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, { data: response.data, error: null }];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, { error: error_5 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.getRecordCount = function (form, query) {
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.search(form, query)];
                    case 1:
                        records = _a.sent();
                        return [2 /*return*/, records.error ? -1 : (records.data && records.data.length) || 0];
                }
            });
        });
    };
    UndakuSdk.prototype.checkIfRecordExist = function (form, query) {
        return __awaiter(this, void 0, void 0, function () {
            var recordLength;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordCount(form, query)];
                    case 1:
                        recordLength = _a.sent();
                        return [2 /*return*/, recordLength > 0 ? 1 : recordLength < 0 ? -1 : 1];
                }
            });
        });
    };
    UndakuSdk.prototype.updateRecord = function (form, record) {
        return __awaiter(this, void 0, void 0, function () {
            var response, url, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        if (record.referenceId)
                            delete record.referenceId;
                        if (!record || !record.id) {
                            return [2 /*return*/, { error: 'Record Id Is Missing' }];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = "/api/record/".concat(form, "/").concat(record.id);
                        return [4 /*yield*/, axios__default["default"].put(url, record, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, { data: response.data.createdId, error: null }];
                    case 3:
                        error_6 = _a.sent();
                        return [2 /*return*/, { error: error_6 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.serializeToQueryString = function (obj, prefix) {
        var str = [];
        var p;
        for (p in obj) {
            // eslint-disable-next-line no-prototype-builtins
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + '[' + p + ']' : p;
                var v = obj[p];
                str.push(v !== null && typeof v === 'object'
                    ? this.serializeToQueryString(v, k)
                    : encodeURIComponent(k) + '=' + encodeURIComponent(v));
            }
        }
        return str.join('&');
    };
    UndakuSdk.prototype.getReferences = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, paramString, url, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        paramString = this.serializeToQueryString(query);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = "/api/references?".concat(paramString);
                        return [4 /*yield*/, axios__default["default"].get(url, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, { data: response.data && response.data.data.records, error: null }];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, { error: error_7 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UndakuSdk.prototype.fetchSubInstances = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, url, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = "/api/sub/".concat(this.instance);
                        return [4 /*yield*/, axios__default["default"].get(url, {
                                headers: this.getHeaders({}),
                                baseURL: this.baseUrl,
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, { data: (response.data && response.data.data) || [], error: null }];
                    case 3:
                        error_8 = _a.sent();
                        return [2 /*return*/, { error: error_8 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UndakuSdk;
}());
exports.PermissionLevel = void 0;
(function (PermissionLevel) {
    PermissionLevel["None"] = "None";
    PermissionLevel["Read"] = "Read";
    PermissionLevel["Write"] = "Write";
    PermissionLevel["Full"] = "Full";
})(exports.PermissionLevel || (exports.PermissionLevel = {}));
exports.ObjectPermissionSource = void 0;
(function (ObjectPermissionSource) {
    ObjectPermissionSource["RecordPermissionField"] = "RecordPermissionField";
    ObjectPermissionSource["Form"] = "Form";
    ObjectPermissionSource["Action"] = "Action";
    ObjectPermissionSource["Default"] = "Default";
})(exports.ObjectPermissionSource || (exports.ObjectPermissionSource = {}));

exports.UndakuSdk = UndakuSdk;
//# sourceMappingURL=index.cjs.map
