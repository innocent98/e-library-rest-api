const router = require("express").Router();
const bcrypt = require("bcrypt");
const Publisher = require("../models/Publlishers");

//update publisher
router.put("/:id", async (req, res) => {
  if (req.body.publisherId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const publisher = await Publisher.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(publisher);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("Invalid request, you can only update your account");
  }
});

//get a publisher
router.get("/:id", async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id);
    if (!publisher) {
      res.status(404).json("User not found!");
    } else res.status(200).json(publisher);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete publisher
router.delete("/:id", async (req, res) => {
  if (req.body.publisherId === req.params.id || req.body.isAdmin) {
    try {
      const publisher = await Publisher.findByIdAndDelete(req.params.id);
      if (!publisher) {
        res.status(404).json("User not found");
      } else res.status(200).json("Account has been deleted!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only delete your account");
  }
});

//withdraw from publisher's totalBalance and update availableBalance with totalWithdraw
router.put("/withdraw/:id", async (req, res) => {
  if (req.body.publisherId === req.params.id || req.body.isAdmin) {
    try {
      const publisher = await Publisher.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      if (publisher) {
        let availableBalance = publisher.availableBalance;
        let withdraw = req.body.withdraw;
        if (withdraw <= availableBalance) {
          for (let i = withdraw; i > 0; i--) {
            await publisher.updateOne({
              $inc: { availableBalance: -i, totalWithdraw: +i },
            });
            break;
          }
          res.status(200).json(publisher);
        } else {
          res
            .status(403)
            .json(
              "Available balance is not sufficient to perform this operation"
            );
        }
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
