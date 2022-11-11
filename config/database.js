const mongoose = require('mongoose');

const connection = ()=>{
    mongoose.connect(process.env.DB_PATH).then(res =>{
        console.log(`mongodb connection successful.`)
    }).catch(err =>{
        console.log(`error : ${err}`)
    })
}

module.exports = connection