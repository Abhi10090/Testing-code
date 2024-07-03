//We establish connection b/w UI and mongodb trough mongoose connect .
import mongoose from "mongoose";
//mongodb://localhost:27017 - Is a url link of mongodb connection 
//Dwelfoxx-Project- Is a name of Database in mongodb;
const url= "mongodb://localhost:27017/Dwelfoxx-Project";
mongoose.connect(url);
console.log("succesfully connected with mongodb database");