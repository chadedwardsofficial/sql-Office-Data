
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
   
    user: 'root',
  
    password: 'Beyonce81',
    database: 'office_db'
  },
  console.log(`Connected to the office_db database.`)
);

db.connect(function(err){
  if (err) throw err; 
});













module.exports = db;