function clickMe() {
  if (onClick) {
    onClick();
  }
}

document.body.innerHTML = `
    <div>
        <h1>Prosta appka</h1>
        <p>Kliknij przycisk</p>
        <button onclick="clickMe()">Kliknij mnie!</button>
    </div>
`;
