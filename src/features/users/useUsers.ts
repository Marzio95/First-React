import { useEffect, useState } from "react";
import { UserApi } from "../../model/UserApi";
import { columnsUsersTable } from "./userData";

export function useUsers() {

    const [users, setUsers] = useState<UserApi[]>([]);

    useEffect ( () => {
        console.log('dentro init');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
              .then(res => setUsers(res))
      }, []);

    const deleteUser = (id: any) => {
        fetch('https://jsonplaceholder.typicode.com/users' + id, {method: 'DELETE'})
            .then(res => {setUsers(users.filter(user => user.id !== id))}) 
            // uso il filter per eliminare l'elemento dall'array (se l elemento ha l id uguale a quello selezionato, lo elimino)
            // se il filter ha un risultato true lo elimina, se è false lo lascia
    }

    const columns = columnsUsersTable;

    return {
        users,
        columns,
        deleteUser
    }
}