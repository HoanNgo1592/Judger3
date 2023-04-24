import { db } from "../db.js";

//req is the SQL
export const addEvent = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
        const q = "INSERT INTO event (event_title, startTime, startDate, endTime, endDate) VALUES (event_title, startTime, startDate, endTime, endDate)";
        //query(req, res(err, data))
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      });
    };

export const getEvent = (req, res) => {
  const q = "SELECT * FROM  "
    

  db.query(q, [req.query.rubric_id], (err, data) => {
    console.log("query " + req.query.rubric_id)
    if (err) return res.status(500).send(err);
      console.log("from posts" + err)
    return res.status(200).json(data);
  });
      };

export const deleteEvent = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };

export const setStartEventTime = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };
export const setStartEventDate = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };
export const setEndEventTime = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };
      
export const setEndEventDate = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };