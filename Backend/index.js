const express = require('express');
const session = require('express-session');
const app = express();

var cors = require('cors');
const conn = require('./config/db');

app.use(cors({origin:"http://18.191.116.75:8080", credentials:true}));

app.get('/',(req,res) => res.send('API Running'));

conn.connectDB();

// Init Middleware
app.use(express.json());

app.get('/test_api',async function(req,res){
    await connection.query('SELECT * from users', async function(error,results){
        if(error){
            res.writeHead(200, {
                'Content-Type': 'text-plain'
            });
            res.send(error.code);
        }else{
            res.writeHead(200,{
                'Content-Type': 'text/plain'
            });
            res.end(JSON.stringify(results));
        }
    });
});



//Defining Routes
app.use('/api', require('./routes/UserRoute'));
app.use('/exercise', require('./routes/ExerciseRoute'));
app.use('/email', require('./routes/EmailRoute'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;