import { useState } from "react";
import CountDisplay from "../../components/count-display/CountDisplay";
import CountGraph from "../../components/count-graph/CountGraph";
import CountInfo from "../../components/count-info/CountInfo";
import Counter from "../../components/counter/Counter";
import './Home.scss';

function Home() {
    const [state, setState] = useState({ 
      title: 'Best Buy', 
      count: 0, 
      allowedCapacity: .75, 
      totalCount: 28 
    });
    const onIncreaseCount = (e) => {
      setState(Object.assign({}, state, { count: state.count + 1 }));
    };
    const onDecreaseCount = (e) => {
      if (state.count > 0) {
        setState(Object.assign({}, state, { count: state.count - 1 }));
      }
    };
    return (
      <section className="home pt-2">        
        <CountGraph count={state.count} totalCount={state.totalCount} allowedCapacity={state.allowedCapacity} />
        <CountDisplay count={state.count} totalCount={state.totalCount} allowedCapacity={state.allowedCapacity} />
        <Counter increaseCount={onIncreaseCount} decreaseCount={onDecreaseCount} />
        <CountInfo count={state.count} totalCount={state.totalCount} allowedCapacity={state.allowedCapacity}/>
      </section>
    );
  }
  
  export default Home;