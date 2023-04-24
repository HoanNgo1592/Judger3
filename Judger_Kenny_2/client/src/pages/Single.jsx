import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/rubrics/${postId}`);
        setPost(res.data);
  
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/rubrics/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className="rubric_form">
    
       
        <div className="moderator">
        
          {currentUser.moderator_user_name === post.moderator_user_name && (
       
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}

<>
            <h1>{post.rubric_title}</h1> 
            <p> {post.question}</p>
            <p>{post.option_one}</p>
            <p> {post.option_two}</p>
            <p> {post.option_three}</p>
            <p> {post.option_four}</p>
            <p> {post.option_fiv}</p>
            <p> {post.comment}</p>
            </>
        </div>
    
    </div>
  );
};

export default Single;
