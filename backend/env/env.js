const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'blvhbjo3wghqsxzwabe3-mysql.services.clever-cloud.com',
    user: 'ukjwbufpo8rxnxml',
    password: 'pQEoli0XG260DtHXEmkl',
    database: 'blvhbjo3wghqsxzwabe3',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;