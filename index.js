// import config from './config';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { postToken } from './src/endpoints/token';
import { getGames, getGame, postGame } from './src/endpoints/games';
import { getAccount, getAccounts, postAccount } from './src/endpoints/accounts';

let mongoose = require('mongoose');

const APP = express();
const PORT = process.env.PORT || 3099;

 mongoose.Promise = global.Promise;
  let options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
  };

 let db = mongoose.connect('mongodb://localhost:27017/imperium', options);
 //db.on('error', console.error.bind(console, 'connection error:'));
 //db.once('open', function(){
 //
 //});

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(morgan('dev'));

// APP.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
//    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// });

APP.route('/token')
  .post(postToken);

APP.route('/games')
  .get(getGames)
  .post(postGame);

APP.route('/games/:id')
  .get(getGame);

APP.route('/accounts')
  .get(getAccounts);

APP.route('/accounts')
  .post(postAccount);

APP.route('/accounts/:id')
  .get(getAccount);

APP.route('*').get((req, res) => {
    res.json({ message: 'success' });
});

APP.listen(PORT);

console.log(`api server started on port ${PORT}`);