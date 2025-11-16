const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = 'mongodb://127.0.0.1:27017/homura';

main()
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initData.data);
//   console.log('data was initialized');
// };

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({ ...obj, owner: '6915cfe5c99142f1323ac335' }));
//   await Listing.insertMany(initData.data);
//   console.log('data was initialized');
// };

const initDB = async () => {
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: '6915cfe5c99142f1323ac335',
    geometry: {
      type: 'Point',
      coordinates: [77.5946, 12.9716], // Bengaluru
    },
  }));

  await Listing.insertMany(initData.data);

  console.log('data was initialized');
};

initDB();
