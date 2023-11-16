import { useCount, usePost } from "@/utils/queries";
import PostItem from "./PostItem";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import PostList from "./PostList";

const PostArea = () => {
    const limit = 10;
    const [start, setStart] = useState(0);
    const count = useCount();
    const { data, isFetching } = usePost(start * limit, limit);
    

    const handleNextPageButton = () => {
        setStart((prev) => prev + 1);
    };

    const handlePrevPageButton = () => {
        setStart((prev) => prev - 1);
    };

    const disabledNext = count.data && count.data.count < limit * (start + 1);

    const disabledPrev = start === 0;

    return (
        <section className="flex flex-col">
            {isFetching && (
                <div className="max-w-4xl mx-auto">Carregando...</div>
            )}
            {data && data.body && !isFetching && <PostList posts={data.body} />}
            {!isFetching && (
                <div className="flex justify-center gap-4 my-4 items-center">
                    <Button
                        disabled={disabledPrev}
                        onClick={handlePrevPageButton}
                    >
                        <ChevronLeft />
                    </Button>
                    <div className="font-bold">{start + 1}</div>
                    <Button
                        onClick={handleNextPageButton}
                        disabled={disabledNext}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
        </section>
    );
};

export default PostArea;
