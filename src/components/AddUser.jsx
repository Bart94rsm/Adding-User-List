import { useState } from "react";

function AddUser({ onAddUser }) {
  const [nome, setNome] = useState(""); //con la stringa vuota visualizzo il placeholder
  const [email, setEmail] = useState("");

  const handle = (e) => {
    onAddUser({ nome: nome, email: email });
    setNome(""); //resetto i campi di input una volta premuto il pulsante
    setEmail("");
  };
  const handleInputNome = (e) => {
    setNome(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section className="aggiungi-utente">
      <input
        onChange={handleInputNome}
        type="text"
        placeholder="nome"
        value={nome}
      />
      <input
        onChange={handleInputEmail}
        type="text"
        placeholder="email"
        value={email}
      />
      <button onClick={handle}>Aggiungi Utente</button>
    </section>
  );
}

export default AddUser;
