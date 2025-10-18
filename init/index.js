const mongoose = require("mongoose");
const Listing = require("../models/listings.js");
const initData = require("./data.js");

main()
    .then((res) => {
        console.log("connected to DB")
    })
    .catch((err) => {
        console.log(err)
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

async function initDB() {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "68d399091c3bf46e72378830"}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();