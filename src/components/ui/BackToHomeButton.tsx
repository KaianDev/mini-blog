import Link from "next/link";
import { Button } from "./button";

export const BackToHomeButton = () => {
    return (
        <Link href="/">
            <Button>Voltar para o Home</Button>
        </Link>
    );
};
