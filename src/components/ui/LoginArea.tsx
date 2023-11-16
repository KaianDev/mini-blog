"use client";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { Button } from "./button";
import { checkToken } from "@/utils/checkToken";

const LoginArea = () => {
    const [token, setToken] = useState<string>(
        localStorage.getItem("blogAuth") || ""
    );
    const hasToken = checkToken(token);
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
                {!token && <LoginForm />}

                {token && (
                    <div>
                        <h1>Bem vindo {hasToken?.name}</h1>
                        <Button
                            onClick={() => {
                                localStorage.removeItem("blogAuth");
                                location.reload();
                            }}
                        >
                            Fazer Logout
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default LoginArea;
