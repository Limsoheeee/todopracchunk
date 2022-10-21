import React, { useCallback, useState, useMemo, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTodo, __addTodo,__updateTodo } from "../redux/slice";
import { getTodoApi } from "../axios/todoApi";

const Form = () => {
  const init = {
    title: "",
    content: "",
  };
  const {id} = useParams();
  const [todo, setTodo] = useState(init);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEdit = useMemo(()=>(id? true : false),[id]);

  const onChangeHandler = useCallback((e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setTodo({...todo, [name]:value});
  },[todo]
  );

  const requestUpdate = useCallback(async() =>{
    if(isEdit){
      const todo = await getTodoApi(id);
      setTodo(todo);
    }    
   },[id,isEdit]);

   useEffect(()=>{
    requestUpdate();
   },[requestUpdate]);

   const onSubminhandler =useCallback( (e) =>{
    e.preventDefault();

    if(isEdit){
      dispatch(__updateTodo(todo));
    }else{
      dispatch(__addTodo(todo));
    }
    navigate('/',{replace:true});   
   },
   [dispatch,isEdit,todo,navigate]);

 

  return (
    <form onSubmit={onSubminhandler}>
      <h3>
        제목:
        <input type="text" name="title" value={todo.title} onChange={onChangeHandler}/>
      </h3>
      <h3>
        내용:
        <input type="text" name="content" value={todo.content} onChange={onChangeHandler}/>
      </h3>
      <button>등록</button>
    </form>
  );
};

export default Form;
