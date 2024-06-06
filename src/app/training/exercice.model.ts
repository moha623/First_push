export interface Exercice{
    id:string;
    name:string;
    duration:number;
    calories:number;
    date?:Date;
    state?:'complete'|'cancelled'|null;
}