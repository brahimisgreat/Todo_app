import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"todo"
});

db.connect((err=>{
    if(err) throw err;
    console.log('Connected to database')
}))

app.get('/', (req, res)=>{
   return res.json('Hello World')
})

app.post('/create', (req, res)=>{
    const task = req.params.task;
    db.query('INSERT INTO todotasks (task) VALUES (?)',  [task], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.json('Task added')
        }
    });
});



app.get('/read', (req, res)=>{
    const sql = "SELECT * FROM todotasks";
    db.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
    })
}
)

app.delete('/delete/:id', (req, res)=>{
    const id = req.params.id;
    const sql = "DELETE FROM todotasks WHERE id = ?";
    db.query(sql, id, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.json('Task deleted')
        }
    })
})
  

app.listen(port, ()=>{
    console.log('listening')
})