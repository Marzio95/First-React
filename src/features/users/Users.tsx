import { useEffect, useState } from "react";
import { UserApi } from "../../model/UserApi";
import TableCustom from "../../shared/design/table/TableCustom";
import { classListTableData } from "../../shared/design/table/TableModel";

const Users: React.FC = () => {

    const [users, setUsers] = useState<UserApi[]>([]);

    useEffect ( () => {
        console.log('dentro init');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
              .then(res => setUsers(res))
      }, []);

    const columns: {label: string, field: string}[] = [
        {
            label: 'Nome',
            field: 'name',
        },
        {
            label: 'Username',
            field: 'username',
        },
        {
            label: 'Email',
            field: 'email',
        },
        {
            label: '',
            field: 'actions',
        },
    ]

    const deleteUser = (id: any) => {
        fetch('https://jsonplaceholder.typicode.com/users' + id, {method: 'DELETE'})
            .then(res => {setUsers(users.filter(user => user.id !== id))}) 
            // uso il filter per eliminare l'elemento dall'array (se l elemento ha l id uguale a quello selezionato, lo elimino)
            // se il filter ha un risultato true lo elimina, se è false lo lascia
    }

    const templates = {
        actions: (value: any, row: UserApi) => {
            return <i className="fa fa-trash" onClick={() => deleteUser(row.id)}></i>
        },

        username: (value: string) => {
            return value.toLocaleUpperCase();
        }
    }

    

    return <TableCustom columns={columns} data={users} templates={templates} classList={[classListTableData.alternativeRow]}/>
    // const usersFormat = users.map(user => ({...user, username: user.username.toUpperCase()})); 
    // questa è una funzione che ti permette di modificare un valore di un array
    // return <TableCustom columns={columns} data={usersFormat}/>
}

export default Users;