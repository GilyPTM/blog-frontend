import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import configData from "../config.json";
import axios from "axios";
import CommentSection from "../components/CommentSection";
export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState([{}]);
  useEffect(() => {
    console.log(id);
    axios
      .get(configData.API_BASE_URL + "/posts/" + id)
      .then(({ data }) => {
        console.log(data);

        setPost(data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    // Page content
    <div className="container my-4">
      <div className="row">
        <div className="card mb-4">
          <a href="#!">
            <img
              className="card-img-top"
              src={`http://localhost:3002/uploads/${post.poza}`}
              alt="..."
            />
          </a>
          <div className="card-body">
            <div className="small text-muted">
              Category: {post.categorie_nume} Date: {post.dataadaugare}
            </div>
            <h2 className="card-title">{post.titlu}</h2>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.continut }}
            />
          </div>
        </div>
        <CommentSection postId={id} />
      </div>
    </div>
  );
}
