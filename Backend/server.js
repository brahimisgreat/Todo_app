const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"mytodo"
});

app.get('/', (req, res)=>{
   return res.json('Hello World')
})

app.get('/todos', (req,res)=>{
    const sql = "SELECT * FROM todos";
    db.query(sql, (err, data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    })
})

app.listen(port, ()=>{
    console.log('listening')
})