import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";


const Rubrics = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/posts"); 
        setPosts(res.data);
       
      } catch (err) {
        console.log("from posts " + err);
      }
    };

    fetchData();
  },[]);
  const navigate = useNavigate();

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home">
      <div className="posts">
       <p>Welcome</p>
      
        {posts && posts.map((rubric) => (
          <div className="rubric" key={rubric.rubric_id}>
              <div><h4>{rubric.rubric_title}</h4></div>
              <Link className="link" to={`/${rubric.rubric_id}`}>
              <button>Open</button>
              </Link>
             
           </div>
        ))}
      </div>
    </div>
  );
};

export default Rubrics;
