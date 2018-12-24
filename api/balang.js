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

<<<<<<< HEAD

router.post('/postBarang',(req,res,next)=>{
  console.log(req.body);
  let query = "insert into daftarBarang (nama, pemilik, lokasiBarang) values ('"+req.body.nama+"','"+req.body.pemilik+"','"+req.body.lokasiBarang+"')";
  console.log(query);
  knex.schema.raw(query).then(ress=>{
      res.json('Berhasil dimasukkan');
  }).catch(err=>{
      res.status(400);
      res.json(err);
  })
})

=======
<<<<<<< HEAD
//body not detected :(

router.post('/postBarang',(req,res,next)=>{
  console.log(req.body.nama);
  // let query = "insert into daftarBarang (nama, pemilik, lokasiBarang) values ('"+req.body.nama+"','"+req.body.pemilik+"','"+req.body.lokasiBarang+"')";
  // console.log(query);
  // knex.schema.raw(query).then(ress=>{
  //     res.json('Berhasil dimasukkan');
  // }).catch(err=>{
  //     res.status(400);
  //     res.json(err);
  // })
})

=======
>>>>>>> 53e684438104c3f2abb0469bc15f14ce74a3e553
>>>>>>> 5a73cfbfb7e4133a80a283e72c8f8489490edd08
module.exports = router;