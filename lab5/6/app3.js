const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

const App = () => {
  return (
    <ul className="list-group m-5">
      {planets.map((planet, index) => (
        <li key={index} className="list-group-item">{planet}</li>
      ))}
    </ul>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))