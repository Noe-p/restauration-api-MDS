import {
  deleteAliment,
  getAliments,
  getAlimentsById,
  getAlimentsByType,
  postAliment,
  putAliment,
} from './openApi/aliments.swagger';

export const swaggerDocument = {
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
  },
};
