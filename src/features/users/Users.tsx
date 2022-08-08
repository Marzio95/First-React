
import { UserApi } from "../../model/UserApi";
import TableCustom from "../../shared/design/table/TableCustom";
import { classListTableData } from "../../shared/design/table/TableModel";
import { useSearch } from "../../shared/utils/useSearch";
import { useUsers } from "./useUsers";


const Users: React.FC = () => {

    const {users, columns, deleteUser} = useUsers();

    const {search, changeHandler, filterData: usersFilter} = useSearch(users, ['name', 'username', 'email']); // destrutturo e cambio il nome della funzione che mi sono passato da useSearch

    const templates = {
        actions: (value: any, row: UserApi) => {
            return <i className="fa fa-trash" onClick={() => deleteUser(row.id)}></i>
        },

        username: (value: string) => {
            return value.toLocaleUpperCase();
        }
    }


    return (
            <>
                 <input type="text" value={search} onChange={ changeHandler } /> {/* l onChange mi da un evento, che con l event target mi da come bersaglio il tag che ha scatenato l evento */}
                <TableCustom columns={columns} data={usersFilter} templates={templates} classList={[classListTableData.alternativeRow]}/>
            </>
        )   
    // const usersFormat = users.map(user => ({...user, username: user.username.toUpperCase()})); 
    // questa è una funzione che ti permette di modificare un valore di un array
    // return <TableCustom columns={columns} data={usersFormat}/>
}

export default Users;