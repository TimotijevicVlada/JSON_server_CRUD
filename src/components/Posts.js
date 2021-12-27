import React, { useContext } from "react";
import { CrudContext } from "../context/Context";
import Create from "./Create";
import Update from "./Update";
import axios from "axios";

const Posts = () => {
  const { data, createVisible, getData, updateVisible, setUpdateVisible, setItemToUpdate } =
    useContext(CrudContext);

  const handleDelete = async (item) => {
    try {
      await axios.delete(`http://localhost:3006/posts/${item.id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (item) => {
    setUpdateVisible(true);
    setItemToUpdate(item);
  }

  return (
    <div className="posts">
      {data.posts?.map((item, index) => (
        <div className="post" key={item.id}>
          <span className="index">#{index + 1}</span>
          <span className="title">{item.title}</span>
          <span className="author">{item.author}</span>
          <div className="events">
            <button onClick={() => handleUpdate(item)} className="update">Update</button>
            <button onClick={() => handleDelete(item)} className="delete">
              Delete
            </button>
          </div>
        </div>
      ))}
      {createVisible && <Create />}
      {updateVisible && <Update />}
    </div>
  );
};

export default Posts;
