const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'resultmanagementsystem',
    port: 3306,
  });


//check database connection
pool.getConnection((err, connection)=>{
    if(err) {
        console.log('Error connnectiong to db', err);
    }
    else{
        console.log('Database connected...');
        connection.release();
    }
    
});

app.post('/studentlogin', async (req, res) => {


    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        let selectQuery = 'SELECT * FROM students WHERE name=? AND roll_no=?';
        let query = mysql.format(selectQuery, [req.body.name, req.body.roll_no]);
        // query = SELECT * FROM `todo` where `user` = 'shahid'
        pool.query(query, (err, data) => {
            if (err) {
                connection.release();
                console.error(err);
                return;

            }
            if (data.length > 0) {
                connection.release();

                return res.status(200).json({ message: "valid" });
            }
            else {
                connection.release();
                return res.status(200).json({ message: "invalid" });

            }
        });
    });

})

app.post('/teacherlogin', async (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        let selectQuery = 'SELECT * FROM teacher WHERE uname=? AND pass=?';
        let query = mysql.format(selectQuery, [req.body.name, req.body.pass]);
        // query = SELECT * FROM `todo` where `user` = 'shahid'
        pool.query(query, (err, data) => {
            if (err) {
                connection.release();
                console.error(err);
                return;
            }
            if (data.length > 0) {
                connection.release();

                return res.status(200).json({ message: "valid" });
            }
            else {
                return res.status(200).json({ message: "invalid" });
                connection.release();
            }


        });
    });

})

//student login
app.post('/studentLoginView', async (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        let selectQuery = 'SELECT * FROM studentlogin WHERE uname=? AND pass=?';
        let query = mysql.format(selectQuery, [req.body.name, req.body.pass]);
        // query = SELECT * FROM `todo` where `user` = 'shahid'
        pool.query(query, (err, data) => {
            if (err) {
                connection.release();
                console.error(err);
                return;
            }
            if (data.length > 0) {
                connection.release();

                return res.status(200).json({ message: "valid" });
            }
            else {
                return res.status(200).json({ message: "invalid" });
                connection.release();
            }


        });
    });

})


//get all student details
app.get('/viewalldata',(req,res)=>{
    //console.log('get student list');
    let query = 'select * from students'
    pool.query(query,(err,result)=>{
        if(err){
            console.log(err,'error');
        }
        if(result.length>0){
            res.send({
                message:'all student data',
                data:result
            });
        }
    });
});

//get all teachers data
app.get('/teacher',(req,res)=>{
    //console.log('get student list');
    let query = 'select * from teacher'
    pool.query(query,(err,result)=>{
        if(err){
            console.log(err,'error');
        }
        if(result.length>0){
            res.send({
                message:'all teachers data',
                data:result
            });
        }
    });
});


//get student data for a particular roll_no
app.get('/viewresult/:roll_no', async (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        let selectQuery = 'SELECT * FROM students Where roll_no=?';
        let query = mysql.format(selectQuery, [req.params.roll_no]);
        // query = SELECT * FROM `todo` where `user` = 'shahid'
        pool.query(query, (err, data) => {
            if (err) {
                connection.release();
                console.error(err);
                return;

            }
                connection.release();
                return res.status(200).json({data: data });
            
           


        });
    });

})


//add a new student in the database
app.post('/addstudent', (req, res) => {
    console.log(req.body, 'createdate');
  
    let roll_no = req.body.roll_no;
    let name = req.body.name;
    let date_of_birth = req.body.date_of_birth;
    let score = req.body.score;
    console.log(typeof date_of_birth);
    let query = 'insert into students(roll_no, name, date_of_birth, score) values ?';
    let values = [[roll_no, name, date_of_birth, score]];
    pool.query(query, [values], (err, result) => {
      if (err) {
        console.log(err);
        res.send({
          message: 'error occurred while inserting data'
        });
      } else {
        if (result && result.length > 0) {
          res.send({
            message: 'data inserted successfully'
          });
        } else {
          res.send({
            message: 'wrong entry'
          });
        }
      }
    });
  });
  
  // update a student details
  app.post('/edit', async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
    let updateQuery = "UPDATE students SET name = ? , date_of_birth=? ,score=? WHERE roll_no = ?";
    let query = mysql.format(updateQuery, [req.body.name, req.body.date_of_birth, req.body.score, req.body.roll_no]);
    // query = UPDATE 
    pool.query(query, (err, response) => {
        if (err) {
            connection.release();
            console.error(err);
            return;
        }
        // rows updated
        console.log(response.affectedRows);
    });
    connection.release();
    return res.status(200).json({ message: "valid" });
    })
})
  
//delete a student based on the roll_no
app.get('/delete/:roll_no', async (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        let selectQuery = 'DELETE FROM students WHERE roll_no=?';
        let query = mysql.format(selectQuery, [req.params.roll_no]);
        // query = SELECT * FROM `todo` where `user` = 'shahid'
        pool.query(query, (err, data) => {
            if (err) {
                connection.release();
                console.error(err);
                return;
            }
            // rows fetch
            console.log(data);
            connection.release();
            return res.status(200).json({ message: "valid" });


        });
    });
})







app.listen(3000,()=>{
    console.log('server running');
});
