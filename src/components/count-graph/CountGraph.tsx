import "./CountGraph.scss";

export default function CountDisplay({ count, totalCount, allowedCapacity }) {
  return (
    <section>
      <div className="marker" style={{ left: allowedCapacity * 100 + "%" }}>
        <div className="capacity">{allowedCapacity * 100}%</div>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="graph-wrapper">
        <div
          className="graph"
          style={{ width: (count / totalCount) * 100 + "%" }}
        ></div>
      </div>
      <div className="capacity-info">
        {((count / totalCount) * 100).toFixed(2)}% full.
      </div>
    </section>
  );
}
