import { Card, CardDescription, CardHeader, CardTitle } from "./card";

export const Header = () => {
    return (
        <Card >
            <CardHeader>
                <CardTitle className="text-center text-3xl">
                    Mini Blog
                </CardTitle>
                <CardDescription className="text-center">
                    Uma descrição qualquer
                </CardDescription>
            </CardHeader>
        </Card>
    );
};
