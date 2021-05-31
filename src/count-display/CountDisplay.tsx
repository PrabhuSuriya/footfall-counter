import "./CountDisplay.scss";

export default function CountDisplay({ count, totalCount, allowedCapacity }) {
  const getLevel = () => {
    const currentCapacity = count / totalCount;
    if (currentCapacity >= allowedCapacity) {
      return "alert";
    } else if (currentCapacity / allowedCapacity >= 0.8) {
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
