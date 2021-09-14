const router = require("express").Router();
const Upload = require("../models/Upload");
const Publishers = require("../models/Publlishers");

//submist a book
router.post("/", async (req, res) => {
    try {
        const newUpload = await new Upload(req.body);
        const savedUpload = await newUpload.save();
        const publisher = await Publishers.findById(req.body.publisherId);
        if (savedUpload !== publisher.myUploads.includes(req.body) && savedUpload) {
            await publisher.updateOne({ $push: { myUploads: req.body } });
            for (let i = 0; i <= Infinity; i++) {
                await publisher.updateOne({ $inc: { uploads: ++i } });
                break
            };

            res.status(200).json(savedUpload);
        }
    } catch (err) {
        res.json(err)
        // res.status(500).json(err);
    }
});

//update submission
router.put("/:id", async (req, res) => {
    try {
        const upload = await Upload.findById(req.params.id);
        if (upload.publisherId === req.body.publisherId) {
            await upload.updateOne({ $set: req.body });
            res.status(200).json("Submission updated successfully");
        } else {
            res.status(404).json("Submission not found");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


//get all uploaded books
router.get("/uploaded", async (req, res) => {
    try {
        let books;
        books = await Upload.find();
        if (!books) {
            res.status(404).json("No book available!")
        } else
            res.status(200).json(books);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get uploaded book(s) by a user
router.get("/my-uploads/:id", async (req, res) => {
    try {
      const currentPublisher = await Publishers.findById(req.params.id);
      const publisherBook = await Upload.find({publisherId: currentPublisher._id});
      if (publisherBook) {
         res.status(200).json(publisherBook); 
      } else {
          res.status(404).json("You have no book uploaded at the moment");
      }       
    } catch (err) {
      res.status(500).json(err);
    }
})

module.exports = router