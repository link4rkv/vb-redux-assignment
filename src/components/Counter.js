import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  return (
    <div>
      <div>Counter: { counter }</div>
      <button type="button" onClick={incrementHandler}>Increment</button>
      <button type="button" onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default Counter