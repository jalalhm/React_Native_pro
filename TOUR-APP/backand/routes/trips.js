const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Create a new trip
router.post('/create', tripController.createTrip);
router.post('/create-topplace', tripController.createTopPlace);
router.post('/createTraditions', tripController.createTraditions);
router.post('/create-hotel', tripController.createHotel);
router.post('/createTraditions', tripController.createTraditions);
router.post('/createButiful_places', tripController.createButiful_places);
// Get all trips
router.get('/', tripController.getAllTopPlaces);
router.get('/2', tripController.getAllH);
router.get('/1', tripController.getAllTrip);
router.get('/t', tripController.getTraditions);
router.get('/b_P', tripController.getButiful_places);

router.get('/saved', tripController.getAllSavedTrips);

// Get a specific trip by ID
router.get('/:id', tripController.getTrip);

// Search for trips
router.get('/search/:key', tripController.searchTrip);

// puting Save 

router.put('/toggle-save/:id', tripController.toggleSave);



router.delete('/delt', tripController.deleteAllTrips);
router.delete('/:id', tripController.deleteTrip);








module.exports = router;
