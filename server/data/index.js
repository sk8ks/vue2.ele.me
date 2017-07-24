const weather = require('./weather');
const entries = require('./entries');
const geolocation = require('./geolocation');
const hotSearchWords = require('./hotSearchWords');
const restaurants = require('./restaurants');
const searchAddressNearby = require('./searchAddressNearby');

module.exports = {
    weather: weather,
    entries: entries,
    geolocation: geolocation,
    hotSearchWords: hotSearchWords,
    restaurants: restaurants,
    searchAddressNearby: searchAddressNearby
}
