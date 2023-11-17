import { Card, CardFooter } from "./card";

export const Footer = () => {
    return (
        <Card>
            <CardFooter className="pb-4 pt-2">
                <p className="text-xs items-center text-center w-full">
                    Created by{" "}
                    <a target="_blank" href="https://github.com/KaianDev">
                        Kaian Vasconcelos
                    </a>{" "}
                </p>
            </CardFooter>
        </Card>
    );
};
