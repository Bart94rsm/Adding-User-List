import User from "./User";

function UsersList({ users, onDeleteUser, onModifyUser }) {
  return (
    <table className="elenco-utenti">
      <tbody>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onDeleteUser={onDeleteUser}
            onModifyUser={onModifyUser}
          /> //propdrilling per ondeleteuser per farlo arrivare a user dove mi serve che agisca la funzione sul svg bidone
          //si poteva usare un context in alternativa
        ))}
      </tbody>
    </table>
  );
}

export default UsersList;
