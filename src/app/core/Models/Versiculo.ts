import { Livro } from "./Livro";

export interface Versiculo{
    chapter: string;
    number: number;
    text: string;
    book: Livro;
}