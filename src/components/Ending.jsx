export const Ending = ({ endings, onRestart }) => {
  if (!endings) return <p>Кінцівка не знайдена.</p>;

  return (
    <div className="ending">
      <h2>Кінцівка: {endings.type}</h2>
      <p>{endings.text}</p>
      <button onClick={onRestart}>Зіграйте знову</button>
    </div>
  );
};
