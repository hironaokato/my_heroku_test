const express = require('express')
const pg = require('pg')
const app = express()
const PORT = process.env.PORT || 5000

var pool = pg.Pool({
    database:'', 
    user:'',
    password:'',
    host:'',
    port:,
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