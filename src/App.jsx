import { useState } from "react";

const START = [
  { name: "Sara", bed: 4, note: "" },
  { name: "Omar", bed: 9, note: "" },
  { name: "Hina", bed: 2, note: "" },
];

function Card({ item }) {
  return (
    <button type="button" className="card">
      {item.name} bed {item.bed} {item.note}
    </button>
  );
}

function Wall({ cards }) {
  return (
    <div>
      {cards.map(function (item, index) {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
}

export default function App() {
  const [cards] = useState(START);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  return (
    <div>
      <header className="place" style={{ background: "olive", color: "white" }}>
        <h1>Bus office</h1>
      </header>
      <input
        placeholder="Name"
        value={name}
        onChange={function (event) {
          setName(event.target.value);
        }}
      />
      <input
        placeholder="Note"
        value={note}
        onChange={function (event) {
          setNote(event.target.value);
        }}
      />
      <Wall cards={cards} />
      <footer>247215</footer>
    </div>
  );
}