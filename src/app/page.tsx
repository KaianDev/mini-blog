"use client";
import ModalForm from "@/components/ui/ModalForm";
import PostArea from "@/components/ui/PostArea";
import { Button } from "@/components/ui/button";
import { checkToken } from "@/utils/checkToken";
import { usePostContext } from "@/utils/context";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

function Home() {
    const postCtx = usePostContext();
    const [token, setToken] = useState<string>(
        localStorage.getItem("blogAuth") || ""
    );
    const handleShowModal = () => {
        postCtx?.openModal();
    };

    const hasToken = checkToken(token);

    return (
        <div className="bg-slate-800 h-full flex flex-col w-full p-3 text-white">
            <PostArea />

            {hasToken?.admin && (
                <Button
                    onClick={handleShowModal}
                    variant="secondary"
                    className="fixed bottom-[60px] right-[20px]"
                >
                    <PlusIcon size={14} />
                    Adicionar Post
                </Button>
            )}
            {postCtx?.showModal && <ModalForm />}
        </div>
    );
}

export default Home;
