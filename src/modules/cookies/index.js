import Cookies from "js-cookie";

const cookieSecure = {
    secure: true,
    httpOnly: true,
};

export const setCookieRefreshToken = (tokenRefresh) => {
    try {
        return Cookies.set("refresh_token", tokenRefresh);
    } catch (err) {
        return;
    }
};

export const setCookieAccessToken = (accessToken) => {
    try {
        return Cookies.set("access_token", accessToken);
    } catch (err) {
        return;
    }
};

export const getCookieRefreshToken = () => {
    try {
        return Cookies.get("refresh_token");
    } catch (err) {
        return {};
    }
};

export const getCookieAccessToken = () => {
    try {
        return Cookies.get("access_token");
    } catch (err) {
        return {};
    }
};

export const removeCookieRefreshToken = () => {
    try {
        return Cookies.remove("refresh_token");
    } catch (err) {
        return {};
    }
};

export const removeCookieAccessToken = () => {
    try {
        return Cookies.remove("access_token");
    } catch (err) {
        return {};
    }
};
