import {
    keepPreviousData,
    useInfiniteQuery,
    useQuery,
} from "@tanstack/react-query";
import { getAuthor, getCountPost, getOneAuthor, getPost } from "./api";

export const usePost = (start: number = 0, limit?: number) => {
    return useQuery({
        queryKey: ["posts", { start, limit }],
        queryFn: () => getPost(start, limit),
        staleTime: 5 * 60 * 1000, //5min
        placeholderData: keepPreviousData,
    });
};

export const useCount = () => {
    return useQuery({
        queryKey: ["count"],
        queryFn: getCountPost,
        staleTime: Infinity,
    });
};

export const useAuthor = () => {
    return useQuery({
        queryKey: ["author"],
        queryFn: getAuthor,
        staleTime: Infinity,
    });
};

export const useOneAuthor = (id: string) => {
    return useQuery({
        queryKey: ["author", id],
        queryFn: () => getOneAuthor(id),
        staleTime: Infinity,
    });
};
