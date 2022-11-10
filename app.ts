import { ControllerAliment } from './controller/controllerAliment';
import { ControllerPlat } from './controller/controllerPlat';
import { ControllerUser } from './controller/controllerUser';
import { swaggerDocument } from './swagger';

const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = process.env.PORT || 8888;
/**
 * On créé une nouvelle "application" express
 */
const app = express();
const bodyParser = require('body-parser');
app.use(cookieParser());
app.listen(port);

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Bearer'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );

  next();
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const { adminAuth, userAuth } = require('./middleware/auth.js');

// ROUTES ALIMENTS
app.get('/', (req, res) => res.send('🏠👌'));
app.get('/aliments', ControllerAliment.getAliments);
app.get('/aliments/type/:type', ControllerAliment.getAlimentsByType);
app.get('/aliments/:id', ControllerAliment.getOneAliments);
app.post('/aliments', ControllerAliment.insertAliment);
app.delete('/aliments/:id', ControllerAliment.deleteAliment);
app.put('/aliments/:id', ControllerAliment.updateAliment);

// ROUTES PLATS
app.get('/plats', ControllerPlat.getPlat);
app.get('/plats/:id', ControllerPlat.getOnePlat);
app.get('/plats/type/:type', ControllerPlat.getPlatByType);
app.post('/plats', ControllerPlat.insertPlat);
app.delete('/plats/:id', ControllerPlat.deletePlat);
app.put('/plats/:id', ControllerPlat.updatePlat);

// ROUTES USER
app.post('/signup', ControllerUser.signup);
app.post('/login', ControllerUser.login);
app.put('/user/update', userAuth, ControllerUser.update);
app.delete('/users/:id', userAuth, ControllerUser.delete);
app.get('/users', adminAuth, ControllerUser.getUsers);
app.get('/users/:id', userAuth, ControllerUser.getUser);

app.get('/logout', (req, res) => {
  res.cookie('jwt', '', { maxAge: '1' });
  res.redirect('/');
});

async function main() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost/Gestion_stock'
    );
    console.log('Connection mongodb ok');
  } catch (e) {
    console.log(e);
  }
}

main();
