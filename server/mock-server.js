/**
 *  模拟数据
 */
const express = require('express');
const router = express.Router();
const {
    geolocation,
    entries,
    hotSearchWords,
    restaurants,
    searchAddressNearby,
    categories,
} = require('./data/index')
// var geolocation = require('./data/geolocation');
// var entries = require('./data/entries');

//
router.get('/reverse_geo_coding', (req, res, next) => {
    res.json(geolocation);
});
router.get('/entries', (req, res, next) => {
    res.json(entries);
});
router.get('/hot_search_words', (req, res, next) => {
    res.json(hotSearchWords);
});
router.get('/restaurants', (req, res, next) => {
    res.json(restaurants);
});
router.get('/search_address_nearby', (req, res, next) => {
    res.json(searchAddressNearby);
});
router.get('/category', (req, res, next) => {
    res.json(categories);
});

module.exports = router;
