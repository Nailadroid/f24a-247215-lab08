import { useState } from "react";

const START = [
  { name: "Sara", bed: 4, note: "" },
  { name: "Omar", bed: 9, note: "" },
  { name: "Hina", bed: 2, note: "" },
];

function Slip({ name, note, onName, onNote, onSave }) {
  return (
    <form
      onSubmit={function (event) {
        event.preventDefault();
        onSave();
      }}
    >
      <input
        placeholder="Name"
        value={name}
        onChange={function (event) {
          onName(event.target.value);
        }}
      />
      <input
        placeholder="Note"
        value={note}
        onChange={function (event) {
          onNote(event.target.value);
        }}
      />
      <button type="submit">Save</button>
    </form>
  );
}

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
  const [cards, setCards] = useState(START);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [line, setLine] = useState("");

  function handleSave() {
    if (note.trim() === "") {
      setLine("Type a note");
      return;
    }

    const found = cards.some(function (item) {
      return item.name.toLowerCase() === name.trim().toLowerCase();
    });

    if (!found) {
      setLine("Not on the list");
      return;
    }

    const updated = cards.map(function (item) {
      if (item.name.toLowerCase() === name.trim().toLowerCase()) {
        return { name: item.name, bed: item.bed, note: note.trim() };
      }
      return item;
    });

    setCards(updated);
    setLine("");
    setName("");
    setNote("");
  }

  return (
    <div>
      <header className="place" style={{ background: "olive", color: "white" }}>
        <h1>Bus office</h1>
      </header>

      <Slip
        name={name}
        note={note}
        onName={setName}
        onNote={setNote}
        onSave={handleSave}
      />

      <Wall cards={cards} />

      <p>{line}</p>

      <footer>247215</footer>
    </div>
  );
}