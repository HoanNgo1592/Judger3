import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.desc || "");
  const [question, setQuestion] = useState();
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);
  const [option3, setOption3] = useState(null);
  const [option4, setOption4] = useState(null);
  const [option5, setOption5] = useState(null);
 
  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
     
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
   

  };
  const handleClick = async (e) => {
    e.preventDefault();
   

    try {
      state
        ? await axios.put(`/posts/${state.rubric_id}`, {
            title,
            
        
          })
        : await axios.post(`/posts/`, {
          title,
           
         
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <div>
    <div> 
      <h3>Compose Rubric</h3>
    <div name="question">
    <input type="text" placeholder="rubric_title"    name="rubric_title"/>
    <input type="text" placeholder="question"    name="question" />
    <input type="text" placeholder="option one"    name="option_one"/>
    <input type="text" placeholder="option two"    name="option_two"/>
    <input type="text" placeholder="option three"    name="option_three" />
    <input type="text" placeholder="option four"    name="option_four"/>
    <input type="text" placeholder="option five"    name="option_five"/>
    <input type="text" placeholder="comment"    name="comment"/>
     </div>
     
     <button onClick={handleAdd}>Add Question</button>
            </div>
            <button onClick={handleClick}>Save</button>
            </div>
  );
};

export default Write;
