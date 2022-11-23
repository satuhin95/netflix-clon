const { addToLikedMovies, getLikedMovies, unlikedMovie } = require('../controllers/UserController');

const router = require('express').Router();
router.post('/add',addToLikedMovies);                                                 
router.get('/liked/:email',getLikedMovies);          
router.put('/delete',unlikedMovie);                                       

module.exports = router;