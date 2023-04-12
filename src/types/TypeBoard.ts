import { TypeColumn } from "./TypeColumn";

export interface TypeBoard extends TypeColumn {
    id: string,
    columnOrder: string[],
    columns: object[],
}