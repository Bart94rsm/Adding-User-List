import delIcon from "../assets/elimina.svg";
import modIcon from "../assets/modifica.svg";
import { useState } from "react";

function User({ user, onDeleteUser, onModifyUser }) {
  const { id, nome, email } = user;
  const [inModifica, setInModifica] = useState(false); //se inmodifica è true mostra l'input, altrimenti il semplice nome
  const [newName, setNewName] = useState(nome);

  const handleSetNewName = (e) => setNewName(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onModifyUser(id, newName);
      setInModifica(false);
    } else if (e.key === "Escape") {
      setInModifica(false);
      setNewName(nome);
    }
  };
  return (
    <tr>
      <td>
        {inModifica ? (
          <input
            value={newName}
            onChange={handleSetNewName}
            onKeyDown={handleKeyDown}
          />
        ) : (
          nome
        )}
      </td>
      <td>{email}</td>
      <td>
        <img
          src={modIcon}
          onClick={() => setInModifica((prev) => !prev)} //modifico il valore precedente di inmodifica nell'opposto dell'attuale (true o false)
        />
        <img
          className="bidone"
          onClick={() => onDeleteUser(id)}
          src={delIcon}
          alt=""
        />
      </td>
    </tr>
  );
}
export default User;
