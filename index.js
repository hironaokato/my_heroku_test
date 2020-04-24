const express = require('express');
const pg = require('pg');
const app = express()
const PORT = process.env.PORT || 5000

const pool = new  pg.Pool({
    database:'db47ll7j3lo0br', 
    user:'tzidmgkjeutoxd',
    password:'1df212ea1f9ba9ac6494836a0dbe638b670b01fa5e680808e81d74707bbaeab6',
    host:'ec2-54-147-209-121.compute-1.amazonaws.com',
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