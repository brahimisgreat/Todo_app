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

db.connect((err=>{
    if(err) throw err;
    console.log('Connected to database')
}))

app.get('/', (req, res)=>{
   return res.json('Hello World')
})

app.post('/create', (req, res)=>{
    const task = req.body.title;
    const sql = "INSERT INTO todos (task) VALUES (?)";
    db.query(sql, task, (err)=>{
        if(err){
            console.log(err)
        }else{
            res.json('Task added')
        }
    })

})

app.get('/read', (req, res)=>{
    const sql = "SELECT * FROM todos";
    db.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
    })
}
)
  

app.listen(port, ()=>{
    console.log('listening')
})