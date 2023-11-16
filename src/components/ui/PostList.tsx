import { Post } from "@/interfaces/Post";
import PostItem from "./PostItem";

interface PostListProps {
    posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
    return (
        <section className="flex-1 max-w-4xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2">
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </section>
    );
};

export default PostList;
