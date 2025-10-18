const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listings.js");
const Review = require("../models/reviews.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewOwner} = require("../middleware.js")

const reqviewController = require("../controllers/reviews.js");

//Post Reviews Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reqviewController.createReview));

//Delete Reviews route
router.delete("/:reviewId", isLoggedIn, isReviewOwner, reqviewController.destroyReview);

module.exports = router;