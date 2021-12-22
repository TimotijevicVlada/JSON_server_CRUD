import React, {useRef, useContext} from "react";
import { CrudContext } from "../context/Context";

const Create = () => {

  const {setCreateVisible, createValues, setCreateValues, handleAdd} = useContext(CrudContext);
  const formRef = useRef();

  //Function that exit the form when we click out of the form
  const handleExit = (e) => {
    if (!formRef.current.contains(e.target)) {
        setCreateVisible(false);
    }
  };

  return (
    <div onClick={handleExit} className="create_wrapper">
      <form onSubmit={handleAdd} ref={formRef}>
        <div className="create_title">Create</div>
        <div className="create_inputs">
          <input onChange={(e) => setCreateValues({...createValues, title: e.target.value})} type="text" placeholder="Title" />
          <input onChange={(e) => setCreateValues({...createValues, author: e.target.value})} type="text" placeholder="Author" />
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
