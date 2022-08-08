import { useState } from "react";

export function useSearch(data: any[], properties: string[] = []) {

    const [search, setSearch] = useState<string>('');

    const filterData = data.filter(ele => (properties.length ? properties : Object.keys(ele)).reduce( (acc: boolean, property: string) => {
                    return ele[property].toString().toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()) || acc
    }, false));       
    
    // lo use effect sta in ascolto di un cambiamento, quindi se la cambiassimo più volte, lo use effect viene eseguito più volte
    // useEffect( () => {
    //     setUsers(users.filter(user => user.name.includes(event.target.value)));
    // }, [search] );

    const changeHandler = (event: any) => {
        setSearch(event.target.value);
    }


    return {
        search,
        changeHandler,
        filterData
    }
}