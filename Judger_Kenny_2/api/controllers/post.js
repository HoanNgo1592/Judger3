import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = "SELECT * FROM rubric_form "
    

  db.query(q, [req.query.rubric_id], (err, data) => {
    console.log("query " + req.query.rubric_id)
    if (err) return res.status(500).send(err);
console.log("from posts" + err)
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT r.rubric_id, `rubric_title`,`question_number`, `question`,`option_one`,`option_two`,`option_three`,`option_four`,`option_five`,`comment`FROM rubric_form r JOIN moderator m ON r.rubric_id= m.moderator_id WHERE r.rubric_id=? ";

  db.query(q, [req.params.rubric_id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts( `rubric_id`, `rubric_title`,`question_number`, `question`,`option_one`,`option_two`,`option_three`,`option_four`,`option_five`,`comment`,moderator_id) VALUES (?)";

    const values = [
      req.body.rubric_id,
      req.body.rubric_title,
        req.body.question_number,
        req.body.question,
        req.body.option_one,
        req.body.option_two,
        req.body.option_three,
        req.body.option_four,
        req.body.option_five,
        req.body.comment,
  
      userInfo.moderator_id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
//  const postId = req.params.id;
// which id is this ? 
    // const postId = req.params.rubric_id;  
    console.log(req.params)
    // const q = "DELETE FROM rubric_table WHERE `rubric_id` = ? AND `moderator_id` = ?";

    // db.query(q, [postId, userInfo.moderator_id], (err, data) => {
    //   if (err) return res.status(403).json("Soory, something went wrong!");

    //   return res.json("Rubric has been deleted!");
    // });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");  

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.rubric_id;
    const q =
      "UPDATE posts SET `rubric_title`=?,`question_number`=?,`question`=?,`option_one`=?,`option_two`=? ,`option_three`=? ,`option_four`=? ,`option_five`=?  WHERE `rubric_id` = ? AND `moderator_id` = ?";

    const values = [
      req.body.rubric_title,
        req.body.question_number,
        req.body.question,
        req.body.option_one,
        req.body.option_two,
        req.body.option_three,
        req.body.option_four,
        req.body.option_five,
        req.body.comment];

    db.query(q, [...values, postId, userInfo.moderator_id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("The Rubric has been updated.");
    });
  });
};
