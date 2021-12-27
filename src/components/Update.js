import React, { useRef, useContext, useState} from "react";
import { CrudContext } from "../context/Context";
import { useFormik } from "formik";
import axios from "axios";

const Update = () => {

  const {setUpdateVisible, itemToUpdate, getData} = useContext(CrudContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const updateRef = useRef();

  //Function that exit the form when we click out of the form
  const handleExit = (e) => {
    if (!updateRef.current.contains(e.target)) {
        setUpdateVisible(false);
    }
  };

  //Custom form validation
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.author) {
      errors.author = "Author is required!";
    }
    return errors;
  };

  //Formik library
  const formik = useFormik({
    initialValues: {
      title: itemToUpdate.title,
      author: itemToUpdate.author,
    },
    validate,
    onSubmit: async (values) => {
        const updatedPost = {
            title: values.title,
            author: values.author
        }
        try {
            await axios.put(`http://localhost:3006/posts/${itemToUpdate.id}`, updatedPost);
            getData();
            setSuccessMsg(true);
            setTimeout(() => {
                setUpdateVisible(false);
            }, 2000)
        } catch (error) {
            console.log(error);
        }
    },
  });

  return (
    <div onClick={handleExit} className="update_wrapper">
      <form onSubmit={formik.handleSubmit} ref={updateRef}>
        <div className="update_title">Update</div>
        <div className="update_inputs">
          <input 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            type="text"
            placeholder="Title"
            name="title"
          />
            {formik.touched.title && formik.errors.title && (
            <div className="error">{formik.errors.title}</div>
          )}
          <input 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
          type="text"
          placeholder="Author"
          name="author"
          />
          {formik.touched.author && formik.errors.author && (
            <div className="error">{formik.errors.author}</div>
          )}
          <button type="submit">Update</button>

          {successMsg && <div className="success_message">Post has been updated!</div>}
        </div>
      </form>
    </div>
  );
};

export default Update;
