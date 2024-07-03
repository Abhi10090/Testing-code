import express from 'express';
import bodyParser from 'body-parser';
import cors  from 'cors';
var app= express();
import userrouter from './route/userroutes.js';
//import cors resolve cross origin problem;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",userrouter);
app.listen(3008);
console.log("success at 3008");

