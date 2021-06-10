import "./CountDisplay.scss";

export default function CountDisplay({ count, totalCount, allowedCapacity, warningCapacity }) {
  const getLevel = () => {
    const currentCapacity = count / totalCount;
    if (currentCapacity >= allowedCapacity) {
      return "alert";
    } else if (currentCapacity >= warningCapacity) {
      return "warning";
    } else {
      return "good";
    }
  };
  return (
  <section>
    <div className={"count-display " + getLevel()}>{count}</div>
    <div className="total-info">Total Capacity: {totalCount}</div>
  </section>
  );
}
