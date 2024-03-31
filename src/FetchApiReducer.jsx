import React, { useReducer } from 'react'
import { init, todoSwitch } from './reducer/reducer';

const FetchApiReducer = () => {

  const [state, dispatch] = useReducer(todoSwitch, init);

  const fetchTodo = () => {
    // dispatch = 状況(type)とデータ(payload)を指定するための関数
    dispatch({ type: "START" });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "SUCCESS", payload: data })
    })
    .catch((err) => {
      dispatch({ type: "ERROR" })
    })
  }
  return (
    <div>
      <button onClick={fetchTodo}>{state.loading? "処理中" : "クリック"}</button>
      <p>{state.todo?.title}</p>
      <p>{state.error && "エラーです"}</p>
    </div>
  )
}

export default FetchApiReducer
