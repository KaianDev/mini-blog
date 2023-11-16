"use client";
import { useAuthor } from "@/utils/queries";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

import { FormEvent, useRef } from "react";
import { useAddPost } from "@/utils/mutations";
import { usePostContext } from "@/utils/postContext";
import { useBlogAuth } from "@/utils/authContext";

const PostForm = () => {
    const postCtx = usePostContext();

    const handleCloseModal = () => {
        postCtx?.closeModal();
    };

    const auth = useBlogAuth();

    const { data } = useAuthor();
    const titleInput = useRef<null | HTMLInputElement>(null);
    const bodyInput = useRef<null | HTMLTextAreaElement>(null);
    const authorInput = useRef<null | HTMLSelectElement>(null);

    const addPost = useAddPost();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (
            authorInput.current?.value &&
            titleInput.current?.value &&
            bodyInput.current?.value
        ) {
            if (auth && auth.checkToken()) {
                const id = auth.checkToken()?.id;
                if (id) {
                    const data = {
                        title: titleInput.current.value,
                        body: bodyInput.current.value,
                        authorId: authorInput.current.value,
                        userId: id,
                    };
                    addPost.mutate(data);
                    handleCloseModal();
                    authorInput.current.value = "";
                    titleInput.current.value = "";
                    bodyInput.current.value = "";

                    location.reload();
                }
            }
        } else {
            handleCloseModal();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="titleInput" className="text-lg">
                    Título
                </label>
                <Input
                    id="titleInput"
                    ref={titleInput}
                    className="bg-slate-700 text-white"
                    placeholder="Digite um título"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bodyInput" className="text-lg">
                    Descrição
                </label>
                <Textarea
                    ref={bodyInput}
                    id="bodyInput"
                    className="p-2 bg-slate-700 text-white h-20"
                ></Textarea>
            </div>
            <div className="flex flex-col">
                <label htmlFor="authorSelect" className="text-lg">
                    Autor
                </label>
                <select
                    id="authorSelect"
                    ref={authorInput}
                    className="p-2 bg-slate-700 text-white rounded-md"
                >
                    <option value="">Selecione...</option>
                    {data &&
                        data.body &&
                        data.body.map((author) => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-800 ml-auto">
                    Confirmar
                </Button>
                <Button
                    onClick={handleCloseModal}
                    className="bg-red-600 hover:bg-red-800"
                >
                    Cancelar
                </Button>
            </div>
        </form>
    );
};

export default PostForm;
