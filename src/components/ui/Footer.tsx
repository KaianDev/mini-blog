import { Card, CardFooter } from "./card";

export const Footer = () => {
    return (
        <Card>
            <CardFooter className="pb-4 pt-2">
                <p className="text-sm items-center text-center w-full">
                    Created by <a href="">Kaian Vasconcelos</a>{" "}
                </p>
            </CardFooter>
        </Card>
    );
};
