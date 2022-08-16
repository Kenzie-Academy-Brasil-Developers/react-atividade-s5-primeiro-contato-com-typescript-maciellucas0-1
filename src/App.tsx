import { useState } from "react";
import "./App.css";
import { Input } from "./components/input/input";

interface Person {
  nome: string;
  numero: string;
  hobbie: string;
}

function App() {
  const [list, setList] = useState<Person[]>([]);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [hobbie, setHobbie] = useState("");

  function handleSubmit(nome: string, numero: string, hobbie: string) {
    const usuario = { nome, numero, hobbie };

    setList([...list, usuario]);
    console.log(list);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="nome"
          label="Nome :"
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          placeholder="número"
          type="number"
          label="Número :"
          onChange={(e) => setNumero(e.target.value)}
        />
        <Input
          placeholder="hobbie"
          onChange={(e) => setHobbie(e.target.value)}
        />

        <button onClick={() => handleSubmit(nome, numero, hobbie)}>
          Enviar
        </button>

        <ul>
          {list.map((usuario) => (
            <li key={usuario.nome}>
              {usuario.nome} - {usuario.numero} - {usuario.hobbie}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
