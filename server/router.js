const express = require("express");

const router = express.Router();


let g_Data;

function SetData(data) {
    g_Data = data;
    return router;
}

router.SetData = SetData

// router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", req.get("origin"));
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })


router.get("/", (req, res, next) => {
    res.send("server is up")
})


module.exports = router