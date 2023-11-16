import LoginArea from "./LoginArea";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./card";

export const Header = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center text-3xl">
                    Mini Blog
                </CardTitle>
                <CardDescription className="text-center">
                    Uma descrição qualquer
                </CardDescription>
            </CardHeader>
            <CardContent>
                <LoginArea />
            </CardContent>
        </Card>
    );
};
