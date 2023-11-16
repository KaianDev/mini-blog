import { DecodedToken } from "@/interfaces/Decoded";
import { jwtDecode } from "jwt-decode";

export const checkToken = (token: string) => {
    if (token) {
        const decoded: DecodedToken = jwtDecode(token);

        return decoded;
    }
};
