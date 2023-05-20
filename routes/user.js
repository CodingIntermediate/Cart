var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let product=[
    {      
      name:'MOtorola',
      category:'Smartphone',
      description:'Stylish Phone',
      Image:"https://th.bing.com/th/id/OIP.HZl1A53IX7YzmweEEmqUsQHaOv?w=116&h=200&c=7&r=0&o=5&pid=1.7"
     },
    {
      name:'MOtorola Edge',
      category:'Smartphone',
      description:'Stylish Phone',
      Image:"https://th.bing.com/th/id/OIP.721CFZMt4qSLNWkywk0qwwHaGE?w=245&h=200&c=7&r=0&o=5&pid=1.7"
    },
    {  
      name:'MOtorola Edge Plus',
      category:'Smartphone',
      description:'Stylish Phone',
      Image:"https://th.bing.com/th/id/OIP.fLmEzrYkXMk1JNPJAwGyvgHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7"
    },
    {
      name:'MOtorola Edge 6',   
      category:'Smartphone',
      description:'Stylish Phone',
      Image:"https://th.bing.com/th/id/OIP.A_ZsZE9quhbkTimrqf3qJwHaGU?w=236&h=200&c=7&r=0&o=5&pid=1.7"
    } 
  ] 
  res.render('index', {product});
});
 
module.exports = router; 
