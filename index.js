// console.log("its me")
//1 Import Area
const express = require('express')
//const somthing =require(somelibrary)
require('dotenv').config();
// const config = require('dotenv')
// config();
// console.log(process.env.PORT)

const app = express()


//middleware

app.get('/students', (req, res, next) => {

    console.log('inside middleware 1st' + req.query.name)

    req.query.name = req.query.name.toUpperCase();
    next();
}, (req, res) => {
    console.log('inside cbfn2' + req.query.name)
    res.json({

        "msg": `Hi ${req.query.name}`
    })
});

let PORT = process.env.PORT || 5000;
app.listen(4000, () => {
    console.log('The server is running on port ' + PORT)
})