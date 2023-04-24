import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "judgers",
  insecureAuth : true
});

db.ping((err) => {
  if (err) {
    console.log('Error pinging MySQL database server:', err.message);
    return;
  }
  console.log('Successfully pinged MySQL database server!');
});

