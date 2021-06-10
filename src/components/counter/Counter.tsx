import "./Counter.scss";

export default function Counter({ increaseCount, decreaseCount }) {
  const handleMouseWheel = (e) => {
    if (e.deltaY > 0) {
      decreaseCount();
    }
    else if (e.deltaY < 0) {
      increaseCount();
    }

  }
  return (
    <div className="buttons is-flex is-justify-content-space-around" onWheel={e => handleMouseWheel(e)} title="You use your mousewheel to increase/decrease counter!">
      <button className="button is-danger" onClick={decreaseCount}>-</button>
      <button className="button is-success" onClick={increaseCount}>+</button>
    </div>
  );
}
