const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());


app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tasks'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('Hello Worldsss');
});

app.get('/tasks', (req, res)=> {
    const sql= 'SELECT * FROM TAS';
    db.query(sql, (err, result)=> {
        if (err) throw err;
        res.send(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM tas WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        res.send(result);
})
})


app.post('/create', (req, res) => {
    const sql = "INSERT INTO tas (item) VALUES (?)";
    db.query(sql, req.body.item, (err, result) => {
        if (err) throw err;
        res.send(result);
});
})






app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});