import { useState } from "react";
import UsersList from "./UsersList";
import AddUser from "./AddUser";
import { useReducer } from "react";

//LOGICA CON USE REDUCER
function stateReducer(state, action) {
  if (action.type === "ADD") {
    return [...state, action.newUser];
  } else if (action.type === "DEL") {
    return state.filter((user) => user.id !== action.idUser);
  } else if (action.type === "MOD") {
    return state.map((user) =>
      user.id === action.idUser ? { ...user, nome: action.newName } : user
    );
  } else {
    console.log("non sei entrato in nessun if precedente"); //serve per riconoscere l'errore se non inserisco bene le condizioni
  }
}
function App() {
  const usersList = [
    { id: 1, nome: "Andrea Rossi", email: "Andrea@email.it" },
    { id: 2, nome: "Luca Giorgi", email: "luca@email.it" },
    { id: 3, nome: "Angelica Guizzanti", email: "angelica@email.it" },
  ];

  const [users, dispatch] = useReducer(stateReducer, usersList);

  const handleAddUser = (newUser) => {
    dispatch({ type: "ADD", newUser });
  };
  const handleDeleteUser = (idUser) => {
    dispatch({ type: "DEL", idUser });
  };

  const handleModifyUser = (idUser, newName) => {
    dispatch({ type: "MOD", idUser, newName });
  };

  //LOGICA CON USE STATE QUI DI SEGUITO
  /*  const [users, setUsers] = useState(usersList);  //logica con use State

  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  }; //newUser=e nella funzione handle
  const handleDeleteUser = (idUser) => {
    //elimino un utente quindi un oggetto di usersList e quindi agisco sul suo stato
    if (confirm("Vuoi cancellare l'utente?")) {
      setUsers(users.filter((user) => user.id !== idUser)); //se user.id è diverso da idUser non inserisce l'elemento user attuale nel nuovo array
    }
  };
  const handleModifyUser = (idUser, newName) => {
    const newUsers = users.map((user) =>
      user.id === idUser ? { ...user, nome: newName } : user
    );
    setUsers(newUsers);
  }; */

  return (
    <main>
      <h1>Elenco Utenti</h1>
      <AddUser onAddUser={handleAddUser} />
      <UsersList
        users={users}
        onDeleteUser={handleDeleteUser}
        onModifyUser={handleModifyUser}
      />
    </main>
  );
}

export default App;
