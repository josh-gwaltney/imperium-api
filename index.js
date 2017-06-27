// import config from './config';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

const APP = express();
const PORT = process.env.PORT || 3099;

// mongoose.Promise = global.Promise;
// let db = mongoose.connect(config.db);
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//
// });

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(morgan('dev'));

// APP.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
//    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// });


APP.route('*').get((req, res) => {
    res.json({ message: 'success' });
});

APP.listen(PORT);

console.log(`api server started on port ${PORT}`);