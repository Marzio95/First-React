import { useEffect, useState } from "react";
import { UserApi } from "../../model/UserApi";

const Users: React.FC = () => {

    const [users, setUsers] = useState<UserApi[]>([]);

    useEffect ( () => {
        console.log('dentro init');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
              .then(res => setUsers(res))
      }, []);

    return <div>
                {users.map(user => <div>{user.name}</div>)}
            </div>
}

export default Users;