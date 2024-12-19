import { useContext, useMemo, useState } from "react";
import "../components/list.css";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";
export default function List() {
  const [seachtext, setSearchText] = useState("");
  const todos = useContext(TodoStateContext);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const getFilterdData = () => {
    if (seachtext === "") {
      return todos;
    }
    return todos.filter((item) =>
      item.content.toLowerCase().includes(seachtext.toLowerCase())
    );
  };
  const filtertodo = getFilterdData();
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="list">
      <h4>Todo List 🩷</h4>
      <div>total : {totalCount}</div>
      <div>done : {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
      <input
        type="text"
        value={seachtext}
        placeholder="검색어를 입력하세요!"
        onChange={handleSearch}
      />
      <div className="todoswrapper">
        {filtertodo.map((item) => (
          <TodoItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
