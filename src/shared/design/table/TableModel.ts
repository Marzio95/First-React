import { ValueOf } from "../../utils/typescript/ValueOf";

export const classListTableData = {
    alternativeRow: 'alternative-row',
    test: 'test'
} as const; 

// type of const is 'readonly', cioè essendo una costante non può esserre modificata, il che mi da il tipo che ho scelto io, cioè:
// alternativeRow: 'alternative-row' il tipo è tra apici
// test: 'test' il tipo è tra apici

// export type classListTableDataType = typeof classListTableData;
// export type classListTableDataKeys = keyof classListTableDataType; 
// export type classListTable = classListTableDataType[classListTableDataKeys];
// keyof è una funzione che restituisce una lista di chiavi di un oggetto cioè : alternativeRow, test

export type classListTable = ValueOf<typeof classListTableData>;