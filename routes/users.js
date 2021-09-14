const router = require("express").Router();
const bcrypt = require("bcrypt");
const Book = require("../models/Book");
const User = require("../models/User");

//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body, });
            if(user){
               res.status(200).json("Account has been successfully updated!"); 
            }            
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Invalid request, you can only update your account");
    }
});

//get a user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json("User not found!")
        } else
            res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                res.status(404).json("User not found")
            } else
                res.status(200).json("Account has been deleted!");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your account");
    }
});

//get list of book from your library
router.get("/:id/library", async (req, res) => {
    try {
        const book = await User.findById(req.params.id, { library: 1, _id: 0 });
        if (book){
            res.status(200).json(book);
        } else{
            res.status(404).json("You have no book available in your library presently, kindly purchase onr to start reading");
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});

//get list of book added as favorites
router.get("/:id/my-favorites", async (req, res) => {
    try {
        const book = await User.findById(req.params.id, { favorites: 1, _id: 0 });
        if (book){
            res.status(200).json(book);
        } else{
            res.status(404).json("No book added as favorite yet");
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router