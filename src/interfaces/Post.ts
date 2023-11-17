import { Author } from "./Author";

export interface Post {
    id: number;
    title: string;
    body: string;
    createAt: string;
    author: Author;
    userId: number;
}
