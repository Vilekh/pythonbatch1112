import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import { sendMail } from './email.controller.js';

export const save=async (req,res,next)=>{
  var userList=await UserSchemaModel.find().sort({"_id":-1});
  var _id=(userList.length==0?1:userList[0]._id+1);
  var userDetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};
  var user=await UserSchemaModel.create(userDetails);
  if(user)
  {
   sendMail(user.email,user.password); 
   return res.status(201).json({"status":true});
  }
  else
   return res.status(500).json({"status": false});
}

export const fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var userList = await UserSchemaModel.find(condition_object);
  if(userList.length!=0)
    return res.status(201).json(userList);
  else
    return res.status(500).json({"result": "Server Error"});
}

export const deleteUser=async(req,res,next)=>{
  var condition_obj=req.body;          
  var user = await UserSchemaModel.find(condition_obj);
  if(user.length!=0){
    let result = await UserSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"});   
}

export const updateUser=async(req,res,next)=>{
  let userDetails = await UserSchemaModel.findOne(req.body.condition_obj);
  if(userDetails){
     let user=await UserSchemaModel.updateOne(req.body.condition_obj,{$set: req.body.content_obj});   
     if(user)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}

export const login=async (req,res,next)=>{
  var userDetails=req.body;
  userDetails={...userDetails,"status":1};
  var userList = await UserSchemaModel.find(userDetails);
  if(userList.length!=0)
  {
    let payload={"subject":userList[0].email};
    let key=rs.generate();
    let token=jwt.sign(payload,key);
    return res.status(201).json({"token":token,"userDetails":userList[0]});
  }
  else
    return res.status(500).json({"token": "error"});
}

