require('dotenv').config();

const mongoose = require("mongoose");
const Listing = require("../models/listings.js");
const initData = require("./data.js");

const dbUrl = process.env.ATLASDB_URL;

main()
    .then((res) => {
        console.log("connected to DB")
    })
    .catch((err) => {
        console.log(err)
    })

async function main() {
    await mongoose.connect(dbUrl);
}

async function initDB() {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "68f48c527b3027ebfaad7fa9"}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();