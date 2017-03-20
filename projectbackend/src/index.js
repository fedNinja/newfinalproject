import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import path from 'path';


const app =express();
/***
Database
**/
dbConfig();

/**
Middleware
**/
middlewaresConfig(app);

const PORT = process.env.PORT||8080;
app.listen(PORT, err => {
  if(err) {
    console.log(err);
  } {
    console.log(`App listen to port: ${PORT}`);
  }
});
