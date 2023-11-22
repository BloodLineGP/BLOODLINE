import { useDispatch, useSelector } from "react-redux";
import {
  firstNumberIncrement,
  firstNumberDecrement,
  secondNumberIncrement,
  secondNumberDecrement,
  resetAllNumber,
} from "./counterSlice";

const CounterPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const counterFirstNumberIncrement = () => {
    // setCounter({
    //   ...counter,
    //   firstNumber: counter.firstNumber + 1,
    // });
    dispatch(firstNumberIncrement());
  };
};

export default CounterPage;
