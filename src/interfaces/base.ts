

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
    default:IDefault
    constraint : string
    fk : number
    pk_fk : IPK_FK 
    
}

export interface IDefault
{
    custom:boolean
    value:string
}


export interface IPk
{
    tableId :number
    columnId:number
    columnType :string
}


export interface IPK_FK
{
    tableIdPK : number
    columnPKId : number
    columnFKId : number,
    columnNameFk : string
}



export interface ITablePK_FK
{
    tableIdPK:number
    tablerIdFk:number
}

 

