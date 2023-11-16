import { Post } from "@/interfaces/Post";
import { formatDate } from "@/utils/formatDate";

interface PostItemProps {
    post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
    return (
        <div className="p-4 bg-slate-950 flex flex-col gap-2">
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
        </div>
    );
};

export default PostItem;
