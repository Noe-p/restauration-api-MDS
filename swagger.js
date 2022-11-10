"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
var aliments_swagger_1 = require("./openApi/aliments.swagger");
exports.swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Restauration APIs Document',
        description: 'your description here',
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
    },
};
//# sourceMappingURL=swagger.js.map