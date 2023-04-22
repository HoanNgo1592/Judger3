import mysql from "mysql"

export const db = mysql.createConnection({
  //updateed the localhost and password
  host: "localhost",
  user: "root",
  password: "1234",
  database: "judgers"
})
