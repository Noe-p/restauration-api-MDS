"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
var aliments_swagger_1 = require("./openApi/aliments.swagger");
var plats_swagger_1 = require("./openApi/plats.swagger");
var users_swagger_1 = require("./openApi/users.swagger");
exports.swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Restauration APIs Document',
        description: "Token d'auhentification : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI4NjdkN2NiNTAxY2QyNGY1MGY0MSIsInVzZXJuYW1lIjoibm9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTg5OTk5LCJleHAiOjE2Njg2MDA3OTl9.Ru6JcVKxWSaLewgRkOlqh3hp2C5dy-nsKBqwDhpDi5o",
        termsOfService: '',
        contact: {
            name: 'Noé PHILIPPE',
            email: 'noephilippe29@gmail.com',
            url: 'https://noe-philippe.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
    },
    securityDefinitions: {
        bearerAuth: {
            type: 'bearer',
        },
    },
    security: {
        bearerAuth: [],
    },
    servers: [
        {
            url: 'http://localhost:8888',
            description: 'localhost',
        },
        {
            url: 'https://restauration-api--mds.herokuapp.com/',
            description: 'heroku',
        },
    ],
    paths: {
        '/aliments': {
            get: aliments_swagger_1.getAliments,
            post: aliments_swagger_1.postAliment,
        },
        '/aliments/type/{type}': {
            get: aliments_swagger_1.getAlimentsByType,
        },
        '/aliments/{id}': {
            get: aliments_swagger_1.getAlimentsById,
            put: aliments_swagger_1.putAliment,
            delete: aliments_swagger_1.deleteAliment,
        },
        '/plats': {
            get: plats_swagger_1.getPlats,
            post: plats_swagger_1.postPlat,
        },
        '/plats/type/{type}': {
            get: plats_swagger_1.getPlatsByType,
        },
        '/plats/{id}': {
            get: plats_swagger_1.getPlatsById,
            put: plats_swagger_1.putPlat,
            delete: plats_swagger_1.deletePlat,
        },
        '/signup': {
            post: users_swagger_1.postUser,
        },
        '/users': {
            get: users_swagger_1.getUsers,
        },
        '/users/{id}': {
            get: users_swagger_1.getUserById,
            delete: users_swagger_1.deleteUser,
        },
        '/user/update': {
            put: users_swagger_1.putUser,
        },
    },
};
//# sourceMappingURL=swagger.js.map