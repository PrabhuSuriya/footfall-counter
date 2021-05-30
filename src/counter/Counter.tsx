import "./Counter.scss";

export default function Counter() {
  return (
    <div className="buttons is-flex is-justify-content-space-around">
      <button className="button is-danger">-</button>
      <button className="button is-success">+</button>
    </div>
  );
}
