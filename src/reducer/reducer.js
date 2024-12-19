export default function reducer(draft, action) {
  switch (action.type) {
    case "added": {
      return [action.data, ...draft];
    }
    case "done": {
      return draft.map((item) =>
        item.id === action.id
          ? {
              ...item,
              isDone: !item.isDone, // isDone 값을 올바르게 업데이트
            }
          : item
      );
    }
    case "deleted": {
      return draft.filter((item) => item.id !== action.id);
    }
    default:
      return draft;
  }
}
