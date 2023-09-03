import { accountService } from "../../pages/Account/accountService";
import { decodeAccessToken } from "../JWT/jwt";
import apiService from "./apiService";

// Sau khi access_token hết hạn, sẽ tạo ra 1 access_token mới sử dụng bộ đón chặn request
export const instanceServiceRequest = (access_token) => {
    apiService.interceptors.request.use(
        async function (config) {
            const currentTime = new Date();
            const decodeToken = decodeAccessToken(access_token);
            if(decodeToken.exp < currentTime.getTime() / 1000) {
                const data = await accountService.createAccessToken()
                config.headers["token"] = `Bearer ${data?.access_token}`
            };
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
};
export const instanceServiceResponse = () => {
    // Xử lý data sau khi nhận response từ server
    apiService.interceptors.response.use(
        function (response) {
            console.log("sau khi response");
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
};