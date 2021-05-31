import "./Counter.scss";

export default function Counter({ increaseCount, decreaseCount }) {
  return (
    <div className="buttons is-flex is-justify-content-space-around">
      <button className="button is-danger" onClick={decreaseCount}>-</button>
      <button className="button is-success" onClick={increaseCount}>+</button>
    </div>
  );
}
