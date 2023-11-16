"use client";

import { useLogin } from "@/utils/mutations";
import { FormEvent, useRef } from "react";

const LoginForm = () => {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const login = useLogin();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (
            inputEmail.current &&
            inputPassword.current &&
            inputEmail.current.value &&
            inputPassword.current.value
        ) {
            const email = inputEmail.current.value;
            const password = inputPassword.current.value;

            await login.mutateAsync(
                { email, password },
                {
                    onSuccess(data) {
                        localStorage.setItem("blogAuth", data.body.token);
                        alert(data.message);
                        location.reload();
                    },
                }
            );
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="w-full py-4 flex flex-col gap-4"
            >
                <h1 className="text-3xl font-bold">Fazer Login</h1>
                <input
                    ref={inputEmail}
                    type="text"
                    placeholder="Seu e-mail"
                    className="p-2 bg-slate-900 text-white"
                />
                <input
                    ref={inputPassword}
                    type="password"
                    placeholder="Sua senha"
                    className="p-2 bg-slate-900 text-white"
                />
                {login.isError && (
                    <small className="text-red-500">{`${login.error}`}</small>
                )}
                <input
                    type="submit"
                    value="Entrar"
                    className="p-2  text-white uppercase rounded font-bold cursor-pointer bg-sky-500 hover:bg-sky-700 duration-200"
                />
            </form>
        </div>
    );
};

export default LoginForm;
