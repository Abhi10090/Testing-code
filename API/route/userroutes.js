import express from 'express';
const router=express.Router();
import * as usercontroler from '../controller/usercontroller.js'
//Crud opration for save detail ,login user, fetch user ,update user , and delete user detail in mongodb;
router.post("/save",usercontroler.save);
router.post("/login",usercontroler.login);
router.get("/fetch",usercontroler.fetch);
router.patch("/update",usercontroler.updateuser);
 router.delete("/delete",usercontroler.deleteuser);
export default router