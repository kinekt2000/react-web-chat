const express = require("express");

const router = express.Router();


let g_Data;

function SetData(data) {
    g_Data = data;
    return router;
}

router.SetData = SetData

router.all("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})


router.get("/", (req, res, next) => {
    res.send("server is up")
})


module.exports = router