import {
  deleteAliment,
  getAliments,
  getAlimentsById,
  getAlimentsByType,
  postAliment,
  putAliment
} from './openApi/aliments.swagger';
import {
  deletePlat,
  getPlats,
  getPlatsById,
  getPlatsByType,
  postPlat,
  putPlat
} from './openApi/plats.swagger';
import {
  deleteUser,
  getUserById,
  getUsers,
  postUser,
  putUser
} from './openApi/users.swagger';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Restauration APIs Document',
    description:
      "- Token d'auhentification PROD: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI4NjdkN2NiNTAxY2QyNGY1MGY0MSIsInVzZXJuYW1lIjoibm9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY5MDE4NTczLCJleHAiOjE2NjkwMjkzNzN9.o4BUPTsUYV2bnFsLpEXIkomy73pWzVBDIXty6MBmPaA",

      "- Token d'auhentification DEV: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI4NjdkN2NiNTAxY2QyNGY1MGY0MSIsInVzZXJuYW1lIjoibm9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY4NTg5OTk5LCJleHAiOjE2Njg2MDA3OTl9.Ru6JcVKxWSaLewgRkOlqh3hp2C5dy-nsKBqwDhpDi5o",
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
      get: getAliments,
      post: postAliment,
    },
    '/aliments/type/{type}': {
      get: getAlimentsByType,
    },
    '/aliments/{id}': {
      get: getAlimentsById,
      put: putAliment,
      delete: deleteAliment,
    },
    '/plats': {
      get: getPlats,
      post: postPlat,
    },
    '/plats/type/{type}': {
      get: getPlatsByType,
    },
    '/plats/{id}': {
      get: getPlatsById,
      put: putPlat,
      delete: deletePlat,
    },
    '/signup': {
      post: postUser,
    },
    '/users': {
      get: getUsers,
    },
    '/users/{id}': {
      get: getUserById,
      delete: deleteUser,
    },
    '/user/update': {
      put: putUser,
    },
  },
};
