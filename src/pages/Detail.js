import React, { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoApi } from "../axios/todoApi";

const Detail = () => {
  const [todo, setTodo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const requestUpdate = useCallback(async () => {
    const res = await getTodoApi(id);
    setTodo(res);
  }, [id]);

  useEffect(() => {
    requestUpdate();
  }, [requestUpdate]);

  if (!todo) {
    return null;
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>뒤로가기</button>
      <p>
        {todo.title}
        </p>
        <p>
        {todo.content}
      </p>
    </div>
  );
};

export default Detail;
