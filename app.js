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
var controllerAliment_1 = require("./controller/controllerAliment");
var controllerPlat_1 = require("./controller/controllerPlat");
var controllerUser_1 = require("./controller/controllerUser");
var mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
require('dotenv').config();
var port = process.env.PORT || 8888;
/**
 * On créé une nouvelle "application" express
 */
var app = express();
var bodyParser = require('body-parser');
app.use(cookieParser());
app.listen(port);
/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Bearer');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// ROUTES ALIMENTS
app.get('/', function (req, res) { return res.send('🏠👌'); });
app.get('/aliments', controllerAliment_1.ControllerAliment.getAliments);
app.get('/aliments/type/:type', controllerAliment_1.ControllerAliment.getAlimentsByType);
app.get('/aliments/:id', controllerAliment_1.ControllerAliment.getOneAliments);
app.post('/aliments', controllerAliment_1.ControllerAliment.insertAliment);
app.delete('/aliments/:id', controllerAliment_1.ControllerAliment.deleteAliment);
app.put('/aliments/:id', controllerAliment_1.ControllerAliment.updateAliment);
// ROUTES PLATS
app.get('/plats', controllerPlat_1.ControllerPlat.getPlat);
app.get('/plats/:id', controllerPlat_1.ControllerPlat.getOnePlat);
app.get('/plats/type/:type', controllerPlat_1.ControllerPlat.getPlatByType);
app.post('/plats', controllerPlat_1.ControllerPlat.insertPlat);
app.delete('/plats/:id', controllerPlat_1.ControllerPlat.deletePlat);
app.put('/plats/:id', controllerPlat_1.ControllerPlat.updatePlat);
// ROUTES USER
var _a = require('./middleware/auth.js'), adminAuth = _a.adminAuth, userAuth = _a.userAuth;
app.post('/signup', controllerUser_1.ControllerUser.signup);
app.post('/login', controllerUser_1.ControllerUser.login);
app.put('/users/update', adminAuth, controllerUser_1.ControllerUser.update);
app.delete('/users/delete', adminAuth, controllerUser_1.ControllerUser.delete);
app.get('/users', adminAuth, controllerUser_1.ControllerUser.getUsers);
app.get('/users/:id', userAuth, controllerUser_1.ControllerUser.getUser);
app.get('/logout', function (req, res) {
    res.cookie('jwt', '', { maxAge: '1' });
    res.redirect('/');
});
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Gestion_stock')];
                case 1:
                    _a.sent();
                    console.log('Connection mongodb ok');
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// const navet = new AlimentModel({
//   nom: 'Navet', // String isshorthandfor {type: String}
//   type: 'légume',
//   quantite: 50,
//   date: new Date(),
// });
// navet.save(function (err) {
//   if (err) console.log(err); // Ok !
// });
// // Pour insérer plusieurs aliments à la fois
// AlimentModel.insertMany(
//   [
//     { nom: 'Navet', type: 'légume', quantite: 50, date: new Date() },
//     { nom: 'Pain à burger', type: 'epicerie', quantite: 20, date: new Date() },
//     { nom: 'Cheddar', type: 'fromage', quantite: 20, date: new Date() },
//   ],
//   function (err) {}
// );
main();
//# sourceMappingURL=app.js.map