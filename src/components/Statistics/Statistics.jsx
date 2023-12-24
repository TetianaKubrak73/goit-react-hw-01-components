import style from './Statistics.module.css';
const Statistics = ({ data, title, id }) => {
  return (
    <section className={style.statistics}>
      {title && <h2>{title}</h2>}
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {data.map(({ id, label, percentage }) => (
          <li className={style.item} key={id}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
          </li>
        ))}
        console log(data);
      </ul>
    </section>
  );
};

export default Statistics;
