const express = require('express')
const app = express();
const connection = require('./config/database')
const dotenv = require('dotenv').config({path : './config/config.env'})
const port = process.env.PORT || 4000
const host = process.env.HOST || 'localhost'

// db connection
connection()

// setting up routes
app.use('/api/v1',require('./routes/users'))

// if routers other then /api/v1
app.use('*',(req,res)=>{
    res.status(400).json({
        success : false,
        message : 'Not Found'
    })
})

app.listen(port,()=>console.log(`server running at http://${host}:${port}`))
