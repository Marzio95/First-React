import React from "react";
import { classListTable } from "./TableModel";

interface TableCustomProps {
    data?: {[key: string]: any}[]; // array of objects, questa sintassi mi permette di tipizzare un array di oggetti (cioè una key stringa e un valore qualsiasi)
    columns?: {label: string, field: string}[];
    templates?: {[key: string]: (value: any, row: any) => React.ReactNode};
    primaryKey?: string;
    classList?: classListTable[];
}

const TableCustom: React.FC<TableCustomProps> = ({columns = [], data = [], templates, primaryKey, classList = []}) => {

    const classData = ['table-custom', ...classList];

    return (
                <table className={classData.join(' ')}>

                    <thead>
                        <tr>
                            {columns.map(col => <th key={col.field}>{col.label}</th>)}
                            {/* {columns.map((col, index) => <th key={index}>{col.label}</th>)} potrei utilizzare come key l'index */}
                        </tr>
                    </thead>

                    <tbody>
                            {data.map((element, index) => <tr key={primaryKey? element[primaryKey] : index}>
                                                    {columns.map(col => <td key={col.field}>{templates && templates[col.field] ? templates[col.field](element[col.field], element) : element[col.field]}</td>)}
                                                          </tr>)}
                    </tbody>

                </table>
            )
}

export default TableCustom;