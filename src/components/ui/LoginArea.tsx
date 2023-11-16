"use client";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import LoginForm from "./LoginForm";
import { Button } from "./button";
import { useBlogAuth } from "@/utils/authContext";

const LoginArea = () => {
    const auth = useBlogAuth();

    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
                {!auth?.token && <LoginForm />}

                {auth?.token && (
                    <div>
                        <h1>Bem vindo {auth.checkToken().name}</h1>
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
