const express = require('express');
const options = require('../db/connectionAzure');
const router = express.Router();

var knex = require('knex')(options);


router.get('/',(req,res)=>{
    res.json(
     req.user
    )
})