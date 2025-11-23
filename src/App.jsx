import { useDispatch, useSelector } from "react-redux";
import { setMsg } from "./messageSlice";

export default function App() {
  const dispatch = useDispatch();
  const text = useSelector(s => s.msg);

  return (
    <div>
      <button onClick={() => dispatch(setMsg("First button clicked"))}>1</button>
      <button onClick={() => dispatch(setMsg("Second button clicked"))}>2</button>
      <button onClick={() => dispatch(setMsg("Third button clicked"))}>3</button>
      <p>{text}</p>
    </div>
  );
}
