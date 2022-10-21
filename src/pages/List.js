import React, { useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Todo from "../component/Todo";
import Card from "../component/Card";
import { __getTodoList } from "../redux/slice"

const List = () => {
  const todos = useSelector((state) => state.slice.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTodoList());
  }, [dispatch]);
  return (
    <div>
      <button onClick={()=>navigate('/edit')}>등록하기</button>
          <Todo 
          list = {todos}          
          onRender = {(item)=> <Card key={item.id} {...item}/>
      }

          />
        </div>
  );
};

export default List;
