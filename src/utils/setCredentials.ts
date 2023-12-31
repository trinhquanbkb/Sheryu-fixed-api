import { Cookies } from "react-cookie";

export const setCredentials = (credentials: { user: any; access_token: string; refresh_token: string } | null) => {
    let cookies = new Cookies();
    if (credentials) {
        cookies.set("user", credentials.user, { path: "/" });
        cookies.set("access_token", credentials.access_token, { path: "/" });
        cookies.set("refresh_token", credentials.refresh_token, { path: "/" });
    }
    else {
        cookies.remove("user");
        cookies.remove("access_token");
        cookies.remove("refresh_token");
    }
};
