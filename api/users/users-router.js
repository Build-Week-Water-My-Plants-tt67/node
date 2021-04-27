const router = require("express").Router();
const User = require('./users-model');
const Plant = require('../plants/plants-model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secrets/index")

// GET - ALL USERS
router.get('/', (req, res) => {
    User.getAll()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

// GET - USER BY ID
router.get('/:id', (req, res) => {
    const user_id = req.params.id 
    User.getById(user_id)
    .then(user => {
        res.json(user);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

// GET - USERS PLANTS (USER BY ID)
router.get('/:id/plants', (req, res) => {
    const user_id = req.params.id;
    Plant.getUserPlants(user_id)
    .then(plants => {
        res.json(plants);
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
});

// PUT - EDIT USER INFO
router.put('/:id', (req, res) => {
    const user_id = req.params.id;
    const newUser = { ...req.body, user_id };
    User.update(newUser)
    .then(user => {
        res.json({ message: 'User Info Updated', user: user[0] });
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
})

// POST - REGISTER USER
router.post("/register", (req, res) => {
    const info = req.body;
  
    const hash = bcrypt.hashSync(info.password, 8);
    info.password = hash;
  
    User.addUser(info)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
  });

// POST - USER LOGIN
router.post('/login',  (req, res) => {
    const { username, password } = req.body;
    User.getByUsername(username)
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const access_token = generateToken(user);
        res.json({ message: 'Success', user, access_token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch(err => res.status(500).json({ 
        message: err.message, 
        stack: err.stack 
    }))
  });
  
  function generateToken(user) {
    const payload = {
      subject: user.user_id,
      user
    };
    const options = {
      expiresIn: "1d",
    };
    return jwt.sign(payload, jwtSecret, options);
  }


module.exports = router;