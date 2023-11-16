"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "./queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { PostContextProvider } from "./postContext";
import { AuthProvider } from "./authContext";

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <PostContextProvider>{children}</PostContextProvider>
            </AuthProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};
