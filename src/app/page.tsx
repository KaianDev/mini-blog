"use client";
import ModalForm from "@/components/ui/ModalForm";
import PostArea from "@/components/ui/PostArea";
import { Button } from "@/components/ui/button";
import { usePostContext } from "@/utils/context";
import { PlusIcon } from "lucide-react";

function Home() {
    const postCtx = usePostContext();

    const handleShowModal = () => {
        postCtx?.openModal();
    };

    return (
        <div className="bg-slate-800 h-full w-full p-3 text-white">
            <PostArea />

            {postCtx?.showButton && (
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
