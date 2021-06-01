import "./CountInfo.scss";

export default function CountDisplay({ count, totalCount, allowedCapacity }) {
  const allowed = Math.max(0, totalCount * allowedCapacity - count);
  return (
    <section>
      <div className="total-info">
        <span className="count">{Math.floor(allowed) || 'No'}</span> more people allowed.
      </div>
    </section>
  );
}
