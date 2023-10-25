

export interface ITable
{
    id : number;
    tableName: string;
    colums: IColumnUI []
    x:number,
    y:number,
    w:number,
    h:number
}

export interface IColumnUI
{
    id: number
    columnName : string;
    type:string;
    length:string;
    default:string
    constraint : string
}
         

