"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAliment = exports.putAliment = exports.postAliment = exports.getAlimentsById = exports.getAlimentsByType = exports.getAliments = void 0;
exports.getAliments = {
    tags: ['Récupérer les aliments'],
    description: 'Retourne tous les aliments',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Liste des aliments',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '6363bdd6fbb45b32f05708b9',
                            },
                            nom: {
                                type: 'string',
                                example: 'Pain burger',
                            },
                            type: {
                                type: 'string',
                                example: 'condiment',
                            },
                            quantiteInStock: {
                                type: 'integer',
                                example: 15,
                            },
                            date: {
                                type: 'string',
                                format: 'date',
                                example: '2022-11-03T13:10:46.931Z',
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.getAlimentsByType = {
    tags: ['Récupérer les aliments par type'],
    description: "Retourne tous les aliments en fonction d'un type",
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'type',
            required: true,
            schema: {
                type: 'string',
                enum: [
                    'condiment',
                    'legume',
                    'fruit',
                    'viande',
                    'fromage',
                    'sauce',
                    'sucre',
                    'pate',
                ],
            },
        },
    ],
    responses: {
        '200': {
            description: "Liste des aliments en fonction d'un type",
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '6363bdd6fbb45b32f05708b9',
                            },
                            nom: {
                                type: 'string',
                                example: 'Pain burger',
                            },
                            type: {
                                type: 'string',
                                example: 'condiment',
                            },
                            quantiteInStock: {
                                type: 'integer',
                                example: 15,
                            },
                            date: {
                                type: 'string',
                                format: 'date',
                                example: '2022-11-03T13:10:46.931Z',
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.getAlimentsById = {
    tags: ['Récupérer un aliment avec son ID'],
    description: "Retourne tous les aliments en fonction d'un ID",
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                type: 'string',
                example: '6363bdd6fbb45b32f05708b9',
            },
        },
    ],
    responses: {
        '200': {
            description: "Liste des aliments en fonction d'un type",
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '6363bdd6fbb45b32f05708b9',
                            },
                            nom: {
                                type: 'string',
                                example: 'Pain burger',
                            },
                            type: {
                                type: 'string',
                                example: 'condiment',
                            },
                            quantiteInStock: {
                                type: 'integer',
                                example: 15,
                            },
                            date: {
                                type: 'string',
                                format: 'date',
                                example: '2022-11-03T13:10:46.931Z',
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.postAliment = {
    tags: ['Créer un aliment'],
    description: 'Créer un aliment',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'body',
            name: 'aliment',
            consumes: 'application/json',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    nom: {
                        type: 'string',
                        example: 'Pain burger',
                    },
                    type: {
                        type: 'string',
                        example: 'condiment',
                    },
                    quantiteInStock: {
                        type: 'integer',
                        example: 15,
                    },
                },
            },
        },
    ],
    responses: {
        '201': {
            description: 'Aliment créé',
        },
    },
};
exports.putAliment = {
    tags: ['Modifier un aliment'],
    description: 'Modifier un aliment',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                type: 'string',
                example: '6363bdd6fbb45b32f05708b9',
            },
        },
        {
            in: 'body',
            name: 'aliment',
            consumes: 'application/json',
            required: true,
            schema: {
                type: 'object',
                properties: {
                    nom: {
                        type: 'string',
                        example: 'Pain burger 2',
                    },
                    type: {
                        type: 'string',
                        example: 'condiment',
                    },
                    quantiteInStock: {
                        type: 'integer',
                        example: 7,
                    },
                },
            },
        },
    ],
    responses: {
        '204': {
            description: 'Aliment modifié',
        },
    },
};
exports.deleteAliment = {
    tags: ['Supprimer un aliment'],
    description: 'Supprimer un aliment',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                type: 'string',
                example: '6363bdd6fbb45b32f05708b9',
            },
        },
    ],
    responses: {
        '204': {
            description: 'Aliment supprimé',
        },
    },
};
//# sourceMappingURL=aliments.swagger.js.map