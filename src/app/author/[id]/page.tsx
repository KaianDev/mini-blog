"use client";
import { useOneAuthor } from "@/utils/queries";
import PostItem from "./components/PostItem";
import Image from "next/image";
import { BackToHomeButton } from "@/components/ui/BackToHomeButton";

interface AuthorPageProps {
    params: {
        id: string;
    };
}

const AuthorPage = ({ params }: AuthorPageProps) => {
    const author = useOneAuthor(params.id);

    return (
        <div className="bg-slate-800 h-full">
            <section className="max-w-4xl mx-auto text-white p-4">
                <div>
                    {author.data?.body && (
                        <div className="flex items-start py-4 gap-4">
                            {author.data.body.avatar ? (
                                <Image
                                    src={`http://localhost:4000/${author.data.body.avatar}`}
                                    alt={author.data.body.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-40 h-40 aspect-square rounded-md"
                                />
                            ) : (
                                <Image
                                    src={`/avatar/default.jpg`}
                                    alt={author.data.body.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-40 h-40 aspect-square rounded-md"
                                />
                            )}
                            <div>
                                <h1 className="text-4xl">
                                    {author.data.body.name}
                                </h1>
                                <p className="text-slate-400">
                                    Quantidade de Post:{" "}
                                    {author.data.body.posts.length}
                                </p>
                                <BackToHomeButton />
                            </div>
                        </div>
                    )}
                </div>
                <div className="grid gap-4">
                    {author.data?.body &&
                        author.data.body.posts.map((post) => (
                            <PostItem post={post} key={post.id} />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default AuthorPage;
