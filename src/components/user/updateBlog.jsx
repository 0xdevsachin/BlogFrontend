import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import userStateContext from "../../context/userContext.js";
import { useHistory } from "react-router-dom";
const UpdateBlog = ({ match }) => {
  const { user, setuser } = useContext(userStateContext);
  const history = useHistory();
  let BlogData = {
    title: "",
    content: "",
    img: "",
  };
  const [BlogTitle, settitle] = useState("");
  const [BlogImage, setImage] = useState("");
  const [BlogContent, setcontent] = useState("");
  const SubmitBlog = (e) => {
    e.preventDefault();
    if (!BlogContent) setcontent(BlogData.content);
    if (!BlogTitle) settitle(BlogData.title);
    if (!BlogImage) setImage(BlogData.img);
    if (BlogContent || BlogTitle) {
      var payload = { BlogTitle, BlogContent, BlogImage };
      axios
        .put(`/api/updateBlog/${match.params.id}`, payload, {
          headers: {
            "auth-token": user,
          },
        })
        .then((data) => {
          alert(data.data.msg);
          history.push("/");
        });
      setImage("");
      setcontent("");
      settitle("");
    }
  };
  useEffect(() => {
    const fetchblogs = async () => {
      if(localStorage.getItem("auth-token") === user ){
        await axios.get(`/api/Getblog/${match.params.id}`).then((data) => {
          var response = data.data.msg;
          BlogData.title = response.BlogTitle;
          BlogData.content = response.BlogContent;
          BlogData.img = response.BlogImage;
          document.getElementById("title").value = BlogData.title;
          document.getElementById("content").value = BlogData.content;
          document.getElementById("img").value = BlogData.img;
        });
      }else{
        localStorage.removeItem("auth-token")
        alert("Please Login Again to Continue")
        setuser(null);
        history.push('/signin')
      }
    };
    fetchblogs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="writeBlog">
      <form action="" onSubmit={SubmitBlog} className="writeBlog-form">
        <h2>Title </h2>
        <input
          type="text"
          id="title"
          placeholder="Blog Title"
          required
          onChange={(e) => settitle(e.target.value)}
        />
        <h2>Image Link</h2>
        <input
          type="text"
          id="img"
          placeholder="Image Link"
          onChange={(e) => setImage(e.target.value)}
        />
        <h2>Blog Content</h2>
        <textarea
          name=""
          id="content"
          placeholder="Blog Content"
          cols="30"
          rows="10"
          required
          onChange={(e) => setcontent(e.target.value)}
        ></textarea>
        <br />
        <button className="Sign-btn">Update</button>
      </form>
    </div>
  );
};
export default UpdateBlog;
