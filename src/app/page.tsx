"use client";
import ModalForm from "@/components/ui/ModalForm";
import PostArea from "@/components/ui/PostArea";
import { Button } from "@/components/ui/button";
import { useBlogAuth } from "@/utils/authContext";
import { usePostContext } from "@/utils/postContext";
import { PlusIcon } from "lucide-react";

function Home() {
    const postCtx = usePostContext();

    const handleShowModal = () => {
        postCtx?.openModal();
    };

    const auth = useBlogAuth();

    return (
        <div className="bg-slate-800 h-full flex flex-col w-full p-3 text-white">
            <PostArea />

            {auth?.token && (
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
