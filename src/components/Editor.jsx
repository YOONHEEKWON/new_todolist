import { useContext, useRef, useState } from "react";
import "../components/editor.css";
import { TodoDispatchContext } from "../App";
export default function Editor() {
  // const contextData = useContext(TodoContext);
  // console.log(contextData);
  const { handleCreate } = useContext(TodoDispatchContext);
  const data = useContext(TodoDispatchContext);
  console.log();
  const inpRef = useRef(null);
  const [todoText, setTodoText] = useState("");
  const handleSubmit = () => {
    if (todoText === "") {
      inpRef.current.focus();
      return;
    }
    handleCreate(todoText);
    setTodoText("");
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className="editor">
      <input
        type="text"
        value={todoText}
        ref={inpRef}
        onKeyDown={handleEnter}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="새로운 Todo.."
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
}
