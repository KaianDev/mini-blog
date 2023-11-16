import PostForm from "./PostForm";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const ModalForm = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/40 mx-auto">
            <div className="max-w-lg w-full z-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Crie seu post</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <PostForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ModalForm;
