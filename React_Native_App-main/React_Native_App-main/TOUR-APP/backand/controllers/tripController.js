const {Trip, TopPlace, Hotel ,Traditions,Butiful_places,Most_visited,Specal_offers } = require('../models/Trips');

module.exports = {
    getAllH: async (req, res) => {
        try {
            const hotels = await Hotel.find().sort({ createAt: -1});
            res.status(200).json(hotels);
        } catch (error) {
            res.status(500).json("Failed to fetch trips");
        }
    },
    createTrip: async (req, res) => {
        const newTrip = new Trip(req.body);
        try {
            await newTrip.save();
            res.status(200).json("Trip created successfully");
        } catch (error) {
            console.error(error); 
            res.status(500).json("Failed to create trip");
        }
    },
    
    getAllTrip: async (req, res) => {
        try {
            const trips = await Trip.find().sort({ createAt: -1});
            res.status(200).json(trips);
        } catch (error) {
            res.status(500).json("Failed to fetch trips");
        }
    },
    
    getTrip: async (req, res) => {
        try {
            const trip = await TopPlace.findById(req.params.id);
            if (!trip) {
                res.status(404).json("Trip not found");
                return;
            }
            res.status(200).json(trip);
        } catch (error) {
            res.status(500).json("Failed to fetch trip");
        }
    },
    
    searchTrip: async (req, res) => {
        try {
          const result = await Trip.find({
            location: { $regex: req.params.key, $options: 'i' } // Case-insensitive search
          });
          res.status(200).json(result);
        } catch (error) {
          res.status(500).json("Failed to search");
        }
      },

    deleteTrip: async (req, res) => {
        try {
            const trip = await Trip.findByIdAndDelete(req.params.id);
            if (!trip) {
                res.status(404).json("Trip not found");
                return;
            }
            res.status(200).json("Trip deleted successfully");
        } catch (error) {
            res.status(500).json("Failed to delete trip");
        }
    },

    deleteAllTrips: async (req, res) => {
        try {
            await Trip.deleteMany({});
            res.status(200).json("All trips deleted successfully");
        } catch (error) {
            res.status(500).json("Failed to delete all trips");
            console.log(error)
        }
    },
    createTopPlace: async (req, res) => {
        const newTopPlace = new Trip(req.body);
        try {
            await newTopPlace.save();
            res.status(200).json("Top place created successfully");
        } catch (error) {
            console.error(error);
            res.status(500).json("Failed to create top place");
        }
    },

    getAllTopPlaces: async (req, res) => {
        try {
            const topPlaces = await TopPlace.find().sort({ createAt: -1 });
            res.status(200).json(topPlaces);
        } catch (error) {
            res.status(500).json("Failed to fetch top places");
        }
    },

    createHotel: async (req, res) => {
        const newHotel = new Hotel(req.body);
        try {
            await newHotel.save();
            res.status(200).json("Hotel created successfully");
        } catch (error) {
            console.error(error);
            res.status(500).json("Failed to create hotel");
        }
    },
    createTraditions: async (req, res) => {
        const newHotel = new Traditions(req.body);
        try {
            await newHotel.save();
            res.status(200).json("createTraditions successfully");
        } catch (error) {
            console.error(error);
            res.status(500).json("Failed to createTraditions");
        }
    },
    getTraditions: async (req, res) => {
        try {
            const topPlaces = await Traditions.find().sort({ createAt: -1 });
            res.status(200).json(topPlaces);
        } catch (error) {
            res.status(500).json("Failed to fetch top places");
        }
    },
    createButiful_places: async (req, res) => {
        const newHotel = new Butiful_places(req.body);
        try {
            await newHotel.save();
            res.status(200).json("Hotel created successfully");
        } catch (error) {
            console.error(error);
            res.status(500).json("Failed to create beautiful places");
        }
    },
    getButiful_places: async (req, res) => {
        try {
            const topPlaces = await Butiful_places.find().sort({ createAt: -1 });
            res.status(200).json(topPlaces);
        } catch (error) {
            res.status(500).json("Failed to fetch top places");
        }
    },
    toggleSave: async (req, res) => {
        try {
          const trip = await Trip.findById(req.params.id);
          if (!trip) {
            res.status(404).json("Trip not found");
            return;
          }
    
          trip.isSaved = !trip.isSaved;
          await trip.save();
    
          res.status(200).json("Saved status updated successfully");
        } catch (error) {
          res.status(500).json("Failed to update saved status");
        }
      },
      getAllSavedTrips: async (req, res) => {
        try {
          const savedTrips = await Trip.find({ isSaved: true }).sort({ createAt: -1 });
          res.status(200).json(savedTrips);
        } catch (error) {
          res.status(500).json("Failed to fetch saved trips");
        }
      },
      



};
