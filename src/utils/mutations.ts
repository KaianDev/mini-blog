import { useMutation } from "@tanstack/react-query";
import { addPost, loginUser } from "./api";
import { queryClient } from "./queryClient";

export const useAddPost = () => {
    return useMutation({
        mutationFn: addPost,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            });
            alert(data.message);
        },
        onError: (error) => {
            alert(error.message);
        },
    });
};

export const useLogin = () => {
    return useMutation({
        mutationFn: loginUser,
    });
};
