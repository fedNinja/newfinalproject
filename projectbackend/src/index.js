import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import path from 'path';
import {userRoutes} from './modules';

const app =express();
/***
Database
**/
dbConfig();
/**
Middleware
**/
middlewaresConfig(app);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/api', [userRoutes]);


const PORT = process.env.PORT||8080;
app.listen(PORT, err => {
  if(err) {
    console.log(err);
  } {
    console.log(`App listen to port: ${PORT}`);
  }
});
