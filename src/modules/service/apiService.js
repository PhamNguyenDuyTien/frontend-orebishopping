import axios from "axios";

// const BASE_URL_ = process.env.BASE_API_URL;
const BASE_URL = "http://localhost:3000/api";
export const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const signInAccount = async (email, password) =>
    await axios
        .post(BASE_URL + "/user/sign-in", {
            email,
            password,
        })
        .then((res) => res.data)
        .catch((err) => err);

export const signUpAccount = async (name, email, password, phone, address) =>
    await axios
        .post(BASE_URL + "/user/sign-up", {
            name,
            email,
            password,
            phone,
            address,
        })
        .then((res) => res.data)
        .catch((err) => err);

export const logoutAccount = async (accessToken) => {
    return await apiService
        .post(
            "/user/log-out",
            {},
            {
                headers: {
                    token: `Bearer ${accessToken}`,
                },
            }
        )
        .then((res) => res.data)
        .catch((err) => err);
};

export const forgotPassword = async (email) =>
    await axios
        .post(BASE_URL + "/user/reset-password", {
            email,
        })
        .then((res) => res.data)
        .catch((err) => err.response.data);

export const detailUserLogin = async (id, accessToken) => {
    return await apiService
        .get(`/user/get-detail-user/${id}`, {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        })
        .then((res) => res.data)
        .catch((err) => err);
};

export const verifyResetPassword = async (id, resetString) =>
    await axios
        .get(
            BASE_URL +
                `/user/verifyResetPassword/${id}` +
                "/" +
                `${resetString}`
        )
        .then((res) => res.data)
        .catch((err) => err.response.data);

export const updatePassword = async (userId, newPassword, confirmNewPassword) =>
    await axios
        .put(BASE_URL + "/user/updatePassword", {
            userId,
            newPassword,
            confirmNewPassword,
        })
        .then((res) => res.data)
        .catch((err) => err.response.data);

export const refreshTokenApi = async (refreshToken) =>
    await axios
        .post(
            BASE_URL + "/user/refresh-token",
            {},
            {
                headers: {
                    token: `Bearer ${refreshToken}`,
                },
            }
        )
        .then((res) => res.data)
        .catch((err) => err);
