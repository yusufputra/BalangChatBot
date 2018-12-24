const express = require('express');
const options = require('../db/connectionAzure');
const router = express.Router();

var knex = require('knex')(options);


router.get('/barang',(req,res,next)=>{
    const query= "Select * from daftarBarang"
    console.log(query);
    knex.schema.raw(query).then(ress=>{
        res.json(ress);
    }).catch(err=>{
        res.status(404).json(err);
    })
})

router.post('/postThread',(req,res,next)=>{
    console.log(req.user);
    let query="insert into thread(idUser,title,post,username)" +
    "values("+req.user._id+",'"+req.body.title+"','"+req.body.post+"','"+req.user.username+"')"
    console.log(query);
    knex.schema.raw(query).then(ress=>{
        res.json('done');
    }).catch(err=>{
        res.status(404);
        res.json(err);
    })
})

router.post('/postBarang',(req,res,next)=>{
  console.log('post Barang');
  let query = "insert into daftarBarang (nama, pemilik, lokasiBarang) values ('req.nama','req.pemilik','req.lokasiBarang')";
})

module.exports = router;