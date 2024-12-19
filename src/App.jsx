import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import reducer from "./reducer/reducer";
import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "JavaSript 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Typescript 공부하기",
    date: new Date().getTime(),
  },
];
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext(); //컴포넌트 외부에 선언 (렌더링이 될때마다 생성 되기 떄문) Provider(공급자자)
function App() {
  const idRef = useRef(3);
  const [todos, dispatch] = useReducer(reducer, mockData);

  //1] added
  const handleCreate = useCallback((text) => {
    dispatch({
      type: "added",
      data: {
        id: idRef.current++,
        isDone: false,
        content: text,
        date: new Date().getTime(),
      },
    });
  }, []);
  //2] done

  const handleCheck = useCallback((id) => {
    dispatch({
      type: "done",
      id: id,
    });
  }, []);

  //3] deleted
  const handleDelete = useCallback((id) => {
    dispatch({
      type: "deleted",
      id: id,
    });
  }, []);
  const memoizedDispatch = useMemo(() => {
    return { handleCheck, handleCreate, handleDelete };
  }, []);
  return (
    <div className="App">
      <Header />
      {/* TodoContext.Provider data 공급! */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
