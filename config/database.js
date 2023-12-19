const mysql=require('mysql2');

const connection = mysql.createPool({
	host: 'localhost',
 
    user:'root',
    password:'1313',
    
	database: "registrationform",
	multipleStatements: true,
	port: '3306',
});

const promisePool = connection.promise();

module.exports=promisePool;