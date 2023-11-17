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
    userId: string;
    token: string;
}

export const addPost = async (data: IDataPost): Promise<IRequest<Post>> => {
    const results = await api.post("/post", data, {
        headers: {
            Authorization: `Bearer ${data.token}`,
        },
    });
    return results.data;
};

interface LoginUserResponse {
    body: {
        token: string;
    };
    message: string;
}

export const loginUser = async (data: {
    email: string;
    password: string;
}): Promise<LoginUserResponse> => {
    try {
        const results = await api.post("/login", data);
        return results.data;
    } catch (error: any) {
        console.log(error);
        throw error.response.data.message;
    }
};

export const getOnePost = async (id: string): Promise<Post> => {
    const results = await api.get(`/post/${id}`);
    return results.data;
};
