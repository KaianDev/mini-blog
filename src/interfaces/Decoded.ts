import { JwtPayload } from "jwt-decode";

export interface DecodedToken extends JwtPayload {
    name: string;
    admin: boolean;
    id: string;
}
