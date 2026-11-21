function Card({ item }) {
  return (
    <button type="button" className="card">
      {item.name} bed {item.bed} {item.note}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <header className="place" style={{ background: "olive", color: "white" }}>
        <h1>Bus office</h1>
      </header>
      <Card item={{ name: "Sara", bed: 4, note: "" }} />
      <footer>247215</footer>
    </div>
  );
}