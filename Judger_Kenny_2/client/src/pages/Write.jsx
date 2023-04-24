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
    <div className="write">
      <h3>Write your question here:</h3>
      <form>
        <h3>Rubric Title:</h3>
    <input type="text" placeholder="Enter rubric Title"name="rubric_title"/>
       <h3>Criteria 1:</h3>
    <input type="text" placeholder="Ex. Subject Knowledge"name="rubric_title"/>
        <h3>Criteria 2:</h3>
    <input type="text" placeholder="Ex. Explanations from evidence"name="question" />
        <h3>Criteria 3:</h3>
    <input type="text" placeholder="Ex. Tables, graph, and Graphics"name="option_one"/>
        <h3>Criteria 4:</h3>
    <input type="text" placeholder="Ex. Layout & Design"name="option_two"/>
        <h3>Criteria 5:</h3>
    <input type="text" placeholder="Ex. Mechanics"name="option_three" />
    <button onClick={handleAdd}>Add Question</button>
    <button onClick={handleClick}>Save</button>
      </form>
     </div>
     
    </div>
  );
};

export default Write;
