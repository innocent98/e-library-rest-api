const router = require("express").Router();
const Book = require("../models/Book");
const User = require("../models/User");
const Upload = require("../models/Upload");
const Publisher = require("../models/Publlishers");

//create a book
router.post("/new", async (req, res) => {
  try {
    //create new book
    const newBook = await new Book({
      bookTitle: req.body.bookTitle,
      author: req.body.author,
      description: req.body.description,
      bookCover: req.body.bookCover,
      price: req.body.price,
    });
    //save and respond
    const book = await newBook.save();
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a book
router.delete("/:id", async (req, res) => {
  if (req.body.bookId === req.params.id) {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        res.status(404).json("Book not found");
      } else res.status(200).json("Book has been deleted!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("You can only delete book available in this account");
  }
});

//update a book
router.put("/:id", async (req, res) => {
  if (req.body.bookId === req.params.id) {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      if (!book) {
        res.status(404).json("Book not found");
      } else res.status(200).json("Book has been updated!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only update book(s) in this account");
  }
});

//get a book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const { updatedAt, ...other } = book._doc; //to remove unwanted doc from response
    if (!book) {
      res.status(404).json("Book not found!");
    } else res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get downloadCount a book
router.get("/book/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const { downloadCount, ...other } = book._doc; //to remove unwanted doc from response
    if (!book) {
      res.status(404).json("Book not found!");
    } else res.status(200).json(downloadCount);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all books
router.get("/", async (req, res) => {
  try {
    let books;
    books = await Book.find();
    // const { updatedAt, ...other } = books._doc //to remove unwanted doc from response
    if (!books) {
      res.status(404).json("No book available!");
    } else res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

//add book to favorite
router.put("/:id/favorites", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (!user.favorites.includes(req.params.id)) {
      await user.updateOne({ $push: { favorites: req.params.id } });
      await book.updateOne({ $push: { favoritesCount: req.body.userId } });
      res.status(200).json("Book has been added to favorites");
    } else {
      res.status(403).json("Book already added to favorites");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//remove book from favorite
router.put("/:id/unfavorites", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (user.favorites.includes(req.params.id)) {
      await user.updateOne({ $pull: { favorites: req.params.id } });
      await book.updateOne({ $pull: { favoritesCount: req.body.userId } });
      res.status(200).json("Book has been removed from favorites");
    } else {
      res.status(403).json("Book already removed from favorites");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//rate a book
router.put("/:id/rate", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    // const user = await User.findById(req.body.userId);
    if (!book.rate.includes(req.body.userId)) {
      // await user.updateOne({ $push: { myRate: req.params.id } });
      await book.updateOne({ $populate: { rate: req.body.userId } });
      res.status(200).json("Thank you for rating");
    } else {
      res.status(403).json("You already rate this book");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//download/save a book to user library, update book downloadCount, publisher purchaseCount, update publisher totalBalance
router.put("/:id/save", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    const upload = await Upload.findById(req.body.uploadId);
    const publisher = await Publisher.findById(req.body.publisherId);
    if (!user.library.includes(req.params.id)) {
      await user.updateOne({ $push: { library: req.params.id } });
      for (let i = 0; i <= Infinity; i++) {
        await book.updateOne({ $inc: { downloadCount: ++i } });
        break;
      }
      for (let i = 0; i <= Infinity; i++) {
        await upload.updateOne({ $inc: { purchaseCount: ++i } });
        break;
      }
      //update publisher's balance
      let tPrice = book.price;
      for (let i = tPrice; i >= 0; i++) {
        await publisher.updateOne({ $inc: { totalBalance: +i } });
        break;
      }
      let aPrice = book.price;
      for (let i = aPrice; i >= 0; i++) {
        await publisher.updateOne({ $inc: { availableBalance: +i } });
        break;
      }
      res.status(200).json("Book has been saved to your library");
    } else {
      res.status(403).json("Book already saved to your library");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete book from library
router.delete("/:id/delete", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (user.library.includes(req.params.id)) {
      await user.updateOne({ $pull: { library: req.params.id } });
      res.status(200).json("book successfully removed from your library");
    }
    return user || book;
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
