import { Abreviacao } from "./Abreviacao";

export interface Livro{
    name:string;
    author:string;
    group:string;
    version:string;
    abbrev:Abreviacao;
}