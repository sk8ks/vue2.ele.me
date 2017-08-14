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
    vcode,
    loginUser,
    orders,
    oldOrders,
} = require('./data/index');
const {token} = require('./config');
const {authenticate} = require('./authorization')


// 手机验证码
router.post('/mobile/verify_code', (req, res, next) => {
    // const {username, password} = req.body;
    res.json(vcode);
});

// 注册
router.get('/register', (req, res, next) => {
    const {username, password} = req.body;
    const token = createToken(username);
    res.json({
        username: username,
        token: token
    });
});
// 登录
router.post('/login', (req, res, next) => {
    let account = req.body.account;
    let password = req.body.password;
    let type = req.body.type;
    if ( (type == 'sms' && (account == loginUser.userInfo.mobile && password == loginUser.vcode)) || (account == loginUser.userInfo.username && password == loginUser.password) ) {
        res.cookie('token', loginUser.token, {expires: token.expires, path: '/'});
        res.cookie('userid', loginUser.userInfo.user_id, {expires: token.expires, path: '/'});
        res.json({
            login: 1
        });
    } else {
        res.json({
            login: !1,
            message: '帐号或密码不正确'
        });
    }
});
// 获取当前用户id
router.get('/current_user', (req, res, next) => {
    const uid = req.cookies.userid;
    if ( !req.user || !authenticate(req.user, uid) ) {
        res.json({});
    } else {
        res.json({userid: loginUser.userInfo.user_id});
    }
});
// 用户信息
router.get('/user/:uid', (req, res, next) => {
    if (req.params.uid) {
        res.json(loginUser.userInfo);
    } else {
        res.json({})
    }
});
// 地理信息
router.get('/reverse_geo_coding', (req, res, next) => {
    res.json(geolocation);
});
// 食品分类入口
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

router.get('/user/:uid/orders', (req, res, next) => {
    const uid = req.cookies.userid;
    if ( !req.user || !authenticate(req.user, uid) ) {
        res.json({message: '获取订单信息失败'});
    } else {
        res.json(orders);
    }
    // if (req.params.uid) {
    //     res.json(orders);
    // } else {
    //     res.json({
    //         message: '获取订单信息失败'
    //     })
    // }
});

module.exports = router;
