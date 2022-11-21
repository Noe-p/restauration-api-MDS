export const getPlats = {
  tags: ['Plat'],
  description: 'Retourne tous les plats',

  responses: {
    '200': {
      description: 'Liste des plats',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '6365136c6f92a7afa2a4ebd1',
              },
              nom: {
                type: 'string',
                example: 'Burger',
              },
              type: {
                type: 'string',
                example: 'principal',
              },
              image: {
                type: 'string',
                example: 'url of your image',
              },
              prix: {
                type: 'integer',
                example: 8,
              },
              description: {
                type: 'string',
                example:
                  "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis de steak haché et de crudités, salade, tomate, oignon, cornichon, et de sauce…",
              },
              plats: {
                type: 'array',
                example: [
                  {
                    quantite: 1,
                    platId: '6363bddcfbb45b32f05708bb',
                  },
                  {
                    quantite: 1,
                    platId: '6363bdf1fbb45b32f05708bf',
                  },
                  {
                    quantite: 1,
                    platId: '6363bdf8fbb45b32f05708c1',
                  },
                ],
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

export const getPlatsByType = {
  tags: ['Plat'],
  description: "Retourne tous les plats en fonction d'un type",

  parameters: [
    {
      in: 'path',
      name: 'type',
      required: true,
      schema: {
        type: 'string',
        enum: ['principal', 'entree', 'dessert'],
      },
    },
  ],
  responses: {
    '200': {
      description: "Liste des plats en fonction d'un type",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '6365136c6f92a7afa2a4ebd1',
              },
              nom: {
                type: 'string',
                example: 'Burger',
              },
              type: {
                type: 'string',
                example: 'principal',
              },
              image: {
                type: 'string',
                example: 'url of your image',
              },
              prix: {
                type: 'integer',
                example: 8,
              },
              description: {
                type: 'string',
                example:
                  "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis de steak haché et de crudités, salade, tomate, oignon, cornichon, et de sauce…",
              },
              plats: {
                type: 'array',
                example: [
                  {
                    quantite: 1,
                    platId: '6363bddcfbb45b32f05708bb',
                  },
                  {
                    quantite: 1,
                    platId: '6363bdf1fbb45b32f05708bf',
                  },
                  {
                    quantite: 1,
                    platId: '6363bdf8fbb45b32f05708c1',
                  },
                ],
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

export const getPlatsById = {
  tags: ['Plat'],
  description: 'Retourne un plat en fonction de son ID',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'string',
        example: '636cc47209cd841bdbae1869',
      },
    },
  ],
  responses: {
    '200': {
      description: 'Retourne un plat en fonction de son ID',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '6365136c6f92a7afa2a4ebd1',
              },
              nom: {
                type: 'string',
                example: 'Burger',
              },
              type: {
                type: 'string',
                example: 'principal',
              },
              image: {
                type: 'string',
                example: 'url of your image',
              },
              prix: {
                type: 'integer',
                example: 8,
              },
              description: {
                type: 'string',
                example:
                  "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis de steak haché et de crudités, salade, tomate, oignon, cornichon, et de sauce…",
              },
              plats: {
                type: 'array',
                example: [
                  {
                    quantite: 1,
                    platId: '6363bddcfbb45b32f05708bb',
                  },
                  {
                    quantite: 1,
                    platId: '6363bdf1fbb45b32f05708bf',
                  },
                  {
                    quantite: 1,
                    platId: '6363bdf8fbb45b32f05708c1',
                  },
                ],
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

export const postPlat = {
  tags: ['Plat'],
  description: 'Créer un plat',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      in: 'body',
      name: 'plat',
      consumes: 'application/json',
      required: true,
      schema: {
        type: 'object',
        properties: {
          nom: {
            type: 'string',
            example: 'Burger',
          },
          type: {
            type: 'string',
            example: 'principal',
          },
          image: {
            type: 'string',
            example: 'url of your image',
          },
          prix: {
            type: 'integer',
            example: 8,
          },
          description: {
            type: 'string',
            example:
              "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis de steak haché et de crudités, salade, tomate, oignon, cornichon, et de sauce…",
          },
          plats: {
            type: 'array',
            example: [
              {
                quantite: 1,
                platId: '6363bddcfbb45b32f05708bb',
              },
              {
                quantite: 1,
                platId: '6363bdf1fbb45b32f05708bf',
              },
              {
                quantite: 1,
                platId: '6363bdf8fbb45b32f05708c1',
              },
            ],
          },
        },
      },
    },
  ],
  responses: {
    '201': {
      description: 'Plat créé',
    },
  },
};

export const putPlat = {
  tags: ['Plat'],
  description: 'Modifier un plat',
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
        example: '6365136c6f92a7afa2a4ebd1',
      },
    },
    {
      in: 'body',
      name: 'plat',
      consumes: 'application/json',
      required: true,
      schema: {
        type: 'object',
        properties: {
          nom: {
            type: 'string',
            example: 'Burger',
          },
          type: {
            type: 'string',
            example: 'principal',
          },
          image: {
            type: 'string',
            example: 'url of your image',
          },
          prix: {
            type: 'integer',
            example: 8,
          },
          description: {
            type: 'string',
            example:
              "Un hamburger, ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis de steak haché et de crudités, salade, tomate, oignon, cornichon, et de sauce…",
          },
          plats: {
            type: 'array',
            example: [
              {
                quantite: 1,
                platId: '6363bddcfbb45b32f05708bb',
              },
              {
                quantite: 1,
                platId: '6363bdf1fbb45b32f05708bf',
              },
              {
                quantite: 1,
                platId: '6363bdf8fbb45b32f05708c1',
              },
            ],
          },
        },
      },
    },
  ],
  responses: {
    '204': {
      description: 'Plat modifié',
    },
  },
};

export const deletePlat = {
  tags: ['Plat'],
  description: 'Supprimer un plat',
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
        example: '6365136c6f92a7afa2a4ebd1',
      },
    },
  ],
  responses: {
    '204': {
      description: 'Plat supprimé',
    },
  },
};
