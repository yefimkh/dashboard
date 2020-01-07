// establish Mysql Connection  
const mysql = require('mysql');  
  
function MySQLConnect() {  
   this.pool = null;  
    
   // Init MySql Connection Pool  
   this.init = () => {  
     this.pool = mysql.createPool({  
       connectionLimit: 10,  
       host     : 'localhost',  
       user     : 'root',  
       password :  '',                       //'TCSuEvEgC42WsJBY',  
       database: 'nb_dashboard'  
     });  
   }; 

    // acquire connection and execute query on callbacks  
    this.acquire = function(callback) {  
     this.pool.getConnection(function(err, connection) {  
       callback(err, connection);  
     });  
   };  
/*
 const conn = mysql.createConnection({
      host     : 'localhost',  
      user     : 'root',  
      password : '',  
      database: 'nb_dashboard' 
  });
  */
}  
  
module.exports = new MySQLConnect();  