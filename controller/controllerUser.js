"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUser = void 0;
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var jwtSecret = 'b3c3edce64ea5bb02c7e19c7960faf2b0f5b9b88659441a1a25584e28c803566d632f2';
var ControllerUser = /** @class */ (function () {
    function ControllerUser() {
    }
    var _a;
    _a = ControllerUser;
    ControllerUser.signup = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, username, password, country, role, phone, email, address;
        return __generator(_a, function (_c) {
            _b = req.body, username = _b.username, password = _b.password, country = _b.country, role = _b.role, phone = _b.phone, email = _b.email, address = _b.address;
            if (password.length < 6) {
                return [2 /*return*/, res
                        .status(400)
                        .json({ message: 'Password less than 6 characters' })];
            }
            bcrypt.hash(password, 10).then(function (hash) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, User.create({
                                username: username,
                                password: hash,
                                role: role,
                                phone: phone,
                                email: email,
                                address: address,
                                country: country,
                            })
                                .then(function (user) {
                                var maxAge = 3 * 60 * 60;
                                var token = jwt.sign({ id: user._id, username: username, role: user.role }, jwtSecret, {
                                    expiresIn: maxAge, // 3hrs in sec
                                });
                                res.cookie('jwt', token, {
                                    httpOnly: true,
                                    maxAge: maxAge * 1000, // 3hrs in ms
                                });
                                res.status(201).json({
                                    message: 'User successfully created',
                                    user: user._id,
                                });
                            })
                                .catch(function (error) {
                                return res.status(400).json({
                                    message: 'User not successful created',
                                    error: error.message,
                                });
                            })];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); };
    ControllerUser.update = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, role, id, email, username, phone, address, country;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, role = _b.role, id = _b.id, email = _b.email, username = _b.username, phone = _b.phone, address = _b.address, country = _b.country;
                    if (!(role && id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, User.findById(id)
                            .then(function (user) {
                            user.username = username;
                            user.role = role;
                            user.phone = phone;
                            user.email = email;
                            user.address = address;
                            user.country = country;
                            user.save(function (err) {
                                //Monogodb error checker
                                if (err) {
                                    res
                                        .status('400')
                                        .json({ message: 'An error occurred', error: err.message });
                                    process.exit(1);
                                }
                                res.status('201').json({ message: 'Update successful', user: user });
                            });
                        })
                            .catch(function (error) {
                            res
                                .status(400)
                                .json({ message: 'An error occurred', error: error.message });
                        })];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    ControllerUser.login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, username, password, user_1, error_1;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, username = _b.username, password = _b.password;
                    if (!username || !password) {
                        return [2 /*return*/, res.status(400).json({
                                message: 'Identifiant ou mot de passe incorrecte',
                            })];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, User.findOne({ username: username })];
                case 2:
                    user_1 = _c.sent();
                    if (!user_1) {
                        res.status(401).json({
                            message: 'Echec de connection',
                            error: 'Utilisateur non trouvé',
                        });
                    }
                    else {
                        bcrypt.compare(password, user_1.password).then(function (result) {
                            if (result) {
                                var maxAge = 3 * 60 * 60;
                                var token = jwt.sign({ id: user_1._id, username: username, role: user_1.role }, jwtSecret, {
                                    expiresIn: maxAge, // 3hrs in sec
                                });
                                res.cookie('jwt', token, {
                                    httpOnly: true,
                                    maxAge: maxAge * 1000, // 3hrs in ms
                                });
                                res.status(201).json({
                                    message: '',
                                    user: user_1._id,
                                    token: token,
                                });
                            }
                            else {
                                res.status(400).json({ message: 'Echec de connection' });
                            }
                        });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    res.status(400).json({
                        message: 'An error occurred',
                        error: error_1.message,
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    ControllerUser.delete = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var userId;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = req.params.id;
                    return [4 /*yield*/, User.findById(userId)
                            .then(function (user) { return user.remove(); })
                            .then(function (user) {
                            return res.status(201).json({ message: 'User successfully deleted', user: user });
                        })
                            .catch(function (error) {
                            return res
                                .status(400)
                                .json({ message: 'An error occurred', error: error.message });
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    ControllerUser.getUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, User.find({})
                        .then(function (users) {
                        res.status(200).json(users);
                    })
                        .catch(function (err) {
                        return res.status(401).json({ message: 'Not successful', error: err.message });
                    })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    ControllerUser.getUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, userDetail;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = req.params.id;
                    return [4 /*yield*/, User.findOne({ _id: userId })];
                case 1:
                    userDetail = _b.sent();
                    res.send(userDetail);
                    return [2 /*return*/];
            }
        });
    }); };
    return ControllerUser;
}());
exports.ControllerUser = ControllerUser;
//# sourceMappingURL=controllerUser.js.map