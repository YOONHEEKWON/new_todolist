import { useReducer } from "react";

// reducer: 우리말로는 변환기
// --> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  if (action.type === "INCREASE") {
    return state + action.data;
  }
}

export default function Exam(props) {
  //dispatch : 방송하다, 급송하다.
  //--> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const handlCickPlus = () => {
    //인수 : 상태가 어떻게 변화되길 원하는지
    //--> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handlCickPlus}>+</button>
    </div>
  );
}
