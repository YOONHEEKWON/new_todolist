import "../components/todoitem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
function TodoItem({ id, isDone, content, date }) {
  // const data = useContext(TodoContext);
  // console.log(data);
  const { handleCheck, handleDelete } = useContext(TodoDispatchContext);
  const handleChangChkbox = () => {
    handleCheck(id);
  };
  const handleitemDelete = () => {
    handleDelete(id);
  };
  return (
    <div className="todoitem">
      <input
        type="checkbox"
        checked={isDone}
        readOnly
        onChange={handleChangChkbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleitemDelete}>삭제</button>
    </div>
  );
}
//고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props가 바뀌지 않음 -> 리렌더링하지않음
//   // F -> Props가 바뀜 -> 리렌더링 함
//   // if (prevProps.id !== nextProps.id) return false;
//   // if (prevProps.isDone !== nextProps.isDone) return false;
//   // if (prevProps.date !== nextProps.date) return false;
//   // if (prevProps.content !== nextProps.content) return false;
//   return true;
// });
export default memo(TodoItem);
