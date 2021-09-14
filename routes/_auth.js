const router = require("express").Router();
const Publisher = require("../models/Publlishers");
const bcrypt = require("bcrypt");


//REGISTER PUBLISHER
router.post("/_register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newPublisher = await new Publisher({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            currency: req.body.currency
        });

        //save user and respond
        const publisher = await newPublisher.save();
        res.status(200).json(publisher);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN PUBLISHER
router.post("/login", async (req, res) => {
    try {
        const publisher = await Publisher.findOne({ email: req.body.email });
        if (!publisher || !bcrypt.compareSync(req.body.password, publisher.password)){
            res.status(400).json("Email and password is incorrect! Kindly check and try again");
        } else {
        res.status(200).json(publisher)};
    } catch (err) {
        res.status.json(err);
    }

})

module.exports = router