const Model = require('../models/userModel');
const router = require('express').Router();


router.post('/add', (req, res) => {
    data = req.body;

    new Model(data).save()
        .then(data => {
            console.log('user data saved');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/update/:id', (req, res) => {
    data = req.body;

    Model.findByIdAndUpdate(req.params.id, data)
        .then(data => {
            console.log('user data updated');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.email })
        .then(data => {
            console.log('user data fetched by email');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .then(data => {
            console.log('user data fetched by id');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})
        .then(data => {
            console.log('user data fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


module.exports = router;