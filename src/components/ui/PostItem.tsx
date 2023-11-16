import { Post } from "@/interfaces/Post";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

interface PostItemProps {
    post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
    return (
        <div className="p-4 bg-slate-950 flex flex-col gap-2 hover:scale-[1.02] ease-in duration-200">
            <div>
                <h3 className="text-lg leading-none font-semibold">
                    {post.title}
                </h3>
                <small className="text-xs text-slate-400 leading-none">
                    {formatDate(post.createAt)}
                </small>
            </div>

            <p className="text-sm w-11/12 sm:w-full break-words flex-1">
                {post.body}
            </p>
            <div className="flex gap-2 items-center">
                <Avatar>
                    {post.author.avatar ? (
                        <AvatarImage
                            src={`http://localhost:4000/${post.author.avatar}`}
                        />
                    ) : (
                        <AvatarImage src="/avatar/default.jpg" />
                    )}
                    <AvatarFallback>{post.author.name}</AvatarFallback>
                </Avatar>
                <Link
                    href={`/author/${post.author.id}`}
                    className="text-sm duration-200 hover:text-sky-400"
                >
                    {post.author.name}
                </Link>
            </div>
        </div>
    );
};

export default PostItem;
