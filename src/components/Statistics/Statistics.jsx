export const Statistics = ({ data, title, id }) => {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
