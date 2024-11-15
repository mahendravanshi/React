import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increaseCount,decreaseCount ,resetCount} from "./redux/slices/appSlice";
import { RootState } from "@reduxjs/toolkit/query";

function App() {
  
  const dispatch = useDispatch();
  const count = useSelector((state:RootState)=>state.appReducer.count)

  
  return (
    <>
      <div className="card">
         <h3>Counter App using redux toolkit</h3>
         <p>Count: {count}</p>
         <button onClick={()=>dispatch(increaseCount())} >Increase</button>
         <button onClick={()=>dispatch(decreaseCount())} disabled={count === 0}>Decrease</button>
         <button onClick={()=>dispatch(resetCount())}>Reset</button>
      </div>
    </>
  );
}

export default App;
