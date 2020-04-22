const express = require('express')
const pg = require('pg')
const app = express()
const PORT = process.env.PORT || 5000

var pool = pg.Pool({
    database:'d1irhf9en4p84a', 
    user:'hsqdzagistxflr',
    password:'cede442b8aa70db317b286360151b3ad3c0b5d86e41f2e643c24825f4521f46a',
    host:'ec2-34-193-232-231.compute-1.amazonaws.com',
    port:5432,
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/get_data', (req, res) => {
    pool.connect((err,client)=>{
        if(err){
            console.log(err)
        }else{
            client.query("SELECT name FROM users", function(err, result){
                res.send(JSON.stringify(result))
            })
        }
    })
})

app.listen(PORT)