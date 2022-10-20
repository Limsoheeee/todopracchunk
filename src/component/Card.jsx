import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __delTodo,__updateTodo } from "../redux/slice";

const Card = (props) => {
  const { id, title, content } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(__delTodo(id));
      navigate('/');
    },
    [dispatch, id,navigate]
  );
  const updateHandler = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`/edit/${id}`);
    },
    [id,navigate]
  );
  return (
    <div>
      <Link to={`/${id}`}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={deleteHandler}>삭제</button>
        <button onClick={updateHandler}>수정</button>
      </Link>
    </div>
  );
};

export default Card;
