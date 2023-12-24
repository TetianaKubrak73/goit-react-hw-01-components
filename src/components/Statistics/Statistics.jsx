import style from './Statistics.module.css';
const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const Statistics = ({ data, title, id }) => {
  return (
    <section className={style.statistics}>
      {title && <h2>{title}</h2>}
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={style.item}
            key={id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
