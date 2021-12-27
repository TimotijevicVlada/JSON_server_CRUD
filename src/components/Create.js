import React, { useRef, useContext, useState } from "react";
import { CrudContext } from "../context/Context";
import { useFormik } from "formik";
import axios from "axios";

const Create = () => {
  const [successMessage, setSuccessMesage] = useState(false);
  const { setCreateVisible, getData } = useContext(CrudContext);
  const formRef = useRef();

  //Function that exit the form when we click out of the form
  const handleExit = (e) => {
    if (!formRef.current.contains(e.target)) {
      setCreateVisible(false);
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
      title: "",
      author: "",
    },
    validate,
    onSubmit: async (values) => {
      const newPost = {
        title: values.title,
        author: values.author,
      };
      try {
        await axios.post("http://localhost:3006/posts", newPost);
        getData();
        setSuccessMesage(true);
        setTimeout(() => {
          setCreateVisible(false);
        }, 2000)
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div onClick={handleExit} className="create_wrapper">
      <form onSubmit={formik.handleSubmit} ref={formRef}>
        <div className="create_title">Create</div>
        <div className="create_inputs">
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
          <button type="submit">Create</button>
          {successMessage && (
            <div className="success_message">Post has been created!</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
