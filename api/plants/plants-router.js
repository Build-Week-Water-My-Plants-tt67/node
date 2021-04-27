const router = require("express").Router();
const Plant = require('./plants-model');

// GET - ALL PLANTS
router.get('/', (req, res) => {
    Plant.getAll()
    .then(plants => {
        res.json(plants);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

// GET - PLANT BY ID
router.get('/:plant_id', (req, res) => {
    Plant.getById(req.params.plant_id)
    .then(plant => {
        res.json(plant);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

// POST - ADD NEW PLANT
router.post('/:user_id', (req, res) => {
    Plant.addPlant({ ...req.body, user_id: req.params.user_id })
    .then(plant => {
        res.status(201).json(plant[0]);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

// PUT - EDIT PLANT
router.put('/:plant_id', (req, res) => {
    const { plant_id } = req.params;
    
    Plant.update({...req.body, plant_id})
    .then(plant => {
        res.json(plant[0]);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

// DELETE - DELETE PLANT
router.delete('/:plant_id', (req, res) => {
    Plant.remove(req.params.plant_id)
    .then(() => {
        res.json({ message: `Plant with id ${req.params.plant_id} was deleted`})
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

module.exports = router