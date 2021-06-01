import { useDispatch, useSelector } from "react-redux";
import CountDisplay from "../../components/count-display/CountDisplay";
import CountGraph from "../../components/count-graph/CountGraph";
import CountInfo from "../../components/count-info/CountInfo";
import Counter from "../../components/counter/Counter";
import { decrement, increment } from "../../store/AppActions";
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

  const onIncreaseCount = (e) => dispatch(increment());
  const onDecreaseCount = (e) => dispatch(decrement());

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
