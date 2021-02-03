const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        port:3306,
        database:'someCompany',
    },'single'
)

const getData = (callback) => {
    conn.query(`select * from Users`, (err, rows) => {
        if (err) throw "Error consulting the database"
        callback(rows)
    })
}

exports.getData = getData