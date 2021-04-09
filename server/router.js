const express = require("express");

const router = express.Router();


function init({}) {
    console.log("router initialized with data");
    return router
}

router.init = init

router.all("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})


router.get("/", (req, res, next) => {
    res.send("server is up")
})


module.exports = router