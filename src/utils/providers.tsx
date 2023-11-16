"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, createContext, useState } from "react";
import { queryClient } from "./queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { PostContextProvider } from "./context";

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <PostContextProvider>{children}</PostContextProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};
