import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountDisplay from "../../components/count-display/CountDisplay";
import CountGraph from "../../components/count-graph/CountGraph";
import CountInfo from "../../components/count-info/CountInfo";
import Counter from "../../components/counter/Counter";
import { DECREMENT, INCREMENT } from "../../store/AppActions";
import { AppState } from "../../store/AppStore";
import "./Home.scss";

function Home() {
  const { count, totalCount, allowedCapacity } = useSelector(
    (state: AppState) => ({
      count: state.count,
      totalCount: state.totalCount,
      allowedCapacity: state.allowedCapacity
    })
  );
  const dispatch = useDispatch();

  const onIncreaseCount = (e) => dispatch({ type: INCREMENT });
  const onDecreaseCount = (e) => dispatch({ type: DECREMENT });

  return (
    <section className="home pt-2">
      <CountGraph
        count={count}
        totalCount={totalCount}
        allowedCapacity={allowedCapacity}
      />
      <CountDisplay
        count={count}
        totalCount={totalCount}
        allowedCapacity={allowedCapacity}
      />
      <Counter
        increaseCount={onIncreaseCount}
        decreaseCount={onDecreaseCount}
      />
      <CountInfo
        count={count}
        totalCount={totalCount}
        allowedCapacity={allowedCapacity}
      />
    </section>
  );
}

export default Home;
