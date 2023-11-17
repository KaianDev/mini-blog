"use client";

import { BackToHomeButton } from "@/components/ui/BackToHomeButton";
import { formatDate } from "@/utils/formatDate";
import { useOnePost } from "@/utils/queries";

interface PostPageProps {
    params: {
        id: string;
    };
}

const PostPage = ({ params }: PostPageProps) => {
    const post = useOnePost(params.id);
    return (
        <div className="h-full">
            <section className="mx-auto max-w-4xl flex flex-col gap-4 py-4 ">
                <div>
                    <h1 className="text-3xl text-slate-800 font-bold">
                        {post.data?.body?.title}
                    </h1>
                    {post.data?.body?.createAt && (
                        <small className="text-slate-500">
                            {formatDate(post.data.body.createAt)}
                        </small>
                    )}
                </div>
                <p className="text-lg ">{post.data?.body?.body}</p>
                <BackToHomeButton />
            </section>
        </div>
    );
};

export default PostPage;
