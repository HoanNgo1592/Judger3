import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q="SELECT * FROM moderator WHERE moderator_email=? OR moderator_user_name= ?"

  db.query(q, [req.body.moderator_email,req.body.moderator_user_name], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log("checking" + err )
    console.log(data)
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.moderator_password,salt);

    const q="INSERT INTO moderator(`moderator_user_name`,`moderator_email`,`moderator_password`) VALUES(?)";
    const values = [ 
      req.body.moderator_user_name,
      req.body.moderator_email,
       hash
      ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log("at the register"+ err)
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM moderator WHERE moderator_user_name= ?";

  db.query(q, [req.body.moderator_user_name], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log(err)
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.moderator_password,
      data[0].moderator_password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ moderator_id: data[0].moderator_id }, "jwtkey");
    const { moderator_password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};
