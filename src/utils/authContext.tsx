"use client";
import { DecodedToken } from "@/interfaces/Decoded";
import { jwtDecode } from "jwt-decode";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface IAuthContext {
    token: string;
    checkToken: () => DecodedToken | undefined;
}

const authContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        setToken(localStorage.getItem("blogAuth") || "");
    }, []);

    const checkToken = () => {
        if (token) {
            const decoded: DecodedToken = jwtDecode(token);
            return decoded;
        }
    };

    return (
        <authContext.Provider value={{ token, checkToken }}>
            {children}
        </authContext.Provider>
    );
};

export const useBlogAuth = () => useContext(authContext);
