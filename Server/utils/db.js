import mysql from "mysql"

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_details"
})

con.connect(function(err){
    if(err) {
        console.log("Unable to connect to database")
    } else {
        console.log("Connection successful")
    }
});

export default con;