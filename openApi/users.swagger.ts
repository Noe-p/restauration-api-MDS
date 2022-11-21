export const getUsers = {
  tags: ['Users'],
  description: 'Retourne tous les utilisateurs',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Liste des utilisateurs',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '636b867d7cb501cd24f50f41',
              },
              username: {
                type: 'string',
                example: 'noe',
              },
              password: {
                type: 'string',
                example:
                  '$2a$10$tI3XFPcq4bYkbABSP1xVc.dmqi6wchxGMOQlrME2I.c9gnRbVPu5W',
              },
              role: {
                type: 'string',
                example: 'admin',
              },
              address: {
                type: 'integer',
                example: '1§ rue des Lilas',
              },
              email: {
                type: 'string',
                example: 'noephilippe29@gmail.com',
              },
              phone: {
                type: 'string',
                example: '0781533191',
              },
              country: {
                type: 'string',
                example: 'France',
              },
            },
          },
        },
      },
    },
  },
};

export const getUserById = {
  tags: ['Users'],
  description: 'Retourne un utilisateur en fonction de son ID',
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
        example: '636b867d7cb501cd24f50f41',
      },
    },
  ],
  responses: {
    '200': {
      description: 'Retourne un utilisateur en fonction de son ID',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '636b867d7cb501cd24f50f41',
              },
              username: {
                type: 'string',
                example: 'noe',
              },
              password: {
                type: 'string',
                example:
                  '$2a$10$tI3XFPcq4bYkbABSP1xVc.dmqi6wchxGMOQlrME2I.c9gnRbVPu5W',
              },
              role: {
                type: 'string',
                example: 'admin',
              },
              address: {
                type: 'integer',
                example: '1§ rue des Lilas',
              },
              email: {
                type: 'string',
                example: 'noephilippe29@gmail.com',
              },
              phone: {
                type: 'string',
                example: '0781533191',
              },
              country: {
                type: 'string',
                example: 'France',
              },
            },
          },
        },
      },
    },
  },
};

export const postUser = {
  tags: ['Users'],
  description: 'Créer un utilisateur',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      in: 'body',
      name: 'user',
      consumes: 'application/json',
      required: true,
      schema: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
            example: 'noe',
          },
          role: {
            type: 'string',
            example: 'admin',
          },
          address: {
            type: 'integer',
            example: '1§ rue des Lilas',
          },
          email: {
            type: 'string',
            example: 'noephilippe29@gmail.com',
          },
          password: {
            type: 'string',
            example:
              '$2a$10$tI3XFPcq4bYkbABSP1xVc.dmqi6wchxGMOQlrME2I.c9gnRbVPu5W',
          },
          phone: {
            type: 'string',
            example: '0781533191',
          },
          country: {
            type: 'string',
            example: 'France',
          },
        },
      },
    },
  ],
  responses: {
    '201': {
      description: 'Ustilisateur créé',
    },
  },
};

export const putUser = {
  tags: ['Users'],
  description: 'Modifier un utilisateur',
  security: [
    {
      bearerAuth: [],
    },
  ],

  parameters: [
    {
      in: 'body',
      consumes: 'application/json',
      required: true,
      schema: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '636b867d7cb501cd24f50f41',
          },
          username: {
            type: 'string',
            example: 'noe',
          },
          role: {
            type: 'string',
            example: 'admin',
          },
          address: {
            type: 'string',
            example: '16 rue des Lilas',
          },
          email: {
            type: 'string',
            example: 'noephilippe29@gmail.com',
          },
          phone: {
            type: 'string',
            example: '0781533191',
          },
          country: {
            type: 'string',
            example: 'France',
          },
        },
      },
    },
  ],
  responses: {
    '204': {
      description: 'Users modifié',
    },
  },
};

export const deleteUser = {
  tags: ['Users'],
  description: 'Supprimer un utilisateur',
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
        example: '636b867d7cb501cd24f50f41',
      },
    },
  ],
  responses: {
    '204': {
      description: 'Utilisateur supprimé',
    },
  },
};
