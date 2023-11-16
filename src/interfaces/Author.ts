import { Post } from "./Post";

export interface Author {
    id: number;
    name: string;
    avatar: string;
    posts: Post[];
}
