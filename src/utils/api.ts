import { Author } from "@/interfaces/Author";
import { Post } from "@/interfaces/Post";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
});

interface IRequest<T> {
    error: boolean;
    message?: string;
    body?: T;
}

export const getPost = async (
    start: number,
    limit?: number
): Promise<IRequest<Post[]>> => {
    const results = await api.get(`/post?start=${start}&limit=${limit}`);
    return results.data;
};

export const getCountPost = async () => {
    const results = await api.get("/post/count");
    return results.data;
};

export const getAuthor = async (): Promise<IRequest<Author[]>> => {
    const results = await api.get("/author");
    return results.data;
};

export const getOneAuthor = async (id: string): Promise<IRequest<Author>> => {
    const results = await api.get(`/author/${id}`);
    return results.data;
};

interface IDataPost {
    title: string;
    body: string;
    authorId: string;
}

export const addPost = async (data: IDataPost): Promise<IRequest<Post>> => {
    const results = await api.post("/post", data);
    return results.data;
};