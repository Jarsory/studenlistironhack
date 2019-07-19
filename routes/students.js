const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/martha', (req, res, next) => {
  res.render('martha');
});

router.get('/horacio', (req, res, next) => {
  res.render('horacio');
});

router.post('/newStudent', ( req,res,next ) => {
  let { name, age } = req.body;
  // let name = req.body.name;
  Student.create( req.body )
  .then( resp => {
    console.log( resp );
    console.log('Chido');
  })
  .catch( err => {
    console.log( err );
  })
  res.send('Chidisimo')
});

module.exports = router;


