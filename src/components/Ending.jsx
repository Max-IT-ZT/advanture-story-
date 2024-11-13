export const Ending = ({ endings }) => {
  if (!endings) return <p>Кінцівка не знайдена.</p>;

  return (
    <div className="ending">
      <h2>Кінцівка: {endings.type}</h2>
      <p>{endings.text}</p>
      <button onClick={() => window.location.reload()}>Зіграйте знову</button>
    </div>
  );
};
