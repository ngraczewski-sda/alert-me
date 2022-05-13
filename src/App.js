function App() {
  const handleClick = () => {
    // eslint-disable-next-line no-undef
    if (onClick) {
      // eslint-disable-next-line no-undef
      onClick();
    }
  };
  return (
    <div>
      <h1>Hello world!</h1>
      <p>This is a small React app</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
